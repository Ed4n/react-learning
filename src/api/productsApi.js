import axios, { Axios } from "axios";

// Creamos una instancia de Axios con una URL base y se guarda en una constante
const productsApi = axios.create({
    //se obtiene la url de la api
    baseURL: "http://localhost:3001",
});

/**
 * @returns un array de productos
 */
export const getProducts = async () => {
    // Se hace la petición a la API y se retorna la respuesta
    const response = await productsApi.get("/products")

    return response.data
}
/**
 * 
 * @param {} newProduct 
 * Toma un producto y lo crea en la base de datos
 * @returns objeto con el producto creado
 */
export const createProduct = async (newProduct) => {
    const res = await productsApi.post('/products', newProduct)
    return res
}
/**

 * @param {Object} id 
 * Toma un id y elimina el producto que tenga ese id
 * @returns objeto con el producto que se quiere eliminar
 */
export const deleteProduct = async (id) => {
    const res = await productsApi.delete(`/products/${id}`)
    return res
}
/**
 * @param {Object} product 
 * Toma un producto y lo actualiza en la base de datos
 * @returns objeto con el producto actualizado
 */
export const updateProduct = async (product) => {
    const response = await productsApi.put(`/products/${product.id}`, product)
}






