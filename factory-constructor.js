let address={
    "street":"123 Main St",
    "city":"Anytown",
    "zipCode":"12345"
}
let address1=createAddress('123 Main St','Anytown','12345');
console.log(address1);

function createAddress(street,city,zipCode){
   return{
    street:street,
    city:city,
    zipCode:zipCode

   }

}
function createAddress2(street,city,zipCode){
 this.street=street;
 this.city=city;
 this.zipCode=zipCode;

}
let address2=new createAddress2('123 Main St','Anytown','12345');
console.log(address2);