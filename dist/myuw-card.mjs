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

class MyUWCardMenu extends HTMLElement {
  static get elementName() {
    return "myuw-card-menu";
  }

  static get template() {
    if (this._template === undefined) {
      this._template = document.createElement("template");
      this._template.innerHTML = `
        <style>
          :host {
            position: absolute;
            top: 5%;
            right: 5%;
            font-size: 14px;
            line-height: 20px;
          }
          a {
            text-decoration: none;
            color: inherit;
          }
          a:hover .row {
            background-color: rgba(158, 158, 158, 0.2);
          }
          button {
            background: none;
            color: inherit;
            border: none;
            padding: 0;
            margin: 0;
            font: inherit;
            cursor: pointer;
            outline: inherit;
            width: 100%;
          }
          button:hover .row {
            background-color: rgba(158, 158, 158, 0.2);
          }
          svg {
            fill: rgba(0, 0, 0, 0.54);
          }
          .menu-icon {
            margin: 1rem;
            flex-shrink: 0;
          }
          .more-icon:hover {
            cursor: pointer;
          }
          #more-menu {
            z-index: 999;
            position: fixed;
            transform: translate(-5%, 5%);
            visibility: hidden;
            background-color: #fff;
            box-shadow: 0 2px 4px -1px rgba(0 ,0 ,0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
            padding-top: 0.5rem;
          }
          #more-menu.open {
            display: block;
            visibility: visible;
            min-width: 256px;
            max-width: 290px;
          }
          #menu-overlay {
            visibility: hidden;
            position: fixed;
            top: 0;
            left: 0;
          }
          #more-menu.open + #menu-overlay {
            width: 100vw;
            height: 100vh;
            opacity: 0;
            z-index: 998;
            visibility: visible;
          }
          .row {
            padding-right: 1rem;
            display: flex;
            align-items: center;
          }
          #title {
            font-weight: bold;
          }
        </style>
        <svg id="more-icon" class="more-icon" width="20" height="20" role="button" tabindex=0 aria-label="more menu button">
          <g transform="scale(0.8)">
            <path aria-label="more menu icon" d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
          </g>
        </svg>
        <div id="more-menu">
          <div class="row">
            <svg class="menu-icon" aria-label="info icon" width="24" height="24">
              <g>
                <path aria-label="info graphic" d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
              </g>
            </svg>
            <div>
              <span id="title"></span>
              <slot></slot>
            </div>
          </div>
          <a id="details" href="#" aria-label="" role="menuitem">
            <div class="row">
              <svg class="menu-icon" aria-label="details icon" width="24" height="24">
                <g>
                  <path aria-label="info graphic" d="M6.38,6H17.63L12,16L6.38,6M3,4L12,20L21,4H3Z" />
                </g>
              </svg>
              <span>Details</span>
            </div>
          </a>
          <button id="remove" aria-label="" role="menuitem">
            <div class="row">
              <svg class="menu-icon" aria-label="remove icon" width="24" height="24">
                <g>
                  <path aria-label="remove graphic" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z" />
                </g>
              </svg>
              <span>Remove from home</span>
            </div>
          </a>
        </div>
        <div id="menu-overlay"></div>
      `;
    }

    return this._template;
  }

  toggleMenu() {
    const menu = this.shadowRoot.getElementById("more-menu");

    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
    } else {
      menu.classList.add("open");
    }
  }
  /**
   * Dispatch a custom `remove-widget` event with the widget's fname
   */


  removeWidgetHandler() {
    const event = new CustomEvent("remove-widget", {
      detail: {
        fname: this.getAttribute("fname")
      }
    });
    this.dispatchEvent(event);
    this.toggleMenu();
  }
  /**
   * Anchor the menu to its right side if it is not fully visibile in the viewport
   * @param {(Event|null)} event
   */


  positionMenu() {
    const menu = this.shadowRoot.getElementById("more-menu");
    const boundingRect = menu.getBoundingClientRect();

    if (boundingRect.right >= window.innerWidth || boundingRect.right >= document.documentElement.clientWidth) {
      menu.style.transform = "translate(-90%, 5%)";
    }
  }

  constructor() {
    super();
    this.attachShadow({
      mode: "open"
    });
    this.shadowRoot.appendChild(MyUWCardMenu.template.content.cloneNode(true));
    this.shadowRoot.getElementById("details").setAttribute("href", this.href);
    const title = this.parentElement.firstChild.textContent.trim();
    this.shadowRoot.getElementById("title").textContent = `${title}: `;
    this.shadowRoot.getElementById("remove").setAttribute("aria-label", `remove ${title} widget from your home screen`);
    this.shadowRoot.getElementById("details").setAttribute("aria-label", `details about ${title}`);
  }

  connectedCallback() {
    this.shadowRoot.getElementById("more-icon").addEventListener("click", () => {
      this.toggleMenu(this);
    });
    this.shadowRoot.getElementById("menu-overlay").addEventListener("click", () => {
      this.toggleMenu(this);
    });
    this.shadowRoot.getElementById("remove").addEventListener("click", () => {
      this.removeWidgetHandler(this);
    }); // Position menu initially and listen to resize events to reposition

    this.positionMenu();
    window.addEventListener("resize", e => this.positionMenu(e));
  }

  get href() {
    const fname = this.getAttribute("fname");
    return fname ? `/web/apps/details/${fname}` : "#";
  }

}
window.customElements.define(MyUWCardMenu.elementName, MyUWCardMenu);

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
          p {
            margin-bottom: 20px;
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

class MyUWFabLink extends HTMLElement {
  static get elementName() {
    return "myuw-fab-link";
  }

  static get template() {
    if (this._template === undefined) {
      this._template = document.createElement("template");
      this._template.innerHTML = `
        <style>
          div {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 100px;
          }
          a {
            border-radius: 50%;
            width: 40px;
            height: 40px;
            background-color: var(--myuw-fab-color, #0479a8);
            margin-bottom: 4px;
          }
          a:hover {
            background-color: var(--myuw-fab-color-hover, #034e6c);
          }
          a:not([disabled]) {
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
          }
          ::slotted(img) {
            width: 24px;
            height: 24px;
            position: relative;
            top: 20%;
            left: 20%;
            filter: invert(1);
            opacity: 0.87;
          }
          ::slotted(p) {
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            margin-top: 0px;
            margin-bottom: 10px;
            padding: 3px 8px;
            text-align: center;
          }
        </style>

        <div>
          <a id="fab-link" href="#" target="_blank" rel="noopener noreferrer">
            <slot name="fab-icon"></slot>
          </a>
          <slot></slot>
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
    this.shadowRoot.append(MyUWFabLink.template.content.cloneNode(true));
    this.shadowRoot.getElementById("fab-link").href = this.href;
  }

  get href() {
    return this.getAttribute("href") || "#";
  }

}
window.customElements.define(MyUWFabLink.elementName, MyUWFabLink);

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

class MyUWLinkList extends HTMLElement {
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
    this.attachShadow({
      mode: "open"
    });
    this.shadowRoot.appendChild(MyUWLinkList.template.content.cloneNode(true));
  }

}
window.customElements.define(MyUWLinkList.elementName, MyUWLinkList);

export { MyUWCardContent, MyUWCardFooter, MyUWCardFrame, MyUWCardHeader, MyUWCardMenu, MyUWCardMessage, MyUWFabLink, MyUWIconLink, MyUWLinkList };
