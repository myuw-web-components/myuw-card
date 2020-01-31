export class MyUWCardHeader extends HTMLElement {
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
        <svg class="more-icon" width="20" height="20" role="button" tabindex=0 aria-label="more menu button">
          <g transform="scale(0.8)">
            <path  aria-label="more menu icon" d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
          </g>
        </svg>
      `;
    }
    return this._template;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(
      MyUWCardHeader.template.content.cloneNode(true)
    );
  }
}

window.customElements.define(MyUWCardHeader.elementName, MyUWCardHeader);
