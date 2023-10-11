import connectMongoDb from "@/libs/mongodb";
import imgUp from "@/models/imgup";
import { NextResponse } from "next/server";

export async function PUT(request, {params}){
    const {id} = params;
    const {boked: boked} =await request.json()
    await connectMongoDb();
    await imgUp.findByIdAndUpdate(id, {boked});
    return NextResponse.json({message: "Topic updated"}, {status: 200})
}


export async function GET(request, {params}){
    const {id} = params;
    await connectMongoDb();
    const all = await imgUp.find({_id:id});
    return NextResponse.json(all)
}