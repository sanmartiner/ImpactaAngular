class Pessoa{
    private nome: string
    private carroPreferido: string
    private carro:string

    constructor(nome:string, carroPreferido:string, carro:string){
        this.nome = nome
        this.carroPreferido = carroPreferido
        this.carro = carro
    }

    public dizerNome(nome:string):void{
        this.nome = nome
    }

    public dizerCarroPreferido(carroPreferido:string):void{
        this.carroPreferido = carroPreferido
    }

    public comprarCarro(carro: string): boolean{
        if(carro == this.carroPreferido){
            return true
        } else {
            return false
        }

    } 

    public dizerCarroQueTem(): string{
        return

    }
}