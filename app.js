const artistas = [
    {
        nombre: 'Mana',
        banda: 'Mana',
        genero: 'Rock',
        ultimoLanzamiento: '2007-11-27',
        album: 'Revolucion de Amor',
        imagen:'https://i.postimg.cc/YCmg5f0q/Justicia-Tierra-Y-Libertad-Dance-Remix-Single-cover.jpg',
        descripcion: 'Conjunto musical mexicano, formado en la ciudad de Guadalajara, e integrado originariamente por Fher (Fernando Olvera), Juan Diego Calleros, Ulises Calleros y Abraham, un grupo amigos que se entusiasmaron por el rock a principios de los años setenta. Hacia 1976 habían creado un grupo llamado The green hat spies, con el que tocaban en fiestas y cumpleaños. En esta situación estuvieron hasta 1981, en que, fichados por Ariola, adoptaron el nombre de Sombrero verde y grabaron su primer disco.',
        img_descripcion: 'https://i.postimg.cc/m2Drtpjw/mana.webp'

        
    },
    {   
        nombre: 'Estopa',
        banda: 'Estopa',
        genero: 'Pop',
        ultimoLanzamiento: '2019-04-26',
        album: 'MTV Unplugged',
        imagen: 'https://i.postimg.cc/7YzYVxH5/estopa.webp',
        descripcion:'Es un dúo musical originario de Cornellá de Llobregat, Barcelona, España, que incursionó en la industria musical con géneros como el pop, flamenco, rock y rumba. Esta dupla nació en octubre de 1999 y se encuentra conformada por José Manuel Muñoz, quien se encargó de la guitarra, además asumió la vocalización junto a su hermano David Muñoz.',
        img_descripcion:'https://i.postimg.cc/9F4SjfMV/estopa2.webp'
    },

    {
        nombre: 'Los Redondos',
        banda: 'los Redondos',
        genero: 'Rock Nacional',
        ultimoLanzamiento: '2017-10-27',
        album: 'Random',
        imagen: 'https://i.postimg.cc/mDVVKfTM/losredondos.webp',
        descripcion:'Patricio Rey y sus Redonditos de Ricota, también conocidos como Los Redondos, fue un grupo musical de Argentina formado en La Plata en el año 1976 e integrado, en su mayor parte, por el Indio Solari (voz y composición), Skay Beilinson (guitarra y composición), Semilla Bucciarelli (bajo), Walter Sidotti (batería) y Sergio Dawi (saxofón, armónica y piano). Es considerado uno de las grupos más importantes e influyentes de la historia de la música de Argentina.',
        img_descripcion: 'https://i.postimg.cc/mDVVKfTM/losredondos.webp'
    },
    {
        nombre: 'David Bisbal',
        banda: 'Solista',
        genero: 'Pop',
        ultimoLanzamiento: '1970-12-01',
        album: 'Almendra',
        imagen: 'https://i.postimg.cc/zBMHy0j6/bisbal.webp',
        descripcion:'David Bisbal Ferre, o sencillamente David Bisbal, como se le llama en el medio musical, es un cantante, compositor y actor español. Nació el 5 de junio de 1979 en Almería, España. Se dio a conocer después de participar en la primera edición de un concurso de talentos musicales, transmitido por la televisión española, con el nombre de Operación Triunfo, donde quedó de segundo entre los finalistas.',
        img_descripcion:'https://i.postimg.cc/rmVVh4qq/davidbisbal2.webp'
    },
    {
        nombre: 'Aeromisth',
        banda: 'Solista',
        genero: 'Internacional',
        ultimoLanzamiento: '1995-11-07',
        album: 'Sueño Stereo',
        imagen: 'https://i.postimg.cc/rpwj6ywJ/aeromismith.webp',
        descripcion:'Aerosmith es una banda estadounidense de hard rock formada en el año 1970. Aunque sus principios fueron duros al ser descritos a menudo como una floja imitación de los Rolling Stones, con el tiempo y una serie de respetables álbumes demostraron ser uno de los mejores grupos del género, avalados por los más de 200 millones de copias vendidas de sus discos en todo el mundo y por el récord del grupo estadounidense con mayor número de discos de oro y platino.',
        img_descripcion: 'https://i.postimg.cc/022t8yyr/aeromisth.webp'
    },
    {
        nombre: 'Luciano Pereyra',
        banda: 'Solista',
        genero: 'Pop',
        ultimoLanzamiento: '2021-11-12',
        album: 'La conquista del espacio',
        imagen: 'https://i.postimg.cc/TPKbqKPZ/lucianopereyra.webp',
        descripcion:'Su primer contacto con la música fue cuando tenía 3 años, sus padres al ver que podía poseer cualidades, le regalaron para Navidad una guitarra. Al año siguiente, concursó en un programa de televisión del antiguo ATC (ahora Canal 7 Argentina). A los 9, participó en Festilindo un programa-concurso orientado al público infantil. Cuando tenía 10, cantó en el programa de Xuxa el tema de León Gieco Sólo le pido a Dios, el mismo que diez años después (2000) lo haría famoso al cantarlo frente al Papa Juan Pablo II en el Vaticano, representando a Latinoamérica en el jubileo.',
        img_descripcion:'https://i.postimg.cc/mkF6GdwR/lucianopereyra2.webp'
    },
    {
        nombre: 'J King y Maximan',
        banda: 'Duo',
        genero: 'Reggaeton',
        ultimoLanzamiento: '2021-11-19',
        album: 'Dios los cría (Edición Especial)',
        imagen: 'https://i.postimg.cc/5tz02LyN/jkingymaximan.webp',
        descripcion:'J King y Maximan, también conocidos como Los Rastrilleros y Los SuperHéroes, son un dúo de reggaeton conocidos por su pegajoso estilo y debido a que junto con Guelo Star y Jowell y Randy conforman La Casa De Leones',
        img_descripcion:'https://i.postimg.cc/qv7DJMQj/jkingymaximan2.webp'
    },
    {
        nombre: 'Alex Zurdo',
        banda: 'Solista',
        genero: 'Reggaeton',
        ultimoLanzamiento: '2021-04-02',
        album: 'El Dorado',
        imagen: 'https://i.postimg.cc/j23KXS2F/Alexzurdo.webp',
        descripcion: 'Alexis Vélez Alberio más conocido como Alex Zurdo nació un 10 de junio de 1983, en la ciudad de Trujillo Alto, Puerto Rico.Escribía música y también tocaba el piano. A la edad de 11 años escribió sus primeras canciones de rap. A los 13 años tuvo su primer piano y aprendió a tocarlo solo. En los años siguientes participó en varias producciones de rap y reggae.',
        img_descripcion: 'https://i.postimg.cc/W1bgF5D7/az.webp'
    },
    {
        nombre: 'Sean Paul',
        banda: 'Solista',
        genero: 'Reggaeton',
        ultimoLanzamiento: '2020-10-30',
        album: 'Positions',
        imagen: 'https://i.postimg.cc/tJcQ6vm0/seanpaul.webp',
        descripcion: '',
        img_descripcion: ''
    },
    {
        nombre: 'Los del Fuego',
        banda: 'Banda',
        genero: 'Cumbia',
        ultimoLanzamiento: '2020-03-27',
        album: 'Future Nostalgia',
        imagen: 'https://i.postimg.cc/bJWfDFB7/losdelfuego.webp',
        descripcion: '',
        img_descripcion: '',
    
    },
    
    {
        nombre: 'Cosculluela',
        banda: 'Solista',
        genero: 'Reggaeton',
        ultimoLanzamiento: '2020-07-24',
        album: 'Folklore',
        imagen: 'https://i.postimg.cc/59SZMy4c/cosculluela.webp',
        descripcion: '',
        img_descripcion: ''
    },
    {
        nombre: 'Los Palmeras',
        banda: 'Banda',
        genero: 'Cumbia',
        ultimoLanzamiento: '2020-12-18',
        album: 'Music To Be Murdered By - Side B',
        imagen: 'https://i.postimg.cc/zDTRDm6Y/lospalmeras.webp',
        descripcion: '',
        img_descripcion: ''
    },
    {
        nombre: 'Justin Quiles',
        banda: 'Solista',
        genero: 'Reggaeton',
        ultimoLanzamiento: '2017-04-14',
        album: 'DAMN.',
        imagen: 'https://i.postimg.cc/cLwRVgWw/justinquiles.webp',
        descripcion: '',
        img_descripcion: ''
    },
    {
        nombre: 'Daddy Yankee',
        banda: 'Solista',
        genero: 'Reggaeton',
        ultimoLanzamiento: '2021-09-03',
        album: 'Certified Lover Boy',
        imagen: 'https://i.postimg.cc/9FT1jNtD/daddyyankee.webp',
        descripcion: '',
        img_descripcion: ''
    },
    {
        nombre: 'Tony Dize',
        banda: 'Solista',
        genero: 'Reggaeton',
        ultimoLanzamiento: '2021-09-03',
        album: 'Certified Lover Boy',
        imagen: 'https://i.postimg.cc/BvvxthDc/tonydize.webp',
        descripcion: '',
        img_descripcion: ''
    },
    {
        nombre: 'Maria Becerra',
        banda: 'Solista',
        genero: 'Reggaeton',
        ultimoLanzamiento: '2017-04-14',
        album: 'DAMN.',
        imagen: 'https://i.postimg.cc/Mp2Hqs7T/mariabecerra.webp',
        descripcion: '',
        img_descripcion: '',
    },
    {
        nombre: 'J Alvarez',
        banda: 'Solista',
        genero: 'Reggaeton',
        ultimoLanzamiento: '2017-04-14',
        album: 'DAMN.',
        imagen: 'https://i.postimg.cc/gjG9gZ8G/j-alvarez.webp',
        descripcion: '',
        img_descripcion: ''
    },
    {
        nombre: 'Alexis y Fido',
        banda: 'Solista',
        genero: 'Reggaeton',
        ultimoLanzamiento: '2017-04-14',
        album: 'DAMN.',
        imagen:  'https://i.postimg.cc/5tNW5v51/Alexisyfido.webp',
        img_descripcion: ''
    },
    {
        nombre: 'Alejandro Fernandez',
        banda: 'Solista',
        genero: 'Pop',
        ultimoLanzamiento: '2017-04-14',
        album: 'DAMN.',
        imagen:  'https://i.postimg.cc/Hspzk2Tp/alejandrofernandez.webp',
        img_descripcion: ''
    }

];

