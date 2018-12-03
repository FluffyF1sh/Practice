//Навигационная панель
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
                        <button class="btn btn-success my-2" type="submit">Поиск</button>\
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
//Нижний блок меню
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
//Информация о компании
Vue.component('InfoBar', {
    props: ['ups','downs'],
    template: '\
    <div class="row">\
        <div class="col-lg"></div>\
        <div class="col col-lg-8">\
            <h2 class="text-center bg-dark font-weight-bold">Информация о компании West-Tek</h2>\
            <div v-for="up in ups" :key="up.id" :up="up" class="text-justify p-2">\
                {{up.text}}\
            </div>\
            <h1 class="p-1">Проект ВРЭ</h1>\
            <hr>\
            <div v-for="down in downs" :key="down.id" :down="down" class="text-justify p-2">\
                {{down.text}}\
            </div>\
        </div>\
        <div class="col-lg"></div>\
    </div>'
})
new Vue({
    el: '#info',
    data: { 
        ups: [
            {
                id:1, text:'Компания была основана в 2002 году как подрядчик американского правительства.\
                Работала по двум направлениям: биомедицинском — занималась биотехнологиями, в том числе вирусом ВРЭ,\
                позже перенесённом на военную базу Марипоза — и оружейном, в рамках которого разработала, например, многие\
                образцы лазерного оружия и силовой брони. В 2069 году «Вест-Тек» являлась крупнейшим поставщиком технологий\
                для армии США.'
            },
            {
                id:2, text:'Исследовательский комплекс «Вест-Тек» был уничтожен 23 октября 2077 года прямым\
                попаданием ядерной бомбы и на века остался одним из самых радиоактивных мест Западного побережья.'
            }
        ],
        downs: [
            {
                id:1, text:' В 2055 году компания начала работу над сывороткой от «Новой чумы». В лабораторию для исследований был доставлен суперкомпьютер\
                ZAX 1.2. К моменту нарастания угрозы применения Китаем биологического оружия, США дали «Вест-Тек» ещё\
                одно задание — создать защиту от китайского биологического оружия. Оба задания были объединены в одно\
                и получили название «Проект «Вирион-Иммунитет»» (PIVP, Pan-Immunity Virion Project). Проект официально\
                стартовал 15 сентября 2073 года, его руководителем стал Леон фон Фельден.'
            },
            {
                id:2, text:' Однако в ходе исследований было обнаружено, что новая сыворотка увеличивает мышечную массу и выносливость подопытных. Проект\
                был переименован в «Вирус Рукотворной Эволюции», ВРЭ. 3 января 2076 года из Центра в лабораторию была\
                направлена группа военных, во главе с полковником Робертом Спайнделом. После того, как вирус был готов,\
                исследования ВРЭ были перенесены на военную базу Марипоза.'
            },
            {
                id:3, text:'Во второй половине октября 2077 года военная охрана базы взбунтовалась против экспериментов на людях. Полковник Спайндел\
                застрелился, капитан Роджер Мэксон поочередно расстрелял всех ведущих ученых «Вест-Тек» и объявил о неподчинении\
                американскому правительству. Впрочем, на фоне грянувшей 23 октября 2077 года ядерной катастрофы это заявление\
                осталось незамеченным. Позже военные — ядро будущего Братства Стали — покинули базу; гражданскому персоналу\
                — работникам «Вест-Тек» — было приказано остаться на базе. Дальнейшая судьба вестековцев с Марипозы неизвестна.'
            }
        ] 
    }
})
//Лучшие сотрудники
Vue.component('EmpBar',{
props: ['robots'],
template:'\
<div class="row">\
    <div class="col-lg"></div>\
    <div class="col col-lg-8">\
        <h2 class="text-center bg-dark font-weight-bold">Наши лучшие сотрудники:</h2>\
        <div class="row">\
            <div v-for="robot in robots" :key="robot.id" :robot="robot" class="row-md col-lg">\
                <img class="rob float-md-left pr-sm-0 pr-lg-0 pr-md-2" :src="robot.image">\
                <h3>{{robot.name}}</h3>\
                <p>{{robot.desc}}</p>\
            </div> \
        </div>\
    </div>\
    <div class="col-lg"></div>\
</div>\
'
})
new Vue({
    el: '#emp',
    data:
    {
        robots:[
            {
                id:1,
                name:'Мистер-Помощник',
                desc:'Лучшая рабочая сила. Всегда готов вкалывать. Человеческий труд в нашем производстве заменён полностью.',
                image:'../assets/Mister_Handy.png'
            },
            {
                id:2,
                name:'Мистер-Храбрец',
                desc:'Наша защита и безопасноть на территории завода. Правда, иногда он даёт сбой, но это не страшно.',
                image:'../assets/mister-brave.jpg'
            },
            {
                id:3,
                name:'Новострон',
                desc:'Наш разносчик новостей. Подписка снизу впишет ваш адрес в список новостной рассылки. Не волнуйтесь, он не испортит ваш сон по утрам.',
                image:'../assets/newstron.jpg'
            },
            {
                id:4,
                name:'Робомозг',
                desc:'Ответственный за всю мозговую деятельность в производстве. Решает кроссворды и другие головоломки в считанные секунды.',
                image:'../assets/Masterbrain.jpg'
            },
            {
                id:5,
                name:'Секьюритрон',
                desc:'Ещё один робот, защищающий наше производство. Спасибо вам, Мистер Хаус, что компания РобКо производит столь прекрасных роботов!',
                image:'../assets/mk_2.jpg'
            }
        ]
    }
})