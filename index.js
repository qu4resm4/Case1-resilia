// Importando o packages
import express from 'express'
import cors from 'cors'

// instanciando o servidor
const app = express()

// configurando o servidor para receber requisições com o corpo no formato JSON
app.use(express.json());
app.use(cors())

// importando os controllers
import SobreController from './backend/controllers/sobre-controller.js'
import FuncionarioController from './backend/controllers/funcionario-controller.js';

SobreController.rotas(app);
FuncionarioController.rotas(app);

export default app
