import ftp from "basic-ftp";
import { Readable } from 'stream';
import Tramite from '../models/tramite.js';
import dotenv from 'dotenv';

dotenv.config()

export const createTramiteMiddleware = async (req, res, next) => {
    const { userId, dni, nroTramite, nombre, apellido } = req.body;
    const archivo = req.files['archivo'][0];

    try {
        const client = new ftp.Client();
        client.ftp.verbose = true;
        await client.access({
            host: process.env.FTP_HOST,
            user: process.env.FTP_USER,
            password: process.env.FTP_PASSWORD,
            secure: false 
        });

        const stream = Readable.from([archivo.buffer]); 

        await client.uploadFrom(stream, archivo.originalname);

        const cleanedFileName = archivo.originalname.replace(/\s+/g, '-');

        const newTramite = await Tramite.create({
            nombre,
            apellido,
            dni,
            numero_tramite: nroTramite,
            userId: userId,
            nombre_archivo: cleanedFileName
        });

        console.log("Nuevo trámite creado:", newTramite.toJSON());

        client.close();

        req.newTramite = newTramite; 
        next(); 
    } catch (error) {
        console.error("Error al crear el trámite:", error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};
