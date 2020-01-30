export class MyUWFabLink extends HTMLElement {
  static get elementName() {
    return "myuw-fab-link";
  }

  static get template() {
    if (this._template === undefined) {
      this._template = document.createElement("template");
      this._template.innerHTML = `
        <style>
          div {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 100px;
          }
          a {
            border-radius: 50%;
            width: 40px;
            height: 40px;
            background-color: var(--myuw-fab-color, #0479a8);
            margin-bottom: 4px;
          }
          a:hover {
            background-color: var(--myuw-fab-color-hover, #034e6c);
          }
          a:not([disabled]) {
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
          }
          img {
            width: 24px;
            height: 24px;
            position: relative;
            top: 20%;
            left: 20%;
            filter: invert(1);
            opacity: 0.87;
          }
          p {
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            margin-top: 0px;
            margin-bottom: 10px;
            padding: 3px 8px;
            text-align: center;
          }
        </style>

        <div>
          <a id="fab-link" href="#" target="_blank" rel="noopener noreferrer">
            <img src="https://my.wisc.edu/images/widgetIcons/canvas-logo.svg">
          </a>
          <p><slot></slot></p>
        </div>
      `;
    }
    return this._template;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.append(MyUWFabLink.template.content.cloneNode(true));
    this.shadowRoot.getElementById("fab-link").href = this.href;
  }

  get href() {
    return this.getAttribute("href") || "#";
  }
}

window.customElements.define(MyUWFabLink.elementName, MyUWFabLink);
