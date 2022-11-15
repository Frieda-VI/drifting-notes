class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <link rel="stylesheet" href="../assets/css/includes/footer.css" />

      <footer>
        <p class="bottom-note">
          ಥ_ಥ This is my person blog, and I really hope that you enjoyed what you read!
        </p>

        <p class="copyright">
          © Frieda-VI 2022. Text is MIT licensed unless specified.
        </p>
      </footer>
    `;

    console.log(Footer.getElementsByTagName("post-date"));
  }
}

customElements.define("universal-footer", Footer);
