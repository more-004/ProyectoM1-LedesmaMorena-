             Proyecto Integrador M1
      Alumna: Ledesma Morena Victoria


Color Fly Studio

Color Fly Studio es una herramienta web moderna e interactiva diseñada para la generación de paletas cromáticas. El proyecto permite a diseñadores y desarrolladores crear esquemas de color armónicos de forma instantánea, con opciones de personalización de formato y una interfaz optimizada para la productividad.

 
 
Este proyecto nace de la necesidad de contar con una herramienta ligera y rápida para la exploración de colores. Fue desarrollado con un enfoque en el rendimiento y la semántica, evitando el uso excesivo de contenedores genéricos y priorizando la accesibilidad web. Refleja la implementación de lógica dinámica en JavaScript y un diseño responsivo basado en estándares modernos.

 
 
  Decisiones Técnicas

Para garantizar la calidad y escalabilidad del código, se tomaron las siguientes decisiones:

* Arquitectura Semántica: Se sustituyó la "divitis" por etiquetas de HTML5 como `<main>`, `<section>`, `<article>` y `<fieldset>`. Esto mejora significativamente el SEO y permite que las tecnologías de asistencia (como lectores de pantalla) entiendan la jerarquía del sitio.
* Layout Dinámico con CSS Grid: El contenedor de la paleta utiliza un sistema de rejilla adaptable (`auto-fit`) que reorganiza las tarjetas de color según el ancho de la pantalla sin necesidad de múltiples Media Queries.
* Lógica de Conversión de Color: Se implementó un algoritmo propio para transformar valores HEX a HSL en tiempo real, permitiendo al usuario alternar entre formatos sin realizar peticiones externas o recargar la página.
* Micro-interacciones: Uso de la Clipboard API de JavaScript para facilitar el copiado de códigos con un solo clic, acompañado de un sistema de notificaciones (Toast) para confirmar la acción al usuario.

  Instrucciones de Uso

1.  Configuración: En el panel superior, selecciona la cantidad de colores que deseas generar (6, 8 o 9).
2.  Formato: Elige si deseas visualizar los códigos en formato HEX (Hexadecimal) o HSL (Tono, Saturación, Luminosidad).
3.  Generación: Haz clic en el botón "Generar paleta" para obtener una combinación de colores aleatorios.
4.  Copiado: Haz clic sobre cualquier tarjeta de color para copiar automáticamente su código al portapapeles.


Notas del Desarrollador

Este proyecto es parte de mi proceso de aprendizaje constante en el desarrollo web. Cada línea de código ha sido pensada para equilibrar la estética con la funcionalidad técnica. 

                                                                             Creado por Morena Ledesma - 2026
