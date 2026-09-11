const calculatorDisplay= document.querySelector('h1');
const inputBtns= document.querySelectorAll('button');
const clearBtn= document.getElementById('clear-btn');
let firstValue= 0;
let operatorValue= '';
let awaitingNextValue= false;

//calculate first and second values depending on operator
const calculate={
 '/': (firstNumber, secondNumber) => firstNumber / secondNumber,
 '*': (firstNumber, secondNumber) => firstNumber * secondNumber,
 '+': (firstNumber, secondNumber) => firstNumber + secondNumber,
 '-': (firstNumber, secondNumber) => firstNumber - secondNumber,
 '=': (firstNumber, secondNumber) => secondNumber
};
function sendNumberValue(number){
    const previousDisplayValue= calculatorDisplay.textContent;
    if(awaitingNextValue){
        calculatorDisplay.textContent= number;
        awaitingNextValue= false;
    }
    else{
        if(previousDisplayValue === '0'){
        calculatorDisplay.textContent= number;
    }
    else{
    calculatorDisplay.textContent += number;
    }
        
    }
  
  
}

function addDecimal(){
if(awaitingNextValue) return;
  if(!calculatorDisplay.textContent.includes('.')){
    calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
  }

}
function useOperator(operator){
    if(operatorValue && awaitingNextValue) {
        return;
    }
  const currentValue= Number(calculatorDisplay.textContent);
  if(!firstValue){

    firstValue= currentValue;
  }
 else{

    const calculation= calculate[operatorValue](firstValue, currentValue);
    calculatorDisplay.textContent= calculation;
    firstValue= calculation;
  }
  operatorValue= operator;
  awaitingNextValue= true;



}
inputBtns.forEach((inputBtn) => {
  if(inputBtn.classList.length === 0){
    inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
  }
  else if(inputBtn.classList.contains('operator')){

    inputBtn.addEventListener('click', () => useOperator(inputBtn.value));
    
  }
  else if(inputBtn.classList.contains('decimal')){
    inputBtn.addEventListener('click', () => addDecimal());
  }
});
clearBtn.addEventListener('click', () => {
  calculatorDisplay.textContent = '0';
  firstValue= 0;
  operatorValue= '';
  awaitingNextValue= false;
})


