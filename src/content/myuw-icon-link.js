import tpl from "./myuw-icon-link.html";
import { createStyleElement, createIconElement, iconMap } from "./utils";

export class MyUWIconLink extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(MyUWIconLink.template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ["icon", "icon-type", "href"];
  }

  get icon() {
    return this.getAttribute("icon") || undefined;
  }

  get iconType() {
    return this.getAttribute("icon-type") || undefined;
  }

  get href() {
    return this.getAttribute("href") || undefined;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "icon-type": {
        const iconType = newValue;
        if (Object.keys(iconMap).includes(iconType)) {
          this.shadowRoot.appendChild(createStyleElement(iconType));
          const node = createIconElement(iconType, this.icon);
          this.shadowRoot.getElementById("container").appendChild(node);
        }
        break;
      }
      case "icon": {
        const node = this.shadowRoot.getElementById("icon");
        if (node) {
          node.innerText = newValue;
        }
        break;
      }
      case "href": {
        const node = this.shadowRoot.getElementById("link");
        if (node) {
          node.setAttribute("href", newValue);
        }
        break;
      }
    }
  }
}

MyUWIconLink.template = (src => {
  const template = document.createElement("template");
  template.innerHTML = src;
  return template;
})(tpl);

window.customElements.define("myuw-icon-link", MyUWIconLink);
