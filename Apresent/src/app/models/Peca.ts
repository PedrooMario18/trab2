import {Entity, Column, PrimaryColumn, ManyToOne, JoinColumn, ChildEntity} from 'typeorm';
// import Pedido from './Pedido';
//imports

@Entity('tb_peca')
class Peca {

    @PrimaryColumn('text')
    id: string;

    @Column('text')
    nome: string;

    @Column('text')
    preco: string;

    @Column('text')
    tipo: string;

    @Column('text')
    marca: string;

    @Column('text')
    material: string;

    @Column('date',  {nullable:true})
    ano_fabric: Date;

}

export default Peca;

//agregacao
// @ManyToMany(() => Peça)
// @JoinTable({name : "tb_pessoa_peca", joinColumn: {name:
// "pessoa_nome", referencedColumnName: "nome"}, inverseJoinColumn: {name:
// "peca_id", referencedColumnName: "id"}})
// peca: Peca[];