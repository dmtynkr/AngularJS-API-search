
//javascript as abstractions
var work = function(){
  console.log("working hard!!");
};

var dowork = function(k){
  console.log("log starting");
  try{
    k();
  }
  catch(ex){
    console.log(ex);
  }
  console.log("log ending");
};

dowork(work);