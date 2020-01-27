import { createStyleElement, createIconElement } from "./utils";

export class MyUWIconLink extends HTMLElement {
  static get elementName() {
    return "myuw-icon-link";
  }

  static get template() {
    if (this._template===undefined) {
      this._template=document.createElement("template");
      this._template.innerHTML=`
        <style>
          a {
            text-decoration: none;
            color: #333;
          }
          #container {
            display: flex;
            flex-grow: 1;
            justify-content: center;
            align-items: center;
            overflow: hidden;
          }
          .material-icons {
            font-family: "Material Icons" !important;
          }
          .material-icons.md-70, .fa-70 {
            font-size: 70px;
          }
        </style>

        <a id="link" href="#" target="_blank" rel="noopener noreferrer">
          <div id="container"></div>
        </a>
      `;
    }
    return this._template;
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(MyUWIconLink.template.content.cloneNode(true));
    this.shadowRoot.appendChild(createStyleElement(this.iconType));
    this.shadowRoot
      .getElementById("container")
      .appendChild(createIconElement(this.iconType, this.icon));
    this.shadowRoot.getElementById("link").href=this.href;
  }

  get icon() {
    return this.getAttribute("icon")||"";
  }

  get iconType() {
    return this.getAttribute("icon-type")||"";
  }

  get href() {
    return this.getAttribute("href")||"#";
  }
}

window.customElements.define(MyUWIconLink.elementName, MyUWIconLink);
