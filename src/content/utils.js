export const iconMap={
  md: {
    styleUrl: "https://fonts.googleapis.com/icon?family=Material+Icons",
    classes: "material-icons md-70",
  },
  fa: {
    styleUrl:
      "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
    classes: "fa-70"
  },
};

/**
 * @param {string} iconType
 * @param {string|undefined} icon
 * @returns HTMLElement
 */
export function createIconElement(iconType, icon=undefined) {
  const node=document.createElement("i");
  switch (iconType) {
    case "md": {
      node.setAttribute("class", iconMap.md.classes);
      node.innerText=icon;
      break;
    }
    case "fa": {
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
export function createStyleElement(iconType) {
  const node=document.createElement("link");
  node.setAttribute("rel", "stylesheet");
  node.setAttribute("href", iconMap[iconType].styleUrl);
  return node;
}
