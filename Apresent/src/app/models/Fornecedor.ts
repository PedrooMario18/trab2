import {Entity, Column, PrimaryColumn, ManyToMany, JoinTable, ChildEntity} from 'typeorm';
import Pessoa from './Pessoa';

@ChildEntity()
export default class Fornecedor extends Pessoa{
   
    @Column('text')
    endereco: string;

    @Column('text')
    cidade: string;

    // @Column('text')
    // telefone: string;

    @Column('text')
    cep: string;

    @Column('text')
    cnpj: string;

}
