# Portfolio de Julen Vallecillos

Primera propuesta de diseño en español, preparada para un alojamiento estático como GitHub Pages. No requiere instalación ni compilación. Esta es una nueva base independiente: no se ha modificado el repositorio ni la web actual.

## Estructura

1. Presentación: nombre, enfoque profesional y acceso a herramientas.
2. Especialidades: arte 3D, videojuegos, diseño digital y docencia creativa.
3. Herramientas: tarjetas con logos de marca, descripción, nivel textual y escala de tres segmentos. Filtros por área.
4. Contacto: ficha personal, contacto principal y perfiles profesionales.
5. Mi red: solo personas; inicialmente Ángel Robles, tomado de los enlaces de la web actual.

No se han añadido proyectos: esta primera fase sigue el alcance solicitado. Los logos se guardan localmente en `assets/icons/`; las fuentes de cada archivo están documentadas en `assets/icons/sources.json`. Se reutilizan logos de la web original y distribuciones de Devicon, Simple Icons y Lobe Icons.

## Personalizar antes de publicar

En `config.js`:

- **24 herramientas. Unreal Engine: bajo. Photoshop, Photopea, Android Studio y Streamlabs: medio. Las demás: alto.** Cambiar `level` a `low`, `medium` o `high`.
- El correo inicial es `yunyulen@gmail.com`; puedes cambiarlo en `email`. Con correo vacío, la ficha enlaza a LinkedIn. Con correo válido, el botón abre el cliente de correo con `mailto:`; no existe un formulario ni un servidor que envíe mensajes.
- Editar `contacts` para añadir o quitar personas. Usar enlaces HTTPS.
- Editar `tools` para cambiar nombres, descripciones o categorías: `3d`, `design`, `dev`.

En `index.html` se editan las especialidades, la presentación, los enlaces sociales, el título y la descripción. En `styles.css` se editan colores, tipografía y disposición. `script.js` gestiona filtros y tarjetas; `stars.js` dibuja y anima el fondo de estrellas.

La paleta distingue bajo (naranja), medio (ámbar) y alto (verde), siempre acompañados de texto. No se han inventado cifras de experiencia, disponibilidad ni resultados.

## Ver el diseño

Abrir `index.html` en el navegador. Los archivos funcionan en local y no dependen de servicios externos para cargar el diseño. Los enlaces externos y el contacto necesitan conexión y, para correo, un cliente de correo configurado.

## Subir a GitHub Pages

Si quieres sustituir la web por esta versión estática:

1. Guarda una copia de tu proyecto actual.
2. Copia `index.html`, `styles.css`, `config.js`, `script.js`, `stars.js` y la carpeta `assets` a la carpeta que publica GitHub Pages, manteniéndolos juntos. En un proyecto React/Vite existente, no basta con añadirlos a `src`: puedes convertir el repositorio a esta versión estática o adaptar las secciones a sus componentes.
3. En el repositorio, configura **Settings > Pages > Deploy from a branch** y selecciona la rama y carpeta que contienen los archivos; si usas una acción de compilación existente, ajusta ese flujo a la entrega estática.
4. Mantén el dominio personalizado y cualquier archivo `CNAME` existente. Si la rama publicada usa `CNAME`, su contenido debe ser `www.julenvallecillos.com`. No se incluyen cambios automáticos de DNS ni del dominio.
5. Comprueba niveles, contacto y enlaces antes de publicar.

Todas las rutas de archivos son relativas para funcionar tanto en un dominio propio como en una subcarpeta de GitHub Pages. La navegación usa anclas, sin necesidad de configurar rutas de una SPA.

## Accesibilidad y diseño adaptable

Navegación por teclado, foco visible, enlace para saltar al contenido, filtros con estado anunciado y respeto a la preferencia de movimiento reducido. Las tarjetas cambian de cuatro columnas en escritorio a dos en móvil y una en pantallas estrechas. Se usan fuentes del sistema y los niveles combinan texto, color y segmentos.


## Fondo espacial

Fondo azul noche con estrellas en movimiento suave, brillo gradual y estrellas fugaces ocasionales. La animación se pausa al ocultar la pestaña y se desactiva si el visitante prefiere movimiento reducido. Las estrellas son decorativas y no bloquean enlaces ni controles.


