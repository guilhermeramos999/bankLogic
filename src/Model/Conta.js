const Pessoa = require('./Pessoa')
// const conn = require('../Infra/dao')

class Conta extends Pessoa{

    constructor(agencia,nome,idade,cpf){
        super(nome,idade,cpf)
        this.agencia = agencia
        this.nome
        this.idade
        this.cpf
        this.conta
        this.saldo
    }

    geraConta() {
        return "13" + Math.floor(100000 + Math.random() * 900000)
    }

    sacar(valor){
        if(valor > this.saldo){
            console.log("Sem saldo o suficiente na conta.")
            return false
        }
        return this.saldo -= valor
    }

    depositar(valor){
        if(valor <= 0){
            console.log("Por gentileza, inserir um valor válido.")
            return false
        }
        return this.saldo += valor
    }
}

module.exports = Conta