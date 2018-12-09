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
                    <a class="btn btn-light text-dark px-2" role="button" aria-pressed="true" href="pages/shop_item.html">Страница товара</a>\
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
            <a class="btn btn-light text-dark px-2" role="button" aria-pressed="true" href="pages/shop_item.html">Страница товара</a>\
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
                <a class="btn btn-light text-dark px-2" role="button" aria-pressed="true" href="pages/shop_item.html">Страница товара</a>\
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
                    <a class="btn btn-light text-dark px-2" role="button" aria-pressed="true" href="pages/shop_item.html">Страница товара</a>\
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
                <a class="btn btn-light text-dark px-2" role="button" aria-pressed="true" href="pages/shop_item.html">Страница товара</a>\
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
                <a class="btn btn-light text-dark px-2" role="button" aria-pressed="true" href="pages/shop_item.html">Страница товара</a>\
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