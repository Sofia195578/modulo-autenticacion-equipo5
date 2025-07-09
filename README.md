# modulo-autenticacion-equipo5

1. Introducción
Este proyecto consiste en el desarrollo de una aplicación web completamente funcional del lado del cliente, que permite a los usuarios registrarse, iniciar sesión y acceder a un panel personalizado (dashboard). La aplicación está construida exclusivamente con tecnologías frontend (HTML, CSS y JavaScript) y utiliza localStorage para el almacenamiento de datos, evitando así la necesidad de un backend.

2. Objetivos
Objetivo General
Desarrollar una aplicación web interactiva que gestione el registro, inicio de sesión y visualización de un panel de usuario de forma segura y funcional, utilizando solo tecnologías del lado del cliente.
Objetivos Específicos
- Implementar formularios validados para el registro e inicio de sesión.
- Almacenar usuarios y sesiones mediante localStorage.
- Crear un dashboard visualmente atractivo y adaptado al usuario.
- Asegurar la navegación y control de sesiones mediante JavaScript.


3. Estructura del Proyecto


├── login.html           # Página de inicio de sesión
├── register.html        # Página de registro
├── dashboard.html       # Panel principal del usuario
├── styles.css       # Estilos generales
  
├── js/
   ├── register.js      # Lógica del registro
   ├── login.js         # Lógica del login
   └── dashboard.js     # Lógica del dashboard
├── README.md

4. Requerimientos
Requerimientos Funcionales
· - El sistema debe permitir el registro de nuevos usuarios mediante un formulario que solicite nombre, correo electrónico y contraseña.
· - Se debe validar que todos los campos estén diligenciados correctamente.
· - La contraseña debe cumplir con criterios de seguridad: al menos 8 caracteres, una letra mayúscula y un número.
· - El usuario debe aceptar los términos y condiciones para completar el registro.
· - Los datos del usuario se almacenan localmente utilizando localStorage.
· - El sistema debe validar que las credenciales ingresadas coincidan con los datos previamente registrados.
· - Si las credenciales son incorrectas, se debe permitir un máximo de tres intentos fallidos antes de bloquear el acceso temporalmente.
· - Al iniciar sesión correctamente, se almacenan datos de sesión (nombre, correo y un token simulado) en localStorage.
· - Al iniciar sesión exitosamente, el usuario debe ser redirigido a un panel personalizado.
· - El dashboard debe mostrar el nombre del usuario y otros datos almacenados.
· - Debe contar con tarjetas visuales para mostrar información como ocupación, perfil, eventos, etc.
· - El panel debe incluir un botón de cierre de sesión que elimine la sesión activa y redirija automáticamente a la página de inicio de sesión.
· - Si el usuario intenta acceder al dashboard sin haber iniciado sesión, debe ser redirigido automáticamente al login.
Requerimientos No Funcionales
· - Diseño moderno, claro y visualmente atractivo.
· - Interfaz responsiva, adaptada a dispositivos medianos.
· - Persistencia de datos en el navegador utilizando localStorage.
· - Solución 100% frontend, sin conexión a servidor.


5. Funcionalidades Desarrolladas
· - Validación de formularios con mensajes visuales.
· - Almacenamiento seguro en localStorage.
· - Verificación de sesiones al cargar el dashboard.
· - Redirección automática al login si el usuario no está autenticado.
· - Dashboard dinámico con nombre e información del usuario.
· - Cierre de sesión que elimina la sesión y redirige.


6. Pruebas y Validaciones
· - Pruebas manuales para validar los flujos de registro, login y cierre de sesión.
· - Verificación del almacenamiento y recuperación de datos desde localStorage.
· - Prueba de responsividad en pantallas medianas (tablet/laptop).
· - Comprobación de validaciones básicas de seguridad en formularios.


7. Conclusiones
El proyecto demuestra que es posible construir una aplicación funcional de autenticación y gestión de usuarios utilizando exclusivamente tecnologías frontend.
Se cumplieron todos los requerimientos propuestos, garantizando seguridad básica, persistencia y una experiencia de usuario fluida.
La organización por roles y el uso de GitHub facilitó el trabajo colaborativo.