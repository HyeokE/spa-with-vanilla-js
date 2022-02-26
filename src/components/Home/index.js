export  const Home = ({target})=>
{
    const page = document.createElement('div');
    page.className = 'Home';
    page.innerHTML = `
        <h1>Home</h1>
        <p>This is the home page</p>
        <p>${target}</p>
        `;
    this.render = () => {
        target.appendChild(page);
    }
}
export default Home;