const generosMusicales = [
    { id: 1, nombre: "Rock Nacional" },
    { id: 2, nombre: "Pop" },
    { id: 3, nombre: "Cumbia" },
    { id: 4, nombre: "Internacional" },
    { id: 5, nombre: "Reggaeton" },
    // Agrega más categorías según sea necesario
    ];

    const $ = document;

    const containerArtistas = document.getElementById('artistas')
    const containerGenero = document.getElementById('generoMusical')
    const nav_lower_player = document.querySelector('#nav_lower_player')
    const close_nav_player = document.querySelector('#close_nav_player')
    const container_data_artista = document.querySelector('#container_data_artista')
    const nav_aside = $.querySelector('#nav_aside')
    const close_nav_aside = $.querySelector('#close_nav_aside')

// * 1- VISTA GENERAL

function createCard(artista){
    // estructura card HTML
    let div = $.createElement('div')
    let h2 = $.createElement('h2')
    let h3 = $.createElement('h3')
    let small = $.createElement('small')
    let p = $.createElement('p')
    let p_ultimoLanzamiento = $.createElement('p')
    let img = $.createElement('img')

    // agreagar estilos
    div.classList.add('card')

    // contenido card
    let nombre = $.createTextNode(artista.nombre)
    let banda = $.createTextNode(artista.banda)
    let genero = $.createTextNode(artista.genero)
    let album = $.createTextNode(artista.album)
    let ultimoLanzamiento = $.createTextNode(artista.ultimoLanzamiento)

    


    // referenciar (atar) el contenido con su correcpondiente etiqueta html
    h2.appendChild(nombre)
    h3.appendChild(banda)
    small.appendChild(genero)
    p.appendChild(album)
    p_ultimoLanzamiento.appendChild(ultimoLanzamiento)

    img.setAttribute('src', artista.imagen)

    div.append(h2, h3, small, p, p_ultimoLanzamiento, img)
    containerArtistas.appendChild(div)
}

