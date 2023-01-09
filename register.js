import { AppComponent } from './components/AppComponent.js';
import { AccordionList } from './components/AccordionList.js';
import { AccordionItem } from './components/AccordionItem.js';
import { IconChevron } from './components/IconChevron.js';
import { IconCode } from './components/IconCode.js';
import { IconSubDirectory } from './components/IconSubDirectory.js';
import { IconComponent } from './components/IconComponent.js';
import { IconHtml } from './components/IconHtml.js';
import { IconShadow } from './components/IconShadow.js';

customElements.define('app-component', AppComponent);
customElements.define('accordion-list', AccordionList);
customElements.define('accordion-item', AccordionItem);
customElements.define('icon-chevron', IconChevron);
customElements.define('icon-code', IconCode);
customElements.define('icon-component', IconComponent);
customElements.define('icon-html', IconHtml);
customElements.define('icon-shadow', IconShadow);
customElements.define('icon-sub-directory', IconSubDirectory);
