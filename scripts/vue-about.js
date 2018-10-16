Vue.component('NavBar', {
    props: ['logo', 'refs', 'cart'],
    template: '\
    <nav class="shadow row fixed-top hs navbar navbar-expand-lg">\
        <div class="col col d-flex flex-row justify-content-start align-items-center">\
            <img class="navbar-brand w-25" :src="logo.img">\
            <a class="log font-weight-bold font-italic" :href="logo.url">{{logo.text}}</a>\
        </div>\
        <div class="col d-none d-md-flex flex-row justify-content-center align-items-center ">\
            <form class="form-inline my-auto d-none d-md-block">\
                <input class="form-control mr-md-1" type="search" placeholder="Введите ваш запрос" aria-label="Search">\
                <button class="btn btn-success my-md-0" type="submit">Поиск</button>\
            </form>\
        </div>\
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu"\
            aria-expanded="false" aria-label="Toggle navigation">\
            <span class="navbar-toggler-icon"></span>\
        </button>\
        <div class="collapse navbar-collapse" id="menu">\
            <ul class="nav navbar-nav ml-md-auto">\
                <li v-for="ref in refs" :key="ref.id" :ref="ref" class="nav-item">\
                    <a class="mr-md-2 m-1 m-md-0 btn btn-success btn-lg text-white nav-link" role="button" aria-pressed="true" :href="ref.url">{{ref.text}}</a>\
                </li>\
            </ul>\
            <ul class="navbar-nav">\
                <li class="nav-item"\
                    <a class="mr-md-2 m-1 m-md-0 btn btn-danger btn-lg text-white nav-link" role="button" aria-pressed="true" :href="cart.url">{{cart.text}}</a>\
                </li>\
            </ul>\
        </div>\
    </nav>'
})
new Vue({
    el: '#nav',
    data: {
        logo: { img: '../assets/hlogo.png', url: '../index.html', text: 'West-Tek power armor' },
        refs: [
            { id: 1, url: '../index.html', text: 'Магазин' },
            { id: 2, url: '../pages/news.html', text: 'Новости' },
            { id: 3, url: '../pages/about.html', text: 'О компании' },
            { id: 4, url: 'https://mamaikan.github.io/Nuka-Cola/index.html', text: 'Nuka-Cola' },
        ],
        cart: { url: 'pages/news.html', text: 'Корзина' }
    }
})

Vue.component('FootBar', {
    props: ['desc', 'teller', 'logos'],
    template: '<div>\
    <div class="row">\
            <div class="col d-flex justify-content-center fs">\
                <img class="align-middle footer1" :src="desc.url">\
                <div class="text-justify">\
                    {{desc.text}}\
                </div>\
            </div>\
    </div>\
    <div class="row pt-3 pt-md-0">\
        <div class="col d-flex flex-row justify-content-center">\
            <img class="pt-1-md" :src="teller.url">\
            <p class="mt-md-4 ml-md-1">\
                {{teller.text}}\
                <form class="form-inline">\
                    <div class="form-group mx-sm-1 mb-md-4">\
                        <input type="email" class="form-control" placeholder="e-mail">\
                    </div>\
                    <button type="submit" class="btn mr-md-3 btn-primary mb-md-4 button">Подписка</button>\
                </form>\
            </p>\
            <div v-for="logo in logos" :key="logo.id" :logo="logo">\
                <img class="mw-100 px-1" :src="logo.url">\
            </div>\
        </div>\
    </div>\
    </div>'
})

new Vue({
    el: '#foot',
    data: {
        desc: {
            url: '../assets/footer-logo.png', text: 'Данный сайт не является подлинным. Это всего лишь лабораторная работа и она в дальнейшем не превратится в новую корпорацию,\
        которая поработит мир своей продукцией.'},
        teller: { url: '../assets/newsletter-sign-up-tower.svg', text: 'Подписка на рассылку новостей:' },
        logos: [
            { id: 1, url: '../assets/globe.gif' },
            { id: 2, url: '../assets/18.png' }
        ]
    }
})

new Vue({
    el: '#info',
    data: {
        
    }
})
