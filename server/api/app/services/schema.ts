import * as Joi from "joi";

//! --------- BODY ---------

export const schema = Joi.object({
    pseudo: Joi
        .string()
        .min(4)
        .max(10)
        .required(),

    email: Joi
        .string()
        .pattern(new RegExp("^[a-zA-Z1-9.-]+@[a-z]+.[a-z]{2,3}$"))
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "fr"] } })
        .required(),

    password: Joi
        .string()
        .pattern(new RegExp("^[a-zA-Z1-9:!;.+]{8,15}$"))
        .required(),
}).required();
