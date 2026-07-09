// server/data/data.js

const users = [
    // 1. Primary Admin User (Index 0 - Used to create products)
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: '123456', // Password is required, but will be hashed by Mongoose
        isAdmin: true,
    },
    // 2. Primary Test User (Index 1 - Used for test orders)
    {
        name: 'Jane Doe',
        email: 'jane@example.com',
        password: '123456',
        isAdmin: false,
    },
    // 3. Additional Mock Users (18 more for a total of 20)
    {
        name: 'John Smith',
        email: 'john@example.com',
        password: '123456',
        isAdmin: false,
    },
    {
        name: 'Alice Johnson',
        email: 'alice@example.com',
        password: '123456',
        isAdmin: false,
    },
    {
        name: 'Bob Williams',
        email: 'bob@example.com',
        password: '123456',
        isAdmin: false,
    },
    {
        name: 'Cathy Brown',
        email: 'cathy@example.com',
        password: '123456',
        isAdmin: false,
    },
    {
        name: 'David Lee',
        email: 'david@example.com',
        password: '123456',
        isAdmin: false,
    },
    {
        name: 'Eva Miller',
        email: 'eva@example.com',
        password: '123456',
        isAdmin: false,
    },
    {
        name: 'Frank Wilson',
        email: 'frank@example.com',
        password: '123456',
        isAdmin: false,
    },
    {
        name: 'Grace Taylor',
        email: 'grace@example.com',
        password: '123456',
        isAdmin: false,
    },
    {
        name: 'Henry Clark',
        email: 'henry@example.com',
        password: '123456',
        isAdmin: false,
    },
    {
        name: 'Ivy Harris',
        email: 'ivy@example.com',
        password: '123456',
        isAdmin: false,
    },
    {
        name: 'Jack Lewis',
        email: 'jack@example.com',
        password: '123456',
        isAdmin: false,
    },
    {
        name: 'Kelly King',
        email: 'kelly@example.com',
        password: '123456',
        isAdmin: false,
    },
    {
        name: 'Liam Perez',
        email: 'liam@example.com',
        password: '123456',
        isAdmin: false,
    },
    {
        name: 'Mia Scott',
        email: 'mia@example.com',
        password: '123456',
        isAdmin: false,
    },
    {
        name: 'Noah Adams',
        email: 'noah@example.com',
        password: '123456',
        isAdmin: false,
    },
    {
        name: 'Olivia Baker',
        email: 'olivia@example.com',
        password: '123456',
        isAdmin: false,
    },
    {
        name: 'Peter Hall',
        email: 'peter@example.com',
        password: '123456',
        isAdmin: false,
    },
    {
        name: 'Quinn Roberts',
        email: 'quinn@example.com',
        password: '123456',
        isAdmin: false,
    },
];

// ... ensure your products and orders arrays follow directly after this ...

// server/data/data.js

// ... (Your Users and Orders arrays go here) ...

