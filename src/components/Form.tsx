import Section from './Section';

interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'textarea' | 'select';
  placeholder?: string;
  options?: string[];
  required?: boolean;
}

interface FormProps {
  header: string;
  description?: string;
  fields: FormField[];
  submitLabel?: string;
  onSubmit?: (data: FormData) => void;
  center?: boolean;
}

function Form({
  header,
  description,
  fields,
  submitLabel = 'Submit',
  onSubmit,
  center,
}: FormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(new FormData(e.currentTarget));
    }
  };

  return (
    <Section
      header={header}
      description={description}
      aligned={center ? 'center' : 'left'}
    >
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col gap-4 max-w-md text-left ${center ? 'mx-auto' : ''}`}
      >
        {fields.map((field) => (
          <div key={field.name} className="flex flex-col gap-2">
            <label htmlFor={field.name}>
              {field.label}
              {field.required && (
                <span className="text-destructive ml-1">*</span>
              )}
            </label>

            {field.type === 'textarea' ? (
              <textarea
                id={field.name}
                name={field.name}
                placeholder={field.placeholder}
                required={field.required}
              />
            ) : field.type === 'select' ? (
              <select
                id={field.name}
                name={field.name}
                required={field.required}
              >
                <option value="">{field.placeholder || 'Select...'}</option>
                {field.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                required={field.required}
              />
            )}
          </div>
        ))}

        <button type="submit" className="mt-2">
          {submitLabel}
        </button>
      </form>
    </Section>
  );
}

export default Form;
