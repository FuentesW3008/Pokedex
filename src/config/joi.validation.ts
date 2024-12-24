/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Joi from "joi";


export const JoiValidationSchema = Joi.object({
    MONGODB: Joi.required(),
    PORT: Joi.number().default(3001),
    DEFAULTLIMIT: Joi.number().default(7),
});