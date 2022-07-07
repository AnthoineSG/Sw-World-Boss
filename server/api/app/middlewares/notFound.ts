import { Request, Response } from "express";

/**
* Retourne la page 404
* @param res Renvoie un json indiquant l'erreur 404
*/
export function notFound(req: Request, res: Response) {
    res.status(404).json({ message: "404 not found" });
}
