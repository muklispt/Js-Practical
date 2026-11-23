// another example with import and  export default usgin array
export const products = [
    {id:1,name:'Phone',price:20000},
    {id:2,name:'Laptop',price:50000},
    {id:3,name:'Watch',price:5000}
]

export const getProductName = () =>{
    return products.map(product=> product.name);
};

const getTotalProducts = () => {
    return products.length;
};

export default getTotalProducts;