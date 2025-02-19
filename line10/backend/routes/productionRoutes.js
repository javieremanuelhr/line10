import express from 'express';
import { Production } from '../models/production.js';

const router = express.Router();

// Crear un nuevo registro de producción
router.post('/', async (req, res) => {
    try {
        const newProduction = new Production(req.body);
        await newProduction.save();
        res.status(201).json(newProduction);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Obtener todos los registros de producción
router.get('/', async (req, res) => {
    try {
        const productions = await Production.find();
        res.json(productions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Obtener un registro por ID
router.get('/:id', async (req, res) => {
    try {
        const production = await Production.findById(req.params.id);
        if (!production) return res.status(404).json({ message: "Registro no encontrado" });
        res.json(production);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Obtener registros por fecha
router.get('/date/:date', async (req, res) => {
    try {
        const { date } = req.params;
        const productions = await Production.find({
            date: { $gte: new Date(`${date}T00:00:00.000Z`), $lte: new Date(`${date}T23:59:59.999Z`) }
        });
        res.json(productions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Actualizar un registro por ID
router.put('/:id', async (req, res) => {
    try {
        const updatedProduction = await Production.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduction) return res.status(404).json({ message: "Registro no encontrado" });
        res.json(updatedProduction);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Eliminar un registro por ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedProduction = await Production.findByIdAndDelete(req.params.id);
        if (!deletedProduction) return res.status(404).json({ message: "Registro no encontrado" });
        res.json({ message: "Registro eliminado exitosamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
