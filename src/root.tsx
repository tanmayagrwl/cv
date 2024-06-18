import { Analytics } from '@vercel/analytics/react';
import { Header } from './components/header';
import { Resume } from './components/resume';

export function Root() {
  return (
    <>
      <Header />
      <Resume />
      <Analytics />
    </>
  );
}
