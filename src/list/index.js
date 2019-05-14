/*
 * File: index.js
 * Project: web-component
 * File Created: Tuesday, 14th May 2019 12:52:10 pm
 * Author: zxtang (1061225829@qq.com)
 * -----
 * Last Modified: Tuesday, 14th May 2019 12:52:10 pm
 * Modified By: zxtang (1061225829@qq.com>)
 * -----
 * Copyright 2017 - 2019 Your Company, Your Company
 */

 class MyList extends HTMLUListElement {
    constructor() {
        super();
        const lis = document.querySelectorAll(':root li');
        Array.from(lis).forEach(li => {
            li.textContent = `你好, ${li.textContent}`;
        });
    }
 }
 customElements.define('my-list', MyList, {extends:'ul'});
