import { DaoInterface } from './DaoInfertace'
import Pessoa from './Concessionaria'
export class PessoaDao implements DaoInterface {
    nomeTabela: string = 'tb_pessoa'

    inserir(object: Pessoa): boolean {
        console.log('logica de insert')
        return true
    }
    atualizar(object: Pessoa): boolean{
        console.log('logica update')
        return true
    }
    remover(id: number): Pessoa {
        console.log('logica delete')
        return new Pessoa('', [])
    }
    selecionar(id: number): Pessoa {
        console.log('logica select')
        return new Pessoa('', [])
    }
    selecionarTodos(): [any] {
        console.log('logica getAll')
        return [new Pessoa('',[])]
    }

}