import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Vendedor from '../models/Vendedor';

class VendedorController{

    async list(req: Request, res: Response){
        const repository = getRepository(Vendedor);
        const lista = await repository.find();
        return res.json(lista);
    }

    async find(req: Request, res: Response){
        const repository = getRepository(Vendedor);
        const cpf = req.params.cpf;
        const f = await repository.findOne({where : {"cpf" : cpf}});
        if(f){     
            console.log(f);      
            return res.json(f);
        }else{
            return res.sendStatus(204);
        }
    }

    async login(req: Request, res: Response){
        const repository = getRepository(Vendedor);
        const {cpf, senha} = req.body;
        const f = await repository.findOne(
            {where : {"cpf" : cpf, "senha" : senha }});
        if(f){           
            res.sendStatus(201);
            //return res.json(f);
        }else{
            return res.sendStatus(204);
        }
    }

    //metodos para a insercao, alteracao e remoçao de Endereco.

    async store(req: Request, res: Response){

        const repository = getRepository(Vendedor);//recupera o repositorio de Endereço
        //console.log(req.body);
        const end = repository.create(req.body);
        await repository.save(end);
        return res.json(end);
    }    
    
    async delete(req: Request, res: Response){
        try{
            const repository = getRepository(Vendedor);
            const cpf = req.params.cpf;
            const end = await repository.findOne({where : {"cpf" : cpf }});
            if(end){
                await repository.remove(end);
                return res.sendStatus(204);
            }else{
                return res.sendStatus(404);
            }
        }catch(e:unknown){
        
            console.log(e);
            return res.sendStatus(500);
        }

    }

    async update(req: Request, res: Response){
    
        const repository = getRepository(Vendedor);//recupera o repositorio do PAtente.
    
        const cpf = req.body.cpf;//extrai os atributos id do corpo da mensagem
    
        const idExists = await repository.findOne({where :{cpf}});//consulta na tabela se existe um registro com o mesmo id.
        
        if(!idExists){
            return res.sendStatus(404);
        }
        
        const p = repository.create(req.body); //cria a entidade Jogador
        
        await repository.save(p); //persiste (update) a entidade na tabela.
        
        return res.json(p);
}

}

export default new VendedorController();