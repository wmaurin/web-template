import { Hero, Cards, Gallery, Form } from '../components';

function Components() {
  return (
    <div>
      <Hero
        header="Hero"
        description="This is a hero section with a title, description, and primary and secondary actions."
        primaryAction={{ label: 'Get Started' }}
        secondaryAction={{ label: 'View Source' }}
      />

      <Cards
        header="Cards"
        description="This is a card section with a grid of cards."
        columns={3}
        cards={[
          {
            title: 'Card One',
            description: 'This is a description of card one.',
            image: 'https://picsum.photos/seed/1/400/225',
          },
          {
            title: 'Card Two',
            description: 'This is a description of card two.',
            image: 'https://picsum.photos/seed/2/400/225',
          },
          {
            title: 'Card Three',
            description: 'This is a description of card three.',
            image: 'https://picsum.photos/seed/3/400/225',
          },
        ]}
      />

      <Gallery
        header="Gallery"
        description="This is a gallery section with a grid of images."
        columns={3}
        images={[
          { src: 'https://picsum.photos/seed/a/400/225', alt: 'Image 1' },
          { src: 'https://picsum.photos/seed/b/400/225', alt: 'Image 2' },
          { src: 'https://picsum.photos/seed/c/400/225', alt: 'Image 3' },
          { src: 'https://picsum.photos/seed/d/400/225', alt: 'Image 4' },
          { src: 'https://picsum.photos/seed/e/400/225', alt: 'Image 5' },
          { src: 'https://picsum.photos/seed/f/400/225', alt: 'Image 6' },
        ]}
      />

      <Form
        header="Contact Form"
        center={true}
        description="This is a contact form with validation."
        fields={[
          {
            name: 'name',
            label: 'Name',
            type: 'text',
            placeholder: 'John Doe',
            required: true,
          },
          {
            name: 'email',
            label: 'Email',
            type: 'email',
            placeholder: 'john@example.com',
            required: true,
          },
          {
            name: 'subject',
            label: 'Subject',
            type: 'select',
            options: ['General', 'Support', 'Sales'],
            required: true,
          },
          {
            name: 'message',
            label: 'Message',
            type: 'textarea',
            placeholder: 'Your message...',
            required: true,
          },
        ]}
        submitLabel="Send Message"
        onSubmit={() => {}}
      />
    </div>
  );
}

export default Components;
