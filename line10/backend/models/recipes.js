import mongoose from 'mongoose';

const bagsSchema = mongoose.Schema(
    {
        
    },
    {
        timestamps: true,
    }
);

export const Bag = mongoose.model('Bag', bagsSchema);