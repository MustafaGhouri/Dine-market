import { defineField, defineType } from 'sanity';

export const sizes = defineType({
    name: 'sizes',
    title: 'Sizes',
    type: "document",
    fields: [
        {
            name: 'title', title: 'Sizes', type: 'string', options: {
                maxLength: 200, // will be ignored if slugify is set

            }
        }
    ]


})