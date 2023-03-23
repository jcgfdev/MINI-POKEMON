Page({
      data: {
        pokemon: [],
        colorP: ""
      },

      async servicioColr(id) {
        const response = await my.request({
          url: `https://pokeapi.co/api/v2/pokemon-species/${id}/`,
          method: 'GET',
          dataType: 'json',
          success: function (res) {              
            this.setData({colorP:res.data.color.name})  
            console.log(this.data.colorP)        
            // return res.data.color.name;
          }
      })

    
  },

  onLoad() {
    this.servicioGet();
    // console.log(await this.servicioColr(1));
  },



  async servicioGet() {
      let prueba;
      my.httpRequest({
        url: 'https://pokeapi.co/api/v2/pokemon-species?offset=0&limit=105',
      }).then((res2) => {
        prueba = res2.data.results;
        this.servicioColr(1)
        console.log(this.data.colorP)
        let arr = Array();
        prueba.forEach(item => {
          let aux = item.url.split('/');


          arr.push({
            nombre: item.name,
            imagen: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${aux[6]}.svg`,
            color: ""
          });
        });

        this.setData({
          pokemon: arr
        });

        // console.log(this.data.colorPokemon)
        console.log(this.data.pokemon);
        // console.log(this.data.list3);

      }, (res) => {
        console.log(res.error, res.errorMessage);
      })
    },




});