import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const categories = await prisma.category.findMany();
    const categoryMap = categories.reduce((accumulator, category) => {
        accumulator[category.name] = category.id;
        return accumulator;
    }, {} as Record<string, number>);

    // const products = [
    //     { "name": "Eco-Friendly Water Bottle", "price": 19.99, "image": "/images/water-bottle.jpg" },
    //     { "name": "Reusable Grocery Bag Set", "price": 14.99, "image": "/images/grocery-bag.jpg" },
    //     { "name": "Bamboo Toothbrush Pack", "price": 12.99, "image": "/images/toothbrush-pack.jpg" },
    //     { "name": "Organic Cotton T-Shirt", "price": 24.99, "image": "/images/t-shirt.jpg" },
    //     { "name": "Recycled Notebook", "price": 7.99, "image": "/images/notebook.jpg" },
    //     { "name": "Solar-Powered Charger", "price": 39.99, "image": "/images/solar-charger.jpg" },
    //     { "name": "Compostable Phone Case", "price": 18.99, "image": "/images/phone-case.jpg" },
    //     { "name": "Eco-Friendly Laundry Detergent", "price": 12.49, "image": "/images/detergent.jpg" },
    //     { "name": "Reusable Straws Set", "price": 9.99, "image": "/images/straws.jpg" },
    //     { "name": "Plant-Based Protein Powder", "price": 29.99, "image": "/images/protein-powder.jpg" },
    //     { "name": "Biodegradable Trash Bags", "price": 11.99, "image": "/images/trash-bags.jpg" },
    //     { "name": "Handmade Soy Candles", "price": 15.99, "image": "/images/soy-candles.jpg" },
    //     { "name": "Natural Deodorant", "price": 13.99, "image": "/images/deodorant.jpg" },
    //     { "name": "Recycled Paper Towels", "price": 8.99, "image": "/images/paper-towels.jpg" },
    //     { "name": "Reusable Food Wrap", "price": 17.99, "image": "/images/food-wrap.jpg" },
    //     { "name": "Eco-Friendly Yoga Mat", "price": 45.99, "image": "/images/yoga-mat.jpg" },
    //     { "name": "Sustainable Coffee Mug", "price": 21.99, "image": "/images/coffee-mug.jpg" },
    //     { "name": "Recycled Fabric Backpack", "price": 54.99, "image": "/images/backpack.jpg" },
    //     { "name": "Natural Bamboo Utensils", "price": 11.49, "image": "/images/utensils.jpg" },
    //     { "name": "Biodegradable Toothpaste", "price": 9.49, "image": "/images/toothpaste.jpg" },
    //     { "name": "Compost Bin", "price": 34.99, "image": "/images/compost-bin.jpg" },
    //     { "name": "Organic Skincare Set", "price": 59.99, "image": "/images/skincare.jpg" },
    //     { "name": "Eco-Friendly Dog Toys", "price": 22.99, "image": "/images/dog-toys.jpg" },
    //     { "name": "Recycled Paper Journals", "price": 10.99, "image": "/images/journal.jpg" },
    //     { "name": "Reusable Coffee Filters", "price": 14.99, "image": "/images/coffee-filters.jpg" },
    //     { "name": "Sustainable Bamboo Sunglasses", "price": 39.99, "image": "/images/sunglasses.jpg" },
    //     { "name": "Natural Fiber Throw Blanket", "price": 49.99, "image": "/images/blanket.jpg" },
    //     { "name": "Organic Cotton Tote Bag", "price": 19.99, "image": "/images/tote-bag.jpg" },
    //     { "name": "Eco-Friendly Gardening Kit", "price": 27.99, "image": "/images/gardening-kit.jpg" },
    //     { "name": "Biodegradable Sponges", "price": 7.49, "image": "/images/sponges.jpg" },
    //     { "name": "Eco-Friendly Sneakers", "price": 69.99, "image": "/images/sneakers.jpg" },
    //     { "name": "Reusable Produce Bags", "price": 12.99, "image": "/images/produce-bags.jpg" },
    //     { "name": "Bamboo Cutting Board", "price": 22.99, "image": "/images/cutting-board.jpg" },
    //     { "name": "Natural Loofah", "price": 8.99, "image": "/images/loofah.jpg" },
    //     { "name": "Solar Lantern", "price": 39.99, "image": "/images/lantern.jpg" },
    //     { "name": "Sustainable Travel Kit", "price": 29.99, "image": "/images/travel-kit.jpg" },
    //     { "name": "Eco-Friendly Pillow", "price": 44.99, "image": "/images/pillow.jpg" },
    //     { "name": "Reusable Water Filter", "price": 24.99, "image": "/images/water-filter.jpg" },
    //     { "name": "Natural Wool Dryer Balls", "price": 13.99, "image": "/images/dryer-balls.jpg" },
    //     { "name": "Sustainable Coffee Beans", "price": 18.99, "image": "/images/coffee-beans.jpg" },
    //     { "name": "Organic Cotton Baby Clothes", "price": 29.99, "image": "/images/baby-clothes.jpg" },
    //     { "name": "Biodegradable Packaging Tape", "price": 5.99, "image": "/images/tape.jpg" },
    //     { "name": "Reusable Travel Mug", "price": 19.99, "image": "/images/travel-mug.jpg" },
    //     { "name": "Plant-Based Dish Soap", "price": 11.99, "image": "/images/dish-soap.jpg" },
    //     { "name": "Natural Jute Rug", "price": 89.99, "image": "/images/rug.jpg" },
    //     { "name": "Eco-Friendly Makeup Brushes", "price": 29.99, "image": "/images/makeup-brushes.jpg" },
    //     { "name": "Solar Powered String Lights", "price": 25.99, "image": "/images/string-lights.jpg" },
    //     { "name": "Bamboo Laptop Stand", "price": 39.99, "image": "/images/laptop-stand.jpg" },
    //     { "name": "Reusable Snack Bags", "price": 14.99, "image": "/images/snack-bags.jpg" },
    //     { "name": "Natural Cork Coasters", "price": 8.99, "image": "/images/coasters.jpg" }
    //   ]
    const products = [
        { name: "Stainless Steel Water Bottle", price: 24.99, image: "/images/bottles/stainless-bottle.jpg", categoryId: categoryMap["Bottles"] },
        { name: "Glass Water Bottle", price: 19.99, image: "/images/bottles/glass-bottle.jpg", categoryId: categoryMap["Bottles"] },
        { name: "Insulated Travel Mug", price: 29.99, image: "/images/bottles/travel-mug.jpg", categoryId: categoryMap["Bottles"] },
        { name: "Reusable Tote Bag", price: 12.99, image: "/images/bags/tote-bag.jpg", categoryId: categoryMap["Bags"] },
        { name: "Foldable Shopping Bag", price: 9.99, image: "/images/bags/foldable-bag.jpg", categoryId: categoryMap["Bags"] },
        { name: "Canvas Grocery Bag", price: 14.99, image: "/images/bags/canvas-bag.jpg", categoryId: categoryMap["Bags"] },
        { name: "Bamboo Toothbrush", price: 6.99, image: "/images/toothbrushes/bamboo-toothbrush.jpg", categoryId: categoryMap["Toothbrushes"] },
        { name: "Charcoal Infused Toothbrush", price: 7.99, image: "/images/toothbrushes/charcoal-toothbrush.jpg", categoryId: categoryMap["Toothbrushes"] },
        { name: "Kids Bamboo Toothbrush Set", price: 12.99, image: "/images/toothbrushes/kids-bamboo.jpg", categoryId: categoryMap["Toothbrushes"] },
        { name: "Bamboo Cutlery Set", price: 15.99, image: "/images/cutlery/bamboo-cutlery.jpg", categoryId: categoryMap["Cutlery"] },
        { name: "Reusable Metal Straws", price: 9.99, image: "/images/straws/metal-straws.jpg", categoryId: categoryMap["Straws"] },
        { name: "Compostable Cleaning Sponges", price: 10.99, image: "/images/cleaning-supplies/eco-sponges.jpg", categoryId: categoryMap["Cleaning Supplies"] },
        { name: "Organic Cotton Face Towels", price: 17.99, image: "/images/beauty-skincare/face-towels.jpg", categoryId: categoryMap["Beauty & Skincare"] },
        { name: "Bamboo Hair Brush", price: 11.99, image: "/images/beauty-skincare/hair-brush.jpg", categoryId: categoryMap["Beauty & Skincare"] },
        { name: "Reusable Makeup Remover Pads", price: 14.99, image: "/images/beauty-skincare/makeup-remover.jpg", categoryId: categoryMap["Beauty & Skincare"] },
        { name: "Organic Cotton T-Shirt", price: 24.99, image: "/images/clothing/cotton-shirt.jpg", categoryId: categoryMap["Clothing"] },
        { name: "Hemp Fabric Hoodie", price: 49.99, image: "/images/clothing/hemp-hoodie.jpg", categoryId: categoryMap["Clothing"] },
        { name: "Recycled Polyester Jacket", price: 69.99, image: "/images/clothing/recycled-jacket.jpg", categoryId: categoryMap["Clothing"] },
        { name: "Bamboo Cutting Board", price: 21.99, image: "/images/kitchenware/bamboo-board.jpg", categoryId: categoryMap["Kitchenware"] },
        { name: "Reusable Silicone Food Bags", price: 19.99, image: "/images/kitchenware/silicone-bags.jpg", categoryId: categoryMap["Kitchenware"] },
        { name: "Beeswax Food Wraps", price: 16.99, image: "/images/kitchenware/beeswax-wraps.jpg", categoryId: categoryMap["Kitchenware"] },
        { name: "Recycled Paper Notebook", price: 8.99, image: "/images/office-supplies/recycled-notebook.jpg", categoryId: categoryMap["Office Supplies"] },
        { name: "Eco-Friendly Pens", price: 5.99, image: "/images/office-supplies/eco-pens.jpg", categoryId: categoryMap["Office Supplies"] },
        { name: "Bamboo Desk Organizer", price: 27.99, image: "/images/office-supplies/desk-organizer.jpg", categoryId: categoryMap["Office Supplies"] },
        { name: "Wooden Puzzle Set", price: 19.99, image: "/images/toys/wooden-puzzle.jpg", categoryId: categoryMap["Toys"] },
        { name: "Organic Cotton Stuffed Animal", price: 25.99, image: "/images/toys/stuffed-animal.jpg", categoryId: categoryMap["Toys"] },
        { name: "Biodegradable Beach Toys", price: 22.99, image: "/images/toys/beach-toys.jpg", categoryId: categoryMap["Toys"] },
        { name: "Recycled Plastic Phone Case", price: 14.99, image: "/images/electronics/recycled-case.jpg", categoryId: categoryMap["Electronics Accessories"] },
        { name: "Solar-Powered Phone Charger", price: 39.99, image: "/images/electronics/solar-charger.jpg", categoryId: categoryMap["Electronics Accessories"] },
        { name: "Biodegradable Earphone Case", price: 12.99, image: "/images/electronics/earphone-case.jpg", categoryId: categoryMap["Electronics Accessories"] },
        { name: "Cork Yoga Mat", price: 49.99, image: "/images/fitness-wellness/cork-mat.jpg", categoryId: categoryMap["Fitness & Wellness"] },
        { name: "Bamboo Fiber Gym Towel", price: 19.99, image: "/images/fitness-wellness/gym-towel.jpg", categoryId: categoryMap["Fitness & Wellness"] },
        { name: "Recycled Foam Roller", price: 29.99, image: "/images/fitness-wellness/foam-roller.jpg", categoryId: categoryMap["Fitness & Wellness"] },
        { name: "Compostable Trash Bags", price: 11.99, image: "/images/cleaning-supplies/trash-bags.jpg", categoryId: categoryMap["Cleaning Supplies"] },
        { name: "Eco-Friendly Dish Soap", price: 7.99, image: "/images/cleaning-supplies/dish-soap.jpg", categoryId: categoryMap["Cleaning Supplies"] },
        { name: "Reusable Lint Roller", price: 9.99, image: "/images/cleaning-supplies/lint-roller.jpg", categoryId: categoryMap["Cleaning Supplies"] },
        { name: "Hemp Facial Cleanser", price: 14.99, image: "/images/beauty-skincare/facial-cleanser.jpg", categoryId: categoryMap["Beauty & Skincare"] },
        { name: "Eco-Friendly Lip Balm", price: 5.99, image: "/images/beauty-skincare/lip-balm.jpg", categoryId: categoryMap["Beauty & Skincare"] },
        { name: "Sustainable Shampoo Bar", price: 9.99, image: "/images/beauty-skincare/shampoo-bar.jpg", categoryId: categoryMap["Beauty & Skincare"] },
        { name: "Hemp Canvas Backpack", price: 59.99, image: "/images/bags/canvas-backpack.jpg", categoryId: categoryMap["Bags"] },
        { name: "Wool Felt Laptop Sleeve", price: 32.99, image: "/images/bags/laptop-sleeve.jpg", categoryId: categoryMap["Bags"] },
        { name: "Recycled Fabric Duffel Bag", price: 44.99, image: "/images/bags/duffel-bag.jpg", categoryId: categoryMap["Bags"] },
    ];


    for (const product of products) {
        await prisma.product.create({
            data: product,
        });
    }
}

async function createCategories() {
    const categories = await prisma.category.createMany({
        data: [
            { name: 'Bottles' },
            { name: 'Bags' },
            { name: 'Toothbrushes' },
            { name: 'Cutlery' },
            { name: 'Straws' },
            { name: 'Cleaning Supplies' },
            { name: 'Beauty & Skincare' },
            { name: 'Clothing' },
            { name: 'Kitchenware' },
            { name: 'Office Supplies' },
            { name: 'Toys' },
            { name: 'Electronics Accessories' },
            { name: 'Fitness & Wellness' },
        ],
    });

    console.log('Categories added:', categories);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
