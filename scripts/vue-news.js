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

Vue.component('NewsBar', {
    props: ['posts'],
    template: '\
    <div class="container-fluid font">\
    <div v-for="post in posts" :key="post.id" :post="post">\
    <div class="row">\
        <div class="col-md"></div>\
        <div class="col col-md-8">\
            <h2 class="text-center bg-dark font-weight-bold">{{post.header}}</h2>\
            <div class="col-md-4"><img class="mw-100 float-left mr-4 mb-2" :src="post.url"></div>\
            <h3>{{post.poster}}</h3>\
            <p>\
                {{post.textUp}}\
            </p>\
        </div>\
        <div class="col-md"></div>\
    </div>\
    <div class="row">\
        <div class="col-md"></div>\
        <div class="col col-md-8">\
            <p class="text-justify">\
                {{post.textDown}}}\
                        <div class="container-fluid border border-dark">\
                            <div class="row m-1">\
                                <div class="col m-1 ">\
                                    <div class="text-center font-weight-bold">Eugene 9.12.2024</div>\
                                    <div class="col-md-3"><img class="mw-100 float-left pr-1" src="../assets/profile_pic.jpg"></div>Как круто, что всё роботизируют! Жду, когда смогу отдать своего протекрона на работу\
                                    к вам.\
                                </div>\
                                <div class="col m-1">\
                                    <div class="text-center font-weight-bold">Robert 11.12.2024</div>\
                                    <div class="col-md-3"><img class="mw-100 float-left pr-1" src="../assets/profile_pic.jpg"></div> Скоро обычным людям места не останется в этом мире...\
                                </div>\
                            </div>\
                            <div class="row m-1">\
                                <div class="col m-1">\
                                    <div class="text-center font-weight-bold">Boosher232 01.01.2025</div>\
                                    <div class="col-md-3"><img class="mw-100 float-left pr-1" src="../assets/profile_pic.jpg"></div> С Новым годом!!!\
                                </div>\
                                <div class="col m-1">\
                                    <div class="text-center font-weight-bold">???????? 22.02.2024</div>\
                                    <div class="col-md-3"><img class="mw-100 float-left pr-1" src="../assets/profile_pic.jpg"></div> djlfh;asl lsl.. OS>?\
                                </div>\
                            </div>\
                            <form>\
                                <div class="row form-row">\
                                    <div class="col form-group">\
                                        <label>Ваш e-mail</label>\
                                        <input type="email" class="form-control" id="colFormLabel" placeholder="example@mailbox.dom" required>\
                                    </div>\
                                    <div class="col form-group">\
                                        <label>Ваш никнейм</label>\
                                        <input type="username" class="form-control" id="colFormLabel" placeholder="username" required>\
                                    </div>\
                                </div>\
                                <div class="row form-group">\
                                    <div class="col">\
                                        <label>Комментарий:</label>\
                                        <textarea class="form-control" placeholder="Комментарий"></textarea>\
                                    </div>\
                                </div>\
                                <div class="row form-group text-center">\
                                    <div class="col">\
                                        <input type="submit" value="Отправить" class="btn btn-success">\
                                    </div>\
                                    <div class="col">\
                                        <input type="reset" value="Сбросить" class="btn btn-danger">\
                                    </div>\
                                </div>\
                            </form>\
                    </div>\
            </p>\
        </div>\
        <div class="col-md"></div>\
    </div>\
    </div>\
</div>'
})

