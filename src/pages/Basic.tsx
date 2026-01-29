import { Section } from '../components';

function Basic() {
  return (
    <div>
      <header>
        <h1>Basic</h1>
        <p>Showcase of basic HTML element styles.</p>
      </header>

      <Section header="Typography">
        <div>
          <p>
            This is a standard paragraph with <strong>bold text</strong>,{' '}
            <em>italic text</em>, and <code>inline code</code>. You can also use{' '}
            <mark>highlighted text</mark> for emphasis or{' '}
            <s>strikethrough text</s> for deletions. Links are styled with a
            subtle underline: <a href="#">internal link</a> and{' '}
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              external link
            </a>
            . The underline becomes more visible on hover.
          </p>
          <small>This is small text, useful for captions and fine print.</small>
        </div>
      </Section>

      <Section
        header="Buttons"
        description="Multiple button variants for different use cases."
      >
        <div className="flex flex-wrap gap-3">
          <button>Primary</button>
          <button className="secondary">Secondary</button>
          <button className="outline">Outline</button>
          <button className="ghost">Ghost</button>
          <button className="destructive">Destructive</button>
          <button disabled>Disabled</button>
        </div>
      </Section>

      <Section
        header="Form Elements"
        description="Inputs, textareas, and other form controls."
      >
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="text-input">Text Input</label>
            <input
              id="text-input"
              type="text"
              placeholder="Enter some text..."
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email-input">Email Input</label>
            <input
              id="email-input"
              type="email"
              placeholder="you@example.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="disabled-input">Disabled Input</label>
            <input
              id="disabled-input"
              type="text"
              placeholder="This is disabled"
              disabled
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="select-input">Select</label>
            <select id="select-input">
              <option value="">Choose an option...</option>
              <option value="1">Option One</option>
              <option value="2">Option Two</option>
              <option value="3">Option Three</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="textarea-input">Textarea</label>
            <textarea
              id="textarea-input"
              rows={4}
              placeholder="Write something..."
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="file-input">File Input</label>
            <input id="file-input" type="file" />
          </div>

          <div className="flex gap-3">
            <button type="submit">Submit</button>
            <button type="button" className="outline">
              Cancel
            </button>
          </div>
        </form>
      </Section>

      <Section header="Lists" description="Ordered and unordered lists.">
        <div>
          <h4>Unordered List</h4>
          <ul>
            <li>First item in the list</li>
            <li>Second item with more content</li>
            <li>Third item here</li>
            <li>Fourth and final item</li>
          </ul>
        </div>
      </Section>

      <Section
        header="Code"
        description="Inline code snippets and code blocks."
      >
        <p>
          Inline <code>code snippets</code> look like this.
        </p>

        <pre>
          <code>{`function greet(name: string) {
  console.log(\`Hello, \${name}!\`);
  return { message: "Welcome" };
}`}</code>
        </pre>
      </Section>

      <Section header="Blockquote" description="For quotes and callouts.">
        <blockquote>
          "Design is not just what it looks like and feels like. Design is how
          it works." — Steve Jobs
        </blockquote>
      </Section>

      <Section header="Table" description="Data tables with hover states.">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alice Johnson</td>
              <td>Active</td>
              <td>Developer</td>
            </tr>
            <tr>
              <td>Bob Smith</td>
              <td>Pending</td>
              <td>Designer</td>
            </tr>
            <tr>
              <td>Carol Williams</td>
              <td>Active</td>
              <td>Manager</td>
            </tr>
          </tbody>
        </table>
      </Section>

      <Section
        header="Semantic Elements"
        description="Other useful HTML elements."
      >
        <div>
          <h4>Address</h4>
          <address>
            123 Design Street
            <br />
            San Francisco, CA 94102
            <br />
            United States
          </address>
        </div>

        <div>
          <h4>Time</h4>
          <p>
            Published on <time dateTime="2026-01-29">January 29, 2026</time>
          </p>
        </div>

        <div>
          <h4>Horizontal Rule</h4>
          <p>Content above the divider.</p>
          <hr />
          <p>Content below the divider.</p>
        </div>
      </Section>

      <footer>
        <p>&copy; 2026 Style Guide. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default Basic;
