import Home from './components/Home';
export const App = ({target}) => {
    this.route = () =>{
        const {pathname} = location;
    }
    if(pathname === '/'){
        new Home({target}).render();
    }
}
export default App;