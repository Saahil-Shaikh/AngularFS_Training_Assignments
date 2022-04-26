class ProductDetails{

    private productId:number;
    private productName:string;
    private unitPrice:number;
    private qty:number

    constructor(productId:number){
        this.productId = productId;
    }

    public get ProductId():number{
        return this.productId
    }

    public get ProductName():string{
        return this.productName
    }

    public set ProductName(productName:string){
        this.productName = productName;
    }

    public get UnitPrice():number{
        return this.unitPrice;
    }

    public set UnitPrice(unitPrice:number){
        this.unitPrice = unitPrice;
    }

    public get Quantity():number{
        return this.qty
    }

    public set Quantity(qty:number){
        this.qty = qty;
    }

}

let p1:ProductDetails = new ProductDetails(100);
p1.ProductName = "iPhone12";
p1.Quantity = 10;
p1.UnitPrice = 50000;

console.log("Product ID : " + p1.ProductId + ", Product Name : " + p1.ProductName + ", Product Quantity : " + p1.Quantity + ", Product Unit Price : " + p1.UnitPrice);