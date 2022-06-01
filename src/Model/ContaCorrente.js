const Conta = require("./Conta");

class ContaCorrente extends Conta {

    constructor(nome,cpf,data_nascimento,agencia) {
        super(agencia,nome,data_nascimento,cpf)
        this.nome = nome
        this.cpf = cpf
        this.idade = this.descobreIdade(data_nascimento)
        this.agencia = agencia
        this.conta = this.geraConta()
        this.saldo = 0
    }
}

module.exports = ContaCorrente