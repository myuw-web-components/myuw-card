export class MyUWCardFooter extends HTMLElement {
  static get elementName() {
    return "myuw-card-footer";
  }

  static get template() {
    if (this._template === undefined) {
      this._template = document.createElement("template");
      this._template.innerHTML = `
        <style>
          :host {
            width: 100%;
            height: 36px;
            position: relative;
            font-size: 14px;
          }
          a {
            color: #696969;
            text-decoration: none;
            font-family: "Roboto", sans-serif;
            font-family: var(--myuw-app-bar-font);
            font-weight: 400;
          }
          div {
            transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
            background-color: #d8d8d8;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
          }
          div:hover {
            background-color: var(--myuw-primary-bg, #c5050c);
            color: var(--myuw-primary-color, #fafafa);
          }
        </style>

        <a id="footer-button" href="#">
          <div>
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
    this.shadowRoot.appendChild(
      MyUWCardFooter.template.content.cloneNode(true)
    );
    this.shadowRoot.getElementById("footer-button").href = this.href;
  }

  get href() {
    return this.getAttribute("href") || "#";
  }
}

window.customElements.define(MyUWCardFooter.elementName, MyUWCardFooter);
