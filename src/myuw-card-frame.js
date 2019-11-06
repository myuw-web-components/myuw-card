import tpl from "./myuw-card-frame.html";

export class MyUWCardFrame extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(MyUWCardFrame.template.content.cloneNode(true));
  }

  get size() {
    return this.getAttribute("size") || "full";
  }
}

MyUWCardFrame.template = (src => {
  const template = document.createElement("template");
  template.innerHTML = src;
  return template;
})(tpl);

window.customElements.define("myuw-card-frame", MyUWCardFrame);
