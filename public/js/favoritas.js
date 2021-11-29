window.onload = async () => {
  const app = document.getElementById("root");
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  app.appendChild(container);
  let idFavoritas = JSON.parse(sessionStorage.getItem("favoritas"));
  if(idFavoritas.length>0){
    // Aqui debemos agregar nuestro fetch
    try{
      let response = await fetch("http://127.0.0.1:3031/api/movies");
      let peliculas = await response.json();
      let data = peliculas.data;
      let favoritas = [];
      for(let i=0;i<data.length;i++){
        if(idFavoritas.includes(data[i].id)){
          favoritas.push(data[i])
        }
      }
      favoritas.forEach((movie) => {
        const card = document.createElement("div");
        card.setAttribute("class", "card");

        const h1 = document.createElement("h1");
        h1.textContent = movie.title;

        const p = document.createElement("p");
        p.textContent = `Rating: ${movie.rating}`;

        const duracion = document.createElement("p");
        duracion.textContent = `Duración: ${movie.length}`;

        container.appendChild(card);
        card.appendChild(h1);
        card.appendChild(p);
        if (movie.genre !== null) {
          const genero = document.createElement("p");
          genero.textContent = `Genero: ${movie.genre.name}`;
          card.appendChild(genero);
        }
        card.appendChild(duracion);
      });
    }catch(error){
      console.log(error)
    }
  }else{
    const h1 = document.createElement("h1");
    h1.textContent = "Aún no ha seleccionado películas favoritas";
    container.appendChild(h1);
  }
  
 
};
