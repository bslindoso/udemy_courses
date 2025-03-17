(() => {
  // factory function that creates and returns a "calculator" object with attributes and methods to manipulate 
  // a calculator on the front end
  function createCalculator() {
    return {

      // Attributes
      display: document.querySelector('.display'),
      allowedKeys: [8, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 109, 111, 187, 189, 190, 193],

      // Methods
      start() {
        this.buttonClick();
        this.keyPress();
        this.blockNotAllowedKeys();
      },

      buttonClick() {
        document.addEventListener('click', function (event) {
          const element = event.target;

          if (element.classList.contains('btn-num')) {
            // when calling this.btntodisplay () here, we need to ensure that "this" 
            // point to the calculator object, not to the clicked element.
            // therefore it is used .bind (this) in the declaration of the function.
            this.btnToDisplay(element.innerText);
          }

          if (element.classList.contains('btn-clear')) {
            this.clearDisplay();
          }

          if (element.classList.contains('btn-del')) {
            this.removeOne();
          }

          if (element.classList.contains('btn-eq')) {
            this.calculate();
          }

          // .bind (this) ensures that the value of "this" within the function is the same as the 
          // "this" of the context where ButtonClick () was called (ie the calculating object)
        }.bind(this))
      },

      keyPress() {
        this.display.addEventListener('keyup', (event) => {
          if (event.keyCode === 13) {
            this.calculate();
          }
        })
      },

      blockNotAllowedKeys() {
        this.display.addEventListener('keydown', (event) => {
          console.log(event.keyCode)
          // Allow the Enter key: we want to capture it on keyup for calculation
          if (event.keyCode === 13) return;
          // If the Shift modifier is active:
          if (event.shiftKey) {
            // Allow only shift + [0,9,8,=]
            if (![48, 56, 57, 187].includes(event.keyCode)) {
              event.preventDefault();
              return;
            }
          } else {
            // Without Shift, allow only keys in the allowedKeys array.
            if (!this.allowedKeys.includes(event.keyCode)) {
              event.preventDefault();
            }
          }
        });
      },

      btnToDisplay(valor) {
        this.display.value += valor;
      },

      clearDisplay() {
        this.display.value = '';
      },

      removeOne() {
        this.display.value = this.display.value.slice(0, -1);
      },

      calculate() {
        let calculationString = this.display.value;

        try {
          calculationString = eval(calculationString);

          if (!calculationString) {
            alert('Conta inválida');
            return;
          }

          this.display.value = calculationString;

        } catch (e) {
          alert('Conta inválida');
        }
      },

    }
  }

  // Create the calculator instance and start your methods.
  const calculator = createCalculator();
  calculator.start();

})();