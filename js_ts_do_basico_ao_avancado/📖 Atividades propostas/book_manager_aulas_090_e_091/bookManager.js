function createBook(title, author, year) {
  return {
    // properties
    title,
    author,
    // methods
    displayInfo() {
      console.log(this.summary);
    },
    // getters and setters
    set year(value) {
      if (typeof value !== 'number') throw new Error('Invalid Year');
      year = value;
    },
    get year() {
      return year;
    },
    get summary() {
      return `${title} - ${author} - ${year}`
    }
  }
}
const f1 = createBook('Um amor pra recordar', 'Breno Lindsay', 2014);
console.log('Factory example', f1, 'year:', f1.year);
f1.displayInfo();

console.log('');

///////////////////////////////////////////////////////////////////////////////

function Book(title, author, year) {
  // properties
  this.title = title;
  this.author = author;
  let yearPrivate = year;

  // methods
  this.displayInfo = function () {
    console.log(this.summary);
  };

  Object.defineProperty(this, 'year', {
    get: function () {
      return yearPrivate;
    },
    set: function (value) {
      if (typeof value !== 'number') throw new Error('Invalid Year');
      yearPrivate = value;
    }
  });

  Object.defineProperty(this, 'summary', {
    get: function () {
      return `${this.title} - ${this.author} - ${this.year}`
    }
  });

}

const c1 = new Book('Uma nova e divertida mente', 'Jéssica Alba', 2015);
console.log('Constructor example', c1, 'year:', c1.year);

c1.year = 2025;
console.log('year adjusted', c1.year);
c1.displayInfo();

console.log('')

///////////////////////////////////////////////////////////////////////////////

/*************************************
* DESAFIO EXTRA: mostRecentBook() *
**************************************/
function mostRecentBook(b1, b2) {
  return (b1.year > b2.year) ? b1 : b2;
}

console.log(mostRecentBook(f1, c1));