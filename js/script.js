var app = new Vue({

    el: "#root",

    data: {

        headerLogo: "img/avada-nightclub-logo.png",

        activeLinkLeft: 0,

        activeLinkRight: this,

        navMenuLeft: [

            {
                linkName: "home",
                linkAddress: "#"
            },

            {
                linkName: "the club",
                linkAddress:" #"
            },

            {
                linkName: "events",
                linkAddress: "#"
            },
        ],

        navMenuRight: [

            {
                linkName: "jobs",
                linkAddress: "#"
            },

            {
                linkName: "news",
                linkAddress: "#"
            },

            {
                linkName: "contact us",
                linkAddress: "#"
            },
        ],
    },

    methods: {

        changeActiveLinkLeft(index) {

            this.activeLinkLeft = index;
        },

        changeActiveLinkRight(index) {

            this.activeLinkRight = index;
        },

        
    }

});