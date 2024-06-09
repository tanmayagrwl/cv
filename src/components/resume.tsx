import { Document, Page, pdfjs } from 'react-pdf';
import { cn } from '@/lib/utils';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

type ResumeProps = React.ComponentProps<'section'>;

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export function Resume({ className, ...props }: ResumeProps) {
  return (
    <section
      className={cn(
        'mx-auto my-8 bg-white shadow-md rounded-md overflow-hidden w-max mt-20',
        className,
      )}
      {...props}
    >
      <Document
        file="/jatin-resume.pdf"
        options={{
          cMapUrl: '/cmaps/',
          cMapPacked: true,
        }}
        externalLinkRel="noopener noreferrer"
        externalLinkTarget="_blank"
      >
        <Page pageNumber={1} />
      </Document>
    </section>
  );
}
