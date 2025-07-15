document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Empêche l'envoi classique

  // On peut ici ajouter une vraie requête vers un serveur ou une base de données

  // Affiche un message de succès
  document.getElementById('successMessage').style.display = 'block';

  // Réinitialiser le formulaire
  this.reset();
});