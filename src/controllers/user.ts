import { Request, Response } from 'express';
import User from '../models/user';
import { userValidationSchema } from '../validation/userValidation';

// Type for error handling
interface CustomError extends Error {
    message: string;
}

export const createUser = async (req: Request, res: Response) => {
    try {
        const { error } = userValidationSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        const error = err as CustomError;
        res.status(500).json({ message: error.message });
    }
};

export const findUser = async (req: Request, res: Response) => {
    try {
        const { email, phone } = req.query;

        if (!email && !phone) {
            return res.status(400).json({ message: 'Email or phone must be provided' });
        }

        // Define query object with correct typing
        const query: { [key: string]: string | undefined } = {};
        if (email) query['email'] = email as string;
        if (phone) query['phone'] = phone as string;

        const users = await User.find(query);
        res.status(200).json(users);
    } catch (err) {
        const error = err as CustomError;
        res.status(500).json({ message: error.message });
    }
};
