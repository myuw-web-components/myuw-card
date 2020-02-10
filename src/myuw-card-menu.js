export class MyUWCardMenu extends HTMLElement {
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
        fname: this.getAttribute("fname"),
      },
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
    if (
      boundingRect.right >= window.innerWidth ||
      boundingRect.right >= document.documentElement.clientWidth
    ) {
      menu.style.transform = "translate(-90%, 5%)";
    }
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(MyUWCardMenu.template.content.cloneNode(true));
    this.shadowRoot.getElementById("details").setAttribute("href", this.href);

    const title = this.parentElement.firstChild.textContent.trim();
    this.shadowRoot.getElementById("title").textContent = `${title}: `;

    this.shadowRoot
      .getElementById("remove")
      .setAttribute(
        "aria-label",
        `remove ${title} widget from your home screen`
      );
    this.shadowRoot
      .getElementById("details")
      .setAttribute("aria-label", `details about ${title}`);
  }

  connectedCallback() {
    this.shadowRoot
      .getElementById("more-icon")
      .addEventListener("click", () => {
        this.toggleMenu(this);
      });
    this.shadowRoot
      .getElementById("menu-overlay")
      .addEventListener("click", () => {
        this.toggleMenu(this);
      });
    this.shadowRoot.getElementById("remove").addEventListener("click", () => {
      this.removeWidgetHandler(this);
    });
    // Position menu initially and listen to resize events to reposition
    this.positionMenu();
    window.addEventListener("resize", e => this.positionMenu(e));
  }

  get href() {
    const fname = this.getAttribute("fname");
    return fname ? `/web/apps/details/${fname}` : "#";
  }
}

window.customElements.define(MyUWCardMenu.elementName, MyUWCardMenu);
