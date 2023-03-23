Page({
  data: {
    pokemon: [],
    colores:[],
    list3: [
      {
        icon: 'https://img.example.com/example1.png',
        text: 'Title',
        desc: 'text',
      },
      {
        icon: 'https://img.example.com/example2.png',
        text: 'Title',
        desc: 'text',
      },
      {
        icon: 'https://img.example.com/example3.png',
        text: 'Title',
        desc: 'text',
      },
      {
        icon: 'https://img.example.com/example4.png',
        text: 'Title',
        desc: 'text',
      },
      {
        icon: 'https://img.example.com/example5.png',
        text: 'Title',
        desc: 'text',
      },
      {
        icon: 'https://img.example.com/example6.png',
        text: 'Title',
        desc: 'text',
      },
      {
        icon: 'https://img.example.com/example7.png',
        text: 'Title',
        desc: 'text',
      },
      {
        icon: 'https://img.example.com/example8.png',
        text: 'Title',
        desc: 'text',
      },
      {
        icon: 'https://img.example.com/example9.png',
        text: 'Title',
        desc: 'text',
      },
    ],
  },

  async servicioColr() {
    try {
      const response = await my.request({
        url: 'https://pokeapi.co/api/v2/pokemon-color',
        method: 'GET',
        dataType: 'json',
      });
      this.setData({
        colores: response.data.results        
      })
     
      // response.data.results.forEach(item => {

       
      // this.data.colores.push({        
      //   ruta: item.url,       
      // });
      console.log(this.data.colores)
    // });     
    } catch (error) {
      console.error(error);
    }
  },

   async contenidoColor(){   
    console.log(await this.data.colores)
      
       this.data.colores.forEach(async (item) => {
        console.log( item)
        
      const response = await my.request({
        url: item.url,
        method: 'GET',
        dataType: 'json',
      });
     
      console.log(response);
    });     
   
  },

  onLoad() {
    // this.servicioGet();
    setTimeout(this.contenidoColor(), 5)
   this.servicioColr()


    
    // this.servicioColr(),
    // this.xContenidoColor(),
    
  },

  servicioGet() {
    my.httpRequest({
      url: 'https://pokeapi.co/api/v2/pokemon-species?offset=0&limit=5',
    }).then((res2) => {
     
      res2.data.results.forEach(item => {
        let aux = item.url.split('/');
       
          this.data.pokemon.push({
            nombre: item.name,
            imagen: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${aux[6]}.svg`,
            color: "prueba"
          });
        
      });

      console.log(this.data.pokemon);
      console.log(this.data.list3);
    }, (res) => {
      console.log(res.error, res.errorMessage);
    })
  },
});