export const iconMap = {
  md: {
    styleUrl: "https://fonts.googleapis.com/icon?family=Material+Icons",
    classes: "material-icons md-70",
  },
  fa: {
    styleUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
    classes: "fa fa-70",
  },
};

/**
 * @param {string} iconType
 * @param {string|undefined} icon
 * @returns HTMLElement
 */
export function createIconElement(iconType, icon = undefined) {
  const node = document.createElement("i");
  switch (iconType) {
    case "md": {
      node.setAttribute("class", iconMap.md.classes);
      node.innerText = icon;
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
  const node = document.createElement("link");
  node.setAttribute("rel", "stylesheet");
  node.setAttribute("href", iconMap[iconType].styleUrl);
  return node;
}
