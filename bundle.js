"use strict";

var app = new Vue({
  el: '#app',
  data: {
    world: [],
    countries: []
  },
  methods: {
    getWorldInfo: function getWorldInfo() {
      var self = this;
      axios.get('https://corona.lmao.ninja/all').then(function (response) {
        self.world = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getCountriesInfo: function getCountriesInfo() {
      var self = this;
      axios.get('https://corona.lmao.ninja/countries').then(function (response) {
        self.countries = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.getCountriesInfo();
    this.getWorldInfo();
    setInterval(function () {
      _this.getCountriesInfo();

      _this.getWorldInfo();
    }, 60000);
  }
});
