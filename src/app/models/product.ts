export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
    constructor(id, name, description = '', price = 0, image, quantity) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
        this.quantity = quantity;
    }
}
