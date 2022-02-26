function createMessageBox() {
    const div = document.createElement('div');
    div.classList.add('msg-box');

    div.innerHTML = `
    <span class="msg-box__icon">info</span>
    <span>Hello!</span>
  `;

    return div;
}
export default createMessageBox;