Vue.component('cart', {
    props: ['armors'],
    template: '\
    <div>\
        <div v-for="armor in armors" class="row m-2">\
            <div class="col"><img class="bg-light rounded border border-dark simage" :src="armor.pic"></div>\
            <div class="col">{{armor.model}}</div>\
            <div class="col"><input placeholder="1" class="w-25 d-sm-none d-md-none d-lg-inline" type="number"></div>\
            <div class="col">{{armor.price}}</div>\
        </div>\
    </div>'
})

new Vue({
    el: '#cart',
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