// Змініть код методів up, down і showStep таким чином, щоб їх виклик можна було зробити по ланцюжку, наприклад:

let ladder = {
    step: 0,
    up: function () {
        this.step++;
        return this
    },
    down: function () {
        this.step--;
        return this
    },
    showStep: function () { // показує теперішню сходинку
        alert(this.step);
    }
};
ladder.up().up().up().up().down().down().down().showStep()