new Vue({
    el: '#posts',
    data: {
        posts: [
            {
                id: 1, header: 'Требуются сотрудники!', url: '../assets/news1.png', poster: 'Джеймс Кэмерон. Глава отдела новостей 08.12.2024',
                textUp: 'В нашем штате сотрудников недосчёт кадров. Мы набираем новый состав рабочих. Принимаются роботы: протектрон, мистер-помощник\
            (любой серии), мистер-храбрец, робоглаз, робомозг. Lorem ipsum dolor sit amet, consectetur adipiscing\
            elit. Aliquam ac mollis sem. Mauris sit amet ipsum malesuada, molestie ante at, commodo tortor. Donec\
            a libero ut nunc imperdiet auctor. Etiam malesuada ultrices ipsum, a efficitur ex porttitor id. Nullam\
            sem nibh, consectetur et fermentum eu, suscipit quis metus. Aenean eget lacinia risus. Suspendisse tempus\
            lectus at augue ultrices, a molestie diam vehicula.',
                textDown: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac mollis sem. Mauris sit amet ipsum malesuada, molestie\
            ante at, commodo tortor. Donec a libero ut nunc imperdiet auctor. Etiam malesuada ultrices ipsum, a efficitur\
            ex porttitor id. Nullam sem nibh, consectetur et fermentum eu, suscipit quis metus. Aenean eget lacinia\
            risus. Suspendisse tempus mole vehicula. Прошу, только не заменяйте меня на новострона!'
            },
            {
                id: 2, header: 'Новый экзоскелет!', url: '../assets/news2.png', poster: 'Новострон 17.02.2043',
                textUp: 'Данный экзоскелет является моделью нового поколения, котрорая обходит предыдущую модель в несколько раз! Сидит на человеке\
            среднего телосложения как влитой. С помощью новейших технологий, вес экзоскелета не ощущается практически\
            на 99.67%. Даже нося этот костюм без брони, вы гарантируете себе защиту от пуль до пятидесятого калибра.\
            Данный экзоскелет работает на ядерных блоках, что в свою очередь может нанести вред вашему здоровью.\
            Проконсультируйтесь с Мистером-врачом, перед тем, как приобретать данную продукцию компании West-Tek\
            за 3499$! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac mollis sem. Mauris sit\
            amet ipsum malesuada, molestie ante at, commodo tortor. Donec a libero ut nunc imperdiet auctor. Etiam\
            malesuada ultrices ipsum, a efficitur ex porttitor id. Nullam sem nibh, consectetur et fermentum eu,\
            suscipit quis metus. Aenean eget lacinia risus. Suspendisse tempus lectus at augue ultrices, a molestie\
            diam vehicula.',
                textDown: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac mollis sem. Mauris sit amet ipsum malesuada, molestie\
            ante at, commodo tortor. Donec a libero ut nunc imperdiet auctor. Etiam malesuada ultrices ipsum, a efficitur\
            ex porttitor id. Nullam sem nibh, consectetur et fermentum eu, suscipit quis metus. Очень надеемся, что\
            вы не станете использовать экзоскелет в целях нанесения вреда вашим соседям и близким.'
            },
            {
                id: 3, header: 'Война близко! Пора обратиться в Vault-Tec.', url: '../assets/news3.png', poster: 'Новострон 22.10.2077',
                textUp: 'У нас очень плохие новости. Обстановка во всём мире накаляется, что не есть хорошо. Мы очень надеемся, что бомбы не начнут\
            падать с неба, как капли воды при осеннем дожде. Мы не хотим войны, но если что, наша страна всегда готова\
            дать ответный огонь. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac mollis sem.\
            Mauris sit amet ipsum malesuada, molestie ante at, commodo tortor. Donec a libero ut nunc imperdiet auctor.\
            Etiam malesuada ultrices ipsum, a efficitur ex porttitor id. Nullam sem nibh, consectetur et fermentum\
            eu, suscipit quis metus. Aenean eget lacinia risus. Suspendisse tempus lectus at augue ultrices, a molestie\
            diam vehicula.',
                textDown: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac mollis sem. Mauris sit amet ipsum malesuada, molestie\
            ante at, commodo tortor. Donec a libero ut nunc imperdiet auctor. Etiam malesuada ultrices ipsum, a efficitur\
            ex porttitor id. Nullam sem nibh, consectetur et fermentum eu, suscipit quis metus. Aenean eget lacinia\
            risus. Самое время обратиться в Vault-Tec за резервацией места в убежище.'
            }
        ]
    }
})
