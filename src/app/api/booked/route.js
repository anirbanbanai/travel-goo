import connectMongoDb from "@/libs/mongodb";
import bookedUp from "@/models/bookedPlace";

import { NextResponse } from "next/server";

export async function POST(request){
    const {name,location,cost,booked, image} = await request.json();
    await connectMongoDb();
    const all =  await bookedUp.create({name,location,cost,image, booked});
    return NextResponse.json(all, {status: 200})
}

export async function GET(){
    await connectMongoDb();
    const bokkk = await bookedUp.find();
     return NextResponse.json(bokkk)
}

