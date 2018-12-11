Vue.component('NavBar', {
    props: ['logo'],
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
        <div class="collapse navbar-collapse col" id="empty">\
        </div>\
    </nav>'
})
new Vue({
    el: '#nav',
    data: {
        logo: { img: '../assets/hlogo.png', url: '../index.html', text: 'West-Tek power armor' },
    }
})