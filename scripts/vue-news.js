Vue.component('NewsBar', {
    props: ['posts'],
    template: '\
<div class="container-fluid font">\
    <div v-for="post in posts" :key="post.id" :post="post">\
    <div class="row">\
        <div class="col-lg"></div>\
        <div class="col col-lg-8">\
            <h2 class="text-center bg-dark font-weight-bold">{{post.header}}</h2>\
            <div class="col-md-4"><img class="mw-100 float-left mr-4 mb-2" :src="post.url"></div>\
            <h3>{{post.poster}}</h3>\
            <p>\
                {{post.textUp}}\
            </p>\
        </div>\
        <div class="col-lg"></div>\
    </div>\
    <div class="row">\
        <div class="col-lg"></div>\
        <div class="col col-lg-8">\
            <p class="text-justify">\
                {{post.textDown}}}\
                        <div class="container-fluid border border-dark">\
                        <h2>Оставьте ваш комментарий!</h2>\
                            <form>\
                                <div class="form-row">\
                                    <div class="col-md form-group">\
                                        <label>Ваш e-mail</label>\
                                        <input type="email" class="form-control" id="colFormLabel" placeholder="example@mailbox.dom" required>\
                                    </div>\
                                    <div class="col-md form-group">\
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
        <div class="col-lg"></div>\
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

