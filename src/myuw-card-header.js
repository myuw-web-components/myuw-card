export class MyUWCardHeader extends HTMLElement {
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
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(
      MyUWCardHeader.template.content.cloneNode(true)
    );
    this.shadowRoot.getElementById("header-text").innerText = this.title;
  }

  get title() {
    return this.getAttribute("title") || "";
  }
}

window.customElements.define(MyUWCardHeader.elementName, MyUWCardHeader);
