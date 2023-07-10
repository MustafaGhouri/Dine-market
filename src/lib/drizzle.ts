import { pgTable, varchar, integer, serial } from 'drizzle-orm/pg-core';
import {drizzle} from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';


export const cartTable = pgTable('cart', {
    id: serial('id').primaryKey(),
    user_id: varchar('user_id', {
        length: 225
    }).notNull(),
    product_id: varchar('product_id', {
        length: 225
    }).notNull(),
    qty: integer('qty').notNull(),
    size: varchar('size', {
        length: 50
    }).notNull(),

});

export const db = drizzle(sql)