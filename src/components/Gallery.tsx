import Section from './Section';

interface GalleryProps {
  header: string;
  description?: string;
  images: { src: string; alt: string }[];
  columns?: 2 | 3 | 4;
}

function Gallery({ header, description, images, columns = 3 }: GalleryProps) {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <Section header={header} description={description}>
      <div className={`grid ${gridCols[columns]} gap-4`}>
        {images.map((image) => (
          <div
            key={image.src}
            className="overflow-hidden rounded-lg border border-border bg-muted aspect-video"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Gallery;
