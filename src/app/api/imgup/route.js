

import connectMongoDb from "@/libs/mongodb";
import imgUp from "@/models/imgup";
import { NextResponse } from "next/server";

export async function POST(request){
    const {image,name,location,cost} = await request.json();
    await connectMongoDb();
    const all = await imgUp.create({image,location,cost,name});
    return NextResponse.json(all, {status: 200})
}

export async function GET(){
    await connectMongoDb();
    const imguppps = await imgUp.find();
     return NextResponse.json(imguppps)
}