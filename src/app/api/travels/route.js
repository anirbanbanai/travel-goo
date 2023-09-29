import connectMongoDb from "@/libs/mongodb";

import Travel from "@/models/travel";
import { NextResponse } from "next/server";

export async function POST(request){
    const {name,location,cost} = await request.json();
    await connectMongoDb();
    await Travel.create({name,location,cost});
    return NextResponse.json({name,location,cost}, {status: 200})
}

export async function GET(){
    await connectMongoDb();
    const travel = await Travel.find();
     return NextResponse.json(travel)
}

