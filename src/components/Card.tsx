interface CardProps {
  title: string;
  description?: string;
  image?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
}

function Card({ title, description, image, children, footer }: CardProps) {
  return (
    <div className="rounded-lg border border-border bg-card overflow-hidden">
      {image && (
        <div className="aspect-video bg-muted">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-6">
        <h4 className="mt-0 mb-2">{title}</h4>
        {description && <p className="mb-0">{description}</p>}
        {children}
      </div>
      {footer && (
        <div className="px-6 py-4 border-t border-border bg-muted/50">
          {footer}
        </div>
      )}
    </div>
  );
}

export default Card;
