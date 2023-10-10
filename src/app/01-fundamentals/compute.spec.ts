import { compute } from "./compute"
//describe() //suite - group of related tests
//it()       //spec 

describe('compute', () => {
    it('01 should return 0 if input is negative', () => {
        const result = compute(-1);
        expect(result).toBe(0);
    })
    it('02 should increment input if input is positive', () => {
        const result = compute(4);
        expect(result).toBe(5);
    })

})