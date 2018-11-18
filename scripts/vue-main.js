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
        logo: { img: 'assets/hlogo.png', url: '../index.html', text: 'West-Tek power armor' },
        refs: [
            { id: 1, url: '../index.html', text: 'Магазин' },
            { id: 2, url: 'pages/news.html', text: 'Новости' },
            { id: 3, url: 'pages/about.html', text: 'О компании' },
            { id: 4, url: 'https://mamaikan.github.io/Nuka-Cola/index.html', text: 'Nuka-Cola' },
        ],
        cart: { url: 'pages/news.html', text: 'Корзина' }
    }
})

Vue.component('parm', {
    props: ['armors'],
    template: '<div>\
    <div  class="row text-center font-weight-bold font">\
            <div v-for="armor in armors.slice(0,4)" class="col-md m-3 p-4 m-md-4 pt-md-3 rounded border border-light bg-dark">\
                <img class="mw-100 rounded bg-light" :src="armor.pic">\
                    <div>\
                        <div>{{armor.model}}</div>\
                        <div>Цена: {{armor.price}}</div>\
                    </div>\
                    <button type="button" class="btn btn-light px-2">Страница товара</button>\
                    <button type="button" class="btn btn-success px-2">Добавить в корзину</button>\
            </div>\
    </div>\
    <div class="row text-center font-weight-bold font">\
            <div  v-for="armor in armors.slice(4,8)" class="col-md m-3 p-4 m-md-4 pt-md-3 rounded border border-light bg-dark">\
            <img class="mw-100 rounded bg-light" :src="armor.pic">\
                <div>\
                    <div>{{armor.model}}</div>\
                    <div>Цена: {{armor.price}}</div>\
                </div>\
            <button type="button" class="btn btn-light px-2">Страница товара</button>\
            <button type="button" class="btn btn-success px-2">Добавить в корзину</button>\
            </div>\
    </div>\
    <div class="row text-center font-weight-bold font">\
            <div  v-for="armor in armors.slice(8,12)" class="col-md m-3 p-4 m-md-4 pt-md-3 rounded border border-light bg-dark">\
            <img class="mw-100 rounded bg-light" :src="armor.pic">\
                <div>\
                    <div>{{armor.model}}</div>\
                    <div>Цена: {{armor.price}}</div>\
                </div>\
            <button type="button" class="btn btn-light px-2">Страница товара</button>\
            <button type="button" class="btn btn-success px-2">Добавить в корзину</button>\
            </div>\
    </div>\
</div>'
})
new Vue({
    el: '#parm',
    data: {
        armors: [
            {
                id: 1,
                model: 'Модель T-60',
                price: '76990 крышек',
                pic: 'assets/T-60bas.png'
            },
            {
                id: 2,
                model: 'Модель T-45',
                price: '54690 крышек',
                pic: 'assets/T-45bas.png'
            },
            {
                id: 3,
                model: 'Модель X-01 (ржавый)',
                price: '129890 крышек',
                pic: 'assets/X-01.png'
            },
            {
                id: 4,
                model: 'Модель T-45 (ржавый)',
                price: '34000 крышек',
                pic: 'assets/T-45.png'
            },
            {
                id: 5,
                model: 'Модель T-60 (ржавый)',
                price: '48900 крышек',
                pic: 'assets/T-60.png'
            },
            {
                id: 6,
                model: 'Модель T-51b',
                price: '65990 крышек',
                pic: 'assets/T-51bBAS.png'
            },
            {
                id: 7,
                model: 'Рейдерская броня',
                price: '25690 крышек',
                pic: 'assets/Raider.png'
            },
            {
                id: 8,
                model: 'Экзоскелет (основа)',
                price: '9100 крышек',
                pic: 'assets/Frame.png'
            },
            {
                id: 9,
                model: 'Модель T-45 (Окраска "Hot Pink")',
                price: '36890 крышек',
                pic: 'assets/FO4_T-45_Hot_Pink.png'
            },
            {
                id: 10,
                model: 'Модель X-01',
                price: '152000 крышек',
                pic: 'assets/X-01_bas.png'
            },
            {
                id: 11,
                model: 'Модель T-51b (Окраска "Nuka")',
                price: '77845 крышек',
                pic: 'assets/Nuka-T51f.png'
            },
            {
                id: 12,
                model: 'Модель X-01 (Окраска "Quantum")',
                price: '229960 крышек',
                pic: 'assets/Quantum_X-01.png'
            }
        ]
    }
})