function renderedCards(array){
    containerArtistas.innerHTML = ''
    array.forEach(function(artista){
        createCard(artista)
    })
}

function renderedCategorys(){
    for (const genero of generosMusicales ) {
        console.log(genero);
        containerGenero.innerHTML += `<a class='item_genero' id="genero-${genero.id}">${genero.nombre}</a>`
    }
    
}

const findArtistabyNombre = (findArtista) => {
    return artistas.find( (artista) => artista.nombre === findArtista  )
}

const  filterCategory = (categoria) => {
    return artistas.filter((artista) => artista.genero === categoria )
}

const filterByCategory = () => {
    const items_genero = document.querySelectorAll('.item_genero')
    items_genero.forEach((item) => {
        item.addEventListener('click', (e) => {
            let categoria = e.target.textContent
            let result = filterCategory(categoria)
            renderedCards(result)
        })
    })
}

const showNav = () => {
    document.addEventListener('click', (evento) => {
       // console.dir(evento.target);
        let nombreArtista = evento.target.parentNode.children[0]
        console.log(nombreArtista);
        if (evento.target.parentNode.classList[0] === 'card') { // ! Mejora en la busqueda y seleccion de la card con parentNode
            nav_lower_player.classList.remove('hidden')
            nav_aside.classList.remove('hidden')
            let find = findArtistabyNombre(nombreArtista.textContent)
            container_data_artista.innerHTML = `
                <img src=${find.imagen} alt=${find.nombre} style='width: 100px'>
                <h3>${find.nombre}</h3>
                <h4>Album: ${find.album}</h4>
            `
            showAsidenav(find)

        }
    })
}


const showAsidenav = (data) => {
    const nav_aside_song = $.querySelector('#nav_aside_song')
    const nav_aside_artist = $.querySelector('#nav_aside_artist')

    nav_aside_song.innerHTML =`<img src=${data.imagen} alt=${data.nombre}>
                                <h2>${data.album}</h2>
                                <h4>${data.genero}</h4>
                                <i class="bi bi-heart"></i>
                                `
    nav_aside_artist.innerHTML = `
                                <img src=${data.img_descripcion} alt=${data.nombre}>
                                <p>${data?.descripcion}</p>
                                `
}


const closeNav = (button) => {
    button.addEventListener('click', () => {
        nav_lower_player.classList.add('hidden')
        nav_aside.classList.add('hidden')
    })
}

window.addEventListener('DOMContentLoaded', () => {
    renderedCategorys()
    renderedCards(artistas)
    showNav()
    closeNav(close_nav_player)
    closeNav(close_nav_aside)
    filterByCategory()
})

