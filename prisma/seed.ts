import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const products = [
        { "name": "Eco-Friendly Water Bottle", "price": 19.99, "image": "/images/water-bottle.jpg" },
        { "name": "Reusable Grocery Bag Set", "price": 14.99, "image": "/images/grocery-bag.jpg" },
        { "name": "Bamboo Toothbrush Pack", "price": 12.99, "image": "/images/toothbrush-pack.jpg" },
        { "name": "Organic Cotton T-Shirt", "price": 24.99, "image": "/images/t-shirt.jpg" },
        { "name": "Recycled Notebook", "price": 7.99, "image": "/images/notebook.jpg" },
        { "name": "Solar-Powered Charger", "price": 39.99, "image": "/images/solar-charger.jpg" },
        { "name": "Compostable Phone Case", "price": 18.99, "image": "/images/phone-case.jpg" },
        { "name": "Eco-Friendly Laundry Detergent", "price": 12.49, "image": "/images/detergent.jpg" },
        { "name": "Reusable Straws Set", "price": 9.99, "image": "/images/straws.jpg" },
        { "name": "Plant-Based Protein Powder", "price": 29.99, "image": "/images/protein-powder.jpg" },
        { "name": "Biodegradable Trash Bags", "price": 11.99, "image": "/images/trash-bags.jpg" },
        { "name": "Handmade Soy Candles", "price": 15.99, "image": "/images/soy-candles.jpg" },
        { "name": "Natural Deodorant", "price": 13.99, "image": "/images/deodorant.jpg" },
        { "name": "Recycled Paper Towels", "price": 8.99, "image": "/images/paper-towels.jpg" },
        { "name": "Reusable Food Wrap", "price": 17.99, "image": "/images/food-wrap.jpg" },
        { "name": "Eco-Friendly Yoga Mat", "price": 45.99, "image": "/images/yoga-mat.jpg" },
        { "name": "Sustainable Coffee Mug", "price": 21.99, "image": "/images/coffee-mug.jpg" },
        { "name": "Recycled Fabric Backpack", "price": 54.99, "image": "/images/backpack.jpg" },
        { "name": "Natural Bamboo Utensils", "price": 11.49, "image": "/images/utensils.jpg" },
        { "name": "Biodegradable Toothpaste", "price": 9.49, "image": "/images/toothpaste.jpg" },
        { "name": "Compost Bin", "price": 34.99, "image": "/images/compost-bin.jpg" },
        { "name": "Organic Skincare Set", "price": 59.99, "image": "/images/skincare.jpg" },
        { "name": "Eco-Friendly Dog Toys", "price": 22.99, "image": "/images/dog-toys.jpg" },
        { "name": "Recycled Paper Journals", "price": 10.99, "image": "/images/journal.jpg" },
        { "name": "Reusable Coffee Filters", "price": 14.99, "image": "/images/coffee-filters.jpg" },
        { "name": "Sustainable Bamboo Sunglasses", "price": 39.99, "image": "/images/sunglasses.jpg" },
        { "name": "Natural Fiber Throw Blanket", "price": 49.99, "image": "/images/blanket.jpg" },
        { "name": "Organic Cotton Tote Bag", "price": 19.99, "image": "/images/tote-bag.jpg" },
        { "name": "Eco-Friendly Gardening Kit", "price": 27.99, "image": "/images/gardening-kit.jpg" },
        { "name": "Biodegradable Sponges", "price": 7.49, "image": "/images/sponges.jpg" },
        { "name": "Eco-Friendly Sneakers", "price": 69.99, "image": "/images/sneakers.jpg" },
        { "name": "Reusable Produce Bags", "price": 12.99, "image": "/images/produce-bags.jpg" },
        { "name": "Bamboo Cutting Board", "price": 22.99, "image": "/images/cutting-board.jpg" },
        { "name": "Natural Loofah", "price": 8.99, "image": "/images/loofah.jpg" },
        { "name": "Solar Lantern", "price": 39.99, "image": "/images/lantern.jpg" },
        { "name": "Sustainable Travel Kit", "price": 29.99, "image": "/images/travel-kit.jpg" },
        { "name": "Eco-Friendly Pillow", "price": 44.99, "image": "/images/pillow.jpg" },
        { "name": "Reusable Water Filter", "price": 24.99, "image": "/images/water-filter.jpg" },
        { "name": "Natural Wool Dryer Balls", "price": 13.99, "image": "/images/dryer-balls.jpg" },
        { "name": "Sustainable Coffee Beans", "price": 18.99, "image": "/images/coffee-beans.jpg" },
        { "name": "Organic Cotton Baby Clothes", "price": 29.99, "image": "/images/baby-clothes.jpg" },
        { "name": "Biodegradable Packaging Tape", "price": 5.99, "image": "/images/tape.jpg" },
        { "name": "Reusable Travel Mug", "price": 19.99, "image": "/images/travel-mug.jpg" },
        { "name": "Plant-Based Dish Soap", "price": 11.99, "image": "/images/dish-soap.jpg" },
        { "name": "Natural Jute Rug", "price": 89.99, "image": "/images/rug.jpg" },
        { "name": "Eco-Friendly Makeup Brushes", "price": 29.99, "image": "/images/makeup-brushes.jpg" },
        { "name": "Solar Powered String Lights", "price": 25.99, "image": "/images/string-lights.jpg" },
        { "name": "Bamboo Laptop Stand", "price": 39.99, "image": "/images/laptop-stand.jpg" },
        { "name": "Reusable Snack Bags", "price": 14.99, "image": "/images/snack-bags.jpg" },
        { "name": "Natural Cork Coasters", "price": 8.99, "image": "/images/coasters.jpg" }
      ]
      ;

    for (const product of products) {
        await prisma.product.create({
            data: product,
        });
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
