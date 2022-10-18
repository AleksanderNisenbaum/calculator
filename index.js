const calculator = window.calculator()
const input = document.getElementById("resultv2")

const reset = () => {
    calculator.reset()
    input.value = ""
}

const fitInputField = () => {
    if (input.value.length > input.maxLength) {
        reset()
    }
}

const keys = [...document.querySelectorAll(".key")]
keys.forEach(btn => {
    const val = btn.dataset.keyvalue
    btn.onclick = () => {
        if (calculator.keyPress(val)) {
            input.value += val
            fitInputField()
        }
    }
})

document.querySelector(".eval").onclick = () => {
    const obj = calculator.calculate()
    if (obj.ok) {
        // play around visible portion of the calc
        input.value = obj.result
        fitInputField()
    }
}

document.querySelector(".del").onclick = () => reset()