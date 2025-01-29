import express from 'express';
import { Jumbo } from '../models/jumbos.js';

const router = express.Router();

//Create a new jumbo

router.post('/', async (request, response) => {
    try {
      if (
        !request.body.date ||
        !request.body.number ||
        !request.body.shift ||
        !request.body.material ||
        !request.body.thickness ||
        !request.body.width ||
        !request.body.length ||

        !request.body.in ||
        !request.body.out ||
        !request.body.status
      ) {
        return response.status(400).send({
          message: 'Send all required fields: date, number, shift, material, thickness, width, lenght, corona, in, out, status',
        });
      }
      const newJumbo = {
        date: request.body.date,
        number: request.body.number,
        shift: request.body.shift,
        material: request.body.material,
        thickness: request.body.thickness,
        width: request.body.width,
        length: request.body.length,
        corona: request.body.corona,
        in: request.body.in,
        out: request.body.out,
        status: request.body.status,
      };
  
      const jumbo = await Jumbo.create(newJumbo);
  
      return response.status(201).send(jumbo);
    } catch (error) {
      console.log(error.message);
        return response.status(500).send({ message: 'Error creating new jumbo' });
    }
  });

//Get all jumbos

router.get('/', async (req, res) => {
    try{
        const jumbos = await Jumbo.find();
        return res.status(200).json({
            count: jumbos.length,
            data: jumbos
        });
    } catch (error) {
        console.log('Error getting jumbos: ', error);
        res.status(500).json({ error: 'Server error' });
    }
});

export default router;

// Get a jumbo by ID

router.get('/:id', async (request, response) => {
    try {
      const { id } = request.params;
  
      const jumboo = await Jumbo.findById(id);
  
      return response.status(200).json(jumboo);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });

// Update a jumbo

router.put('/:id', async (request, response) => {
  try {
    if (
        !request.body.date ||
        !request.body.number ||
        !request.body.shift ||
        !request.body.material ||
        !request.body.thickness ||
        !request.body.width ||
        !request.body.length ||
        !request.body.corona ||
        !request.body.in ||
        !request.body.out ||
        !request.body.status
    ) {
      return response.status(400).send({
        message: 'Send all required fields: title, author, publishYear',
      });
    }

    const { id } = request.params;

    const result = await Jumbo.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: 'Book not found' });
    }

    return response.status(200).send({ message: 'Book updated successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Delete a jumbo

router.delete('/:id', async (request, response) => {
    try {
      const { id } = request.params;
  
      const result = await Jumbo.findByIdAndDelete(id);
  
      if (!result) {
        return response.status(404).json({ message: 'Book not found' });
      }
  
      return response.status(200).send({ message: 'Book deleted successfully' });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });