const fs = require('fs');
const path = require('path');

const fichierTaches = path.join(__dirname, 'tasks.json');

function initialiserFichier() {
  if (!fs.existsSync(fichierTaches)) {
    fs.writeFileSync(fichierTaches, JSON.stringify({ tasks: [] }, null, 2), 'utf8');
  }
}

function lireFichier() {
  initialiserFichier();
  const contenu = fs.readFileSync(fichierTaches, 'utf8');
  const data = JSON.parse(contenu);
  return Array.isArray(data.tasks) ? data.tasks : [];
}

function sauvegarderFichier(taches) {
  fs.writeFileSync(fichierTaches, JSON.stringify({ tasks: taches }, null, 2), 'utf8');
}

async function lireTaches() {
  return lireFichier();
}

async function ajouterTache(titre) {
  const taches = lireFichier();
  const id = Date.now();
  const nouvelleTache = {
    id,
    titre,
    creeLe: new Date().toISOString()
  };

  taches.push(nouvelleTache);
  sauvegarderFichier(taches);

  console.log(`✅ Tâche ajoutée : "${titre}" (ID: ${id})`);
  return nouvelleTache;
}

async function supprimerTache(id) {
  const taches = lireFichier();
  const avant = taches.length;
  const resultats = taches.filter((tache) => tache.id !== Number(id));

  if (resultats.length === avant) {
    console.log(`⚠️ Aucune tâche trouvée avec l'ID ${id}.`);
    return taches;
  }

  sauvegarderFichier(resultats);
  console.log(`✅ Tâche supprimée (ID: ${id})`);
  return resultats;
}

module.exports = {
  lireTaches,
  ajouterTache,
  supprimerTache
};
