import { Dao } from './Dao';
//import { PessoaDao } from './PessoaDao';
//import { ConcessionariaDao } from './ConcessinariaDao'

import Concessionaria from './Concessionaria'
import Pessoa from './Pessoa';

//let dao: ConcessionariaDao = new ConcessionariaDao()
//let dao2: PessoaDao = new PessoaDao()

let concessionaria = new Concessionaria('', [])
let pessoa: Pessoa = new Pessoa('', '')

let dao3: Dao<Concessionaria> = new Dao<Concessionaria>()
let dao4: Dao<Pessoa> = new Dao<Pessoa>()
dao3.inserir(concessionaria)
dao4.remover(5)