Vue.component('attrib', {
    props: ['slots'],
    template: '<div>\
        <div  class="row text-center font-weight-bold font">\
            <div v-for="slot in slots.slice(0,4)" class="col-md m-3 p-4 m-md-4 pt-md-3 rounded border border-light bg-dark">\
                <img class="mw-100 rounded bg-light" :src="slot.pic">\
                    <div>\
                        <div>{{slot.model}}</div>\
                        <div>Цена: {{slot.price}}</div>\
                    </div>\
                    <button type="button" class="btn btn-light px-2">Страница товара</button>\
                    <button type="button" class="btn btn-success px-2">Добавить в корзину</button>\
            </div>\
        </div>\
        <div class="row text-center font-weight-bold font">\
            <div  v-for="slot in slots.slice(4,8)" class="col-md m-3 p-4 m-md-4 pt-md-3 rounded border border-light bg-dark">\
                <img class="mw-100 rounded bg-light" :src="slot.pic">\
                <div>\
                    <div>{{slot.model}}</div>\
                    <div>Цена: {{slot.price}}</div>\
                </div>\
                <button type="button" class="btn btn-light px-2">Страница товара</button>\
                <button type="button" class="btn btn-success px-2">Добавить в корзину</button>\
            </div>\
        </div>\
        <div class="row text-center font-weight-bold font">\
            <div  v-for="slot in slots.slice(8,12)" class="col-md m-3 p-4 m-md-4 pt-md-3 rounded border border-light bg-dark">\
                <img class="mw-100 rounded bg-light" :src="slot.pic">\
                <div>\
                    <div>{{slot.model}}</div>\
                    <div>Цена: {{slot.price}}</div>\
                </div>\
                <button type="button" class="btn btn-light px-2">Страница товара</button>\
                <button type="button" class="btn btn-success px-2">Добавить в корзину</button>\
            </div>\
        </div>\
    </div>'
})
new Vue({
    el: '#attrib',
    data: {
        slots: [
            {
                id: 1,
                model: 'Шлем брони T-45',
                price: '7690 крышек',
                pic: 'assets/t45helm.png'
            },
            {
                id: 2,
                model: 'Шлем рейнджера НКР',
                price: '22700 крышек',
                pic: 'assets/RangerHelm.png'
            },
            {
                id: 3,
                model: 'Шлем брони T-51b',
                price: '8390 крышек',
                pic: 'assets/t51helm.png'
            },
            {
                id: 4,
                model: 'Фигурка солдата в броне T-60',
                price: '3590 крышек',
                pic: 'assets/slot4.PNG'
            },
            {
                id: 5,
                model: 'Ядерный блок',
                price: '11890 крышек',
                pic: 'assets/fusion_core.PNG'
            },
            {
                id: 6,
                model: 'Набор "собери сам" Nuka-Cola',
                price: '45000 крышек',
                pic: 'assets/nuka-pa.PNG'
            },
            {
                id: 7,
                model: 'Фигурка "Атом"',
                price: '2780 крышек',
                pic: 'assets/t60stat.PNG'
            },
            {
                id: 8,
                model: 'Фигурка солдата в броне T-51',
                price: '3400 крышек',
                pic: 'assets/t51stat.PNG'
            },
            {
                id: 9,
                model: 'Тотальный взлом: Роботы',
                price: '25 крышек',
                pic: 'assets/TH.png'
            },
            {
                id: 10,
                model: 'Журнал РобКо "Fun Zetans"',
                price: '21 крышка',
                pic: 'assets/RobCo.png'
            },
            {
                id: 11,
                model: 'Тесла: ракетная наука для детей',
                price: '35 крышек',
                pic: 'assets/Tesla.png'
            },
            {
                id: 12,
                model: 'Современные замки: Быстрый взлом',
                price: '45 крышек',
                pic: 'assets/TumblerToday.png'
            }
        ]
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
            url: 'assets/footer-logo.png', text: 'Данный сайт не является подлинным. Это всего лишь лабораторная работа и она в дальнейшем не превратится в новую корпорацию,\
        которая поработит мир своей продукцией.'},
        teller: { url: 'assets/newsletter-sign-up-tower.svg', text: 'Подписка на рассылку новостей:' },
        logos: [
            { id: 1, url: 'assets/globe.gif' },
            { id: 2, url: 'assets/18.png' }
        ]
    }
})