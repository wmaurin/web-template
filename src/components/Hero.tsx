interface HeroProps {
  title: string;
  description?: string;
  primaryAction?: { label: string; onClick?: () => void };
  secondaryAction?: { label: string; onClick?: () => void };
}

function Hero({
  title,
  description,
  primaryAction,
  secondaryAction,
}: HeroProps) {
  return (
    <section className="py-16 text-center max-w-3xl mx-auto">
      <h1 className="mb-6">{title}</h1>
      {description && <p className="lead text-lg mb-8">{description}</p>}
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
