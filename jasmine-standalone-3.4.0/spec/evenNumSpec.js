
describe("Even and odd numbers", () => {
    it("Return even nummbers", () => {
        var arr = [2, 4, 1, 3, 7, 8, 9];
        var ans ;
        ans= findEven(arr);

        expect(ans).toEqual([2, 4, 8]);
    });
});


