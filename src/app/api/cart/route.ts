import { NextRequest, NextResponse } from "next/server"
import { db, cartTable } from '@/lib/drizzle';
import { v4 as uuid } from 'uuid';
import { cookies } from "next/headers";
import { eq, and } from "drizzle-orm";
import { client } from "@/lib/sanityClient";
interface cart {
    id: string,
    product_id: string,
    user_id: string,
    size: string,
    qty: number
}

export const GET = async () => {
    const uid = uuid();
    const nextCookies = cookies();

    if (!nextCookies.get('user_id')) {
        nextCookies.set('user_id', uid);
    }
    let user_idd = nextCookies.get('user_id')?.value as string;
    let arr :any = {};
    let respData: any[] = [];
    try {
        const resp: any = await db.select().from(cartTable).where(eq(cartTable.user_id, user_idd))
        await Promise.all(resp.map(async (item: any) => {
            
            console.log('cart products ',item.product_id);
           
            const res = await client.fetch(
                    `*[_type == 'product'  && _id  == '${item.product_id}' ]| order(_createdAt desc){
                         title,
                         _id, 
                         slug,
                         price,
                         stripeId, 
                         images[0],  
                         category->{
                           title,
                           slug
                         },
                         tags->{
                           title,
                         },
                        
                        }
                    `
                )
                 arr = {
                    cartId:item.id,
                    qty:item.qty,
                    selected_size:item.size,
                    id:res[0]._id,
                    title:res[0].title,
                    slug:res[0].slug.title,
                    price:res[0].price,
                    stripeId:res[0].stripeId,
                    image:res[0].images,
                    category:res[0].category,
                    tags:res[0].tags
                }
                 
                respData.push(arr);
            }))
            
             
        
        
        return NextResponse.json({'res':'success','msg':'Product Successfully found', 'data':respData })

    }
    catch (err) {
        return NextResponse.json({'res':'warning','msg':'Data not found',data: err })

    }

}


export const POST = async (request: Request) => {

    const req = await request.json();
    const uid = uuid();
    const nextCookies = cookies();

    if (!nextCookies.get('user_id')) {
        nextCookies.set('user_id', uid);
    }
    let user_idd = nextCookies.get('user_id')?.value as string;
    const res = await db.select().from(cartTable).where(and(eq(cartTable.product_id, req.product_id), eq(cartTable.user_id, user_idd)));
    if (res.length > 0) {
        try {
            await db.update(cartTable).set({ size: req.size, qty: req.qty }).where(and(eq(cartTable.product_id, req.product_id), eq(cartTable.user_id, user_idd)));

            return NextResponse.json({ res });
        }
        catch (err) {
            return NextResponse.json({ err });
        }
    } else {


        try {
            const res = await db.insert(cartTable).values({
                product_id: req.product_id,
                user_id: user_idd,
                qty: req.qty,
                size: req.size,
            })
            return NextResponse.json({ res });
        }
        catch (err) {
            return NextResponse.json({ err });
        }
    }

}

