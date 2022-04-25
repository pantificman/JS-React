let result = "";
        for(let i = 1; i <= 6; i++){
            for(let j = 0; j < i; j++){
               for( let k = 0 ; k < i; k--){
                   result = "";
               }  
               result +="*";
            }
            result += "\n";
        }
        console.log(result);