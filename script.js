let jsonURL = "https://www.luizpicolo.com.br/api.json"; 
let XHR = new XMLHttpRequest();
XHR.open("GET", jsonURL);
XHR.responseType = "json";
XHR.send();

XHR.onload = function(){
  let noticias = XHR.response;

  class Noticia {
  constructor(titulo, resumo, data,  autor,url ){
    this.titulo = titulo;
    this.resumo = resumo;
    this. data =  data;
    this.autor = autor;
    this.url = url;
  }

 mostrarNoticia(){
    return ` <div class="bodypricipal">
             <div class="bodynoticia">
            <a href="${this.url}"><h2 class="tituloNoticia">${this.titulo}</h2></a> 
             <h3 class="resumos">${this.resumo}</h3>
            <h2 class="DataPubli">${this.data} <h2> 
            <p>${this.autor}</p> 
           
          </div>
           </div>
`;
  }
  }
 class NoticiaDestaque extends Noticia{
	constructor(titulo, data, resumo, autor,url ,imagem){
    super(titulo, data, resumo, autor,url)
    this.imagem= imagem;
  } 
    	 mostrarDestaque(){
    return ` <div class="noticia">
             <div class="bodydistaque">
            <img src="${this.imagem}" id="img"/>
            <a href="${this.url}"><h2 class="tituloDestaque">${this.titulo}</h2></a> 
            <h3 class="resumoDestaque">${this.resumo}</h3>
            <h2 class="dataDestaque">${this.data}<h2>
            <p class="autorDestaque">${this.autor}</p> 
           </div>
           </div>
`;
  }
    erro(){
      if(this.url=== this.url && this.url &&this.autor===this.autor&&this.resumo===this.resumo&&this.data=== this.data ){
        return this.mostrarNoticia();
      } else{
         throw new Noticia( "Noticia indisponível.")
      }
  }
}
   let lends= new NoticiaDestaque (
     noticias.articles[0].title,
     noticias.articles[0].publishedAt,
     noticias.articles[0].description,
     noticias.articles[0].author,
     noticias.articles[0].url,
     noticias.articles[0].urlToImage);
  const principal = document.getElementById('noticiadestaque');
   principal.insertAdjacentHTML('afterbegin',lends.mostrarDestaque());
  

 const outra = document.getElementById('noticias');
  noticias.articles.forEach(noticia =>{
    let news = new Noticia(noticia.title, noticia.description,noticia.publishedAt, noticia.author,noticia.url);
   outra.insertAdjacentHTML('beforeend', news.mostrarNoticia());
  })
  };

