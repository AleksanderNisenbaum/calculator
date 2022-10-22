(function(origin) {
    const calculator = () => {
        let num = 0
        let sign = '+'
        let prev = ''
        let stack = []

        const isNumber = (num) => /\d/.test(num)

        const hasTrailingSign = () => prev != "" && !isNumber(prev)

        const handleSign = (c) => {
            if (sign === '-') stack.push(-num)
            else if (sign === '+') stack.push(num)
            else if (sign === '*') stack.push(stack.pop() * num)
            else if (sign === '/') stack.push(~~(stack.pop() / num))

            sign = c
            num = 0
        }

        // Handles any keys pressed on the calculator
        // returns true if calculator's state was adjusted successfully and false otherwise
        const keyPress = (c) => {
            // number
            if (isNumber(c)) 
                num = num * 10 + Number(c) // e.g. '14' -> 1 * 10 + 4
            else {
                // do not allow 2 signs in a row
                if (hasTrailingSign())
                    return false;

               handleSign(c);
            }

            prev = c

            return true
        }

        // Resets the inner state of the calculator
        const reset = () => {
            num = 0
            sign = '+'
            stack = []
        }

        // Evaluates current expression entered in the calculator 
        // and returns it as a string representation. Unfinished expressions
        // are left intact.
        const calculate = () => {
            if (hasTrailingSign())
                return { ok: false }

            handleSign(sign)

            const result = stack.reduce((a, b) => a + b)
            reset()
            num = result

            return { ok: true, result: result }
        }

        return {
            keyPress: keyPress,
            reset: reset,
            calculate: calculate,
        }
    }  

    // importing directly to so-called origin due to the lack of server from our side
    // to support es6 modules
    origin.calculator = calculator

})(window)

