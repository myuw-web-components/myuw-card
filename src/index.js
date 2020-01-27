import { MyUWCardFooter } from "./myuw-card-footer";
import { MyUWCardHeader } from "./myuw-card-header";
import { MyUWCardFrame } from "./myuw-card-frame";
import { MyUWCardMessage } from "./content/myuw-card-message";
import { MyUWIconLink } from "./content/myuw-icon-link";

export {
  MyUWCardFooter,
  MyUWCardHeader,
  MyUWCardFrame,
  MyUWCardMessage,
  MyUWIconLink,
};

// Include Font Awesome Icons
(function () {
  var fontAwesomeInclude=document.createElement('link');
  fontAwesomeInclude.href='https://use.fontawesome.com/releases/v5.12.0/css/all.css';
  fontAwesomeInclude.rel='stylesheet';
  document.getElementsByTagName('head')[0].appendChild(fontAwesomeInclude);
})();

// Include Material Icons
(function () {
  var matIconsInclude=document.createElement('link');
  matIconsInclude.href='https://fonts.googleapis.com/icon?family=Material+Icons';
  matIconsInclude.rel='stylesheet';
  document.getElementsByTagName('head')[0].appendChild(matIconsInclude);
})();
