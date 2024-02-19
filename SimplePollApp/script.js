'use strict';
const poll = {
  question: 'what is your favorite programming language?',
  options: ['0: JavaScript', '1: Python ', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    let input = prompt(
      `${this.question}\n${this.options.join('\n')}\n(Write option number)`
    );
    if (input !== null && input !== '') {
      let answer = Number(input);
      console.log(answer);
      typeof answer === 'number' &&
        answer < this.options.length &&
        this.answers[answer]++;
    }
    this.displayResults();
  },
  displayResults: function (type = 'array') {
    if (type === 'string') {
      console.log(
        `Poll results are ${this.answers[0]}, ${this.answers[1]}, ${this.answers[2]}, ${this.answers[3]}`
      );
    } else if (type === 'array') {
      console.log(this.answers);
    }
  },
};

//Use the bind() method to binds the "this" value to the poll object.
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
