const $ = id => document.getElementById(id);
window.onload = async () => {
  const app = document.getElementById("root");
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  app.appendChild(container);
  if(!sessionStorage.getItem("favoritas")){
    sessionStorage.setItem("favoritas",JSON.stringify([]));
    $("favoritas").style.display="none";
  }else if(JSON.parse(sessionStorage.getItem("favoritas")).length>0){
    $("favoritas").style.display="inline-block";
  }
  // Aqui debemos agregar nuestro fetch
  try{
    let response = await fetch("http://127.0.0.1:3031/api/movies");
    let peliculas = await response.json();
    let data = peliculas.data;
    console.log(peliculas);
    data.forEach((movie) => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const h1 = document.createElement("h1");
      h1.textContent = movie.title;
      /* const image = document.createElement("div");
      image.style.width='20px';
      image.style.height="20px";
      image.style.backgroundImage= "/images/Estrella_amarilla.png" */

      const p = document.createElement("p");
      p.textContent = `Rating: ${movie.rating}`;

      const duracion = document.createElement("p");
      duracion.textContent = `Duración: ${movie.length}`;

      const favoritos = document.createElement("a");
      favoritos.textContent = `Agregar a favoritos`;
      favoritos.setAttribute("id", movie.id);
      favoritos.addEventListener("click",()=>{
        let vector = JSON.parse(sessionStorage.getItem("favoritas"));
        vector.push(movie.id);
        sessionStorage.setItem("favoritas",JSON.stringify(vector));
        alert("Pelicula agregada a favoritas");
        $("favoritas").style.display="inline-block";
      })

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
      if (movie.genre !== null) {
        const genero = document.createElement("p");
        genero.textContent = `Genero: ${movie.genre.name}`;
        card.appendChild(genero);
      }
      card.appendChild(duracion);
      card.appendChild(favoritos);
    });
  }catch(e){
    console.log(e);
  }

  $("favoritas").addEventListener("click",()=>{
    location.href = "http://localhost:3000/favoritas"
  })


  
};

