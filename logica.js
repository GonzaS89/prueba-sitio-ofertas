const pollerias = 
[
    {
        'nombrelocal' : 'polleria 1',
        'rubro' : 'polleria',
        'domicilio' : 'B° La Cancha',
        'cadeteria' : false,
        'ofertas': 
        {
            'nombreOferta' : '2 kilos de suprema',
            'precio' : 3800
        }
    },

    {
        'nombrelocal' : 'polleria 2',
        'rubro' : 'polleria',
        'domicilio' : 'B° Tres Luces',
        'cadeteria' : true,
        'ofertas': 
        {
            'nombreOferta' : '2 kilos de Suprema',
            'precio' : 4000
        }
    }
]



let nombreOferta = document.querySelector('.nombre-oferta');
let precioOferta = document.querySelector('.precio-oferta');
let nombreLocal = document.querySelector('.nombre-local');
let domicilioLocal = document.querySelector('.domicilio-local');
let serviciodecadeteria = document.querySelector('.serviciodecadeteria');

const contenedorListaOfertas = document.querySelector('.contenedor-listaofertas')

const contruirGlobitoOferta = ()=> {
    const contenedorOferta = document.createElement('DIV');
    contenedorListaOfertas.classList.add('contenedor-oferta');
   

}

pollerias.forEach(element => {
    nombreOferta.innerHTML = element.ofertas.nombreOferta
    precioOferta.innerHTML = `$ ${element.ofertas.precio}`
    nombreLocal.innerHTML = `Podes conseguir ésto y más en ${element.nombrelocal}`
    domicilioLocal.innerHTML = `Situado en ${element.domicilio}`
    if(element.cadeteria){serviciodecadeteria.innerHTML = '(Cuenta con servicio de cadeteria)'}
    else{'(No cuenta con servicio de cadeteria)'}

})

pollerias.forEach(elemento => {
    console.log(elemento)
})

