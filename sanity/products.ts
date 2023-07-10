import { defineField, defineType } from 'sanity';

export const product = defineType({
    name: 'product',
    title: 'Products',
    type: "document",
    fields: [
        defineField({
            name: 'images', title: 'Product Image', type: 'array', of: [{
                name: 'img',
                type: 'image',
                title: 'Image'

            }],
            options: { layout: 'grid' }
        }),
        { name: 'title', title: 'Product Title', type: 'string' },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200, // will be ignored if slugify is set
                
            }
        },
        { name: 'stripeId', title: 'Stripe Id', type: 'string' },
        { name: 'price', title: 'Price', type: 'number' }, 
        { name: 'details', title: 'Details', type: 'string' },
        defineField({
            name: 'sizes', title: 'Sizes', type: 'array',
            of: [{
                name: 'size',
                type: 'reference',
                to: [{ type: 'sizes' }],
            }],
            options: { layout: 'tags' }
        }),

        defineField({
            name: 'category', title: 'Category', type: 'reference', to: [{
                type: 'category'
            }]
        }),
        defineField({
            name: 'tags', title: 'Tags Category', type: 'reference', to: [{
                type: 'tags'
            }]
        })

    ]


})