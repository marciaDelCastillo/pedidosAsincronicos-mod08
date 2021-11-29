const $ = id => document.getElementById(id);
window.onload = async () => {
    //capturo inputs
    let title = $("title");
    let rating = $("rating");
    let awards = $("awards");
    let release_date = $("release_date");
    let length = $("length");
    let id = -1;
    console.log(location.href);
    //si no estoy aqui para crear nueva pelicula, cargo datos de pelicula en bd
    if(location.href != 'http://localhost:3000/create'){
        let idInput = $("id");
        let cad = location.href.split("/");
        console.log(cad);
        id = cad[cad.length-1];
        try{
            let response = await fetch("http://127.0.0.1:3031/api/movies/"+id);
            let result = await response.json();
            let pelicula = result.data;
            idInput.value = pelicula.id;
            title.value = pelicula.title;
            rating.value = pelicula.rating;
            awards.value = pelicula.awards;
            let f = new Date(pelicula.release_date); 
            release_date.value = f.getFullYear()+"-"+(f.getMonth() +1)+"-"+f.getDate();
            length.value = pelicula.length;
            console.log(pelicula);


        }catch(error){
            console.log(error)
        }

    }
    $("btnCrear").addEventListener("click",async (event)=>{
        event.preventDefault();
        console.log(id);
        if(id==-1){
            let body = {
                title: title.value,
                rating: rating.value,
                awards: awards.value,
                length: length.value,
                release_date: release_date.value
            }
            try{
                let response = await fetch("http://127.0.0.1:3031/api/movies/create",
                {
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify(body)
                });
                let result = await response.json();
                console.log(result);
                if(result.meta.status == 200){
                    alert("Pelicula agregada con exito")
                    location.href = "http://localhost:3000";
                }
                
            }catch(error){
                console.log(error);
            }
        }else{
            alert("Usted no puede volver a crear una película ya existente");
        }
        
    })

    $("btnEditar").addEventListener("click",async (event)=>{
        event.preventDefault();
        if(id!=-1){
            let body = {
                title: title.value,
                rating: rating.value,
                awards: awards.value,
                length: length.value,
                release_date: release_date.value
            }
            try{
                let response = await fetch("http://127.0.0.1:3031/api/movies/update/"+id,
                {
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                    },
                    method: "PUT",
                    body: JSON.stringify(body)
                });
                let result = await response.json();
                console.log(result);
                if(result.meta.status == 200){
                    alert("Pelicula modificada con exito")
                    location.href = "http://localhost:3000";
                }
                
            }catch(error){
                console.log(error);
            }
        }else{
            alert("Usted no puede editar una película que aún no fue cargada")
        }
        
    })

    $("btnEliminar").addEventListener("click",async (event)=>{
        event.preventDefault();
        if(id!=-1){
            let body = {
                title: title.value,
                rating: rating.value,
                awards: awards.value,
                length: length.value,
                release_date: release_date.value
            }
            try{
                let response = await fetch("http://127.0.0.1:3031/api/movies/delete/"+id,
                {
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                    },
                    method: "DELETE"
                });
                let result = await response.json();
                console.log(result);
                if(result.meta.status == 200){
                    alert("Pelicula eliminada con exito")
                    location.href = "http://localhost:3000";
                }
                
            }catch(error){
                console.log(error);
            }
        }else{
            alert("Usted no puede eliminar una película que aún no fue cargada")
        }
        
    })

}