import Section from './Section';

interface Feature {
  title: string;
  description: string;
  icon?: string;
}

interface FeaturesProps {
  header: string;
  description?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
}

function Features({
  header,
  description,
  features,
  columns = 3,
}: FeaturesProps) {
  const gridCols = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <Section header={header} description={description}>
      <div className={`grid ${gridCols[columns]} gap-8`}>
        {features.map((feature, index) => (
          <div key={index}>
            {feature.icon && (
              <span className="text-3xl mb-4 block">{feature.icon}</span>
            )}
            <h4 className="mt-0">{feature.title}</h4>
            <p className="mb-0">{feature.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Features;
