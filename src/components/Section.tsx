interface SectionProps {
  header?: string;
  description?: string;
  aligned?: 'left' | 'center';
  children: React.ReactNode;
}

function Section({
  header,
  description,
  aligned = 'left',
  children,
}: SectionProps) {
  const alignmentClass = aligned === 'center' ? 'text-center' : 'text-left';

  return (
    <section className={alignmentClass}>
      <h2>{header}</h2>
      {description && <p className="lead">{description}</p>}
      {children}
    </section>
  );
}

export default Section;
