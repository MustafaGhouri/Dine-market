import { defineField, defineType } from 'sanity';

export const tags = defineType({
    name: 'tags',
    title: 'Tags',
    type: "document",
    fields: [
        {
            name: 'title', title: 'Tags Title', type: 'string', options: {
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