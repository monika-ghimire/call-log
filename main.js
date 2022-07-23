
 var number=[];
 
function display(value) {
   let num= document.getElementById("result").value += value;
 var stringToInt =parseInt(num);
   number.push(stringToInt);
   num.innertext=stringToInt;
}
 function cancleDigits()
{
    console.log(number)
    number.pop();
}