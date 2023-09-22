This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


#  *NOTES*

## Project Creation (NextJS)

We create the project template with the command
```bash
npx create-next-app@latest project-name
```


## Execute the project

We execute the project with the command
```bash
npm run dev
```


## Tailwind Configuration

You can install it from the automatic creation of the project or manually...

[Tailwind Installation guide for NextJS](https://tailwindcss.com/docs/guides/nextjs)

- Execute the next command
```bash
npm install -D tailwindcss postcss autoprefixer
```

- Next execute the next command
```bash
npx tailwindcss init -p
```

- Add the next lines of code in `tailwind.config.js` file
```bash
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- Add the next lines of code in `globals.css` file

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Authenticate User (AuthJs)
Auth.js is a complete open-source authentication solution for web applications.

- 1.- Install the library
```bash
npm install next-auth
```
```bash
yarn add next-auth
```
- 2.- Create auth endpoint
Create a file for AuthJs server called `[...nextauth].js` in API folder `src/app/api/auth/[...nextauth].js`.
[NextAuth Documentation](https://next-auth.js.org/)

- 3.- Copy the next code for Google Authentication
```bash
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  providers: [
    // OAuth authentication providers...
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
  ]
})
```

- 4.- Create .ENV file
Create the `.env` file to save Google ID an Secret


## Add Google Cloud Functions
 Add Google Cloud Functions to get `clientId` and `clientSecret` that we need in the server config.

 - 1.- Go to Google Cloud
 [Google Cloud](https://cloud.google.com/?hl=es)

 - 2.- Go to Google Cloud Console 
[Console of Google CLoud](https://console.cloud.google.com/getting-started?hl=es&_ga=2.219124762.287019653.1690776989-1443403584.1686636828&authuser=2)

 - 3.- Go to APIs and Services
 [Enabled APIs & services](https://console.cloud.google.com/apis/dashboard?authuser=2&hl=es&project=my-project-12345-390221)

 - 4.- Go to Credentials
 [Credentials](https://console.cloud.google.com/apis/credentials?authuser=2&hl=es&project=my-project-12345-390221)

 Create an `OAuth client ID` with the next info [Next Auth Doc Google Provider](https://next-auth.js.org/providers/google):
 `Authorized JavaScript origins: ` http://localhost:3000
 `Authorized redirect URLs: ` http://localhost:3000/api/auth/callback/google

 Once you create de OAuth client you will see the `Client ID` and `Client secret`. Copy and add in your `.env file`.

 - 5.- Create Secret ID
 In your project root, create a .env.local file and add the `NEXTAUTH_SECRET` environment variable.

 - 6.- Wrap Session Provider
 NextAuth.js provides `useSession()` - a React Hooks to access the session data and status. To use it first you'll need to expose the session context - `<SessionProvider />` - at the top level of your application:

 Wrap application Session Provider in `layout.js file`

 ```bash
 import { SessionProvider } from "next-auth/react"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
 ```

 - 7.- Create Auth Provider Component
 You need to create an `Auth Provider` component for use un the layout and also you can use the `metadata`, if you you don't use the meta data you can onl include `"use client"` in the file and its ready.

 **Note Errors:**

 - *app-index.js:31 [next-auth][error][CLIENT_FETCH_ERROR]* 
 It's because I haven't created the URL in the `.env` file
 *Solution:*
 -Step 1.- Create `NEXTAUTH_URL = "http://localhost:3000"` in the `.env` file, but when you deploy your application, you should change here this URL.
 Doc: [Solution Link](https://next-auth.js.org/errors#client_fetch_error)

 -Step 2.- Change the type of export of the `route.js` file, because we are using App Router.
 ```bash
 export default NextAuth({...})

by

 const handler = NextAuth({...})

 export { handler as GET, handler as POST};
 ```

 -When pass the `username and password` is going to be a `POST method`
 -When fetch the session, `username` information is going to be a `GET method`

## Consuming the session

You can use the `useSession` hook from anywhere in your application (E.g. in a header component). Behind the scenes, the hook will connect to the `<SessionProvider />` to read the current user session. 




#### Video Proyect
[Build a Fullstack E-commerce using Next.js (react.js, mongo, tailwind, styled components)](https://www.youtube.com/watch?v=dTFXufTgfOE&t=40811s)