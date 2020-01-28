export class MyUWCardFrame extends HTMLElement {
  static get elementName() {
    return "myuw-card-frame";
  }

  static get template() {
    if (this._template === undefined) {
      this._template = document.createElement("template");
      this._template.innerHTML = `
        <style>
          :host {
            position: relative;
            display: flex;
            flex-direction: column;
            border-radius: var(--my-card-frame-border-radius, 3px);
            font-family: "Roboto", sans-serif;
            color: var(--myuw-card-font-color, #333);
            box-sizing: border-box;
            -webkit-box-direction: normal;
            overflow: hidden;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);
            width: 290px;
            height: 290px;
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
    this.shadowRoot.appendChild(MyUWCardFrame.template.content.cloneNode(true));
  }
}

window.customElements.define(MyUWCardFrame.elementName, MyUWCardFrame);
