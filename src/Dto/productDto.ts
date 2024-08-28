
class Product{
    private _name: string;
    private _description: string;
    private _price: number;

    constructor(
            name: string,
            descriptio: string,
            price: number
    ){
        this._name = name;
        this._description = descriptio;
        this._price = price
    }

    get name(): string{
        return this._name;
    }

    get description(): string{
        return this._description;
    }

    get price(): number{
        return this._price;
    }

    set name(name: string){
        this._name = name;
    }

    set description(description: string){
        this._description = description;
    }

    set price(price: number){
        this._price = price;
    }


}

export default Product;