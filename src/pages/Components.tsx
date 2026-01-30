import { Hero, Cards, Gallery, Form, Section } from '../components';

function Components() {
  return (
    <div>
      <Hero
        header="Hero"
        description="This is a hero section with a title, description, and primary and secondary actions."
        primaryAction={{ label: 'Get Started' }}
        secondaryAction={{ label: 'View Source' }}
      />

      <Section
        header="Centered Section"
        description="This is a centered section with text aligned to the center."
        aligned="center"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </Section>

      <Section
        header="Normal Section"
        description="This is a left-aligned section with default text alignment."
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae
          tincidunt nisl nunc euismod nunc. Sed euismod, nisi vel consectetur
          interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod
          nunc.
        </p>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Donec sed odio dui. Donec ullamcorper nulla non metus auctor
          fringilla. Maecenas sed diam eget risus varius blandit sit amet non
          magna.
        </p>
      </Section>

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
        header="Contact Form (Centered)"
        center={true}
        description="This is a centered contact form with validation."
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

      <Form
        header="Feedback Form"
        description="This is a left-aligned form without centering."
        fields={[
          {
            name: 'fullName',
            label: 'Full Name',
            type: 'text',
            placeholder: 'Jane Smith',
            required: true,
          },
          {
            name: 'email',
            label: 'Email Address',
            type: 'email',
            placeholder: 'jane@example.com',
            required: true,
          },
          {
            name: 'feedback',
            label: 'Your Feedback',
            type: 'textarea',
            placeholder: 'Tell us what you think...',
            required: true,
          },
        ]}
        submitLabel="Submit Feedback"
        onSubmit={() => {}}
      />
    </div>
  );
}

export default Components;
