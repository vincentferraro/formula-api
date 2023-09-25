import { expect, test } from "vitest";
import { errorMessage, successMessage } from "../../functions/messageResponse";
import { dbConnection } from "../../db";
import { Driver } from "../../db/models/driver";

test("test Message Response function", async()=>{

    // FIRST FUNCTION, SUCCESS MESSAGE

    try{
        await dbConnection()
        var driver: Driver | null = await Driver.findByPk(1)
    }catch(err){
        console.log(err)
    }

    // @ts-ignore
    expect( successMessage("Is a success",driver)).toEqual(expect.objectContaining({
        message: expect.any(String),
        data: expect.any(Object)
    }))

    // SECOND FUNTION, ERROR MESSAGE

    let err = new Error("It's an error")


    expect(errorMessage(err)).toEqual(expect.objectContaining({
        message: expect.any(String)
    }))
})