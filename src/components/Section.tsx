interface SectionProps {
  header: string;
  description?: string;
  children: React.ReactNode;
}

function Section({ header, description, children }: SectionProps) {
  return (
    <section className="py-8">
      <h2>{header}</h2>
      {description && <p className="lead">{description}</p>}
      {children}
    </section>
  );
}

export default Section;

