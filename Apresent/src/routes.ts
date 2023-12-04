// Imports Routes
import {Router} from 'express';
import FornecedorController from './app/controllers/FornecedorController';
import ClienteController from './app/controllers/ClienteController';
import VendedorController from './app/controllers/VendedorController';
import PecaController from './app/controllers/PecaController';
import PedidoController from './app/controllers/PedidoController';

const router = Router();

// Fornecedor
router.get('/listfornecedor', FornecedorController.list);
router.get('/forncedor/:id', FornecedorController.find);
router.post('/loginfornecedor', FornecedorController.login);
router.post('/insertfornecedor', FornecedorController.store)
router.put('/updatefornecedor', FornecedorController.update);
router.delete('deletevendedor/:cpf', FornecedorController.delete)

// Vendedor
router.get('/listvendedor', VendedorController.list);
router.get('/vendedor/:id', VendedorController.find);
router.post('/loguinvendedor', ClienteController.login);
router.delete('/deletevendedor/:cpf', VendedorController.delete);
router.put('/updatevendedor', VendedorController.update);
router.post('/insertvendedor', VendedorController.store);

// Cliente
router.get('/listcliente', ClienteController.list);
router.get('/cliente/:cpf', ClienteController.find);
router.post('/logincliente', ClienteController.login);
router.delete('/deletecliente/:cpf', ClienteController.delete);
router.put('/updatecliente', ClienteController.update);
router.post('/insertcliente', ClienteController.store);

//Pedido
router.get('/listpedido', PedidoController.list);
router.get('/pedido/:id', PedidoController.find);
router.delete('/deletepedido/:id', PedidoController.delete);
router.put('/updatepedido', PedidoController.update);
router.post('/insertpedido', PedidoController.store);

// Peça
router.get('/listpeca', PecaController.list);
router.get('/peca/:id', PecaController.find);
router.delete('/deletepeca/:id', PecaController.delete);
router.put('/updatepeca', PecaController.update);
router.post('/insertpeca', PecaController.store);
router.post('/addpeca', PecaController.store);

export default router;