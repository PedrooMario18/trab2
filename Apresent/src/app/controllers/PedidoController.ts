import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Pedido from '../models/Pedido';


class PedidoController{

   

    async list(req: Request, res: Response){
        const repository = getRepository(Pedido);
        const lista = await repository.createQueryBuilder("tb_pedido").innerJoinAndSelect("tb_pedido.vendedor", "vendedor").innerJoinAndSelect("tb_pedido.cliente", "cliente").leftJoinAndSelect("tb_pedido.peca", "peca").getMany();
        return res.json(lista);
    }

    

    async update(req: Request, res: Response){
    
        const repository = getRepository(Pedido);//recupera o repositorio do PAtente.
    
        const id = req.body.id;//extrai os atributos id do corpo da mensagem
    
        const idExists = await repository.findOne({where :{id}});//consulta na tabela se existe um registro com o mesmo id.
        
        if(!idExists){
            return res.sendStatus(404);
        }
        
        const p = repository.create(req.body); //cria a entidade Jogador
        
        await repository.save(p); //persiste (update) a entidade na tabela.
        
        return res.json(p);
}

    async store(req: Request, res: Response){
        const repository = getRepository(Pedido);
        const {id} = req.body;
        const idExists = await repository.findOne({where : {id}});
        if(!idExists){
            const e = repository.create(req.body);
            await repository.save(e);
            return res.json(e);
        }else{
            return res.sendStatus(409);
        }
    }
 
    async find(req: Request, res: Response){

        const repository = getRepository(Pedido);
        const id = req.params.id;

        const p = await repository.findOne({where : {"id" : id}});

        if(p){
            return res.json(p)
        }else{
            return res.sendStatus(204);
        }
    }

    async delete(req: Request, res: Response){
        try{
            const repository = getRepository(Pedido);
            const id = req.params.id;
            const end = await repository.findOne({where : {"id" : id }});
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
}

export default new PedidoController();