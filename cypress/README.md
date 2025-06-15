Autor: Leonela Ramírez  
Fecha de creación: Junio 2025  
Proyecto: Desafío Técnico QA Backend – Pruebas UI Automatizadas


Este proyecto contiene pruebas automatizadas hechas en Cypress , tanto para una página web como para una   API , donde seleccionamos dos métodos para la realización de las mismas . 
           Herramientas Usadas: 
 Cypress (framework de testing)
- JavaScript
- Node.js   
¿Cómo ejecutar los tests?
1. Clonar el repositorio
git clone https://github.com/RamirezLeonela/Choice-T-cnico-Ssr-QA-Backend.git 
2. Instalar las dependencias
npm install cypress --save-dev -Instalar Cypress
npm install -g npx                    -Instalar NPX
npx cypress open                     - Iniciar la App
         ¿Qué pruebas están incluidas?
   Se trabajó sobre el sitio https://automationexercise.com y se automatizaron los siguientes       casos:
Validación de carga del sitio: Se verifica que el título del sitio web sea el correcto.
Registro de usuario: Se completa el formulario con datos y se verifica que la cuenta se haya creado con éxito.
Inicio de sesión: Se prueba ingresar con un usuario válido y verificar que aparezca el mensaje de bienvenida
Registro duplicado: Se intenta registrar con un correo ya existente y se comprueba que aparezca el error.
Pruebas de API (Echo Server)
Los endpoints probados fueron:
1- /v1/qa/test1
Verifica que el status sea 200
El tiempo de respuesta sea menor a 2 segundos
El contenido (True, date) esté presente y en formato correcto
Asegurarnos que los campos no vengan Vacíos 
Valida los tipos de Campos de la respuesta 


2- /v1/qa/test3 (sin token)

El tiempo de respuesta sea menor a 2 segundos
Se valida que sin token la API devuelve error 401
Se comprueba que el mensaje de error sea el Esperado

