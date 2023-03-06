# **Projet**

Ce projet utilise Webpack pour compiler et bundle les fichiers JavaScript, CSS et autres ressources nécessaires à l'application.

## **Prérequis**

Assurez-vous d'avoir Node.js et npm installés sur votre machine.

## **Installation**

1. Clonez le projet à partir du dépôt GitHub : **`git clone git@github.com:AhmedAbdNext/testRecu.git`**
1. Installez les dépendances du projet : **`npm install`**

## **Utilisation**

1. Pour lancer l'application en mode développement : **`npm run start`**
2. Pour lancer l'application en mode production : **`npm run build`**
3. Pour exécuter les tests : **`npm run test`**
4. Pour lance eslint: **`npm run lint`**
## ** Param Query**

les paramètres query sont les suivants

```
lastName, firstName, age, eyeColor, email, phone
```

## **Structure du projet**

- **`src/`** : Répertoire contenant les fichiers sources de l'application
    - **`index.js`** : Fichier d'entrée principal pour l'application
- **`dist/`** : Répertoire contenant les fichiers générés par Webpack pour l'application en mode production
- **`test/`** : Répertoire contenant les fichiers de test pour l'application

## **Configuration**

La configuration de Webpack est définie dans le fichier **`webpack.config.js`**. Ce fichier contient les règles de compilation pour les fichiers JavaScript, CSS, les plugins utilisés et les options de sortie pour les fichiers générés.

## **Dépendances**

- Webpack : **`^5.75.0`**
- Babel : **`^7.21.0`**
- Jest : **`^29.4.3`**


## **Docker**
Pour créer l'image Docker, accédez au répertoire contenant le Dockerfile et exécutez la commande suivante :

```

docker build -t my-nginx-image .

```

Cela créera une image Docker avec une tag "my-nginx-image" basée sur le Dockerfile dans le répertoire actuel.

Vous pouvez ensuite exécuter l'image en tant que conteneur à l'aide de la commande suivante :

```

docker run -p 8080:80 my-nginx-image

```

Cela démarrera un conteneur exécutant Nginx avec votre projet Webpack sur le port 8080 sur votre ordinateur local.

## **Eslint**

Ce projet posséde un outil d'analyse statique populaire 
(`Eslint `) qui aide les développeurs à identifier et à résoudre les problèmes dans leur code JavaScript.

Pour exécuter ESLint sur votre code, vous pouvez utiliser la commande :

```

npm run lint

```


## **Les étapes de mise en place de webpack et babel**

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

