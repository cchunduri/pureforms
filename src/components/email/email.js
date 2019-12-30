import {emailTemplate} from "./email.template";

class Email extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.shadow.innerHTML = emailTemplate;
    }
}

customElements.define('pf-email', Email);