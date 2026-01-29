function Basic() {
  return (
    <div>
      <header>
        <h1>Basic</h1>
        <p>Showcase of basic HTML element styles.</p>
      </header>

      {/* Typography */}
      <section>
        <h2 className="border-b">Typography</h2>

        <div>
          <h1>Heading One</h1>
          <h2>Heading Two</h2>
          <h3>Heading Three</h3>
          <h4>Heading Four</h4>
        </div>

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
      </section>

      {/* Buttons */}
      <section>
        <h2 className="border-b">Buttons</h2>
        <p>Multiple button variants for different use cases.</p>

        <div className="flex flex-wrap gap-3">
          <button>Primary</button>
          <button className="secondary">Secondary</button>
          <button className="outline">Outline</button>
          <button className="ghost">Ghost</button>
          <button className="destructive">Destructive</button>
          <button disabled>Disabled</button>
        </div>
      </section>

      {/* Form Elements */}
      <section>
        <h2 className="border-b">Form Elements</h2>
        <p>Inputs, textareas, and other form controls.</p>

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
      </section>

      {/* Lists */}
      <section>
        <h2 className="border-b">Lists</h2>
        <p>Ordered and unordered lists.</p>

        <div>
          <h4>Unordered List</h4>
          <ul>
            <li>First item in the list</li>
            <li>Second item with more content</li>
            <li>Third item here</li>
            <li>Fourth and final item</li>
          </ul>
        </div>
      </section>

      {/* Code */}
      <section>
        <h2 className="border-b">Code</h2>
        <p>
          Inline <code>code snippets</code> and code blocks.
        </p>

        <pre>
          <code>{`function greet(name: string) {
  console.log(\`Hello, \${name}!\`);
  return { message: "Welcome" };
}`}</code>
        </pre>
      </section>

      {/* Blockquote */}
      <section>
        <h2 className="border-b">Blockquote</h2>
        <p>For quotes and callouts.</p>

        <blockquote>
          "Design is not just what it looks like and feels like. Design is how
          it works." — Steve Jobs
        </blockquote>
      </section>

      {/* Table */}
      <section>
        <h2 className="border-b">Table</h2>
        <p>Data tables with hover states.</p>

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
      </section>

      {/* Semantic Elements */}
      <section>
        <h2 className="border-b">Semantic Elements</h2>
        <p>Other useful HTML elements.</p>

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
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2026 Style Guide. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default Basic;
