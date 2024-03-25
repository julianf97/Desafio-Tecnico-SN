import Tramite from "../models/tramite.js";

export const createTramite = async (req, res) => {
    try {
        const newTramite = req.newTramite; 

        res.status(201).json({ message: 'Trámite creado exitosamente', tramite: newTramite });
    } catch (error) {
        console.error("Error al crear el trámite:", error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};



export const getTramites = async (req, res) => {
    try {
        const tramites = await Tramite.findAll();
        res.status(200).json(tramites);
    } catch (error) {
        console.error('Error al obtener todos los trámites:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const verificarUsuario = async (req, res) => {
    const { userId } = req.params;

    try {
        if (req.tramiteExistente) {
            return res.status(200).json({ userId, estado: req.estadoTramite, message: 'El usuario ya ha realizado un trámite.' });
        } else {
            return res.status(200).json({ userId, estado: 'Sin trámite', message: 'El usuario aún no ha realizado ningún trámite.' });
        }
    } catch (error) {
        console.error('Error al verificar usuario:', error);
        return res.status(500).json({ error: 'Error al verificar usuario.' });
    }
};


export const gestionarTramite = async (req, res) => {
    try {
        const { tramite, accion } = req;

        switch (accion) {
            case 'aceptado':
                await tramite.update({ estado: 'aceptado' });
                res.status(200).json({ message: 'Trámite aceptado exitosamente' });
                break;
            case 'rechazado':
                await tramite.update({ estado: 'rechazado' });
                res.status(200).json({ message: 'Trámite rechazado exitosamente' });
                break;
            case 'vencido':
                await tramite.update({ estado: 'vencido' });
                res.status(200).json({ message: 'Trámite vencido exitosamente' });
                break;
            default:
                res.status(400).json({ message: 'Acción no válida' });
        }
    } catch (error) {
        console.error('Error al gestionar el trámite:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};
