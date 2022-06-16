"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function classDeco(target) {
    console.log('Class decorator called', target);
}
function propertyDeco(target, name) {
    console.log('Property decorator called', target, name);
}
function getterDeco(target, name) {
    console.log('Getter decorator called', target, name);
}
function methodDeco(...args) {
    console.log('Method decorator called', args);
}
function paramDeco(...args) {
    console.log('Parameter decor called', args);
}
let Bird = class Bird {
    constructor(name) {
        this.name = name;
    }
    get birdName() {
        return this.name;
    }
    fly(speed) {
        console.log(`bird flying at ${speed}`);
    }
};
__decorate([
    propertyDeco,
    __metadata("design:type", String)
], Bird.prototype, "name", void 0);
__decorate([
    getterDeco,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Bird.prototype, "birdName", null);
__decorate([
    methodDeco,
    __param(0, paramDeco),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Bird.prototype, "fly", null);
Bird = __decorate([
    classDeco,
    __metadata("design:paramtypes", [String])
], Bird);
const newBird = new Bird('peacock');
newBird.fly(234);
