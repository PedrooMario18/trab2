import {Entity, Column, PrimaryColumn, ManyToMany, JoinTable, ManyToOne, JoinColumn} from 'typeorm';
import Vendedor from '../models/Vendedor';
import Cliente from '../models/Cliente';
import Peca from '../models/Peca';


@Entity('tb_pedido')
class Pedido {

    @PrimaryColumn() 
    id: number

    @Column('text')
    nome: string;

    @Column('text')
    observacao: string;

    @Column('float')
    valor_total: Number;

    @Column('date', {nullable: true})
    data_compra: Date;

     //associação (flecha)

     @ManyToOne(type => Vendedor)
     @JoinColumn({name: "vendedor", referencedColumnName: "cpf"})
     vendedor: Vendedor; 
     
     @ManyToOne(type => Cliente)
     @JoinColumn({name: "cliente", referencedColumnName: "cpf"})
     cliente: Cliente; 

    //agregacao (losango não preenchido)
    @ManyToMany(() => Peca)
    @JoinTable({name : "tb_pedido_peca", 
                joinColumn: {name: "pedido_id", 
                             referencedColumnName: "id"}, 
                inverseJoinColumn: {name: "peca_id", 
                                    referencedColumnName: "id"}})
    peca: Peca[];
}
export default Pedido;