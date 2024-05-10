type Product = {
    _createdAt : string,
    _updatedAt : string,
    _type : string,
    _id : string,
    "image" : string[],
    name : string,
    description : string,
    price : number,
    "slug" : string, 
    quantity : number
}

type ContextType = {
    quantity : number,
    cartItems : Product[],
    totalQuantity : number,
    totalPrice : number,
    incQuantity : ()=>void,
    decQuantity : ()=>void,
    onAdd : (product: Product, quantity : number)=>void,
    toggleQuantityCart : (avlue: string, product : Product)=>void,
    onRemove : (product : Product)=>void
  }