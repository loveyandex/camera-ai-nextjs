# AI Camera Event Detector Next.js App

This project is a Next.js application for AI camera event detection. It uses shadcn/ui for all UI components (with Tailwind fallback), supports dark and light mode, and features a theme changer integrated with [TweakCN Theme Editor](https://tweakcn.com/editor/theme#). You can import custom themes, e.g., `npx shadcn@latest add https://tweakcn.com/r/themes/amethyst-haze.json`. Heroicons are used for icons.

## Features

- Next.js (TypeScript, App Router)
- Tailwind CSS
- ESLint
- shadcn/ui components
- Dark & Light mode with theme switcher
- Theme import from TweakCN
- Heroicons for icons

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Customization

To add a new theme, run:

```bash
npx shadcn@latest add https://tweakcn.com/r/themes/amethyst-haze.json
```

All page components should use shadcn/ui. Use Tailwind only if a component is not available in shadcn/ui.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

MIT
