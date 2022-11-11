const fs = require("fs");

class Contenedor {
	constructor(nombre) {
		this.nombre = nombre;
	}

	async getAll() {
		try {
			const contenido = await fs.promises.readFile(this.nombre, "utf-8");
			const data = JSON.parse(contenido);
			console.log(data);
			return data;
		} catch (error) {
			console.log("No se encontro archivo");
		}
	}

	async save(object) {
		try {
            const data = await fs.promises.readFile(this.nombre, "utf-8");
            const json = JSON.parse(data);
            let newJson;
            if (json.length) {
                object.id = json[json.length - 1].id + 1;
                 newJson=JSON.stringify([...json, object], null, 2);
              await fs.promises.writeFile(this.nombre, newJson);
            } else {
                object.id = 1;
                 newJson=JSON.stringify([object], null, 2);
              await fs.promises.writeFile(this.nombre, newJson);
            }
            //await this.getAll();
            console.log("Se agrego nuevo producto con exito.");
            return object.id;
          } catch (error) {
            console.log(error);
          }
        }
	async getById(id) {
		try {
            const data = await fs.promises.readFile(this.nombre, "utf-8");
            const json = JSON.parse(data);
            const prod = json.find((item) => item.id === id);
            if (!prod) return console.log("No existe el producto con ese id");
            console.log(prod);
            return prod;
          } catch (error) {
            console.log(error);
          }
	}
	async deleteAll() {
		try {
            const data = await fs.promises.readFile(this.nombre, "utf-8");
            const json = JSON.parse(data);
            if (!json.length) return console.log("No hay productos que eliminar");
            console.log("Se eliminaron todos los productos");
            return await fs.promises.writeFile(this.nombre, JSON.stringify([]));
          } catch (error) {
            console.log(error);
          }
	}

	async deleteById(id) {
		try {
            const data = await fs.promises.readFile(this.nombre, "utf-8");
            const json = JSON.parse(data);
            const prod = await this.getById(id);
            if (prod) {
              const newJson = json.filter((item) => item.id !== id);
              await fs.promises.writeFile(this.nombre, JSON.stringify(newJson, null, 2));
              console.log("el producto del id="+id+" se logro eliminar")
            }
            
          } catch (error) {
            console.log(error);
            console.log("el producto del id="+id+" no se logro eliminar")
          }
	}
}

const contenedor = new Contenedor("./productos.txt");

//Descomentar cada linea para probar por separado los metodos


contenedor.getAll();
//contenedor.save({ title: "logitech g29", price: 5000, thumbnail: "https://tiendasarcadia.com/wp-content/uploads/nc/p/1/7/1/6/7/17167.jpg"});
//contenedor.getById(4);
//contenedor.deleteById(4);
//contenedor.deleteAll();