import { Request, Response, NextFunction } from "express";

import Debug from "debug";
const debugJoi = Debug("schemaJoi");

import { schema } from "../services/schema";

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
