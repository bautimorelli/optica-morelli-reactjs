const itemArray = [
	{
		id: 100,
		name: "Rayban Aviador",
		category: "lentesDeSol",
		brand: "Rayban",
		price: 25000,
		pictureURL: "/images/rayban-aviador.jpg",
		pictureAlt: "Rayban Aviador",
		stock: 10,
	},
	{
		id: 101,
		name: "Rayban Wayfarer",
		category: "lentesDeSol",
		brand: "Rayban",
		price: 28000,
		pictureURL: "/images/rayban-aviador.jpg",
		pictureAlt: "Rayban Wayfarer",
		stock: 10,
	},
	{
		id: 102,
		name: "Rayban Clubmaster",
		category: "lentesDeSol",
		brand: "Rayban",
		price: 30000,
		pictureURL: "/images/rayban-aviador.jpg",
		pictureAlt: "Rayban Clubmaster",
		stock: 10,
	},
	{
		id: 103,
		name: "Blue Dot 6121",
		category: "lentesRecetados",
		brand: "Blue Dot",
		price: 7000,
		pictureURL: "/images/blue-dot-6117.jpeg",
		pictureAlt: "Blue Dot 6121",
		stock: 10,
	},
	{
		id: 104,
		name: "Blue Dot 6133",
		category: "lentesRecetados",
		brand: "Blue Dot",
		price: 8000,
		pictureURL: "/images/blue-dot-6117.jpeg",
		pictureAlt: "Blue Dot 6133",
		stock: 10,
	},
	{
		id: 105,
		name: "Blue Dot 6117",
		category: "lentesRecetados",
		brand: "Blue Dot",
		price: 9000,
		pictureURL: "/images/blue-dot-6117.jpeg",
		pictureAlt: "Blue Dot 6117",
		stock: 10,
	},
	{
		id: 106,
		name: "Renu Fresh 500ML",
		category: "contactologia",
		brand: "Renu",
		price: 1650,
		pictureURL: "/images/renu-fresh.jpeg",
		pictureAlt: "Renu Fresh 500ML",
		stock: 10,
	},
	{
		id: 107,
		name: "Renu Fresh 355ML",
		category: "contactologia",
		brand: "Renu",
		price: 1390,
		pictureURL: "/images/renu-fresh.jpeg",
		pictureAlt: "Renu Fresh 355ML",
		stock: 10,
	},
	{
		id: 108,
		name: "Renu Fresh 60ML",
		category: "contactologia",
		brand: "Renu",
		price: 510,
		pictureURL: "/images/renu-fresh.jpeg",
		pictureAlt: "Renu Fresh 60ML",
		stock: 10,
	},
];

export function fetchCategoria(id) {
	return new Promise((res) => {
		setTimeout(() => {
			let result = itemArray.filter((item) => item.category === id);
			if (result.length === 0) {
				// Si no encuentra la categoria devuelve todos los items
				result = itemArray;
			}

			res(result);
		}, 0);
	});
}

export function fetchItem(id) {
	return new Promise((res) => {
		setTimeout(() => {
			res(itemArray.find((item) => item.id === parseInt(id)));
		}, 0);
	});
}
