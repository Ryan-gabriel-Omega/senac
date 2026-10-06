 import {data} from '../data/data';
 
export function getAllProducts() {
    return data.products;
}
 
export function getProductById(pid: number) {
    return data.products.find(item=>item.id === pid);
}
 
export function getProductsByCategory(pIdCategory: number) {
    return data.products.filter(item => item.idCategory === pIdCategory);
}
 