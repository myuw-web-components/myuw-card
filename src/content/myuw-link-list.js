export class MyUWLinkList extends HTMLElement {
  static get elementName() {
    return "myuw-link-list";
  }

  static get template() {
    if (this._template === undefined) {
      this._template = document.createElement("template");
      this._template.innerHTML = `
        <style>
          :host {
            display: flex;
            flex: 1;
            justify-content: space-evenly;
            align-items: flex-start;
          }
          ::slotted(myuw-fab-link) {
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
    this.shadowRoot.appendChild(MyUWLinkList.template.content.cloneNode(true));
  }
}

window.customElements.define(MyUWLinkList.elementName, MyUWLinkList);
