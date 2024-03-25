import multer from 'multer';

const upload = multer();

const uploadMiddleware = (req, res, next) => {
    upload.fields([
        { name: 'userId' },
        { name: 'archivo' },
        { name: 'dni' },
        { name: 'nroTramite' },
        { name: 'nombre' },
        { name: 'apellido' }
    ])(req, res, err => {
        if (err) {
            console.error("Error en la carga de archivos:", err);
            return res.status(500).json({ message: 'Error en la carga de archivos' });
        }
        next();
    });
};

export default uploadMiddleware;