import CredentialsProvider from 'next-auth/providers/credentials';
import connectDB from './mongodb';
import User from '@/models/User';

interface ExtendedUser {
  id: string;
  email: string;
  name: string;
  role: string;
  status: string;
}

interface ExtendedToken {
  sub?: string;
  role?: string;
  status?: string;
  [key: string]: unknown;
}

interface ExtendedSession {
  user: {
    id: string;
    email?: string;
    name?: string;
    role?: string;
    status?: string;
    [key: string]: unknown;
  };
  [key: string]: unknown;
}

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          await connectDB();

          const user = await User.findOne({
            email: credentials.email.toLowerCase()
          }).select('+password');

          if (!user) {
            return null;
          }

          const isPasswordValid = await user.comparePassword(credentials.password);

          if (!isPasswordValid) {
            return null;
          }

          return {
            id: user._id.toString(),
            email: user.email,
            name: `${user.profile.firstName} ${user.profile.lastName}`,
            role: user.role,
            status: user.status
          };
        } catch (error) {
          console.error('Auth error:', error);
          return null;
        }
      }
    })
  ],
  session: {
    strategy: 'jwt' as const
  },
  callbacks: {
    async jwt({ token, user }: { token: ExtendedToken; user?: ExtendedUser }) {
      if (user) {
        token.role = user.role;
        token.status = user.status;
      }
      return token;
    },
    async session({ session, token }: { session: ExtendedSession; token: ExtendedToken }) {
      if (token && session.user) {
        session.user.id = token.sub || '';
        session.user.role = token.role;
        session.user.status = token.status;
      }
      return session;
    }
  },
  pages: {
    signIn: '/auth/login'
  },
  secret: process.env.NEXTAUTH_SECRET
};