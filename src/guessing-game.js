class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.middle = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        let array = [];
        for (let i = this.min; i < this.max; i++) {
            array.push(i);
        }
        this.middle = array[Math.floor((array.length + 1) / 2)];
        return this.middle;
    }

    lower() {
        this.max = this.middle;
    }

    greater() {
        this.min = this.middle;
    }
}

module.exports = GuessingGame;
