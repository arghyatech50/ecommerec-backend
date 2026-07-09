// server/seeder.js

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { users, products, orders } = require('./DATA/data.js'); 
const connectDB = require('./db.js');

require('./models/User.js'); 
require('./models/Product.js'); 
require('./models/Order.js');

// Load environment variables (to get your MONGODB_URI)
dotenv.config();

// Execute the DB connection function
connectDB();

const importData = async () => {
    try {
        // --- Access Models Here ---
        // This is a robust way to ensure we get the Mongoose Models
        const User = mongoose.model('User');
        const Product = mongoose.model('Product');
        const Order = mongoose.model('Order');
        // --------------------------

        // A. CLEANUP: Clear existing data 
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
        console.log('✅ Existing data destroyed.');

        // B. INSERT USERS and capture the IDs
        const createdUsers = await User.insertMany(users);
        const adminUser = createdUsers[0]._id; 

        // C. ATTACH ADMIN ID TO PRODUCTS and capture the IDs
        const sampleProducts = products.map(product => {
            return { ...product, user: adminUser };
        });
        const createdProducts = await Product.insertMany(sampleProducts);
        
        console.log('🎉 Products and Users successfully imported.');

        // D. INSERT ORDERS (Assigning IDs)
        if (orders.length > 0) {
            const ordersWithReferences = orders.map(order => {
                // 1. Assign correct User ID
                const user = createdUsers[order.userIndex]._id;

                // 2. Assign correct Product IDs to the order items
                const orderItemsWithIds = order.orderItems.map(item => {
                    const productDocument = createdProducts.find(p => p.name === item.name);
                    
                    return {
                        ...item,
                        product: productDocument._id, 
                    };
                });

                return {
                    ...order,
                    user,
                    orderItems: orderItemsWithIds,
                };
            });

            await Order.insertMany(ordersWithReferences);
            console.log('📦 Orders successfully imported!');
        }

        console.log('✨ Full Data Seeding Complete!');
        process.exit(); 

    } catch (error) {
        console.error(`❌ Error importing data: ${error.message}`);
        // This line makes the entire Node process exit with a failure code (1)
        process.exit(1); 
    }
} // <--- This brace closes the 'importData' function

const destroyData = async () => {
    // ... (Your destroyData logic, which also needs the mongoose.model() access) ...
};

// ----------------------------------------------------
// This is the code that goes *AFTER* the importData function closes
// ----------------------------------------------------

// Execution check (Runs the correct function based on the command line argument)
if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}