const products = [
    {
        name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
        brand: 'Fjallraven',
        stock: 10, // Assuming 'stock' is 'countInStock'
        rating: 3.9,
        numReviews: 120,
        createdAt: new Date('2025-12-01T10:00:00Z'),
    },
    {
        name: "Mens Casual Premium Slim Fit T-Shirts",
        price: 22.3,
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing...",
        category: "clothing",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
        brand: 'GenericBrand',
        stock: 25,
        rating: 4.1,
        numReviews: 259,
        createdAt: new Date('2025-12-02T10:00:00Z'),
    },
    {
        name: "Mens Cotton Jacket",
        price: 55.99,
        description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing...",
        category: "clothing",
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
        brand: 'GenericBrand',
        stock: 5,
        rating: 4.7,
        numReviews: 500,
        createdAt: new Date('2025-12-03T10:00:00Z'),
    },
    {
        name: "Mens Casual Slim Fit",
        price: 15.99,
        description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person...",
        category: "clothing",
        image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
        brand: 'GenericBrand',
        stock: 15,
        rating: 2.1,
        numReviews: 430,
        createdAt: new Date('2025-12-04T10:00:00Z'),
    },
    {
        name: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
        price: 64.00,
        description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity...",
        category: "electronics",
        image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
        brand: 'WD',
        stock: 12,
        rating: 3.3,
        numReviews: 203,
        createdAt: new Date('2025-12-09T10:00:00Z'),
    },
    {
        name: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        price: 109.00,
        description: "Easy upgrade for faster boot up, shutdown, application load and response...",
        category: "electronics",
        image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png",
        brand: 'SanDisk',
        stock: 18,
        rating: 2.9,
        numReviews: 470,
        createdAt: new Date('2025-12-10T10:00:00Z'),
    },
    {
        name: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        price: 109.00,
        description: "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds...",
        category: "electronics",
        image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png",
        brand: 'Silicon Power',
        stock: 30,
        rating: 4.8,
        numReviews: 319,
        createdAt: new Date('2025-12-11T10:00:00Z'),
    },
    {
        name: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        price: 114.00,
        description: "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design...",
        category: "electronics",
        image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_t.png",
        brand: 'WD',
        stock: 7,
        rating: 4.8,
        numReviews: 400,
        createdAt: new Date('2025-12-12T10:00:00Z'),
    },
    {
        name: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        price: 599.00,
        description: "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology...",
        category: "electronics",
        image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png",
        brand: 'Acer',
        stock: 4,
        rating: 2.9,
        numReviews: 250,
        createdAt: new Date('2025-12-13T10:00:00Z'),
    },
    {
        name: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor",
        price: 999.99,
        description: "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side...",
        category: "electronics",
        image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png",
        brand: 'Samsung',
        stock: 2,
        rating: 2.2,
        numReviews: 140,
        createdAt: new Date('2025-12-14T10:00:00Z'),
    },
    {
        name: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        price: 56.99,
        description: "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester...",
        category: "clothing",
        image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png",
        brand: 'BIYLACLESEN',
        stock: 11,
        rating: 2.6,
        numReviews: 235,
        createdAt: new Date('2025-12-15T10:00:00Z'),
    },
    {
        name: "Loc and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        price: 29.95,
        description: "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER)...",
        category: "clothing",
        image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_t.png",
        brand: 'Lock and Love',
        stock: 14,
        rating: 2.9,
        numReviews: 340,
        createdAt: new Date('2025-12-16T10:00:00Z'),
    },
    {
        name: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        price: 39.99,
        description: "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design...",
        category: "clothing",
        image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png",
        brand: 'GenericRainwear',
        stock: 21,
        rating: 3.8,
        numReviews: 679,
        createdAt: new Date('2025-12-17T10:00:00Z'),
    },
    {
        name: "MBJ Women's Solid Short Sleeve Boat Neck V",
        price: 9.85,
        description: "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch...",
        category: "clothing",
        image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_t.png",
        brand: 'MBJ',
        stock: 50,
        rating: 4.7,
        numReviews: 130,
        createdAt: new Date('2025-12-18T10:00:00Z'),
    },
    {
        name: "Opna Women's Short Sleeve Moisture",
        price: 7.95,
        description: "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk...",
        category: "clothing",
        image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png",
        brand: 'Opna',
        stock: 35,
        rating: 4.5,
        numReviews: 146,
        createdAt: new Date('2025-12-19T10:00:00Z'),
    },
    {
        name: "DANVOUY Womens T Shirt Casual Cotton Short",
        price: 12.99,
        description: "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees...",
        category: "clothing",
        image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png",
        brand: 'DANVOUY',
        stock: 45,
        rating: 3.6,
        numReviews: 145,
        createdAt: new Date('2025-12-20T10:00:00Z'),
    },
];
// server/data/data.js

// ... (Users and Products arrays are defined above this) ...

const orders = [
    {
        // Links to the Admin User (Index 0 in the users array)
        userIndex: 0, 
        orderItems: [
            { 
                // Links to the Fjallraven Backpack (Index 0 in the products array)
                productIndex: 0, 
                name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops', 
                qty: 1, 
                image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
                price: 109.95 
            },
            { 
                // Links to the Mens Cotton Jacket (Index 2 in the products array)
                productIndex: 2, 
                name: 'Mens Cotton Jacket', 
                qty: 2, 
                image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png',
                price: 55.99
            },
        ],
        shippingAddress: {
            address: '456 Admin Avenue',
            city: 'Mongoose City',
            postalCode: '10001',
            country: 'USA'
        },
        paymentMethod: 'PayPal',
        itemsPrice: 221.93, // (109.95 * 1) + (55.99 * 2)
        taxPrice: 15.00,
        shippingPrice: 0.0,
        totalPrice: 236.93,
        isPaid: true,
        paidAt: new Date(Date.now() - 86400000), // Paid 1 day ago
        isDelivered: false,
    },
    {
        // Links to Jane Doe (Index 1 in the users array)
        userIndex: 1, 
        orderItems: [
            { 
                // Links to the WD 2TB External Hard Drive (Index 8 in the products array)
                productIndex: 8, 
                name: 'WD 2TB Elements Portable External Hard Drive - USB 3.0', 
                qty: 1, 
                image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png',
                price: 64.00 
            }
        ],
        shippingAddress: {
            address: '789 Test Street',
            city: 'Reactville',
            postalCode: '90210',
            country: 'USA'
        },
        paymentMethod: 'Stripe',
        itemsPrice: 64.00,
        taxPrice: 4.50,
        shippingPrice: 10.00,
        totalPrice: 78.50,
        isPaid: true,
        paidAt: new Date(Date.now() - 259200000), // Paid 3 days ago
        isDelivered: true,
        deliveredAt: new Date(Date.now() - 86400000) // Delivered 1 day ago
    }
    // You can add more mock orders here if needed
];

module.exports = { users, products, orders };