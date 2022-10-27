const {promises:fs}= require('fs');

class Contenedor{
    constructor (ruta){
        this.ruta=ruta;
    }

    async getAll() {
        try {
            let products = await fs.readFile(this.ruta);
            const auxArray = JSON.parse(products)
            return auxArray
        }
        catch {
            return null
        }
    }

    async getRandom(){
        try {
            let products = await this.getAll();
            let random= Math.floor(Math.random()*products.length)
            return products[random]
        } catch {
            return null
        }
    }

}

let products = new Contenedor('./productos.txt');

module.exports= products;