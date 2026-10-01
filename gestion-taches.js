#!/usr/bin/env node

const taskManager = require('./taskManager');

async function executerCLI() {
  const args = process.argv.slice(2);
  const action = args[0];
  const valeur = args[1];

  console.log('-----------------------------------');

  try {
    switch (action) {
      case 'lire':
        const taches = await taskManager.lireTaches();
        console.table(taches);
        break;

      case 'ajouter':
        if (!valeur) {
          console.log('⚠️ Erreur : Veuillez préciser le titre de la tâche à ajouter.');
          console.log('Exemple : node gestion-taches.js ajouter "Faire du sport"');
          break;
        }
        await taskManager.ajouterTache(valeur);
        break;

      case 'supprimer':
        if (!valeur) {
          console.log('⚠️ Erreur : Veuillez préciser l\'ID de la tâche à supprimer.');
          break;
        }
        await taskManager.supprimerTache(Number(valeur));
        break;

      default:
        console.log('❓ Action inconnue.');
        console.log('Commandes disponibles :');
        console.log('  - node gestion-taches.js lire');
        console.log('  - node gestion-taches.js ajouter "Mon titre"');
        console.log('  - node gestion-taches.js supprimer <ID>');
        break;
    }
  } catch (error) {
    console.error('❌ Une erreur est survenue :', error.message);
  } finally {
    console.log('-----------------------------------');
  }
}

if (require.main === module) {
  executerCLI();
}

module.exports = { executerCLI };
