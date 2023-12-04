import {Entity, Column, PrimaryColumn, ManyToMany, JoinTable, ChildEntity} from 'typeorm';
import Pessoa from './Pessoa';

@ChildEntity()
export default class Vendedor extends Pessoa{
   
    @Column('text')
    num_vendas: string;

    @Column('text')
    indentificador: string;

}

