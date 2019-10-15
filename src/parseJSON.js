// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
    var obj = {};

    if( typeof json !== string){
        return ;
    }

    if( json === 'null' ){
        return null;
    }

    //boolean
    if( json === 'true' ){
        return true;
    }
    if( json === 'false' ){
        return false;
    }

    //if( json )
    //if (text.matches("[0-9]+") && text.length() > 2) {
};
