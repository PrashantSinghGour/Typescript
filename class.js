var Humans = /** @class */ (function () {
    function Humans(age, name) {
        this.age = age;
        this.name = name;
        this.human = [];
        this.age = age;
        this.name = name;
        this.addHuman({ age: age, name: name });
    }
    Humans.prototype.giveExam = function () {
        return true;
    };
    Humans.prototype.addHuman = function (human) {
        this.human.push(human);
    };
    return Humans;
}());
var human = new Humans(23, 'John');
human.addHuman({ age: 32, name: 'Mor' });
console.log(human);
