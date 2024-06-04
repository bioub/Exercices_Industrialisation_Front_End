# Exercices Industrialisation Front-End

## Modules

Dans `api.js` exporter en ESM les fonctions `fetchTodos` et `postTodo`

Dans `todos.js` exporter en ESM la fonction `createTodoItem`

Dans `main.js` importer ces 3 fonctions des 2 fichiers.

Dans `index.html` ne charger que le fichier `main.js` avec l'attribut `type="module"`

## Bundler

Installer `vite` en `devDependencies`

Créer 3 scripts :

- `dev` qui appelle le dev server `vite`
- `build` qui lance `vite build`
- `preview` qui lance `vite preview` (sert le résultat du build)

Déplacer le fichier `index.html` à la racine et c'est terminé.

Remarquez que le CSS a également été buildé.

Dans `api.js` remplacer la variable `apiBaseUrl` par un import du fichier `config.json` (qui contient la même valeur), exemple : [https://esbuild.github.io/content-types/#json](https://esbuild.github.io/content-types/#json)