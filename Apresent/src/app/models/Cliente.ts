import {Entity, Column, PrimaryColumn, ManyToMany, JoinTable, ChildEntity} from 'typeorm';
import Pessoa from './Pessoa';

@ChildEntity()
export default class Cliente extends Pessoa{
   
    @Column('text')
    saldo: string;

    @Column('text')
    codigo: string;

}

