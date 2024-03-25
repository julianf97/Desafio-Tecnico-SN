import Tramite from "../models/tramite.js";

export const gestionarTramiteMiddleware = async (req, res, next) => {
    const { id, accion } = req.params;

    try {
        const tramite = await Tramite.findByPk(id);

        if (!tramite) {
            return res.status(404).json({ message: 'Trámite no encontrado' });
        }

        if (tramite.estado !== 'pendiente') {
            return res.status(400).json({ message: 'El trámite ya ha sido aceptado, rechazado o dado por vencido.' });
        }

        switch (accion) {
            case 'aceptar':
                req.accion = 'aceptado';
                break;
            case 'rechazar':
                req.accion = 'rechazado';
                break;
            case 'vencer':
                req.accion = 'vencido';
                break;
            default:
                return res.status(400).json({ message: 'Acción no válida' });
        }

        req.tramite = tramite;
        next();
    } catch (error) {
        console.error('Error al gestionar el trámite:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};
