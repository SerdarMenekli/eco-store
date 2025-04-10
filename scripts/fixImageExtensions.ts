import { prisma } from '@/lib/prisma';

async function fixImageExtensions() {
  try {
    const products = await prisma.product.findMany({
      where: {
        image: {
          endsWith: '.jpg',
        },
      },
    });

    for (const product of products) {
      if (product.image) {
        const newPath = product.image.replace('.jpg', '.png');
        await prisma.product.update({
          where: { id: product.id },
          data: { image: newPath },
        });
      }
    }

    console.log(`✅ Updated ${products.length} image paths`);
  } catch (error) {
    console.error("Error updating image paths:", error);
  }
}

fixImageExtensions();