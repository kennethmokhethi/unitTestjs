//function that returns odd numbers
function oddNum(arr){
var arr2=[];
  for(var a =0;a<arr.length;a++){
    if(arr[a]%2!==0){
       arr2.push(arr[a]);
    };
  };

return arr2;
};