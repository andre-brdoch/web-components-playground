import { Component } from '../Component.js';

export class IconChevron extends Component {
  constructor() {
    super();
  }

  template({ title, content }) {
    return `
<svg class="chevron" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"></path>
</svg>
    `;
  }

  css() {
    return `

`;
  }
}
