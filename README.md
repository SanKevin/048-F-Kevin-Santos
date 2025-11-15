Proyecto de Automatización con Playwright
🚀 Proyecto de Automatización de Pruebas – BuggyCars

Automatización de pruebas End-to-End utilizando Playwright, JavaScript, Node.js y estándares de calidad de software.
Este proyecto forma parte de una evaluación práctica del curso de Aseguramiento de la Calidad de Software.

Estructura del Proyecto

examen-playwright/
├── docs/
│   ├── Casos_de_Prueba_BuggyCars.xlsx
│   └── Reporte_de_Errores.docx
├── tests/
│   └── registro.spec.js
├── playwright.config.js
├── package.json
└── README.md

Descripción del Proyecto

Este proyecto automatiza el flujo de:

Acceso al sitio BuggyCars Rating

Registro de un nuevo usuario

Inicio de sesión con el usuario registrado

Verificación de que el login fue exitoso

Las pruebas están escritas en Playwright Test Runner, con sintaxis de JavaScript, utilizando buenas prácticas de QA.

Tecnologías Utilizadas
✔ Lenguajes

JavaScript (ES6)

✔ Frameworks de Automatización

Playwright Test

✔ Ecosistema Node

Node.js

NPM (Node Package Manager)

✔ Control de versiones

Git

GitHub

Herramientas de documentación

Excel (Casos de Prueba)

Word (Reporte de Errores)

✔ Editor utilizado

Visual Studio Code

Instalación y Configuración
1. Instalar dependencias
npm install

2. Instalar navegadores de Playwright
npx playwright install

Ejecutar las pruebas
Modo normal:
npx playwright test

Ejecutar con interfaz visual:
npx playwright test --ui

Ejecutar solo el test de registro:
npx playwright test tests/registro.spec.js

Documentos incluidos (carpeta docs/)

✔ Casos de prueba en Excel
✔ Reporte de errores en formato Word
✔ Plantillas listas para evaluación QA

Casos de Prueba Implementados

Acceso al sitio y apertura del formulario de registro

Completar el formulario con datos válidos

Registro exitoso

Inicio de sesión

Verificación de usuario logeado

Cada uno de estos casos fue automatizado con Playwright.

Archivo principal de pruebas: registro.spec.js

El test incluye:

Navegación hacia el sitio

Registro dinámico con usuario generado

Validación de mensajes

Login posterior al registro

Verificación del saludo del usuario

Archivo de configuración: playwright.config.js

Incluye:

Retrys para estabilidad

Timeout personalizado

Reporter HTML

Configuración de viewport y trace

Comandos Git usados
git init
git add .
git commit -m "Proyecto Playwright completado"
git remote add origin https://github.com/SanKevin/048-F-Kevin-Santos.git
git push --set-upstream origin master

Autor

Kevin Santos
Estudiante de Ingeniería en Sistemas
Curso: Aseguramiento de la Calidad de Software
Universidad Mariano Gálvez
