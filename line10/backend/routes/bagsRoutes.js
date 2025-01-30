import express from 'express';
import { Bag } from '../models/bags.js';

const router = express.Router();

//Create a new bag

router.post('/', async (request, response) => {
    try {
      if (
        !request.body.time ||
        !request.body.date ||
        !request.body.shift ||
        !request.body.material ||
        !request.body.provider ||
        !request.body.flexLot ||
        !request.body.providerLot ||
        !request.body.bagNumber ||
        !request.body.weight ||
        !request.body.hopper ||
        !request.body.silo ||
        !request.body.operator
      ) {
        return response.status(400).send({
          message: 'Send all required fields: time, date, shift, material, provider, flexLot, providerLot, bagNumber, weight, hopper, silo, operator',
        });
      }
      const newBag = {
        time: request.body.time,
        date: request.body.date,
        shift: request.body.shift,
        material: request.body.material,
        provider: request.body.provider,
        flexLot: request.body.flexLot,
        providerLot: request.body.providerLot,
        bagNumber: request.body.bagNumber,
        weight: request.body.weight,
        hopper: request.body.hopper,
        silo: request.body.silo,
        operator: request.body.operator,
      };
  
      const bag = await Bag.create(newBag);
  
      return response.status(201).send(bag);
    } catch (error) {
      console.log(error.message);
        return response.status(500).send({ message: 'Error creating new bag' });
    }
  });

//Get all bags

router.get('/', async (req, res) => {
    try{
        const bags = await Bag.find();
        return res.status(200).json({
            count: bags.length,
            data: bags
        });
    } catch (error) {
        console.log('Error getting bags: ', error);
        return res.status(500).send({ message: 'Error getting bags' });
    }
});

//Get bag by ID

router.get('/:id', async (req, res) => {
    try {
        const bag = await Bag.findById(req.params.id);
        if (bag) {
            return res.status(200).send(bag);
        } else {
            return res.status(404).send({ message: 'Bag not found' });
        }
    } catch (error) {
        console.log('Error getting bag: ', error);
        return res.status(500).send({ message: 'Error getting bag' });
    }
});

//Update bag by ID

router.put('/:id', async (req, res) => {
    try {
        const bag = await Bag.findById(req.params.id);
        if (bag) {
            bag.time = req.body.time || bag.time;
            bag.date = req.body.date || bag.date;
            bag.shift = req.body.shift || bag.shift;
            bag.material = req.body.material || bag.material;
            bag.provider = req.body.provider || bag.provider;
            bag.flexLot = req.body.flexLot || bag.flexLot;
            bag.providerLot = req.body.providerLot || bag.providerLot;
            bag.bagNumber = req.body.bagNumber || bag.bagNumber;
            bag.weight = req.body.weight || bag.weight;
            bag.hopper = req.body.hopper || bag.hopper;
            bag.silo = req.body.silo || bag.silo;
            bag.operator = req.body.operator || bag.operator;

            const updatedBag = await bag.save();
            return res.status(200).send(updatedBag);
        } else {
            return res.status(404).send({ message: 'Bag not found' });
        }
    } catch (error) {
        console.log('Error updating bag: ', error);
        return res.status(500).send({ message: 'Error updating bag' });
    }
});

//Delete bag by ID

router.delete('/:id', async (request, response) => {
    try {
      const { id } = request.params;
  
      const result = await Bag.findByIdAndDelete(id);
  
      if (!result) {
        return response.status(404).json({ message: 'Book not found' });
      }
  
      return response.status(200).send({ message: 'Book deleted successfully' });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });

export default router;

