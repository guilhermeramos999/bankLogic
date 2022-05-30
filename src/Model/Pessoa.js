class Pessoa {
    nome
    idade
    cpf

    constructor(nome, idade, cpf) {
        this.nome = nome
        this.idade = this.descobreIdade(idade)
        this.cpf = cpf
    }

    nome() {
        return this.nome
    }

    descobreIdade(idade) {
        var data = new Date()
        let dia_atual = data.getDate();
        let mes_atual = data.getMonth() + 1;
        let ano_atual = data.getFullYear();

        //DD/MM/AAAA

        let dia_aniversario = parseInt(idade.substr(0, 2))
        let mes_aniversario = parseInt(idade.substr(3, 2))
        let ano_aniversario = parseInt(idade.substr(6, 4))

        let idadeCalculada = ano_atual - ano_aniversario

        if (mes_atual < mes_aniversario || mes_aniversario == mes_atual && dia_atual < dia_aniversario) {
            idadeCalculada--
        }

        return idadeCalculada
    }

    cpf() {
        return this.cpf
    }
}

module.exports = Pessoa