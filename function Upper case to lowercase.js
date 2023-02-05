
function lowerCase(text){
    var output ="";
    for(var i=0;i<text.length;i++){
       if(text[i]==text[i].toUpperCase()){
        output +=text[i].toLowerCase();
       }
       else{
        output +=text[i].toUpperCase();
       }
    }
    return output;
}

console.log(lowerCase("HELLO SOWRUB KMON ASO"));