export class MyUWIconLink extends HTMLElement {
  static get elementName() {
    return "myuw-icon-link";
  }

  static get template() {
    if (this._template === undefined) {
      this._template = document.createElement("template");
      this._template.innerHTML = `
        <style>
          :host {
            flex: 1;
            display: flex;
            flex-direction: column;
            max-height: 100%;
            justify-content: center;
            align-items: center;
          }
          a {
            display: flex;
            flex: 1;
            width: 100%;
            text-decoration: none;
            color: #333;
          }
          #container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-grow: 1;
          }
          ::slotted(img) {
            position: relative;
            top: -10%;
            width: 70px;
            height: 70px;
          }
        </style>

        <a id="link" href="#" target="_blank" rel="noopener noreferrer">
          <div id="container">
            <slot></slot>
          </div>
        </a>
      `;
    }
    return this._template;
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(MyUWIconLink.template.content.cloneNode(true));
    this.shadowRoot.getElementById("link").href = this.href;
  }

  get href() {
    return this.getAttribute("href") || "#";
  }
}

window.customElements.define(MyUWIconLink.elementName, MyUWIconLink);
