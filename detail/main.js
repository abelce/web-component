
class CustomeFieldset extends HTMLElement {
    constructor() {
        super();
        const template = document.getElementById('custome-fieldset')
        const templateContent = template.content;

        const shadowRoot = this.attachShadow({'mode': 'open'})
        .appendChild(templateContent.cloneNode(true))
    }
}

customElements.define("custome-fieldset", CustomeFieldset)
