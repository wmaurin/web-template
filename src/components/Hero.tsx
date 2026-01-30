interface HeroProps {
  header?: string | React.ReactElement;
  image?: string;
  description?: string;
  primaryAction?: { label: string; onClick?: () => void };
  secondaryAction?: { label: string; onClick?: () => void };
}

function Hero({
  header,
  image,
  description,
  primaryAction,
  secondaryAction,
}: HeroProps) {
  return (
    <section className="py-8 text-center max-w-3xl mx-auto">
      {image && (
        <div className="mb-6 flex justify-center">
          <img
            src={image}
            alt="Image"
            className="max-w-full h-auto"
            style={{ maxHeight: '200px' }}
          />
        </div>
      )}

      {typeof header === 'string' ? <h1>{header}</h1> : header}

      {description && <p className="lead text-lg">{description}</p>}
      {(primaryAction || secondaryAction) && (
        <div className="flex gap-4 justify-center flex-wrap">
          {primaryAction && (
            <button onClick={primaryAction.onClick}>
              {primaryAction.label}
            </button>
          )}
          {secondaryAction && (
            <button className="secondary" onClick={secondaryAction.onClick}>
              {secondaryAction.label}
            </button>
          )}
        </div>
      )}
    </section>
  );
}

export default Hero;
