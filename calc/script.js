// console.log("hello"); 
 string = "";
let buttons =document.querySelectorAll(".btn-1")
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.textContent === "DEL"){
            if(string){
                string = string.substring(0,string.length-1)
            }
        }else{
            string  += (e.target.textContent);
            document.innerHTMl = string
        }
        document.getElementById('in').value = string
    
    
    })
})


let buttons1 =document.querySelectorAll(".btn-2")
Array.from(buttons1).forEach((button)=>{
    button.addEventListener('click',(e)=>{
    if(e.target.textContent === "=" && string){

       string= eval(string)
   document.getElementById('in').value = string
    }else{
        string= ""
   document.getElementById('in').value = string
    }

    })
})



function calculate(operation, num1, num2) {
    let result;
    switch (operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          console.log("Error: Division by zero is not allowed.");
          return;
        }
        result = num1 / num2;
        break;
      default:
        console.log("Error: Invalid operation.");
        return;
    }
    console.log(`${num1} ${operation} ${num2} = ${result}`);
  }

