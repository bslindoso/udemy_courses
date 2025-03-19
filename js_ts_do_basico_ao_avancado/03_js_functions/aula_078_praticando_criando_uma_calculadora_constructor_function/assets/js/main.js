(() => {
  // same calc using constructor function 
  function Calculator() {

    // Attributes
    this.display = document.querySelector('.display');
    this.allowedKeys = [8, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 109, 111, 187, 189, 190, 193];

    // Methods
    this.start = () => {
      this.buttonClick();
      this.keyPress();
      this.blockNotAllowedKeys();
    };

    this.buttonClick = () => {
      document.addEventListener('click', event => {
        const element = event.target;

        if (element.classList.contains('btn-num')) this.btnToDisplay(element.innerText);
        if (element.classList.contains('btn-clear')) this.clearDisplay();
        if (element.classList.contains('btn-del')) this.removeOne();
        if (element.classList.contains('btn-eq')) this.calculate();

      });
    };

    this.keyPress = () => this.display.addEventListener('keyup', event => {
      if (event.keyCode === 13) this.calculate();
    });

    this.blockNotAllowedKeys = () => {
      this.display.addEventListener('keydown', event => {
        if (event.keyCode === 13) return;
        if (event.shiftKey) {
          if (![48, 56, 57, 187].includes(event.keyCode)) {
            event.preventDefault();
            return;
          }
        } else {
          if (!this.allowedKeys.includes(event.keyCode)) event.preventDefault();
        }
      });
    };

    this.btnToDisplay = (valor) => this.display.value += valor;

    this.clearDisplay = () => this.display.value = '';

    this.removeOne = () => this.display.value = this.display.value.slice(0, -1);

    this.calculate = () => {
      let calculationString = this.display.value;

      try {
        calculationString = eval(calculationString);

        if (!calculationString) {
          alert('Invalid expression');
          return;
        }

        this.display.value = calculationString;

      } catch (e) {
        alert('Invalid expression');
      }
    }
  }

  // Create the calculator instance and start your methods.
  const calculator = new Calculator();
  calculator.start();

})();