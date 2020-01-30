class MyUWCardContent extends HTMLElement {
  static get elementName() {
    return "myuw-card-content";
  }

  static get template() {
    if (this._template === undefined) {
      this._template = document.createElement("template");
      this._template.innerHTML = `
        <style>
          :host {
            display: flex;
            flex-direction: column;
            flex: 1;
            background-color: white;
            width: 100%;
          }
        </style>
        <slot></slot>
      `;
    }

    return this._template;
  }

  constructor() {
    super();
    this.attachShadow({
      mode: "open"
    });
    this.shadowRoot.appendChild(MyUWCardContent.template.content.cloneNode(true));
  }

}
window.customElements.define(MyUWCardContent.elementName, MyUWCardContent);

class MyUWCardFooter extends HTMLElement {
  static get elementName() {
    return "myuw-card-footer";
  }

  static get template() {
    if (this._template === undefined) {
      this._template = document.createElement("template");
      this._template.innerHTML = `
        <style>
          :host {
            width: 100%;
            height: 36px;
            position: relative;
            font-size: 14px;
          }
          a {
            color: #696969;
            text-decoration: none;
            font-family: "Roboto", sans-serif;
            font-family: var(--myuw-app-bar-font);
            font-weight: 400;
          }
          div {
            transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
            background-color: #d8d8d8;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
          }
          div:hover {
            background-color: var(--myuw-primary-bg, #c5050c);
            color: var(--myuw-primary-color, #fafafa);
          }
        </style>

        <a id="footer-button" href="#">
          <div>
            <slot></slot>
          </div>
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
    this.shadowRoot.appendChild(MyUWCardFooter.template.content.cloneNode(true));
    this.shadowRoot.getElementById("footer-button").href = this.href;
  }

  get href() {
    return this.getAttribute("href") || "#";
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
          :host {
            background-color: white;
            width: 100%;
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--myuw-car-font-color, #333);
            font-weight: 200;
          }
          .more-icon {
            position: absolute;
            top: 5%;
            right: 5%;
            fill: rgba(0, 0, 0, 0.54);
          }
        </style>

        <slot></slot>
        <svg class="more-icon" width="20" height="20">
          <g transform="scale(0.8)">
              <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
          </g>
        </svg>
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
    this.attachShadow({
      mode: "open"
    });
    this.shadowRoot.appendChild(MyUWCardFrame.template.content.cloneNode(true));
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
    this.attachShadow({
      mode: "open"
    });
    this.shadowRoot.appendChild(MyUWCardMessage.template.content.cloneNode(true));
    const node = this.shadowRoot.getElementById("message");
    node.className = this.variant;
  }

  get variant() {
    return this.getAttribute("variant") || "";
  }

}
window.customElements.define(MyUWCardMessage.elementName, MyUWCardMessage);

class MyUWIconLink extends HTMLElement {
  static get elementName() {
    return "myuw-icon-link";
  }

  static get template() {
    if (this._template === undefined) {
      this._template = document.createElement("template");
      this._template.innerHTML = `
        <style>
          :host {
            flex: 1;
            display: flex;
            flex-direction: column;
            max-height: 100%;
            justify-content: center;
            align-items: center;
          }
          a {
            display: flex;
            flex: 1;
            width: 100%;
            text-decoration: none;
            color: #333;
          }
          #container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-grow: 1;
          }
          ::slotted(img) {
            position: relative;
            top: -10%;
            width: 70px;
            height: 70px;
          }
        </style>

        <a id="link" href="#" target="_blank" rel="noopener noreferrer">
          <div id="container">
            <slot></slot>
          </div>
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
    this.shadowRoot.getElementById("link").href = this.href;
  }

  get href() {
    return this.getAttribute("href") || "#";
  }

}
window.customElements.define(MyUWIconLink.elementName, MyUWIconLink);

export { MyUWCardContent, MyUWCardFooter, MyUWCardFrame, MyUWCardHeader, MyUWCardMessage, MyUWIconLink };
