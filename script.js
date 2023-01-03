let operationHTML = document.getElementById("operation")
let resultHTML = document.getElementById("result")

let operation = []

const addOperation = (numberOrOperation) => {
    operation.push(numberOrOperation)
    updateOperation()
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