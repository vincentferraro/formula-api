
import { sumPoint } from "../../functions/sum";
import { expect, test} from "vitest";


test('test sumPoint function',async ()=>{
    expect(await sumPoint(3,2)).toBe(5)
})