import { InputSearch } from "./component/input/input_search/element.js";
import { NotificationElement } from "./component/notification/element.js";
import { HeaderElement,SecondHeaderElement } from "./component/header/element.js";
import { Sidebar } from "./component/sidebar/element.js";
import { LayoutPrincipal } from "./layout/principale_layout/element.js";
import {Boardlist} from  "./component/board-list/element.js"; 
import {Taskcard} from "./component/card/element.js";
import { TaskModal } from "./component/modal/first.js";
import { SecondModalTask } from "./component/modal/second.js";
import { Timepicker } from "./component/modal/timepicker.js";
import { Datepicker } from "./component/modal/datepicker.js";

window.customElements.define('time-picker',Timepicker);
window.customElements.define('date-picker',Datepicker)
window.customElements.define('secondheader-element',SecondHeaderElement);
window.customElements.define('header-element',HeaderElement);
window.customElements.define('input-search',InputSearch);
window.customElements.define('bord-list',Boardlist );
window.customElements.define('task-card',Taskcard);
window.customElements.define('notification-element',NotificationElement);
window.customElements.define('side-bar',Sidebar)
window.customElements.define('tasksecond-modal',SecondModalTask)
window.customElements.define('task-modal',TaskModal);
window.customElements.define('layout-principale',LayoutPrincipal);
