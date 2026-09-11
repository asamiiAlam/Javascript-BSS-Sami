const circle={
    radius: 5,
    get area(){
        return Math.PI * this.radius * this.radius;
    }
}

console.log(circle.area);
