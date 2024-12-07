import { InputSearch } from "./component/input/input_search/element.js";
import { NotificationElement } from "./component/notification/element.js";
import { HeaderElement,SecondHeaderElement } from "./component/header/element.js";
import { Sidebar } from "./component/sidebar/element.js";
import { LayoutPrincipal } from "./layout/principale_layout/element.js";
import {Boardlist} from  "./component/board-list/element.js"; 
import {Taskcard} from "./component/card/element.js";
import { TaskModal } from "./component/modal/first.js";
import { CreateprojectModal } from "./component/modal/createproject.js";
import { SecondModalTask } from "./component/modal/second.js";
import { Timepicker } from "./component/modal/timepicker.js";
import { Datepicker } from "./component/modal/datepicker.js";

await window.customElements.define('time-picker',Timepicker);
await window.customElements.define('date-picker',Datepicker)
await window.customElements.define('secondheader-element',SecondHeaderElement);
await window.customElements.define('header-element',HeaderElement);
await window.customElements.define('input-search',InputSearch);
await window.customElements.define('bord-list',Boardlist );
await window.customElements.define('task-card',Taskcard);
await window.customElements.define('notification-element',NotificationElement);
await window.customElements.define('side-bar',Sidebar)
await window.customElements.define('create-project', CreateprojectModal)
await window.customElements.define('tasksecond-modal',SecondModalTask)
await window.customElements.define('task-modal',TaskModal);
await window.customElements.define('layout-principale',LayoutPrincipal);
