const path = require('path')
const fs = require('fs')


const dbPath = path.join(
    path.dirname(process.mainModule.filename),'data','provas.json'
)

class Prova{
    constructor(disciplina, professor, dataProva){
        this.disciplina=disciplina
        this.professor=professor
        this.dataProva=dataProva
    }

    lerProvas()

    salvar(){
        let provas=[]

        try{
            let datas =fs.readFileSync(dbPath)
            provas=JSON.parse(datas.toString())
        } catch (e){}
        provas.push(this)
        fs.writeFileSync(dbPath, JSON.stringify(provas))
    }
    static listar(){
        let provas=[]

        try{
            let datas =fs.readFileSync(dbPath)
            console.log(datas);
            provas=JSON.parse(datas.toString())
        } catch (e){
            console.log(e);
        }
        console.log(provas);
        return provas
    }
}

module.exports = Prova