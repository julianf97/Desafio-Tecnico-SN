import Tramite from '../models/tramite.js';

export const verificarUsuarioMiddleware = async (req, res, next) => {
    const { userId } = req.params;

    try {
        const tramite = await Tramite.findOne({ where: { userId } });

        if (!tramite) {
            req.tramiteExistente = false;
        } else {
            req.tramiteExistente = true;
            req.estadoTramite = tramite.estado;
        }
        
        next();
    } catch (error) {
        console.error('Error al verificar usuario:', error);
        res.status(500).json({ error: 'Error al verificar usuario.' });
    }
};
