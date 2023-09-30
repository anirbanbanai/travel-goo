import connectMongoDb from "@/libs/mongodb";

import Travel from "@/models/travel";
import { NextResponse } from "next/server";

export async function POST(request){
    const {name,location,cost,image} = await request.json();
    await connectMongoDb();
    const all =  await Travel.create({name,location,cost,image});
    return NextResponse.json(all, {status: 200})
}

export async function GET(){
    await connectMongoDb();
    const travel = await Travel.find();
     return NextResponse.json(travel)
}

