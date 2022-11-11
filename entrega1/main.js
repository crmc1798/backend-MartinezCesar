class contenedor {
    #set
    constructor() {
        this.#set = [];
    }

    save(id, title, price, thumbnail) {
        this.#set.push({
            id: (id),
            title: (title),
            price: (price),
            thumbnail: (thumbnail)
        })
    }

    getAll() {
        return this.#set
    }

    getById(id) {
        const solicitarItem = this.#set.find((e) => e.id === id)
        if (solicitarItem === undefined) {
            return "No hay elemento con ese id"
        } else {
            return solicitarItem
        }
    }

    deleteById(id) {
        for (let j = 0; j < this.#set.length; j++) {
            if (this.#set[j].id === id) {
                this.#set.splice(j, 1)
            }
        }
    }

    deleteAll() {
        this.#set.splice(0, this.#set.length + 1)
    }

}


const producto1 = {
    id: "1",
    title: "Trustmaster t150",
    price: 5000,
    thumbnail: "https://www.discoazul.com/uploads/media/images/t150rs-ps.jpg"
}

const producto2 = {
    id: "2",
    title: "Trustmaster TMX",
    price: 5000,
    thumbnail: "https://c1.neweggimages.com/ProductImage/26-606-035-S03.jpg"
}

const producto3 = {
    id: "3",
    title: "Trustmaster t300",
    price: 10000,
    thumbnail: "https://m.media-amazon.com/images/I/81eiBUipVVL.jpg"
}

const producto4 = {
    id: "4",
    title: "logitech g29",
    price: 5000,
    thumbnail: "https://tiendasarcadia.com/wp-content/uploads/nc/p/1/7/1/6/7/17167.jpg"
}

const producto5 = {
    id: "5",
    title: "logitech g920",
    price: 5000,
    thumbnail: "https://m.media-amazon.com/images/I/713hqmmfGSL._AC_SY450_.jpg"
}

const container = new contenedor();
console.log("Se declaran 5 productos haciendo uso del metodo save()");
container.save(producto1.id, producto1.title, producto1.price, producto1.thumbnail);
container.save(producto2.id, producto2.title, producto2.price, producto2.thumbnail);
container.save(producto3.id, producto3.title, producto3.price, producto3.thumbnail);
container.save(producto4.id, producto4.title, producto4.price, producto4.thumbnail);
container.save(producto5.id, producto5.title, producto5.price, producto5.thumbnail);

console.log("Se despliegan todos los elementos del arreglo de objetos con el metodo getAll()");
console.log(container.getAll());


console.log("Se hace un llamado por id al arreglo de objetos y en caso de existir uno con ese id desplegarlo, en caso de que no, desplegar un mensaje con el metodo getById(id)");
console.log(container.getById("5"));
console.log(container.getById("7"));


console.log("Se elimina un elemento del array por el id en este caso el primero con el metodo deleteById(id), despues se hace un despliegue de todos los elementos sobrantes con getAll()");
container.deleteById("1");
console.log(container.getAll());


console.log("Por ultimo se borran todos los elementos del arreglo con el metodo deleteAll() y para comprobar que se realizo el cambio se despliega el arreglo con getAll()");
container.deleteAll();
console.log(container.getAll());