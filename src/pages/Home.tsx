import { useNavigate } from 'react-router-dom';
import { Hero } from '../components';

function Home() {
  const navigate = useNavigate();

  return (
    <Hero
      title="Website Template"
      description="Personal website template with base HTML element styling and reusable components. Built with React and Tailwind CSS."
      primaryAction={{
        label: 'View Base Styles',
        onClick: () => navigate('/basic'),
      }}
      secondaryAction={{
        label: 'View Components',
        onClick: () => navigate('/components'),
      }}
    />
  );
}

export default Home;
