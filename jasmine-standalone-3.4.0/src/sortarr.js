
function sortarr(arr) {
  var sarray = [];
 var max=arr[0];
  
 //finding the maximum
 for(let a=0;a<arr.length;a++){
   if(max<arr[a]){
     max=arr[a];
   };
 };



//finding the minimum
  for (let a = 0; a < arr.length; a++) {
   
    var min = arr[a];
    var minindex = a;

    for (let b = 0; b < arr.length; b++) {
      if (arr[b] != null) {
        if (min > arr[b]) {
          min = arr[b];
          minindex = b;
        };
      };
    };
    //storing the minimum into the array
    if(arr[a]!= null){
      sarray[a] = min;
      arr[minindex] = null;
    }else{
      sarray[a]=max
    };
    
    //min=max;
  };
  return sarray;
};
