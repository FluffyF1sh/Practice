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
                pic: '../assets/T-60bas.png'
            },
            {
                id: 2,
                model: 'Модель T-45 (ржавый)',
                price: '34000 крышек',
                pic: '../assets/T-45.png'
            },
            {
                id: 3,
                model: 'Модель X-01 (ржавый)',
                price: '129890 крышек',
                pic: '../assets/X-01.png'
            },
            {
                id: 4,
                model: 'Модель T-51b',
                price: '65990 крышек',
                pic: '../assets/T-51bBAS.png'
            }
        ]
    }
}) 
