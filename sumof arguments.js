 function sum(...items){
    if (items.length === 1 && Array.isArray(items[0]) ) {
     items=[...items[0]];
    }

    return items.reduce((acc, item) => acc + item, 0);


 }