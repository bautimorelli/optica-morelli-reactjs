const itemArray = [
    {id: 100, title: "Rayban Aviador", category:"lentesDeSol", brand:"Rayban", price:"25.000", pictureURL:"/images/rayban-aviador.jpg", pictureAlt:"Rayban Aviador"},
    {id: 101, title: "Rayban Wayfarer", category:"lentesDeSol", brand:"Rayban", price:"28.000", pictureURL:"/images/rayban-aviador.jpg", pictureAlt:"Rayban Wayfarer"},
    {id: 102, title: "Rayban Clubmaster", category:"lentesDeSol", brand:"Rayban", price:"30.000", pictureURL:"/images/rayban-aviador.jpg", pictureAlt:"Rayban Clubmaster"},
    {id: 103, title: "Blue Dot 6121", category:"lentesRecetados", brand:"Blue Dot", price:"7.000", pictureURL:"/images/blue-dot-6117.jpeg", pictureAlt:"Blue Dot 6121"},
    {id: 104, title: "Blue Dot 6133", category:"lentesRecetados", brand:"Blue Dot", price:"8.000", pictureURL:"/images/blue-dot-6117.jpeg", pictureAlt:"Blue Dot 6133"},
    {id: 105, title: "Blue Dot 6117", category:"lentesRecetados", brand:"Blue Dot", price:"9.000", pictureURL:"/images/blue-dot-6117.jpeg", pictureAlt:"Blue Dot 6117"},
    {id: 106, title: "Renu Fresh 500ML", category:"contactologia", brand:"Renu", price:"1.650", pictureURL:"/images/renu-fresh.jpeg", pictureAlt:"Renu Fresh 500ML"},
    {id: 107, title: "Renu Fresh 355ML", category:"contactologia", brand:"Renu", price:"1.390", pictureURL:"/images/renu-fresh.jpeg", pictureAlt:"Renu Fresh 355ML"},
    {id: 108, title: "Renu Fresh 60ML", category:"contactologia", brand:"Renu", price:"510", pictureURL:"/images/renu-fresh.jpeg", pictureAlt:"Renu Fresh 60ML"}
]

export const data = new Promise((res) => {
    setTimeout(() => {
        res(itemArray)
    }, 2000);
})