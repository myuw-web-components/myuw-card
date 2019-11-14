export class MyUWCardFrame extends HTMLElement {
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
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(MyUWCardFrame.template.content.cloneNode(true));
  }

  get size() {
    return this.getAttribute("size") || "full";
  }
}

window.customElements.define(MyUWCardFrame.elementName, MyUWCardFrame);
