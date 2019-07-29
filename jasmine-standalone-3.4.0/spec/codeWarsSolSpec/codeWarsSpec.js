describe("Code wars solution",()=>{
   fit("return numbers in a string",()=>{
     var strW="hellow3 ever4y 1one";
     var numStr=sortWords(strW);

     expect(numStr).toEqual(['3','4','1']);
     

   })


})