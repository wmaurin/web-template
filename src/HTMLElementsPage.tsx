import React from 'react';

function HTMLElementsPage() {
  const containerStyle: React.CSSProperties = {
    marginBottom: '5rem',
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '1rem',
      }}
    >
      <div style={containerStyle}>
        <h1>H1</h1>
        <h2>H2</h2>
        <h3>H3</h3>
      </div>

      <div style={containerStyle}>
        <a href="#">Link</a>
      </div>

      <div style={containerStyle}>
        <address>123 Main St, Anytown, USA</address>
      </div>

      <div style={containerStyle}>
        <b>Bold text</b>
      </div>

      <div style={containerStyle}>
        <blockquote>Blockquote text</blockquote>
      </div>

      <div style={containerStyle}>
        <button type="button">Button</button>
      </div>

      <div style={containerStyle}>
        <code>const x = 1;</code>
      </div>

      <div style={containerStyle}>
        <em>Emphasized text</em>
      </div>

      <div style={containerStyle}>
        <footer>Footer content</footer>
      </div>

      <div style={containerStyle}>
        <form>
          <input type="text" placeholder="Input" />
        </form>
      </div>

      <div style={containerStyle}>
        <hr />
      </div>

      <div style={containerStyle}>
        <i>Italic text</i>
      </div>

      <div style={containerStyle}>
        <input type="text" placeholder="Text input" />{' '}
        <input type="number" placeholder="Number" /> <input type="checkbox" />{' '}
        <input type="radio" name="r" />
      </div>

      <div style={containerStyle}>
        <label htmlFor="lab">Label</label> <input id="lab" type="text" />
      </div>

      <div style={containerStyle}>
        <mark>Marked text</mark>
      </div>

      <div style={containerStyle}>
        <ol>
          <li>One</li>
          <li>Two</li>
        </ol>
      </div>

      <div style={containerStyle}>
        <p>Paragraph text</p>
      </div>

      <div style={containerStyle}>
        <q>Inline quote</q>
      </div>

      <div style={containerStyle}>
        <s>Strikethrough</s>
      </div>

      <div style={containerStyle}>
        H<sub>2</sub>O
      </div>

      <div style={containerStyle}>
        E = mc<sup>2</sup>
      </div>

      <div style={containerStyle}>
        <textarea rows={2} placeholder="Textarea" />
      </div>

      <div style={containerStyle}>
        <time dateTime="2025-01-29">Jan 29, 2025</time>
      </div>
    </div>
  );
}

export default HTMLElementsPage;
