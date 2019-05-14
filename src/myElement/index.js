/*
 * File: index.js
 * Project: web-component
 * File Created: Monday, 13th May 2019 11:36:24 am
 * Author: zxtang (1061225829@qq.com)
 * -----
 * Last Modified: Monday, 13th May 2019 11:36:24 am
 * Modified By: zxtang (1061225829@qq.com>)
 * -----
 * Copyright 2017 - 2019 Your Company, Your Company
 */

class MyElement extends HTMLElement {
  constructor() {
    super();
    const showRoot = this.attachShadow({mode: 'open'});
    const container = document.createElement('span');
    const text = this.getAttribute('text');
    container.innerHTML = text;
    showRoot.appendChild(container);
  }
}
customElements.define('my-element', MyElement);