/*
 * File: index.js
 * Project: web-component
 * File Created: Tuesday, 14th May 2019 2:21:36 pm
 * Author: zxtang (1061225829@qq.com)
 * -----
 * Last Modified: Tuesday, 14th May 2019 2:21:36 pm
 * Modified By: zxtang (1061225829@qq.com>)
 * -----
 * Copyright 2017 - 2019 Your Company, Your Company
 */
class MyLifecycle extends HTMLElement {

    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        const div = document.createElement('div');
        const style = document.createElement('style');
        shadow.appendChild(style);
        shadow.appendChild(div);
    }
    
    // 要监听属性的变化，必须通过observedAttributes监听这个属性
    static get observedAttributes() {
        return ['width', 'height'];
    }

    //属性变化的回调函数
    attributeChangedCallback() {
        console.log('attributeChangedCallback')
        udpateStyle(this);
    }

    connectedCallback() {
        console.log('connectedCallback');
        udpateStyle(this);
    }
    
    disconnectedCallback() {
        console.log('distconnectedCallback')
    }
}

customElements.define('my-lifecycle', MyLifecycle);

/**
 * 设置样式
 * @param {*} elem
 */
function udpateStyle(elem) {
    const shadow = elem.shadowRoot;
    const childNodes = shadow.childNodes;
    Array.from(childNodes).forEach(child => {
        if (child.nodeName === 'STYLE') {
            child.textContent = 'div {'
            + "width:" + elem.getAttribute('width') + 'px;'
            + "height:" + elem.getAttribute('height') + 'px;'
            + "background-color:" + elem.getAttribute('color') + ';'
            + '}'
        }
    })
}

function changeAttributes() {
    const node = document.querySelector('my-lifecycle');
    node.setAttribute('width', parseInt(node.getAttribute('width')) + 10);
    node.setAttribute('height', parseInt(node.getAttribute('height')) + 10);
}