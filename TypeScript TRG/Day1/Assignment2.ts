var product_name:string = "iPhone 12";
var unit_price:number = 50000;
var quantity:number = 10;
enum discount_type {HAPPY20 = 0.2, SUPER50 = 0.5};
enum delivery_mode {Home = 30, Self = 0};

function process_order(product_name, unit_price, quantity, coupon:string, delivery:string) : void {

    console.log("\n")

    switch(coupon){

        case "HAPPY20" : {

            if(delivery == "Home"){
                console.log("Order Details\n------------------");
                console.log("Product Name : "+product_name);
                console.log("Product Price : "+unit_price);
                console.log("Quantity : "+quantity);
                let total:number = (unit_price*quantity);
                total = total - total * discount_type["HAPPY20"] + delivery_mode["Home"];
                console.log("Total Price after applying HAPPY20 : "+ total);
                console.log("Deliver Mode : Home Delivery");
            }
            else{
                console.log("Order Details\n------------------");
                console.log("Product Name : "+product_name);
                console.log("Product Price : "+unit_price);
                console.log("Quantity : "+quantity);
                let total:number = unit_price*quantity;
                total = total - total * discount_type["HAPPY20"];
                console.log("Total Price after applying HAPPY20 : "+ total);
                console.log("Deliver Mode : Self Pickup");
            }
            break;
        }

        case "SUPER50" : {
            if(delivery == "Home"){
                console.log("Order Details\n------------------");
                console.log("Product Name : "+product_name);
                console.log("Product Price : "+unit_price);
                console.log("Quantity : "+quantity);
                let total:number = unit_price*quantity;
                total = total - total * discount_type["SUPER50"] + delivery_mode["Home"];
                console.log("Total Price after applying SUPER50 : "+ total);
                console.log("Deliver Mode : Home Delivery");
            }
            else{
                console.log("Order Details\n------------------");
                console.log("Product Name : "+product_name);
                console.log("Product Price : "+unit_price);
                console.log("Quantity : "+quantity);
                let total:number = unit_price*quantity;
                total = total - total * discount_type["SUPER50"];
                console.log("Total Price after applying SUPER50 : "+ total);
                console.log("Deliver Mode : Self Pickup");
            }
            break;
        }

        default : {
            console.log("\nIncorrect Coupon Code");
            break;
        }
    }    

}

process_order(product_name, unit_price, quantity, "SUPER50","Home");
process_order(product_name, unit_price, quantity, "HAPPY20","Self");
process_order(product_name, unit_price, quantity, "NEW100","Self");
