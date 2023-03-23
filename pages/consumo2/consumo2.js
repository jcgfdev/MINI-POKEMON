Page({
  data: {
    pokemon: [],   
  },

  async servicioColr(id) {
    try {
      const response = await my.request({
        url: `https://pokeapi.co/api/v2/pokemon-species/${id}/`,
        method: 'GET',
        dataType: 'json',
      });
      return response.data.color.name;
    } catch (error) {
      console.error(error);
    }
  },

  onLoad() {
    this.servicioGet();
  },

  servicioGet() {
    let prueba;
    my.httpRequest({
      url: 'https://pokeapi.co/api/v2/pokemon-species?offset=0&limit=5',
    }).then((res2) => {
      prueba = res2.data.results;
      prueba.forEach((item, index, array) => {
        let aux = item.url.split('/');
        this.servicioColr(aux[6]).then(res => {

          array[index] = {
            name: item.name,
            url: item.url,
            imagen: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${aux[6]}.svg`,
            color: res
          };

        })
      });
      this.setData({
        pokemon: prueba
      });
      console.log(this.data.pokemon);
    }, (res) => {
      console.log(res.error, res.errorMessage);
    })
  },
});