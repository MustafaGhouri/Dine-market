import { defineField, defineType } from 'sanity';

export const category = defineType({
    name: 'category',
    title: 'Category',
    type: "document",
    fields: [
        {
            name: 'title', title: 'Category Title', type: 'string', options: {
                maxLength: 200, // will be ignored if slugify is set

            }
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200, // will be ignored if slugify is set

            }
        },
    ]


})