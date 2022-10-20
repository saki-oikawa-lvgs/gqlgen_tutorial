"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
const todos = [
    {
        id: 11111,
        text: 'aaa',
        done: false,
    },
];
let TodoService = class TodoService {
    constructor() {
        this.todos = [];
    }
    findAll() {
        return todos;
    }
    findOneById(id) {
        const result = this.todos.find((todo) => id === todo.id);
        if (!result) {
            throw new common_1.NotFoundException();
        }
        return result;
    }
    create(text) {
        const todo = {
            id: Math.floor(Math.random() * 10000),
            text: text,
            done: false,
        };
        todos.push(todo);
        return Promise.resolve(todo);
    }
};
TodoService = __decorate([
    (0, common_1.Injectable)()
], TodoService);
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map