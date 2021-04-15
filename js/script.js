var app = new Vue({

    el: "#root",

    data: {

        headerLogo: "img/avada-nightclub-logo.png",

        footerLogo: "img/avada-nightclub-logo-2x-200x66.png",

        copyRight: "© 2021 Avada. All Rights Reserved",

        activeLinkLeft: 0,

        activeLinkRight: this,

        navVisible:  false,

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

        footerNavMenu: [

            {
                linkName: "Home",
                linkAddress: "#"
            },

            {
                linkName: "About",
                linkAddress: "#"
            },

            {
                linkName: "Contact",
                linkAddress: "#"
            },

            {
                linkName: "Products",
                linkAddress: "#"
            },

            {
                linkName: "Styleguide",
                linkAddress: "#"
            },
        ],

        emailLinks: [

            {
                emailName: "nightclub@avada.com",
                link: "#"
            }
        ],

        socialLinks: [

            'fab fa-facebook-square',

            'fab fa-twitter',

            'fab fa-instagram',

            'fab fa-youtube',
        ],
    },

    methods: {

        changeActiveLinkLeft(index) {

            this.activeLinkLeft = index;

        },

        changeActiveLinkRight(index) {

            this.activeLinkRight = index;
        },

        scrollToTop() {

            window.scrollTo({

                top: 0,

                left: 0,
                
                behavior: 'smooth'
            });
        },

        showMenu: function() {
            
            this.navVisible = true;
            
        },

        hideMenu: function() {
            
            this.navVisible = false;
            
        }

    }   

});