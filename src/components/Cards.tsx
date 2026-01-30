import Section from './Section';
import Card from './Card';

interface CardData {
  title: string;
  description?: string;
  image?: string;
  footer?: React.ReactNode;
}

interface CardsProps {
  header: string;
  description?: string;
  cards: CardData[];
  columns?: 2 | 3 | 4;
}

function Cards({ header, description, cards, columns = 3 }: CardsProps) {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <Section header={header} description={description}>
      <div className={`grid ${gridCols[columns]} gap-6`}>
        {cards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>
    </Section>
  );
}

export default Cards;
