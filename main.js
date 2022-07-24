let numpad=["1","2","3","4","5","6","7","8","9","*","0","#"];

let numpadContent="";
for(let i=0;i<numpad.length;i++)
  {
    if(i==3 ||i==6||i===9)
      {
        let nextLine=`<div></div>`;
        numpadContent+=nextLine;
      }
    let buttonString=`<button class="number"" onClick="myfunc(this.value)" value=${numpad[i]}>${numpad[i] }</button>`;
    
      
    numpadContent+=buttonString;
  }

document.getElementById("numpad-wrapper").innerHTML=numpadContent;

function myfunc(value)
{
  console.log(value)
  let num= document.getElementById("result").value += value;
  num.innertext=value;
}


function cancleDigits()
{
  let elm=document.getElementById("result");
  let num= elm.value;
  num=num.substring(0,num.length-1);

  elm.value=num;
  console.log(num);
}





//  var number=[];
 
// function display(value) {
//   var single_vlue=parseInt(value);
//    let num= document.getElementById("result").value += value;
//  var stringToInt =parseInt(single_vlue);
//    number.push(single_vlue);
//    console.log(number);
//    num.innertext=stringToInt;
// }
