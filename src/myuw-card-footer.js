import tpl from "./myuw-card-footer.html";

export class MyUWCardFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(
      MyUWCardFooter.template.content.cloneNode(true)
    );
  }

  static get observedAttributes() {
    return ["href", "text"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "href": {
        const node = this.shadowRoot.getElementById("footer-button");
        if (node) {
          node.setAttribute("href", newValue);
        }
        break;
      }
      case "text": {
        const container = this.shadowRoot.getElementById("footer-text");
        if (container) {
          container.innerText = newValue;
        }
        break;
      }
    }
  }
}

MyUWCardFooter.template = (src => {
  const template = document.createElement("template");
  template.innerHTML = src;
  return template;
})(tpl);

window.customElements.define("myuw-card-footer", MyUWCardFooter);
