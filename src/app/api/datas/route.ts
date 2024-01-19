import db from '../../database/lib/server/db'
import hero from '../../model/Hero'
import { NextResponse } from 'next/server'

export default async function GET(res,req) {
    await db();
    const Hero = await hero.find();

    return NextResponse.json({Hero})
}
