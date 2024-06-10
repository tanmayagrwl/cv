# A Simple Resume Preview Webiste
 
Deploy it do your subdomain and send your resume to people, they can take a look by just visiting the web page and download the resume if they want to keep it  

## Setup

### Project

Change [site-config.ts](./src/lib/site-config.ts) according to your preference and 
place the resume with your name`-resume.pdf` (name in kebabcase if its your full name for eg. Jatin Kumar becomes `jatin-kumar-resume.pdf`).

Install the dependencies:

```bash
pnpm install
```

## Get Started

Start the dev server:

```bash
pnpm dev
```

Build the app for production:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```
