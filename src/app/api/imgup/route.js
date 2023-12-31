import connectMongoDb from "@/libs/mongodb";
import bookedUp from "@/models/bookedPlace";
import imgUp from "@/models/imgup";

import { NextResponse } from "next/server";

export async function POST(request){
    const {name,location,cost,image} = await request.json();
    await connectMongoDb();
    const all =  await imgUp.create({name,location,cost,image});
    return NextResponse.json(all, {status: 200})
}

export async function GET(){
    await connectMongoDb();
    const imgUpss = await imgUp.find();
     return NextResponse.json(imgUpss)
}

