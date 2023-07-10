import { NextRequest, NextResponse } from "next/server"
import { db, cartTable } from '@/lib/drizzle';
import { v4 as uuid } from 'uuid';
import { cookies } from "next/headers";


export const GET = async (request: Request) => {
    try {
        const res = await db.select().from(cartTable)
        return NextResponse.json({ res })
    }
    catch (err) {
        return NextResponse.json({ err })

    }
}


export const POST = async (request: Request) => {

    const req = await request.json();
    const uid = uuid();
    const nextCookies = cookies();

    if (!nextCookies.get('user_id')) {
        nextCookies.set('user_id', uid);
    }

    try {
        const res = await db.insert(cartTable).values({
            product_id: req.product_id,
            user_id: nextCookies.get('user_id')?.value as string,
            qty: req.qty,
            size: req.size,
        })
        return NextResponse.json({res});
    }
    catch (err) {
        return NextResponse.json({err});
    }
}

