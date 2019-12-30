
class PureForm extends HTMLElement{
    constructor() {
        super();

        this.shadow = this.attachShadow({ mode: 'open'});
        this.formBody = this.getAttribute('form-body');
    }

    connectedCallback() {
        this.shadow.innerHTML = 'This is inital form <pf-email></pf-email>';
        console.log(this.formBody);
    }
}

customElements.define('pure-form', PureForm);
