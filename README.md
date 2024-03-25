# Desafío técnico 

<img src="./client/assets/presentacion.png">

# Solicitud de Carnet de Manipulador de Alimentos

## Descripción

Este proyecto es una aplicación ficticia dedicada a simplificar el proceso de solicitud del carnet de manipulador de alimentos para los residentes de la ciudad de San Nicolás de los Arroyos. Facilita a los usuarios el registro, inicio de sesión y la presentación de la solicitud del carnet, todo dentro de una plataforma centralizada y de fácil acceso. Una vez iniciada la sesión, los vecinos pueden completar el trámite sin complicaciones, agilizando así el proceso administrativo requerido para obtener el carnet de manipulador de alimentos.

## Paginas

__Registro de usuarios__:

En la pantalla de registro, los nuevos usuarios deben ingresar su correo electrónico y una contraseña. Se les solicita repetir la contraseña para asegurar la precisión de los datos. Se implementan validaciones para garantizar la integridad y seguridad de la información ingresada. Una vez completado el registro, el sistema almacena los datos de manera segura en la base de datos y redirige al usuario a la pantalla de inicio de sesión

__Inicio de sesión__:

La pantalla de inicio de sesión permite a los usuarios existentes ingresar sus credenciales para acceder al sistema.
Se implementan validaciones para que el usuario ingrese correctamente su correo electronico y contraseña.
Se realiza una verificación en el servidor, donde se consulta la base de datos para confirmar la autenticidad del usuario y la correspondencia de la contraseña.

__Redirección a la pantalla principal__:

Una vez que el inicio de sesión se completa con éxito, el sistema redirige automáticamente al usuario a la pantalla principal. La ruta principal del proyecto varía en función del tipo de usuario:

__Usuario regular__:
Si el usuario recién registrado o que ha iniciado sesión es un usuario regular, será redirigido a la ruta principal estándar del proyecto. En esta ruta, encontrará un formulario diseñado para completar la solicitud del carnet de manipulador de alimentos. Los campos requeridos para completar el formulario son:

- **Nombre**
- **Apellido**
- **DNI (8 dígitos)**
- **Número de Trámite (11 dígitos)**
- **Archivo adjunto (PDF o imagen)**
  
Estos campos deben ser llenados con la información correspondiente para proceder con la solicitud del carnet.

__Usuario administrador__:
Cuando el usuario posee privilegios de administrador, será redirigido a una ruta principal exclusiva. Esta ruta ha sido diseñada para presentar una tabla detallada que recopila todas las solicitudes relacionadas con el trámite del carnet de manipulador de alimentos. Dentro de esta tabla, se exhiben datos esenciales que incluyen:

- **ID del Trámite**
- **Nombre**
- **Apellido**
- **DNI**
- **Número de Trámite**
- **ID del Usuario**
- **Nombre del Archivo**
- **Estado de la Solicitud**

Además, se proporcionan columnas adicionales que otorgan al administrador la capacidad de realizar acciones específicas. Estas columnas incluyen:

- **Aceptado**
- **Rechazado**
- **Vencido**
  
Estas columnas permiten al administrador modificar el estado de las solicitudes según corresponda. En esta ruta, el administrador tiene la capacidad de aceptar, rechazar o dar por expirado cualquier trámite pendiente, facilitando así la gestión eficiente de todas las solicitudes de carnet de manipulador de alimentos.

## Instrucciones de Instalación

### Instalación de Dependencias del Cliente

1. Accede al directorio del cliente con el siguiente comando:
    ```
    cd client
    ```

2. Ejecuta el siguiente comando para instalar las dependencias necesarias:
    ```
    npm install
    ```

Este comando descargará e instalará todas las bibliotecas y paquetes requeridos para el cliente.

### Instalación de Dependencias del Servidor

1. Abre otra terminal o regresa al directorio principal del proyecto mediante el comando `cd ...`.

2. Accede al directorio del servidor con el comando:
    ```
    cd server
    ```

3. Ejecuta el siguiente comando para instalar las dependencias del servidor:
    ```
    npm install
    ```

Esto garantizará que todas las bibliotecas esenciales para la parte del servidor estén instaladas.


## Configuración de Variables de Entorno

### Variable de Entorno del Puerto
- **PORT**: Esta variable de entorno especifica el puerto en el que el servidor escuchará las solicitudes de entrada.

