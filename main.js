const app = new Vue({
    el: '#app',
    data: {
        world: [],
        countries: []
    },
    methods: {

        getWorldInfo() {

            let self = this;

            axios.get('https://corona.lmao.ninja/all')
                .then(function(response) {

                    self.world = response.data;
                })
                .catch(function(error) {

                    console.log(error);
                });
        },

        getCountriesInfo() {

            let self = this;

            axios.get('https://corona.lmao.ninja/countries')
                .then(function(response) {

                    self.countries = response.data;
                })
                .catch(function(error) {

                    console.log(error);
                });
        }
    },
    mounted() {

        this.getCountriesInfo();
        this.getWorldInfo();

        setInterval(() => {

            this.getCountriesInfo();
            this.getWorldInfo();

        }, 1800000);
    },
});