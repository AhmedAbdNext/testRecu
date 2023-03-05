## **Prérequis**

Assurez-vous d'avoir Node.js et npm installés sur votre machine.

## **Étapes**

1. Initialisez votre projet avec **`npm init`**.
2. Installez les packages nécessaires :
    
    ```

    npm install --save-dev babel-loader @babel/core @babel/preset-env webpack webpack-cli
    
    ```
    
3. Créez un fichier **`webpack.config.js`** à la racine de votre projet et ajoutez-y le contenu suivant :
    
    ```
    
    const path = require("path");

    module.exports = {
    entry: "./src/index.js",
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
      ],
    },
    resolve: {
      extensions: ["*", ".js"],
      },
    output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    },
    devServer: {
      static: path.resolve(__dirname, "dist"),
      },
    };

    
    ```
    
4. Créez un dossier **`src`** à la racine de votre projet et ajoutez-y un fichier **`index.js`** contenant votre code JavaScript.
5. Dans votre fichier **`package.json`**, ajoutez la ligne suivante dans la section **`"scripts"`** :
    
    ```

    "build": "webpack --mode production"
    
    ```
    
6. Pour compiler votre code, exécutez la commande suivante dans votre terminal :
    
    ```
   
    npm run build
    
    ```
    
7. Votre code compilé sera dans le dossier **`dist`** sous le nom de fichier **`bundle.js`**.

Félicitations, vous avez maintenant configuré Babel et Webpack pour votre projet de site web natif !