### Variables de Entorno de la Base de Datos
- **DEVELOPMENT_USERNAME**: Usuario para acceder a la base de datos en el entorno de desarrollo.
- **DEVELOPMENT_PASSWORD**: Contraseña asociada al usuario de la base de datos en el entorno de desarrollo.
- **DEVELOPMENT_DATABASE**: Nombre de la base de datos en el entorno de desarrollo.
- **DEVELOPMENT_HOST**: Dirección del host de la base de datos en el entorno de desarrollo.
- **DEVELOPMENT_DIALECT**: Dialecto de la base de datos en el entorno de desarrollo.

### Variables de Entorno de la Conexión FTP
- **FTP_HOST**: Dirección IP del servidor FTP.
- **FTP_USER**: Nombre de usuario para la conexión FTP.
- **FTP_PASSWORD**: Contraseña para la conexión FTP.

## Uso del Proyecto

Para utilizar este proyecto, sigue los siguientes pasos:

### Servidor del Cliente

1. Abre una terminal en Visual Studio Code y navega hasta el directorio del cliente utilizando el siguiente comando:
    ```sh
    cd client
    ```

2. El proyecto en el frontend fue creado con Vite + React, por lo tanto, para iniciar el servidor del cliente, ejecuta:
    ```sh
    npm run dev
    ```

Este comando iniciará el servidor del cliente y estará listo para mostrar la interfaz de usuario en el navegador.

### Servidor del Backend

1. Abre una segunda terminal en Visual Studio Code y navega hasta el directorio del servidor utilizando el siguiente comando:
    ```sh
    cd server
    ```

2. Inicia el servidor del backend de una de las siguientes formas:

   - Ejecuta el siguiente comando para iniciar el servidor con nodemon, que proporciona reinicio automático durante el desarrollo:
     ```sh
     npm run dev
     ```

   - O utiliza el script `start` del archivo `package.json` para iniciar el servidor:
     ```sh
     npm start
     ```

   - Alternativamente, puedes iniciar el servidor manualmente ejecutando el siguiente comando:
     ```sh
     node src/app.js
     ```

   Cualquiera de estas formas iniciará el servidor del backend y estará listo para manejar las solicitudes del cliente.


Esto iniciará el servidor del backend y estará listo para manejar las solicitudes del cliente.

### Acceso a la Ruta del Administrador

Para acceder a la ruta del administrador en este proyecto, utiliza las siguientes credenciales:

- **Email:** admin_snciudad@gmail.com
- **Contraseña:** adminCiudadSn14

Estas credenciales te permitirán iniciar sesión como administrador y acceder a la tabla de tramites registrados en la base de datos.

# Endpoints

## Endpoints de Usuarios

### `GET /api/usuarios`

Este endpoint está diseñado para permitir a los desarrolladores obtener una lista de todos los usuarios registrados en la aplicación. Es importante destacar que este endpoint no está implementado en el proyecto en sí, sino que está destinado a ser utilizado por los desarrolladores para acceder a la información de los usuarios registrados.

Para visualizar la información de los usuarios, los desarrolladores pueden utilizar herramientas como Postman, Thunder Client, o simplemente acceder al endpoint desde un navegador web.

### `POST /api/iniciarsesion`

Al enviar una solicitud a este endpoint con las credenciales de un usuario, se autentica al usuario y se inicia sesión en la aplicación.

### `POST /api/registro`

Este endpoint permite a los usuarios registrarse en la aplicación proporcionando la información necesaria. Antes de completar el registro, se valida que el email no se haya registrado antes.

## Endpoints de Trámites

### `POST /api/nuevotramite`

Al enviar una solicitud a este endpoint con la información del nuevo trámite, se crea un nuevo registro de trámite en la base de datos.

### `GET /api/tramites`

Este endpoint permite obtener una lista de todos los trámites de solicitud de carnet de manipulador de alimentos realizados por los usuarios.

### `GET /api/verificarusuariotramite/:userId`

Al enviar una solicitud a este endpoint con el ID de usuario, se verifica si el usuario tiene un trámite de solicitud de carnet de manipulador de alimentos en curso.

### `PUT /api/gestionartramite/:id/:accion`

Este endpoint permite a los usuarios autorizados gestionar sus trámites de solicitud, realizando acciones como aprobar, rechazar o cancelar un trámite específico mediante la especificación del ID del trámite y la acción correspondiente.

Estos endpoints proporcionan una interfaz fácil de usar para que los vecinos de San Nicolás puedan completar el trámite de solicitud de carnet de manipulador de alimentos de manera eficiente y efectiva.


## Tecnologías y Herramientas Usadas

Este proyecto ha sido desarrollado utilizando las siguientes tecnologías:

- **React + Vite**

- **Tailwind**

- **Node.js**

- **Express**

- **MySQL**
