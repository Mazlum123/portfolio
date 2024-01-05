import React from 'react';
import { createRoot } from 'react-dom/client'; // Importation modifiée
import '../styles/index.scss'; // Importez votre fichier Sass principal
import App from './App';
import '../styles/index.scss';


// Nouvelle initialisation de l'application React
const root = createRoot(document.getElementById('root'));
root.render(<App />);
