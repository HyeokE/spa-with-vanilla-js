const router = () => {
    const routes = [
        {path: '/', view: () => console.log('home')},
        {path: '/introduce', view: () => console.log('introduce')},
        {path: '/faq', view: () => console.log('faq')},
    ];
    const pageCheck = routes.map((route) => {
        return {
            route: route,
            isMatch: route.path === location.pathname
        }
    });
    const matches = pageCheck.filter((page) => page.isMatch);
    if(matches.length < 1) {
        document.querySelector('#app').innerHTML = '<h1>404</h1>';
    }
    console.log(...matches.route);
}
router();

console.log(location.pathname)
