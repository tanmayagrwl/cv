import { useEffect, useMemo, useState } from 'react';
import { Document, type DocumentProps, Page, pdfjs } from 'react-pdf';
import { Spinner } from './icons';
import { cn } from '@/lib/utils';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { useResizeObserver } from '@/lib/hooks/use-resize-observer';

type ResumeProps = React.ComponentProps<'section'>;

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const MAX_WIDTH = 896;
const MAX_HEIGHT = 1268;
const PADDING = 16;

export function Resume({ className, ...props }: ResumeProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [width, setWidth] = useState<number>(MAX_WIDTH);
  const { width: windowWidth } = useResizeObserver();

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
        file="/jatin-resume.pdf"
        className="px-4 space-y-4 sm:space-y-8"
        options={documentOptions}
        loading={(
          <div
            className="flex justify-center rounded-md bg-pdf pt-20 shadow-uniform"
            style={{
              width: MAX_WIDTH,
              height: MAX_HEIGHT,
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
                className="flex justify-center rounded-md bg-pdf pt-20 shadow-uniform"
                style={{
                  width: MAX_WIDTH,
                  height: MAX_HEIGHT,
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
