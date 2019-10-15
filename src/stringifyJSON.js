// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
    //var result = '';
    var result; //do not initialize as string?

    if(typeof obj==='undefined'){
        return undefined;
    }

    else if(typeof obj==='function'){
        return undefined;
    }

    else if(typeof obj==='boolean'){
        //result += obj;
        result = ''; //did not initialize as string
        result += obj;
    }

    else if(typeof obj==='number'){
        result = ''; //did not initialize as string
        result += obj.toString();
    }
    
    else if(typeof obj==='string'){
        result = ''; //did not initialize as string
        result += '"' + obj + '"';
    }

    else if(obj===null){
        result = ''; //did not initialize as string
        result += 'null';
    }

    else if(typeof obj==='object'){
        //array
        if( Array.isArray(obj) ){
            result = ''; //did not initialize as string

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
            result = ''; //did not initialize as string
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
    
    if( result.indexOf('undefined') > 0 ){
        var undefinedStart = result.indexOf('undefined');
        var undefinedEnd = result.indexOf('undefined') + 9;
        if( result[undefinedStart-1]!=='"' || result[undefinedEnd]!=='"' ){
            return '{}';
        }
    }

    return result;
};