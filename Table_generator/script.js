const inputEle = document.getElementById('input')
const btnEle = document.getElementById('generate-btn')
const tablesContainer = document.getElementById("tables")

btnEle.addEventListener("click", ()=> {
    tablesContainer.innerHTML = ''
    const inputValue = inputEle.value 
    if(isNaN(inputValue)) { // ( Is not a Number - isNan )
        alert("Only Numbers are Allowed for Tables...")
        return 
    }
    for(let i=1;i<=10;i++) {
        const table = `${inputValue} X ${i} = ${inputValue * i}`
        const pEle = document.createElement('p')
        pEle.textContent = table
        tablesContainer.appendChild(pEle)
    }
})

