import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    await prisma.product.create({
        data: {
            name: 'SAHARA',
            description: 'Khaki Abaya',
            category: 'Abaya',
            section: 'Popular',
            color: 'Khaki',
            price: 250000,
            buttonText: 'Shop Now',
            link: 'https://tokopedia.com/tabinda',
            imageUrl: '/products/sahara.jpg',
        },
    })

    await prisma.product.create({
        data: {
            name: 'AZURE',
            description: 'Blue Scarf',
            category: 'Scarf',
            section: 'New Arrival',
            color: 'Blue',
            price: 150000,
            buttonText: 'View Product',
            link: 'https://tokopedia.com/tabinda',
            imageUrl: '/products/azure.jpg',
        },
    })
}

main()
