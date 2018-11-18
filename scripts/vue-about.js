Vue.component('NavBar', {
    props: ['logo', 'refs', 'cart'],
    template: '\
    <nav class="shadow row fixed-top hs navbar navbar-expand-lg navbar-light bg-light">\
        <div class="navbar-brand col d-flex flex-row justify-content-start align-items-center">\
            <img class="w-25" :src="logo.img">\
            <div class="pl-3 pl-3-md">\
                <a class="pl-1 pl-1-md headline font-weight-bold font-italic font-header" :href="logo.url">{{logo.text}}</a>\
            </div>\
        </div>\
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu"\
            aria-expanded="false" aria-label="Toggle navigation">\
            <span class="navbar-toggler-icon"></span>\
        </button>\
        <div class="collapse navbar-collapse" id="menu">\
            <ul class="navbar-nav ml-auto">\
                <li class="col-lg d-flex flex-row justify-content-center align-items-center nav-item">\
                    <form class="form-inline my-lg-0">\
                        <input class="form-control" type="search" placeholder="Введите ваш запрос" aria-label="Search">\
                        <button class="btn btn-success my-lg-2 my-sm-0" type="submit">Поиск</button>\
                    </form>\
                </li>\
            </ul>\
            <ul class="navbar-nav ml-auto">\
                <li v-for="ref in refs" :key="ref.id" :ref="ref" class="nav-item">\
                    <a class="mr-md-2 btn btn-success btn-lg text-white nav-link" role="button" aria-pressed="true" :href="ref.url">{{ref.text}}</a>\
                </li>\
            </ul>\
            <ul class="navbar-nav">\
                <li class="nav-item"\
                    <a class="mr-md-2 btn btn-danger btn-lg text-white nav-link" role="button" aria-pressed="true" :href="cart.url">{{cart.text}}</a>\
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
    template: '\
    <div class="fot">\
        <div class="row">\
                <div class="col d-flex justify-content-center fs">\
                    <img class="align-middle footer1 d-sm-none d-md-none d-lg-inline" :src="desc.url">\
                    <div class="text-justify">\
                        {{desc.text}}\
                    </div>\
                </div>\
        </div>\
        <div class="row mt-sm-3 mt-md-3 mt-lg-0 pt-md-0">\
            <div class="col d-flex flex-row justify-content-center">\
                <img class="pt-1-md d-sm-none d-md-none d-lg-inline" :src="teller.url">\
                <p class="mt-lg-4 ml-lg-1">\
                    {{teller.text}}\
                    <form class="form-inline">\
                        <div class="form-group mb-md-4">\
                            <input type="email" class="form-control" placeholder="e-mail">\
                        </div>\
                        <button type="submit" class="btn mr-sm-0 mr-lg-3 btn-primary mb-lg-4">Подписка</button>\
                    </form>\
                </p>\
                <div v-for="logo in logos" :key="logo.id" :logo="logo">\
                    <img class="mw-100 px-1 d-sm-none d-md-none d-lg-inline" :src="logo.url">\
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
