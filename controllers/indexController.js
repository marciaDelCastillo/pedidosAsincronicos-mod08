var path = require('path');
const fetch = require("node-fetch");
const indexController = {
    list: async (req,res)=>{
        res.sendFile(path.join(__dirname,"..","home.html"));
    },
    detail: (req,res)=>{

        res.sendFile(path.join(__dirname,"..","formulario.html"));
    },
    create: async (req,res)=>{
        /* try{
            let response = await fetch("http://127.0.0.1:3031/api/movies/create",
            {
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(req.body)
            });
            let result = await response.json();
            console.log(result);
            return res.redirect("/movies");
        }catch(error){
            console.log(error);
        } */
    },
    update: (req,res)=>{
        res.sendFile(path.join(__dirname,"..","formulario.html"));
    },
    destroy: (req,res)=>{

    },

}
module.exports = indexController;