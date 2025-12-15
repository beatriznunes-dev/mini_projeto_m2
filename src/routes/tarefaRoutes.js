const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController');

console.log("Controller carregado:", tarefaController);

router.post('/tarefas', tarefaController.criarTarefa);
router.get('/tarefas', tarefaController.listarTarefas);
router.get('/tarefas/:id', tarefaController.buscarTarefaPorId);
router.put('/tarefas/:id', tarefaController.atualizarTarefa);
router.patch('/tarefas/:id/status', tarefaController.atualizarStatus);
router.delete('/tarefas/:id', tarefaController.deletarTarefa);

module.exports = router;
