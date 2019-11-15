export class MyUWCardMessage extends HTMLElement {
  static get elementName() {
    return "myuw-card-message";
  }

  static get template() {
    if (this._template === undefined) {
      this._template = document.createElement("template");
      this._template.innerHTML = `
        <style>
          #message {
            font-weight: lighter;
            font-size: 14px;
          }
          .warn {
            color: #c5050c;
          }
        </style>
        <p id="message"></p>
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
    node.innerText = this.message;
    node.className = this.variant;
  }

  get message() {
    return this.getAttribute("message") || "";
  }

  get variant() {
    return this.getAttribute("variant") || "";
  }
}

window.customElements.define(MyUWCardMessage.elementName, MyUWCardMessage);
