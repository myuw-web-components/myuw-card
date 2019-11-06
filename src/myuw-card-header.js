import tpl from "./myuw-card-header.html";

export class MyUWCardHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(
      MyUWCardHeader.template.content.cloneNode(true)
    );
  }

  static get observedAttributes() {
    return ["title"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "title": {
        const node = this.shadowRoot.getElementById("header-text");
        if (node) {
          node.innerText = newValue;
        }
        break;
      }
    }
  }
}

MyUWCardHeader.template = (src => {
  const template = document.createElement("template");
  template.innerHTML = src;
  return template;
})(tpl);

window.customElements.define("myuw-card-header", MyUWCardHeader);
