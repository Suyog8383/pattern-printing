let str1="";
for(let i=0;i<5;i++){
    for(let j=0;j<5;j++){
        if(i===0 || j===5-1 || i===j){
            str1 += "*"
        }else{
            str1 += " "
        }
    }
    str1 += "\n"
}
console.log(str1);
*****
 *  *
  * *
   **
    *
    
let str2="";
for(let i=0;i<5;i++){
    for(let j=0;j<5;j++){
        if(j===0 || i===5-1 || i===j){
            str2 += "*"
        }else{
            str2 += " "
        }
    }
    str2 += "\n"
}
console.log(str2);

*    
**   
* *  
*  * 
*****



