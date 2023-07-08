import { type SchemaTypeDefinition } from 'sanity'
import { product } from './products'
import { category } from './category'
import { tags } from './tages'
import { sizes } from './sizes'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,category,tags,sizes],
}
