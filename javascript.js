const routes = {
    "/home": "/pages/home.html",
    "/universo": "/pages/universo.html",
    "/exploracao": "/pagina1/exploracao.html",
}

//funcao para alterer comportamento padrao do evento de redirecionamento.
function route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    handle()
}

function handle() {
    const { pathname } = window.location
    const route = routes[pathname] 

    fetch(route)
    .then(data => data.text())
    .then(html =>{
        document.querySelector('#app').innerHTML = html
    })
        

   

    console.log(route)
   
}

