// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
    var result = '';
    var flag = 1;

    if(typeof obj==='undefined'){
      flag = 0;
    }
    else if(typeof obj==='function'){
      flag = 0;
    }
    //else if(typeof obj==='null'){
    //    result += 'null';
    //}
    else if(obj===null){
        result += 'null';
    }

    else if(typeof obj==='boolean'){
        result += obj;
    }

    else if(typeof obj==='number'){
        result += obj;
    }
    
    else if(typeof obj==='string'){
      result += '"' + obj + '"';
    }

    else if(typeof obj==='object'){
        //array
        if( Array.isArray(obj) ){

            if( obj.length===0 ){
              result += '[]';
            }
            else{
              result += '[';
              _.each(obj, function(element, index){
                  result += stringifyJSON(element);
                  result += ',';
              });
              if(result[result.length-1]===','){
                  result = result.slice(0, result.length-1);
              }
              result += ']';
            }

            return result;
        }
        else if(obj instanceof Object){
            result += '{';
            _.each(obj, function(element, index){
                result += stringifyJSON(index);
                result += ':';
                result += stringifyJSON(element);
                result += ',';
            });
            if(result[result.length-1]===','){
                result = result.slice(0, result.length-1);
            }
            result += '}';
        }
    }

    else{
    //    result += 'null';
    }

    if(flag===0){
      return 'FAILUREFLAG';
    }
    
    if( result.indexOf('FAILUREFLAG') > 0 ){
      return '{}';
    }

    return result;
};