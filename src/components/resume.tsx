import { useEffect, useMemo, useState } from 'react';
import { Document, type DocumentProps, Page, pdfjs } from 'react-pdf';
import { Spinner } from './icons';
import { cn, toKebabCase } from '@/lib/utils';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { useResizeObserver } from '@/lib/hooks/use-resize-observer';
import { siteConfig } from '@/lib/site-config';

type ResumeProps = React.ComponentProps<'section'>;

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const MAX_WIDTH = 896;
const PADDING = 16;

export function Resume({ className, ...props }: ResumeProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const { width: windowWidth } = useResizeObserver();

  const newWidth = windowWidth - PADDING * 2;
  const [width, setWidth] = useState<number>(newWidth > MAX_WIDTH ? MAX_WIDTH : newWidth);

  const documentOptions = useMemo(() => ({
    cMapUrl: '/cmaps/',
    standardFontDataUrl: '/standard_fonts/',
  }), []);

  const onDocumentLoadSuccess: DocumentProps['onLoadSuccess'] = ({ numPages }) => {
    setNumPages(numPages);
  };

  useEffect(() => {
    const newWidth = windowWidth - PADDING * 2;
    setWidth(newWidth > MAX_WIDTH ? MAX_WIDTH : newWidth);
  }, [windowWidth]);

  return (
    <section
      className={cn(
        'mx-auto sm:mt-12 sm:mb-16 lg:mt-24 lg:mb-30 w-max h-max',
        className,
      )}
      {...props}
    >
      <Document
        file={`${toKebabCase(siteConfig.name)}-resume.pdf`}
        className="aspect-896/1268 px-4 space-y-4 sm:space-y-8"
        options={documentOptions}
        loading={(
          <div
            className="aspect-896/1268 flex justify-center rounded-md bg-pdf pt-20 shadow-uniform"
            style={{
              width,
            }}
          >
            <Spinner className="h-10 w-10 opacity-50" />
          </div>
        )}
        externalLinkRel="noopener noreferrer"
        externalLinkTarget="_blank"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from({ length: numPages }, (_, i) => (
          <Page
            key={`page_${i + 1}`}
            pageNumber={i + 1}
            loading={(
              <div
                className="aspect-896/1268 flex justify-center rounded-md bg-pdf pt-20 shadow-uniform"
                style={{
                  width,
                }}
              >
                <Spinner className="h-10 w-10 opacity-50" />
              </div>
            )}
            canvasBackground="#f4f2f0"
            width={width}
            _className="rounded-md shadow-uniform"
          />
        ))}
      </Document>
    </section>
  );
}
