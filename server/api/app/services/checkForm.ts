import { Request, Response, NextFunction } from "express";

import Debug from "debug";
const debugJoi = Debug("schemaJoi");

import * as Joi from "joi";

const schema = Joi.object({
    pseudo: Joi
        .string()
        .min(4)
        .max(10)
        .required(),

    email: Joi
        .string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "fr"] } })
        .required(),

    password: Joi
        .string()
        .pattern(new RegExp("^[a-zA-Z1-9:!;.+]{8,15}$"))
        .required(),
}).required();

/**
* Verifie que le schema du body est valide
* @param req Recupere le body
* @param next Continue si le schema est valide
* @returns Retourne si invalide
*/
export const bodyValidator = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const body = await schema.validateAsync(req.body);
        if(body.error){
            debugJoi("Error ", body.error.message);
            throw new Error("Le schema est invalide");
        }
        else{
            debugJoi("Validate ", body);
            next();
        }
    } catch (error) {
        debugJoi(error);
        return error;
    }
};
