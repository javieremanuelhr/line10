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




export default router;