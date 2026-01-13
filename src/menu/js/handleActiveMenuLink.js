export default function handleActiveMenuLink() {
    //Active Page
    function normalizePath(path) {
        return path.endsWith('/') ? path.slice(0, -1) : path;
    }
  
    document.querySelectorAll('.menu-desktop a').forEach(link => {
        const linkPath = normalizePath(link.pathname);
        const currentPath = normalizePath(window.location.pathname);

        console.log('linkPath', linkPath);
        console.log('currentPath', currentPath);
    
        if (
            linkPath === currentPath || 
            '/en' + linkPath === currentPath  //Check for language prefix
        ) {
        link.classList.add('active');
        }
    });
}

