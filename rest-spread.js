arr1=[1,2,3,4,5,6,7,8,9,10]
arr2=[...arr1]
console.log(arr2)
console.log(arr1)

//use spread operator to copy an object

function copy(...obj) {
  console.log(obj);
}
copy({ name: "John", age: 30 }, { city: "New York" }, { country: "USA" });

//map,find,filter,reduce

arr1.map((element)=>{
    console.log(element*2)
})

arrn=arr2.filter((element)=>{
    if(element>5){
        return element
    }
})

arr3=arr1.reduce((accumulator, currentValue)=>{
    return accumulator+currentValue
},0)
arraccumulator=arr1.reduce((accumulator,currvaue)=>{
    return accumulator+currvaue
},0)
arr2.find((element)=>{
    if(element>5){
        return element
    }
})

