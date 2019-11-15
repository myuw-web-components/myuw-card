export class MyUWCardFooter extends HTMLElement {
  static get elementName() {
    return "myuw-card-footer";
  }

  static get template() {
    if (this._template === undefined) {
      this._template = document.createElement("template");
      this._template.innerHTML = `
        <style>
          #footer-button {
            font-weight: 300;
            position: absolute;
            bottom: 0;
            margin: 0;
            color: var(--myuw-footer-text, #696969);
            background: var(--myuw-footer-background, #d8d8d8);
            width: 100%;
            padding: 8px 0;
            text-align: center;
            font-size: 14px;
            transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
            text-decoration: none;
          }
          #footer-button:hover {
            background: var(--myuw-footer-background-hover, var(--myuw-primary-bg, #c5050c));
            color: var(--myuw-footer-text-hover, #f5f5f5)
          }
          .container {
            height: 60px;
          }
        </style>
        <div class="container">
          <a href="#" id="footer-button" target="_blank" rel="noopener noreferrer">
            <div>
              <span id="footer-text"></span>
            </div>
          </a>
        </div>
      `;
    }
    return this._template;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(
      MyUWCardFooter.template.content.cloneNode(true)
    );
    this.shadowRoot.getElementById("footer-button").href = this.href;
    this.shadowRoot.getElementById("footer-text").innerText = this.text;
  }

  get href() {
    return this.getAttribute("href") || "#";
  }

  get text() {
    return this.getAttribute("text") || "";
  }
}

window.customElements.define(MyUWCardFooter.elementName, MyUWCardFooter);
