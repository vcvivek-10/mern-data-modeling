import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        digonseWith: {
            type: String,
            reuqired: true,
        },
        address: {
            type: String,
            reuqired: true,
        },
        age: {
            type: Number,
            reuqired: true,
        },
        bloodGroup: {
            type: String,
            reuqired: true,
        },
        gender: {
            type: String,
            enum: ['M', 'F', 'O'],
            reuqired: true,
        },
        addmitedIn: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hospital',
        },
    },
    {
        timestamps: true,
    }
);

export const Patient = mongoose.model('Patient', patientSchema);
