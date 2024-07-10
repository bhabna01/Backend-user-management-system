import mongoose, { Schema, Document } from 'mongoose';

export type TRole =
    | 'showaUser'
    | 'showaAdmin'
    | 'showaSubAdmin'
    | 'serviceProviderAdmin'
    | 'serviceProviderSubAdmin'
    | 'serviceProviderEngineer'
    | 'serviceProviderBranchManager'
    | 'serviceProviderSupportStuff';

interface IAddress {
    isDeleted: boolean;
    address: {
        street: string;
        city: string;
        prefecture: string;
        postalCode: string;
        country: string;
        buildingName: string;
        roomNumber: string;
        state?: string;
        details?: string;
    };
}

export interface IUser extends Document {
    uid: string;
    email: string;
    role: TRole;
    status: 'in-progress' | 'approved' | 'suspended';
    name: { firstName: string; lastName: string };
    phone: string;
    occupation?: string;
    dateOfBirth: Date;
    gender: 'male' | 'female' | 'prefer-not-answer';
    photoUrl?: string;
    addresses?: IAddress[];
}

const addressSchema = new Schema<IAddress>({
    isDeleted: { type: Boolean, required: true },
    address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        prefecture: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true },
        buildingName: { type: String, required: true },
        roomNumber: { type: String, required: true },
        state: String,
        details: String,
    },
});

const userSchema = new Schema<IUser>({
    uid: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    status: { type: String, required: true },
    name: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
    },
    phone: { type: String, required: true, unique: true },
    occupation: String,
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, required: true },
    photoUrl: String,
    addresses: [addressSchema],
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;
