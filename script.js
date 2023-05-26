const button = document.querySelector("#calculate")
const billInput = document.querySelector("#bill")
const tipInput = document.querySelector("#tip")
const total = document.querySelector("#total")

button.addEventListener("click", () => {
    const billValue = billInput.value
    const tipValue = tipInput.value
    const totalValue = billValue(1 + tipValue / 100)
    total.innerText = totalValue.toFixed(2)
})