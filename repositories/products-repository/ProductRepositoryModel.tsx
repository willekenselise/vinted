let db = require ('../../config')

export interface ProductModel {
    id: number;
    name: string;
    price: number;
}

const productSchema = new db.Schema({
    id: Number,
    name: String,
    price: Number
});

export default productSchema;