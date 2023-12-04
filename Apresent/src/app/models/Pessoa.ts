import {Entity, Column, PrimaryColumn, TableInheritance} from 'typeorm';

@Entity('tb_pessoa')

@TableInheritance({ column: { type: "varchar", name: "type" } })

export default abstract class Pessoa {

    @PrimaryColumn('text')
    cpf: string;

    @Column('text')
    nome: string;

    @Column('text')
    email: string;

    @Column('text')
    numero: string;

    @Column('text')
    senha: string;

    
}

    // //associação (flecha)
    // @ManyToOne(type => Fornecedor)
    // @JoinColumn({name: "fornecedor_id", referencedColumnName: "id"})
    // fornecedor: Fornecedor;   

    // //associação (flecha)
    // @ManyToOne(type => Cliente)
    // @JoinColumn({name: "cliente_id", referencedColumnName: "id"})
    // endereco: Cliente;    

    // //associação (flecha)
    // @ManyToOne(type => Vendedor)
    // @JoinColumn({name: "vendedor_id", referencedColumnName: "id"})
    // endereco: Vendedor;   


//feito teoricamente pronto, revisar import

