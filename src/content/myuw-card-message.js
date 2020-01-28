export class MyUWCardMessage extends HTMLElement {
  static get elementName() {
    return "myuw-card-message";
  }

  static get template() {
    if (this._template === undefined) {
      this._template = document.createElement("template");
      this._template.innerHTML = `
        <style>
          :host {
            font-weight: lighter;
            font-size: 14px;
            text-align: center;
          }
          .warn {
            color: #c5050c;
          }
        </style>
        <p id="message"><slot></slot></p>
      `;
    }
    return this._template;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(
      MyUWCardMessage.template.content.cloneNode(true)
    );
    const node = this.shadowRoot.getElementById("message");
    node.className = this.variant;
  }

  get variant() {
    return this.getAttribute("variant") || "";
  }
}

window.customElements.define(MyUWCardMessage.elementName, MyUWCardMessage);
