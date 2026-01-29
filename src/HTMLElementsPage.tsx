import React from 'react';

function HTMLElementsPage() {
  const containerStyle: React.CSSProperties = {
    marginBottom: '1rem',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '1rem' }}>
      <h1 style={{ marginBottom: '1.5rem' }}>HTML Elements</h1>

      <p><strong>a</strong></p>
      <div style={containerStyle}>
        <a href="#">Link</a>
      </div>

      <p><strong>address</strong></p>
      <div style={containerStyle}>
        <address>123 Example St, City</address>
      </div>

      <p><strong>article</strong></p>
      <div style={containerStyle}>
        <article>Article content</article>
      </div>

      <p><strong>aside</strong></p>
      <div style={containerStyle}>
        <aside>Aside content</aside>
      </div>

      <p><strong>audio</strong></p>
      <div style={containerStyle}>
        <audio controls src="">Audio</audio>
      </div>

      <p><strong>b</strong></p>
      <div style={containerStyle}>
        <b>Bold text</b>
      </div>

      <p><strong>blockquote</strong></p>
      <div style={containerStyle}>
        <blockquote>Blockquote text</blockquote>
      </div>

      <p><strong>button</strong></p>
      <div style={containerStyle}>
        <button type="button">Button</button>
      </div>

      <p><strong>canvas</strong></p>
      <div style={containerStyle}>
        <canvas width={80} height={40}>Canvas</canvas>
      </div>

      <p><strong>caption</strong></p>
      <div style={containerStyle}>
        <table><caption>Table caption</caption><tr><td>Cell</td></tr></table>
      </div>

      <p><strong>code</strong></p>
      <div style={containerStyle}>
        <code>const x = 1;</code>
      </div>

      <p><strong>col, colgroup</strong></p>
      <div style={containerStyle}>
        <table><colgroup><col /><col /></colgroup><tr><td>A</td><td>B</td></tr></table>
      </div>

      <p><strong>data</strong></p>
      <div style={containerStyle}>
        <data value="42">Forty-two</data>
      </div>

      <p><strong>del</strong></p>
      <div style={containerStyle}>
        <del>Deleted text</del>
      </div>

      <p><strong>details</strong></p>
      <div style={containerStyle}>
        <details><summary>Summary</summary>Details content</details>
      </div>

      <p><strong>dfn</strong></p>
      <div style={containerStyle}>
        <dfn>Definition term</dfn>
      </div>

      <p><strong>dialog</strong></p>
      <div style={containerStyle}>
        <dialog open>Dialog content</dialog>
      </div>

      <p><strong>div</strong></p>
      <div style={containerStyle}>
        <div>Div content</div>
      </div>

      <p><strong>em</strong></p>
      <div style={containerStyle}>
        <em>Emphasized text</em>
      </div>

      <p><strong>figure</strong></p>
      <div style={containerStyle}>
        <figure><figcaption>Figcaption</figcaption>Figure content</figure>
      </div>

      <p><strong>footer</strong></p>
      <div style={containerStyle}>
        <footer>Footer content</footer>
      </div>

      <p><strong>form</strong></p>
      <div style={containerStyle}>
        <form><input type="text" placeholder="Input" /></form>
      </div>

      <p><strong>h1–h6</strong></p>
      <div style={containerStyle}>
        <h1>H1</h1><h2>H2</h2><h3>H3</h3><h4>H4</h4><h5>H5</h5><h6>H6</h6>
      </div>

      <p><strong>header</strong></p>
      <div style={containerStyle}>
        <header>Header content</header>
      </div>

      <p><strong>hr</strong></p>
      <div style={containerStyle}>
        <hr />
      </div>

      <p><strong>i</strong></p>
      <div style={containerStyle}>
        <i>Italic text</i>
      </div>

      <p><strong>img</strong></p>
      <div style={containerStyle}>
        <img src="https://via.placeholder.com/80x40" alt="Placeholder" />
      </div>

      <p><strong>input</strong></p>
      <div style={containerStyle}>
        <input type="text" placeholder="Text input" /> <input type="number" placeholder="Number" /> <input type="checkbox" /> <input type="radio" name="r" />
      </div>

      <p><strong>label</strong></p>
      <div style={containerStyle}>
        <label htmlFor="lab">Label</label> <input id="lab" type="text" />
      </div>

      <p><strong>main</strong></p>
      <div style={containerStyle}>
        <main>Main content</main>
      </div>

      <p><strong>mark</strong></p>
      <div style={containerStyle}>
        <mark>Marked text</mark>
      </div>

      <p><strong>meter</strong></p>
      <div style={containerStyle}>
        <meter value="0.6" min="0" max="1">60%</meter>
      </div>

      <p><strong>map, area</strong></p>
      <div style={containerStyle}>
        <map name="demo"><area shape="rect" coords="0,0,40,40" href="#" alt="Area" /></map>
      </div>

      <p><strong>nav</strong></p>
      <div style={containerStyle}>
        <nav>Nav content</nav>
      </div>

      <p><strong>noscript</strong></p>
      <div style={containerStyle}>
        <noscript>No script fallback</noscript>
      </div>

      <p><strong>object</strong></p>
      <div style={containerStyle}>
        <object data="" type="image/png" width={80} height={40}>Object fallback</object>
      </div>

      <p><strong>ol, li</strong></p>
      <div style={containerStyle}>
        <ol><li>One</li><li>Two</li></ol>
      </div>

      <p><strong>output</strong></p>
      <div style={containerStyle}>
        <output name="result">0</output>
      </div>

      <p><strong>p</strong></p>
      <div style={containerStyle}>
        <p>Paragraph text</p>
      </div>

      <p><strong>picture</strong></p>
      <div style={containerStyle}>
        <picture><source type="image/webp" srcSet="" /><img src="https://via.placeholder.com/80x40" alt="Picture" /></picture>
      </div>

      <p><strong>pre</strong></p>
      <div style={containerStyle}>
        <pre>Preformatted text</pre>
      </div>

      <p><strong>progress</strong></p>
      <div style={containerStyle}>
        <progress value="70" max="100">70%</progress>
      </div>

      <p><strong>q</strong></p>
      <div style={containerStyle}>
        <q>Inline quote</q>
      </div>

      <p><strong>s</strong></p>
      <div style={containerStyle}>
        <s>Strikethrough</s>
      </div>

      <p><strong>samp</strong></p>
      <div style={containerStyle}>
        <samp>Sample output</samp>
      </div>

      <p><strong>section</strong></p>
      <div style={containerStyle}>
        <section>Section content</section>
      </div>

      <p><strong>select</strong></p>
      <div style={containerStyle}>
        <select><option>Option 1</option><option>Option 2</option></select>
      </div>

      <p><strong>small</strong></p>
      <div style={containerStyle}>
        <small>Small text</small>
      </div>

      <p><strong>source</strong></p>
      <div style={containerStyle}>
        <audio controls><source src="" type="audio/mpeg" />Audio</audio>
      </div>

      <p><strong>span</strong></p>
      <div style={containerStyle}>
        <span>Span content</span>
      </div>

      <p><strong>strong</strong></p>
      <div style={containerStyle}>
        <strong>Strong text</strong>
      </div>

      <p><strong>sub</strong></p>
      <div style={containerStyle}>
        H<sub>2</sub>O
      </div>

      <p><strong>summary</strong></p>
      <div style={containerStyle}>
        <details><summary>Summary</summary>Content</details>
      </div>

      <p><strong>sup</strong></p>
      <div style={containerStyle}>
        E = mc<sup>2</sup>
      </div>

      <p><strong>table</strong></p>
      <div style={containerStyle}>
        <table><thead><tr><th>Th</th></tr></thead><tbody><tr><td>Td</td></tr></tbody><tfoot><tr><td>Tfoot</td></tr></tfoot></table>
      </div>

      <p><strong>template</strong></p>
      <div style={containerStyle}>
        <template><span>Template content (hidden)</span></template>
      </div>

      <p><strong>textarea</strong></p>
      <div style={containerStyle}>
        <textarea rows={2} placeholder="Textarea" />
      </div>

      <p><strong>time</strong></p>
      <div style={containerStyle}>
        <time dateTime="2025-01-29">Jan 29, 2025</time>
      </div>

      <p><strong>u</strong></p>
      <div style={containerStyle}>
        <u>Underlined text</u>
      </div>

      <p><strong>ul, li</strong></p>
      <div style={containerStyle}>
        <ul><li>Item 1</li><li>Item 2</li></ul>
      </div>

      <p><strong>var</strong></p>
      <div style={containerStyle}>
        <var>x</var> = 1
      </div>

      <p><strong>video</strong></p>
      <div style={containerStyle}>
        <video src="" controls width={160} height={90}>Video</video>
      </div>

      <p><strong>wbr</strong></p>
      <div style={containerStyle}>
        longword<wbr />break
      </div>
    </div>
  );
}

export default HTMLElementsPage;
