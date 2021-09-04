"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaDao = void 0;
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var PessoaDao = /** @class */ (function () {
    function PessoaDao() {
        this.nomeTabela = 'tb_pessoa';
    }
    PessoaDao.prototype.inserir = function (object) {
        console.log('logica de insert');
        return true;
    };
    PessoaDao.prototype.atualizar = function (object) {
        console.log('logica update');
        return true;
    };
    PessoaDao.prototype.remover = function (id) {
        console.log('logica delete');
        return new Concessionaria_1.default('', []);
    };
    PessoaDao.prototype.selecionar = function (id) {
        console.log('logica select');
        return new Concessionaria_1.default('', []);
    };
    PessoaDao.prototype.selecionarTodos = function () {
        console.log('logica getAll');
        return [new Concessionaria_1.default('', [])];
    };
    return PessoaDao;
}());
exports.PessoaDao = PessoaDao;
