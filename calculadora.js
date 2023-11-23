class calculator{
    constructor(operand1element, operand2element){
        this.operar1 = operand1element;
        this.operar2 = operand2element;
        this.clear();
    }

    clear(){
        this.operand1 = 0;
        this.operand2 = 0;
        this.operator = '';

        this.operand1element.innerHTML = 0;
        this.operand2element.innerHTML = 0;
    }
}

const operand1element = document.querySelector("[data-operand-1]");
const operand2element = document.querySelector("[data-operand-2]");


const calculator = new calculator(operand1element, operand2element);