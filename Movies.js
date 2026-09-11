const Movies=[

    {title: "The Shawshank Redemption", year: 1994, genre: "Drama"},
    {title: "The Godfather", year: 1972, genre: "Crime"},
    {title: "Pulp Fiction", year: 1994, genre: "Crime"}
]

const m1={
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi"
}
Movies.push(m1)
console.log(Movies)
const titles=Movies.filter(m=>m.year==2018&&m.genre=="Action").
sort((a,b)=>a.rating-b.rating)
.reverse()
.map(m=>m.title)
console.log(titles)