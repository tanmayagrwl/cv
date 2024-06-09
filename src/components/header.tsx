import { useState } from 'react';
import { DownloadIcon, Spinner } from './icons';

export function Header() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    const link = document.createElement('a');
    link.href = '/jatin-resume.pdf';
    link.download = 'jatin-resume.pdf';
    link.click();
    setIsDownloading(false);
  };

  return (
    <header className="z-10 w-full flex items-center justify-between px-3 pt-[24px] lg:px-6 md:px-6 sm:px-4 xl:px-10 lg:pt-[26px]">
      <a href="/" className="flex items-center outline-none focus-visible:text-gray-900/90 hover:text-gray-900/90">
        <img src="/logo.png" alt="Logo" className="h-9 w-9" />
        <span className="ml-2 text-2xl font-bold">Jatin</span>
      </a>
      <div>
        <button disabled={isDownloading} onClick={handleDownload} type="button" className="h-9 w-9 flex cursor-pointer touch-manipulation appearance-none items-center justify-center rounded-md border-none bg-gray-900 text-white font-bold outline-none focus-visible:bg-gray-900/90 hover:bg-gray-900/90">
          {
            isDownloading ? <Spinner className="h-5 w-5" /> : <DownloadIcon className="h-5 w-5" />
          }
        </button>
      </div>
    </header>
  );
}
