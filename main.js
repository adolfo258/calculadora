const screen = document.getElementById('calculator__screen')
const keys = document.getElementById('calculator__keys')

let operationStatus = false,
    number1, typeOperation

screen.textContent = '0'

const calculator = ()=>{
    keys.addEventListener('click', (e)=>{
        const t = e.target
        const d = t.dataset

    //detectar si pulso un numero
    if(d.number){
        writeScreen(d.number)
    }
    //detectar si pulso una operacion matematica
    if(d.math){
        getOperation(t,d.math)
}
    //detectar si pulso otra operacion
    if(d.operation){
        runOperation(d.operation)
    }

    })
}


calculator()

const writeScreen = (number)=>{
    screen.textContent === '0' || operationStatus === true
        ? screen.textContent = number 
        : number=== '.' && !screen.textContent.includes('.')
            ?screen.textContent += number
            : number !== '.'
                ?screen.textContent += number
                :null


    operationStatus = false    
}

const getOperation = (element,operation)=>{
    operationStatus = true
    number1 = Number(screen.textContent)
    typeOperation = operation
    screen.textContent = element.textContent
        
}  
    

const runOperation = (operation)=>{
    const getResult = (number1,typeOperation)=>{
        const number2 = Number(screen.textContent)
        let result

        switch (typeOperation) {
            case 'add':
                result = number1 + number2
                break;
            case 'minus':
                result = number1 - number2
                break
            case 'multiply':
                result = number1 * number2 
                break
            case 'divide':
                result = number1 / number2
                break           
        
            default:
                break;
        }
        
        result === Infinity
            ? screen.textContent = 'Error'
            : screen.textContent = result

    }    

    operation === 'clear'
        ?screen.textContent = '0'
        : getResult(number1, typeOperation)

    operationStatus = true
}
