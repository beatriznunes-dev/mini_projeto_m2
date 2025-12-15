const Tarefa = require('../models/Tarefa');

exports.criarTarefa = async (req, res) => {
    try {
        const { titulo, descricao, status } = req.body;
        
        const novaTarefa = await Tarefa.create({
            titulo,
            descricao,
            status: status || 'a fazer'
        });
        
        res.status(201).json(novaTarefa);
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
};

exports.listarTarefas = async (req, res) => {
    try {
        const tarefas = await Tarefa.findAll();
        
        res.status(200).json(tarefas);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};

exports.buscarTarefaPorId = async (req, res) => {
    try {
        const { id } = req.params;

        const tarefa = await Tarefa.findByPk(id);

        if (!tarefa ) {
            return res.status(404).json({erro: 'Tarefa não encontrada'});
        }

        res.status(200).json(tarefa);
            
    } catch (erro) {
        res.status(500).json({ erro: erro.message});
    }
};

exports.atualizarTarefa = async (req, res) => {
    try {
        const { id } = req.params;
        
        const { titulo, descricao, status} = req.body;

        const tarefa = await Tarefa.findByPk(id);

       if (!tarefa) {
    return res.status(404).json({ erro: 'Tarefa não encontrada' });
}
       await tarefa.update({ titulo, descricao, status });

       res.status(200).json(tarefa);

    } catch (erro) {
        res.status(400).json({ erro: erro.message });
    }
};

exports.atualizarStatus = async (req, res) => {
    try{
        const { id } = req.params;

        const { status } = req.body;

        const tarefa = await Tarefa.findByPk(id);

        if (!tarefa) {
    return res.status(404).json({ erro: 'Tarefa não encontrada' });
}
       await tarefa.update({ status });

       res.status(200).json(tarefa);

    } catch (erro) {
        res.status(400).json({ erro: erro.message });
    }
};

exports.deletarTarefa = async (req, res) => {
    try {
        const { id } = req.params;
        
        const tarefa = await Tarefa.findByPk(id);
        
        if (!tarefa) {
            return res.status(404).json({ erro: 'Tarefa não encontrada' });
        }  
        
        await tarefa.destroy();
        res.status(204).send();
        
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};
