const Pessoa = require("./Pessoa");
const conn = require('../Infra/dao')

class ContaCorrente extends Pessoa {
    agencia;
    conta;

    constructor(nome, cpf, agencia) {
        super(nome, cpf)
        this.agencia = agencia
        this.conta = "Teste"
    }

    consultaConta(nome, cpf) {
        conn.query(`SELECT * FROM pessoa WHERE nome = '${nome}' AND cpf = '${cpf}' LIMIT 1;`, function (err, result, fields) {
            if (err) console.error(err)
            if(!result){
                return false
            }
            return result
        })
    }

}

const cc = new ContaCorrente("Guilherme",'12345678910','3378')

console.log(cc.consultaConta('Guilherme','12345678910'))