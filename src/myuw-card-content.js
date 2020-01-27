export class MyUWCardContent extends HTMLElement {
  static get elementName() {
    return "myuw-card-content";
  }

  static get template() {
    if (this._template === undefined) {
      this._template = document.createElement("template");
      this._template.innerHTML = `
        <style>
          :host {
            display: flex;
            flex-direction: column;
            flex: 1;
            background-color: white;
            width: 100%;
          }
        </style>
        <slot></slot>
      `;
    }

    return this._template;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(
      MyUWCardContent.template.content.cloneNode(true)
    );
  }
}

window.customElements.define(MyUWCardContent.elementName, MyUWCardContent);
