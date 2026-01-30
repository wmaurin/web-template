import Masonry from 'react-masonry-css';
import Section from './Section';

interface GalleryProps {
  header?: string;
  description?: string;
  images: { src: string; alt: string }[];
  columns?: 2 | 3 | 4;
}

function Gallery({ header, description, images, columns = 3 }: GalleryProps) {
  const breakpointColumnsObj = {
    default: columns,
    1024: columns >= 3 ? 3 : columns,
    768: columns >= 2 ? 2 : 1,
    640: 1,
  };

  return (
    <Section header={header} description={description}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-auto -ml-4"
        columnClassName="pl-4 bg-clip-padding"
      >
        {images.map((image) => (
          <div
            key={image.src}
            className="mb-4 overflow-hidden rounded-lg border border-border bg-muted"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>
        ))}
      </Masonry>
    </Section>
  );
}

export default Gallery;
