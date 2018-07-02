Vue.component('parm', {
    props: ['armors'],
    template: '<div>\
    <div  class="row text-center font-weight-bold font">\
                <div v-for="armor in armors.slice(0,4)" class="col-md m-3 p-2 m-md-4 pt-md-3 rounded border border-light bg-dark">\
                <img class="mw-100 rounded bg-light" :src="armor.url">\
                    <div>\
                        <div>{{armor.model}}</div>\
                        <div>Цена: {{armor.price}}</div>\
                    </div>\
                    <div class="bg-light text-dark">\
                        Страница товара\
                    </div>\
                </div>\
                </div>\
            <div class="row text-center font-weight-bold font">\
                <div  v-for="armor in armors.slice(4)" class="col-md m-3 p-2 m-md-4 pt-md-3 rounded border border-light bg-dark">\
                <img class="mw-100 rounded bg-light" :src="armor.url">\
                <div>\
                    <div>{{armor.model}}</div>\
                    <div>Цена: {{armor.price}}</div>\
                </div>\
                <div class="bg-light text-dark">\
                    Страница товара\
                </div>\
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
                url: 'assets/T-60bas.png'
            },
            {
                id: 2,
                model: 'Модель T-45',
                price: '54690 крышек',
                url: 'assets/T-45bas.png'
            },
            {
                id: 3,
                model: 'Модель X-01 (ржавый)',
                price: '129890 крышек',
                url: 'assets/X-01.png'
            },
            {
                id: 4,
                model: 'Модель T-45 (ржавый)',
                price: '34000 крышек',
                url: 'assets/T-45.png'
            },
            {
                id: 5,
                model: 'Модель T-60 (ржавый)',
                price: '48900 крышек',
                url: 'assets/T-60.png'
            },
            {
                id: 6,
                model: 'Модель T-51b',
                price: '65990 крышек',
                url: 'assets/T-51bBAS.png'
            },
            {
                id: 7,
                model: 'Рейдерская броня',
                price: '25690 крышек',
                url: 'assets/Raider.png'
            },
            {
                id: 8,
                model: 'Экзоскелет (основа)',
                price: '9100 крышек',
                url: 'assets/Frame.png'
            }
        ]
    }
})

Vue.component('attrib',{
    props: ['slots'],
    template: '<div>\
    <div  class="row text-center font-weight-bold font">\
                <div v-for="slot in slots.slice(0,4)" class="col-md m-3 p-2 m-md-4 pt-md-3 rounded border border-light bg-dark">\
                <img class="mw-100 rounded bg-light" :src="slot.url">\
                    <div>\
                        <div>{{slot.model}}</div>\
                        <div>Цена: {{slot.price}}</div>\
                    </div>\
                    <div class="bg-light text-dark">\
                        Страница товара\
                    </div>\
                </div>\
                </div>\
            <div class="row text-center font-weight-bold font">\
                <div  v-for="slot in slots.slice(4)" class="col-md m-3 p-2 m-md-4 pt-md-3 rounded border border-light bg-dark">\
                <img class="mw-100 rounded bg-light" :src="slot.url">\
                <div>\
                    <div>{{slot.model}}</div>\
                    <div>Цена: {{slot.price}}</div>\
                </div>\
                <div class="bg-light text-dark">\
                    Страница товара\
                </div>\
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
                url: 'assets/t45helm.png'
            },
            {
                id: 2,
                model: 'Шлем рейнджера НКР',
                price: '22700 крышек',
                url: 'assets/RangerHelm.png'
            },
            {
                id: 3,
                model: 'Шлем брони T-51b',
                price: '8390 крышек',
                url: 'assets/t51helm.png'
            },
            {
                id: 4,
                model: 'Фигурка солдата в броне T-60',
                price: '3590 крышек',
                url: 'assets/slot4.PNG'
            },
            {
                id: 5,
                model: 'Ядерный блок',
                price: '11890 крышек',
                url: 'assets/fusion_core.PNG'
            },
            {
                id: 6,
                model: 'Набор "собери сам" Nuka-Cola',
                price: '45000 крышек',
                url: 'assets/nuka-pa.PNG'
            },
            {
                id: 7,
                model: 'Фигурка "Атом"',
                price: '2780 крышек',
                url: 'assets/t60stat.PNG'
            },
            {
                id: 8,
                model: 'Фигурка солдата в броне T-51',
                price: '3400 крышек',
                url: 'assets/t51stat.PNG'
            }
        ]
    }
})
