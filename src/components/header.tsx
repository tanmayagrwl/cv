import { useState } from 'react';
import { DownloadIcon, Spinner } from '@/components/icons';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/lib/site-config';

type HeaderProps = React.ComponentProps<'div'>;

export function Header({ className, ...props }: HeaderProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    const link = document.createElement('a');
    const filename = `${siteConfig.name.toLowerCase()}-resume.pdf`;
    link.href = filename;
    link.download = filename;
    link.click();
    setIsDownloading(false);
  };

  return (
    <header
      className={cn(
        'w-full flex items-center justify-between p-4 lg:pt-6.5 lg:px-10',
        className,
      )}
      {...props}
    >
      <a
        href={siteConfig.github}
        target="_blank"
        rel="noreferrer"
        className="flex items-center shadow-md outline-none focus-visible:text-gray-900/90 hover:text-gray-900/90"
      >
        <img src="/logo.png" alt="Logo" className="h-9 w-9 lg:h-12 lg:w-12" />
      </a>
      <button disabled={isDownloading} onClick={handleDownload} type="button" className="aspect-square h-9 flex cursor-pointer cursor-pointer touch-manipulation appearance-none items-center justify-center rounded-md border-none bg-gray-900 text-white font-bold shadow-md outline-none lg:h-12 focus-visible:bg-gray-900/90 hover:bg-gray-900/90">
        {
            isDownloading ? <Spinner className="h-5.5 w-5.5" /> : <DownloadIcon className="h-5.5 w-5.5" />
          }
      </button>
    </header>
  );
}
