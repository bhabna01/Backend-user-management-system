import Joi from 'joi';

export const userValidationSchema = Joi.object({
    uid: Joi.string().required(),
    email: Joi.string().email().required(),
    role: Joi.string().valid(
        'showaUser',
        'showaAdmin',
        'showaSubAdmin',
        'serviceProviderAdmin',
        'serviceProviderSubAdmin',
        'serviceProviderEngineer',
        'serviceProviderBranchManager',
        'serviceProviderSupportStuff'
    ).required(),
    status: Joi.string().valid('in-progress', 'approved', 'suspended').required(),
    name: Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
    }).required(),
    phone: Joi.string().required(),
    occupation: Joi.string().optional(),
    dateOfBirth: Joi.date().required(),
    gender: Joi.string().valid('male', 'female', 'prefer-not-answer').required(),
    photoUrl: Joi.string().optional(),
    addresses: Joi.array().items(
        Joi.object({
            isDeleted: Joi.boolean().required(),
            address: Joi.object({
                street: Joi.string().required(),
                city: Joi.string().required(),
                prefecture: Joi.string().required(),
                postalCode: Joi.string().required(),
                country: Joi.string().required(),
                buildingName: Joi.string().required(),
                roomNumber: Joi.string().required(),
                state: Joi.string().optional(),
                details: Joi.string().optional(),
            }).required(),
        })
    ).optional(),
});
