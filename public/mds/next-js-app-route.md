# Getting Started with Next.js

## Introduction

Next.js is a powerful and flexible React framework created by Vercel. It offers a comprehensive set of features for building modern web applications, including server-side rendering (SSR), static site generation (SSG), API routes, and more. This guide will walk you through the basics of setting up a Next.js project using the new App Router, covering the following topics:

1. Setting up the development environment
2. Creating a new Next.js project
3. Project structure and key files
4. Adding pages and navigation
5. Styling your application
6. Fetching data
7. Deploying your Next.js application

### 1. Setting up the Development Environment

Before you begin, ensure you have Node.js and npm (Node Package Manager) installed on your machine. You can download and install them from [nodejs.org](https://nodejs.org/).

To verify the installation, run the following commands in your terminal:

```bash
node -v
npm -v
```

### 2. Creating a New Next.js Project

To create a new Next.js project with the App Router, use the following command:

```bash
npx create-next-app@latest
```

This command will prompt you to enter your project name and choose additional options. Make sure to select the option to use the App Router. Once completed, navigate to your project directory:

```bash
cd your-project-name
```

Start the development server:

```bash
npm run dev
```

Your Next.js application should now be running at `http://localhost:3000`.

### 3. Project Structure and Key Files

A typical Next.js project with the App Router has the following structure:

```
your-project-name/
├── node_modules/
├── public/
├── styles/
│   ├── globals.css
├── app/
│   ├── page.js
│   ├── layout.js
│   ├── api/
├── .gitignore
├── package.json
├── README.md
```

Key files and directories:

- **`app/`**: Contains the React components that define your application's routes and layout.
- **`public/`**: Stores static files like images and fonts.
- **`styles/`**: Contains global and component-specific styles.
- **`app/api/`**: Holds API route files for serverless functions.

### 4. Adding Pages and Navigation

Next.js uses a file-based routing system with the App Router. To create a new page, simply add a new file to the `app/` directory.

For example, to create an "About" page, add a new file `about/page.js` in the `app/` directory:

```jsx
// app/about/page.js
export default function About() {
  return <h1>About Page</h1>;
}
```

To add navigation between pages, use the `Link` component from `next/link`:

```jsx
// app/page.js
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```

### 5. Styling Your Application

Next.js supports various styling options, including CSS, Sass, and CSS-in-JS libraries like styled-components.

To use global CSS, import your CSS file in `app/layout.js`:

```jsx
// app/layout.js
import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
```

### 6. Fetching Data

Next.js provides several methods for fetching data, including `getStaticProps`, `getServerSideProps`, and `getStaticPaths`.

With the App Router, you can fetch data inside server components using `async` functions. For example:

```jsx
// app/page.js
async function fetchData() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();
  return data;
}

export default async function Home() {
  const data = await fetchData();

  return (
    <div>
      <h1>Home Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```

### 7. Deploying Your Next.js Application

Vercel is the recommended platform for deploying Next.js applications. You can deploy your project by pushing it to a Git repository and importing it into Vercel.

Alternatively, you can deploy your Next.js application to other platforms like Netlify, AWS, or manually to a server.

To build your application for production, run:

```bash
npm run build
npm run start
```

This will generate a `.next` directory containing the optimized production build.

## Conclusion

Next.js is a versatile and powerful framework that simplifies the process of building modern web applications. With its built-in features for routing, data fetching, and deployment, you can quickly develop and deploy high-performance applications. This guide has covered the basics, but there is much more to explore in the Next.js ecosystem. Happy coding!
