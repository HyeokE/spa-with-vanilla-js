class StyledButton extends HTMLElement {
    constructor(text) {
        super();
        this.text = text;
    }
    connectedCallback() {
        this.innerHTML=`<button>${this.text}</button>`
    }
}
customElements.define('styled-button', StyledButton);