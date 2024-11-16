import { InputSearch } from "./component/input/input_search/element.js";
import { NotificationElement } from "./component/notification/element.js";
import { HeaderElement,SecondHeaderElement } from "./component/header/element.js";
import { Sidebar } from "./component/sidebar/element.js";
import { LayoutPrincipal } from "./layout/principale_layout/element.js";


window.customElements.define('layout-principale',LayoutPrincipal);
window.customElements.define('secondheader-element',SecondHeaderElement);
window.customElements.define('header-element',HeaderElement);
window.customElements.define('input-search',InputSearch);
window.customElements.define('notification-element',NotificationElement);
window.customElements.define('side-bar',Sidebar)