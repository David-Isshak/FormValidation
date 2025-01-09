document.getElementById('secureForm').addEventListener('submit', function(event) {
    let valid = true;

    // Réinitialiser les messages d'erreur
    document.querySelectorAll('.error').forEach(error => error.textContent = '');

    // Vérifier le nom
    const nom = document.getElementById('nom').value.trim();
    const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]+$/;
    if (nom === "" || nom.length < 2 || !nameRegex.test(nom)) {
        document.getElementById('nomError').textContent = "Veuillez entrer un nom valide (au moins 2 caractères, sans caractères spéciaux).";
        valid = false;
    }

    // Vérifier le prénom
    const prenom = document.getElementById('prenom').value.trim();
    if (prenom === "" || prenom.length < 2 || !nameRegex.test(prenom)) {
        document.getElementById('prenomError').textContent = "Veuillez entrer un prénom valide (au moins 2 caractères, sans caractères spéciaux).";
        valid = false;
    }

    // Vérifier l'email
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = "Veuillez entrer une adresse email valide.";
        valid = false;
    }

    // Vérifier le mot de passe
    const password = document.getElementById('password').value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        document.getElementById('passwordError').textContent = "Le mot de passe doit contenir au moins 8 caractères, dont une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.";
        valid = false;
    }

    // Vérifier la confirmation du mot de passe
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = "Les mots de passe ne correspondent pas.";
        valid = false;
    }

    if (!valid) {
        event.preventDefault();
    }
});