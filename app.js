const buttons = document.querySelectorAll('.button');
const textinput = document.getElementById('text-input');


let string = " ";
let ary = Array.from(buttons);
ary.forEach(buttons =>{
    buttons.addEventListener('click' , (e)=>{
         if(e.target.innerHTML == '='){
            string = eval(string);
            textinput.value = string;
         }else if(e.target.innerHTML == 'AC'){
            string = " ";
            textinput.value = string;
         }else if(e.target.innerHTML == 'C'){
            string = string.substring(0 ,string.length - 1)
                textinput.value = string;
         }
         else{
            string += e.target.innerHTML;
            textinput.value = string;
         }
    });
});