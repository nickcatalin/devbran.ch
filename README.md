# DevBran.ch - Developer Profile Platform

A modern, full-stack developer profile platform built with Next.js 15, TypeScript, and Appwrite as the backend-as-a-service.

## 🚀 Features

### Authentication
- **Email/Password Authentication** - Secure login and registration
- **Email Verification** - Automatic verification emails sent after registration
- **OAuth Integration** - Google and GitHub sign-in
- **Password Recovery** - Forgot password functionality with email verification
- **Protected Routes** - Dashboard and user areas secured with authentication
- **Session Management** - Automatic login state persistence
- **Verification Status** - Real-time verification status display in dashboard

### User Experience
- **Responsive Design** - Works perfectly on desktop and mobile
- **Modern UI** - Built with Radix UI and Tailwind CSS
- **Toast Notifications** - Real-time feedback with Sonner
- **Loading States** - Smooth user experience with proper loading indicators
- **Error Handling** - Comprehensive error handling throughout the app

### Dashboard
- **User Profile Management** - Edit name, bio, website, and GitHub username
- **Account Information** - View account details and verification status
- **OAuth Provider Display** - Shows connected provider (Google/GitHub) information
- **Token Management** - Automatic OAuth token refresh when expiring
- **Quick Actions** - Easy access to common settings and features
- **Secure Access** - Protected route ensuring only authenticated users can access

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Radix UI Components
- **Authentication**: Appwrite SDK
- **State Management**: React Context API
- **Notifications**: Sonner Toast Library
- **Icons**: Lucide React, Tabler Icons

## 📋 Prerequisites

Before you begin, ensure you have:

- Node.js 18+ installed
- An Appwrite account and project set up
- Git for version control

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/devbran.ch.git
cd devbran.ch
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Appwrite Configuration

1. **Create an Appwrite Account**
   - Go to [Appwrite Cloud](https://cloud.appwrite.io/) or set up self-hosted Appwrite
   - Create a new project

2. **Configure Authentication**
   - In your Appwrite console, go to **Auth** → **Settings**
   - Add your domain (e.g., `http://localhost:3000` for development)
   - Enable the authentication methods you want to use:
     - Email/Password
     - Google OAuth
     - GitHub OAuth

3. **OAuth Setup**
   
   **For Google OAuth:**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one
   - Enable Google+ API and Google Identity API
   - Create OAuth 2.0 credentials
   - Add your Appwrite OAuth redirect URL: `https://cloud.appwrite.io/v1/account/sessions/oauth2/callback/google/[PROJECT_ID]`
   - Copy Client ID and Client Secret to Appwrite console
   - Configure authorized origins and redirect URIs

   **For GitHub OAuth:**
   - Go to GitHub Settings → Developer settings → OAuth Apps
   - Create a new OAuth App
   - Add your Appwrite OAuth redirect URL: `https://cloud.appwrite.io/v1/account/sessions/oauth2/callback/github/[PROJECT_ID]`
   - Copy Client ID and Client Secret to Appwrite console
   - Set authorization callback URL

### 4. Environment Variables

1. Copy the example environment file:
```bash
cp .env.example .env.local
```

2. Fill in your Appwrite project details:
```env
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT_ID=your-project-id-here
```

### 5. Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your application running.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── dashboard/         # Protected dashboard page
│   ├── login/             # Login page
│   ├── signup/            # Registration page
│   ├── forgot-password/   # Password recovery
│   ├── reset-password/    # Password reset
│   ├── verify-email/      # Email verification page
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Landing page
├── components/
│   ├── ui/                # Reusable UI components
│   ├── landing/           # Landing page components
│   ├── protected-route.tsx # Route protection wrapper
│   └── theme-provider.tsx # Dark/light theme provider
├── contexts/
│   └── auth-context.tsx   # Authentication context and hooks
├── lib/
│   ├── appwrite.ts        # Appwrite client configuration
│   └── utils.ts           # Utility functions
└── hooks/
    └── use-mobile.ts      # Mobile detection hook
```

## 🔐 Authentication Flow

### Registration Process
1. User fills out registration form (username, email, password)
2. Account created in Appwrite
3. Automatic login after successful registration
4. **Verification email automatically sent to user**
5. Redirect to dashboard with verification prompt

### Login Process
1. User enters email and password OR uses OAuth
2. Session created in Appwrite
3. User context updated with user data
4. Redirect to dashboard

### OAuth Authentication
1. User clicks OAuth provider button (Google/GitHub)
2. **Redirected to provider** with proper scopes requested
3. User authorizes the application on provider site
4. **Provider redirects back** to Appwrite with authorization code
5. Appwrite creates session with provider access token
6. User redirected to dashboard
7. **OAuth session automatically refreshed** when tokens expire

### Email Verification
1. **Automatic email sent** after registration
2. User clicks verification link in email
3. Verification page validates the token
4. User's email verification status updated
5. **Manual resend** option available in dashboard and verification page

### Password Recovery
1. User enters email on forgot password page
2. Appwrite sends recovery email
3. User clicks link in email
4. Reset password page with new password form
5. Password updated in Appwrite

### Route Protection
- Dashboard and other protected routes use `ProtectedRoute` component
- Automatically redirects unauthenticated users to login
- Shows loading state while checking authentication

## 🎨 Customization

### Theming
The app uses a custom color palette:
- Primary: `#56876D` (Green)
- Secondary: `#565264` (Purple-gray)
- Background: Gradient from `#E7EBC5` to `#E8C7DE`

Update colors in:
- `tailwind.config.js` for Tailwind classes
- Component className props for specific styling

### Components
All UI components are built with Radix UI and can be customized:
- Modify components in `src/components/ui/`
- Update styling while maintaining accessibility features

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Update Appwrite allowed domains to include your Vercel domain
5. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

Remember to:
- Set environment variables
- Update Appwrite domains
- Configure OAuth redirect URLs

## 🛡️ Security Considerations

- All authentication is handled by Appwrite's secure infrastructure
- Environment variables keep sensitive data secure
- Protected routes prevent unauthorized access
- OAuth follows industry-standard security practices
- Password requirements enforce strong passwords

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues:

1. Check the [Appwrite Documentation](https://appwrite.io/docs)
2. Review the [Next.js Documentation](https://nextjs.org/docs)
3. Open an issue in this repository
4. Check existing issues for similar problems

## 🙏 Acknowledgments

- [Appwrite](https://appwrite.io/) for the excellent BaaS platform
- [Radix UI](https://www.radix-ui.com/) for accessible component primitives
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Next.js](https://nextjs.org/) for the amazing React framework
