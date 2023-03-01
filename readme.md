# instrucciones

1. Se debe crear la aplicacion por medio de vite seleccionando la plantilla de typescript
   [Vite](https://vitejs.dev/guide/)

`$ npm create vite@latest`

1. Se debe realizar la instalacion de
   [Tailwind](https://tailwindcss.com/docs/guides/create-react-app)
   `npm install -D tailwindcss`
   `npx tailwindcss init`
2. Limpiar un poco el proyecto
3. Configurar el archivo tailwind.config.cjs
4. Agregar las directivas CSS a el archivo index.css

5. Instalar eslint
   [Eslint](https://medium.com/@bacabange/configurar-eslint-en-react-y-visual-code-b08dfb89bfb)
6. Copiar configuracion al archivo eslintrc.json
   `{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "overrides": [],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint"],
  "rules": {
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "@typescript-eslint/explicit-function-return-type": ["error"]
  }
}`

7. Crear el archivo launch.json para el depurador y pegar lo siguiente
   `{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug with Chrome",
      "type": "pwa-chrome",
      "request": "launch",
      "url": "http://localhost:5173",
      "webRoot": "${workspaceFolder}",
      "sourceMapPathOverrides": {
        "webpack:///*": "${webRoot}/*",
        "webpack:///src/*": "${webRoot}/*",
        "webpack:///./src/*": "${webRoot}/*",
        "meteor://💻app/*": "${webRoot}/*"
      },
      "trace": true,
      "sourceMaps": true,
      "disableNetworkCache": true,
      "skipFiles": ["<node_internals>/**"]
    }
  ]
}`

8. Crear los archivos .env y .env.example donde se proporcionaran las variables de entorno
9. instalar los tipos de definicion para Node.js
   `npm i --save-dev @types/node`
10. recuerda que las variables de entorno deben utilizar la palabra VITE\_ antes de cada variable de estado
11. Donde se vaya a utilizar la variable de entorno debe importarse como se muestra a continuacion:
    `const apiUrl = import.meta.env`

12. Instalar y configurar redux
    `npm install redux react-redux @types/react-redux redux-thunk @types/redux-thunk`
    `npm install @reduxjs/toolkit`

13. Iniciar repositorio git, y agregar en el gitignore el .env
