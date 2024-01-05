const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/components/index.js', // Point d'entrée de votre application
  output: { // Configuration de sortie
    path: path.resolve(__dirname, 'dist'), // Dossier de sortie
    filename: 'bundle.js', // Nom du fichier de sortie
    publicPath: '/', // Chemin public pour le serveur de développement
  },
  module: { // Configuration des modules
    rules: [
      {
        test: /\.jsx?$/, // Transpiler tous les fichiers .js et .jsx
        exclude: /node_modules/, // Exclure le dossier node_modules
        use: {
          loader: 'babel-loader', // Utiliser babel-loader
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'] // Utiliser les presets pour Babel
          }
        }
      },
      {
        test: /\.s[ac]ss$/i, // Transpiler tous les fichiers .scss et .sass
        use: [
          MiniCssExtractPlugin.loader, // Extraire le CSS dans des fichiers séparés
          'css-loader', // Interprète `@import` et `url()` comme `import/require()`
          'sass-loader', // Compile Sass en CSS
        ],
      },
      // Ajoutez ici d'autres règles si nécessaire, par exemple pour les images ou les fonts
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Résoudre automatiquement les extensions de fichiers pour ces types
  },
  plugins: [
    new MiniCssExtractPlugin({ // Plugin pour extraire le CSS dans des fichiers séparés
      filename: 'main.css',
    }),
  ],
  devServer: { // Configuration du serveur de développement
    static: {
      directory: path.join(__dirname, 'public'), // Dossier contenant les fichiers statiques
    },
    historyApiFallback: true, // Gérer les routes côté client pour les Single Page Applications
    hot: true, // Active le rechargement à chaud
    open: true, // Ouvre le navigateur après le démarrage du serveur
    port: 8080, // Port sur lequel exécuter le serveur
  },
};
