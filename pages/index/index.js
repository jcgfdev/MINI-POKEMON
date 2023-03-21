Page({
  data:{
    pokemon:[],
    list3: [
      {
        icon: 'https://img.example.com/example1.png',
        text: 'Titulo',
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
    onItemClick(ev) {
      my.alert({
        content: ev.detail.index,
      });
    },
  },
  
  
  onLoad() {
      this.servicioGet();
    },
      servicioGet(){
      let prueba;
      my.httpRequest({
        url: 'https://pokeapi.co/api/v2/pokemon-species?offset=0&limit=4',        
      }).then((res2) => {   
        prueba = res2.data.results;    

        let arr = Array();
      prueba.forEach(item => {
        arr.push({
          nombre:item.name      
         
        });        
      });    
       
        this.setData({pokemon:arr}); 

        console.log(this.data.list3);
        console.log(this.data.pokemon);
      
        },(res) => {     
        console.log(res.error, res.errorMessage);
      })
    }
 
});
