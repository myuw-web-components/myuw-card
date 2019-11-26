class MyUWCardFooter extends HTMLElement {
  static get elementName() {
    return "myuw-card-footer";
  }

  static get template() {
    if (this._template === undefined) {
      this._template = document.createElement("template");
      this._template.innerHTML = `
        <style>
          #footer-button {
            font-weight: 300;
            position: absolute;
            bottom: 0;
            margin: 0;
            color: var(--myuw-footer-text, #696969);
            background: var(--myuw-footer-background, #d8d8d8);
            width: 100%;
            padding: 8px 0;
            text-align: center;
            font-size: 14px;
            transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
            text-decoration: none;
          }
          #footer-button:hover {
            background: var(--myuw-footer-background-hover, var(--myuw-primary-bg, #c5050c));
            color: var(--myuw-footer-text-hover, #f5f5f5)
          }
          .container {
            height: 60px;
          }
        </style>
        <div class="container">
          <a href="#" id="footer-button" target="_blank" rel="noopener noreferrer">
            <div>
              <span id="footer-text"></span>
            </div>
          </a>
        </div>
      `;
    }

    return this._template;
  }

  constructor() {
    super();
    this.attachShadow({
      mode: "open"
    });
    this.shadowRoot.appendChild(MyUWCardFooter.template.content.cloneNode(true));
    this.shadowRoot.getElementById("footer-button").href = this.href;
    this.shadowRoot.getElementById("footer-text").innerText = this.text;
  }

  get href() {
    return this.getAttribute("href") || "#";
  }

  get text() {
    return this.getAttribute("text") || "";
  }

}
window.customElements.define(MyUWCardFooter.elementName, MyUWCardFooter);

class MyUWCardHeader extends HTMLElement {
  static get elementName() {
    return "myuw-card-header";
  }

  static get template() {
    if (this._template === undefined) {
      this._template = document.createElement("template");
      this._template.innerHTML = `
        <style>
          #myuw-card-header {
            display: flex;
            flex-direction: row;
            font-weight: 300;
            height: 60px;
            width: 290px;
            line-height: 1.1;
            align-items: center;
            padding: 0 40px;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            box-sizing: border-box;
            position: absolute;
            overflow-x: hidden;
          }
          #header-text {
            margin: 0 auto;
          }
          #more-icon {
            position: absolute;
            top: 0;
            right: 0;
            margin: 15px 15px;
          }
          path {
            fill: var(--icon-fill-color, #696969);
          }
        </style>
        <div>
          <div id="myuw-card-header">
            <span id="header-text"></span>
          </div>
          <svg id="more-icon" width="20" height="20">
            <g transform="scale(0.8)">
              <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
            </g>
          </svg>
        <div>
      `;
    }

    return this._template;
  }

  constructor() {
    super();
    this.attachShadow({
      mode: "open"
    });
    this.shadowRoot.appendChild(MyUWCardHeader.template.content.cloneNode(true));
    this.shadowRoot.getElementById("header-text").innerText = this.title;
  }

  get title() {
    return this.getAttribute("title") || "";
  }

}
window.customElements.define(MyUWCardHeader.elementName, MyUWCardHeader);

class MyUWCardFrame extends HTMLElement {
  static get elementName() {
    return "myuw-card-frame";
  }

  static get template() {
    if (this._template === undefined) {
      this._template = document.createElement("template");
      this._template.innerHTML = `
        <style>
          .myuw-card-frame {
            display: flex;
            flex-direction: column;
            position: relative;
            background: var(--myuw-card-background, #f5f5f5);
            border-radius: var(--myuw-card-frame-border-radius, 3px);
            font-family: 'Roboto', sans-serif;
            color: var(--myuw-card-font-color, #333);
            height: 290px;
            width: 290px;
            box-sizing: border-box;
            -webkit-box-direction: normal;
            overflow: hidden;
            box-shadow: 0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);
          }
          .card-content {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            height: 100%;
            position: absolute;
            padding: 60px 16px;
            box-sizing: border-box;
          }
        </style>
        <div class="myuw-card-frame">
          <slot name="myuw-card-header"></slot>
          <div class="card-content">
            <slot></slot>
          </div>
          <slot name="myuw-card-footer"></slot>
        </div>
      `;
    }

    return this._template;
  }

  constructor() {
    super();
    this.attachShadow({
      mode: "open"
    });
    this.shadowRoot.appendChild(MyUWCardFrame.template.content.cloneNode(true));
  }

  get size() {
    return this.getAttribute("size") || "full";
  }

}
window.customElements.define(MyUWCardFrame.elementName, MyUWCardFrame);

class MyUWCardMessage extends HTMLElement {
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
    this.attachShadow({
      mode: "open"
    });
    this.shadowRoot.appendChild(MyUWCardMessage.template.content.cloneNode(true));
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

const iconMap = {
  md: {
    styleUrl: "https://fonts.googleapis.com/icon?family=Material+Icons",
    classes: "material-icons md-70"
  },
  fa: {
    styleUrl: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
    classes: "fa fa-70"
  }
};
/**
 * @param {string} iconType
 * @param {string|undefined} icon
 * @returns HTMLElement
 */

function createIconElement(iconType, icon = undefined) {
  const node = document.createElement("i");

  switch (iconType) {
    case "md":
      {
        node.setAttribute("class", iconMap.md.classes);
        node.innerText = icon;
        break;
      }

    case "fa":
      {
        node.setAttribute("class", `${iconMap.fa.classes} ${icon}`);
        break;
      }
  }

  node.setAttribute("id", "icon");
  return node;
}
/**
 * @param {string} iconType
 * @returns HTMLElement
 */

function createStyleElement(iconType) {
  const node = document.createElement("link");
  node.setAttribute("rel", "stylesheet");
  node.setAttribute("href", iconMap[iconType].styleUrl);
  return node;
}

class MyUWIconLink extends HTMLElement {
  static get elementName() {
    return "myuw-icon-link";
  }

  static get template() {
    if (this._template === undefined) {
      this._template = document.createElement("template");
      this._template.innerHTML = `
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
          .material-icons.md-70, .fa.fa-70 {
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
    this.attachShadow({
      mode: "open"
    });
    this.shadowRoot.appendChild(MyUWIconLink.template.content.cloneNode(true));
    this.shadowRoot.appendChild(createStyleElement(this.iconType));
    this.shadowRoot.getElementById("container").appendChild(createIconElement(this.iconType, this.icon));
    this.shadowRoot.getElementById("link").href = this.href;
  }

  get icon() {
    return this.getAttribute("icon") || "";
  }

  get iconType() {
    return this.getAttribute("icon-type") || "";
  }

  get href() {
    return this.getAttribute("href") || "#";
  }

}
window.customElements.define(MyUWIconLink.elementName, MyUWIconLink);

export { MyUWCardFooter, MyUWCardFrame, MyUWCardHeader, MyUWCardMessage, MyUWIconLink };
