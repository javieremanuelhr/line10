import mongoose from 'mongoose';

const jumbosSchema = mongoose.Schema(
    {
        date: {
            type: String,
            required: true,
        },
        number: {
            type: String,
            required: true,
        },
        shift: {
            type: String,
            required: true,
        },
        material: {
            type: String,
            required: true,
        },
        thickness: {
            type: Number,
            required: true,
        },
        width: {
            type: Number,
            required: true,
        },
        length: {
            type: Number,
            required: true,
        },
        corona: {
            type: Boolean,
            required: false,
            default: false,
        },
        in: {
            type: String,
            required: true,
            validate: {
                validator: function(v) {
                    return /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(v);
                },
                message: props => `${props.value} is not a valid time format!`
            }
        },
        out: {
            type: String,
            required: true,
            validate: {
                validator: function(v) {
                    return /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(v);
                },
                message: props => `${props.value} is not a valid time format!`
            }
        },
        status: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Jumbo = mongoose.model('Jumbo', jumbosSchema);