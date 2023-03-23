import {
  upperCase,
  localeUpperCase
} from "upper-case";

Page({
  data: {
    pokemon: [],
  },

  onItemClick(ev) {
    my.alert({
      content: ev.detail.index,
    });
  },

  onLoad() {
   this.servicioGet();
  },

  async servicioGet() {

   const response = await my.request({
      url: 'https://pokeapi.co/api/v2/pokemon-species?offset=0&limit=4',
      method: 'GET',
      dataType: 'json',
      success: function(res) {
        my.alert({content: res.data.results});
      }
    })

    console.log(response)

      this.setData({
        pokemon: response.data.results,
      });
      console.log(this.data.pokemon);
    },

});