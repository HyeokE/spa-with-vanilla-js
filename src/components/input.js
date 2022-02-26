class Input extends HTMLElement{
    constructor() {
        super();
    }
    connectedCallback(){
     this.innerHTML = `<input/>`;
    }
    disconnectedCallback(){
        this.innerHTML = ``;
    }
}
customElements.define('styled-input', Input);