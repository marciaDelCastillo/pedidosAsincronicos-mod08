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
        
    },
    update: (req,res)=>{
        res.sendFile(path.join(__dirname,"..","formulario.html"));
    },
    destroy: (req,res)=>{

    },
    favoritas: (req,res)=>{
        res.sendFile(path.join(__dirname,"..","favoritas.html"));
    }

}
module.exports = indexController;