
class PureForm extends HTMLElement{
    constructor() {
        super();

        this.shadow = this.attachShadow({ mode: 'open'});
    }

    connectedCallback() {
        this.shadow.innerHTML = 'This is inital form';
    }
}

customElements.define('pure-form', PureForm);
