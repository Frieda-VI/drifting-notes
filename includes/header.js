class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <link rel="stylesheet" href="../assets/css/includes/header.css" />

    <header class="header">
        <nav class="header-nav">
          <a href="../index.html">Drifting Notes</a>
          <a href="../comments.html" target="_blank">Comments</a>
        </nav>
    </header>
    `;
  }
}

customElements.define("universal-header", Header);
