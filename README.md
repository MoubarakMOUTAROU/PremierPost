# Gestion des tâches

Ce projet permet de gérer une liste de tâches depuis le terminal. Il permet de lire, ajouter et supprimer des éléments, et les stocke dans un fichier JSON local.

## Objectif

Créer une petite application de gestion de tâches simple, rapide et facile à utiliser depuis le terminal.

## Fonctionnalités

- Afficher toutes les tâches
- Ajouter une nouvelle tâche
- Supprimer une tâche avec son ID
- Enregistrer les données dans un fichier JSON

## Structure du projet

```text
project/
├── gestion-taches.js
├── taskManager.js
├── tasks.json
├── README.md
├── package.json
└── .gitignore
```

## Commandes disponibles

### Lire les tâches

```bash
node gestion-taches.js lire
```

### Ajouter une tâche

```bash
node gestion-taches.js ajouter "Faire du sport"
```

### Supprimer une tâche

```bash
node gestion-taches.js supprimer 1720000000000
```

### Utilisation globale après installation

```bash
gestion-taches lire
```

## Fichier de données

Les tâches sont enregistrées dans :

```text
tasks.json
```

## Publication sur GitHub

1. Initialiser le dépôt :

```bash
git init
```

2. Ajouter les fichiers :

```bash
git add .
```

3. Faire un commit :

```bash
git commit -m "Initial commit"
```

4. Créer un dépôt GitHub

5. Ajouter le dépôt distant :

```bash
git remote add origin https://github.com/VOTRE_UTILISATEUR/VOTRE_REPO.git
```

6. Pousser le projet :

```bash
git push -u origin main
```

## Technologies utilisées

- Node.js
- JavaScript
- JSON

## Conclusion

Ce projet est un bon exemple de gestion de données simple avec un outil terminal, utile pour apprendre les bases de JavaScript, des fichiers JSON et de la publication GitHub.
