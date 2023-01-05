let operationHTML = document.getElementById("operation")
let resultHTML = document.getElementById("result")

let operation = []
const possibleOperators = ["+", "-", "*", "/"];

const addOperation = (numberOrOperation) => {
    let lastElement = operation[operation.length - 1]
    // this condition is to avoid multiple operators in a row
    if (!(possibleOperators.includes(lastElement) && possibleOperators.includes(numberOrOperation))) {
        operation.push(numberOrOperation)
        updateOperation()
    } 
}

const equals = () => {
   let result = eval(operation.join(""))
   updateResult(result)
}

const updateResult = (result) => {
    resultHTML.textContent = result
}

const allClear = () => {
    operation = []
    updateOperation()
    updateResult("")
}

const updateOperation = () => {
    operationHTML.textContent = operation.join("")
}

const del = () => {
    operation.pop()
    updateOperation()
}