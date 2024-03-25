import express from "express";
import  uploadMiddlewere  from "../middleware/uploadMiddlewere.js";
import { createTramite, verificarUsuario } from "../controllers/tramiteControllers.js";
import { getTramites } from "../controllers/tramiteControllers.js";
import { gestionarTramite } from "../controllers/tramiteControllers.js";
import { gestionarTramiteMiddleware } from "../middleware/gestionarTramiteMiddlewere.js";
import { verificarUsuarioMiddleware } from "../middleware/verificarUsuarioMiddlewere.js";
import { createTramiteMiddleware } from "../middleware/createTramiteMiddlewre.js";

const tramiteRouter = express.Router();

tramiteRouter.post('/api/nuevotramite', uploadMiddlewere, createTramiteMiddleware, createTramite);

tramiteRouter.get('/api/tramites', getTramites);

tramiteRouter.get('/api/verificarusuariotramite/:userId', verificarUsuarioMiddleware, verificarUsuario);

tramiteRouter.put('/api/gestionartramite/:id/:accion', gestionarTramiteMiddleware, gestionarTramite);

export default tramiteRouter;
