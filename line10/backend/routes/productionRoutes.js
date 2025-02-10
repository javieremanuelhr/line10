import express from 'express';
import { Production } from '../models/production.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const bags = await Production.find();
        return res.status(200).json({
            count: bags.length,
            data: bags
        });
    } catch (error) {
        console.log('Error getting bags: ', error);
        return res.status(500).send({ message: 'Error getting bags' });
    }
});

router.post('/', async (req, res) => {
    try {
        const {
            date,
            prodnA, mainA, coexA, eremaA, downtimeEremaA, intaremaA,
            prodnB, mainB, coexB, eremaB, downtimeEremaB, intaremaB,
            prodnC, mainC, coexC, eremaC, downtimeEremaC, intaremaC,
            supA, supB, supC,
            materialConsumption
        } = req.body;

        const newProduction = new Production({
            date,
            prodnA, mainA, coexA, eremaA, downtimeEremaA, intaremaA,
            prodnB, mainB, coexB, eremaB, downtimeEremaB, intaremaB,
            prodnC, mainC, coexC, eremaC, downtimeEremaC, intaremaC,
            supA, supB, supC,
            materialConsumption
        });

        await newProduction.save();
        return res.status(201).json({ message: 'Production data saved successfully', data: newProduction });
    } catch (error) {
        console.error('Error saving production data:', error);
        return res.status(500).json({ message: 'Error saving production data' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduction = await Production.findByIdAndDelete(id);

        if (!deletedProduction) {
            return res.status(404).json({ message: 'Production record not found' });
        }

        return res.status(200).json({ message: 'Production record deleted successfully', data: deletedProduction });
    } catch (error) {
        console.error('Error deleting production record:', error);
        return res.status(500).json({ message: 'Error deleting production record' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const productionRecord = await Production.findById(id);

        if (!productionRecord) {
            return res.status(404).json({ message: 'Production record not found' });
        }

        return res.status(200).json({ data: productionRecord });
    } catch (error) {
        console.error('Error fetching production record:', error);
        return res.status(500).json({ message: 'Error fetching production record' });
    }
});




export default router;