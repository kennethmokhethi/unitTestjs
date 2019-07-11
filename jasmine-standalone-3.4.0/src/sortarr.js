
function sortarr(arr){
    var s = [];
    
    for(let a=0;a<arr.length;a++){
    s.length=arr.length;
    var min=arr[a];
    var index=a;
    for(let b=0;b<s.length;b++){
    if(min>arr[b]){
    min=arr[b];
    index=b;
    }
    s.push(min);
    arr.slice(index);
    }
    
    }
    return s;
  }
    