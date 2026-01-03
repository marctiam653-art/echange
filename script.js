document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("formscript").addEventListener("submit", function (e) {
        e.preventDefault(); // empêcher l'envoi automatique

        // Récupération des champs
        let email = document.getElementById("mail").value.trim();
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmpassword").value;
        let nom = document.getElementById("nom").value.trim();
        let prenom = document.getElementById("prenom").value.trim();
        let paysResidence = document.getElementById("responsable").value;
        let paysNationalite = document.getElementById("pays").value.trim();
        let codePostal = document.getElementById("codepostal").value.trim();
        let ville = document.getElementById("ville").value.trim();
        let tel = document.getElementById("tel").value.trim();
        let newsletter = document.getElementById("newsletter").checked;

        let civilite = document.querySelector('input[name="civilite"]:checked');
        let statut = document.querySelector('input[name="statut"]:checked');

        // Vérification email
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Vérifications obligatoires
        if (email === "") {
            alert("Veuillez saisir votre adresse e-mail");
            return;
        }

        if (!emailRegex.test(email)) {
            alert("Adresse e-mail invalide");
            return;
        }

        if (password === "") {
            alert("Veuillez saisir le mot de passe");
            return;
        }

        if (password.length < 6) {
            alert("Le mot de passe doit contenir au moins 6 caractères");
            return;
        }

        if (confirmPassword === "") {
            alert("Veuillez confirmer le mot de passe");
            return;
        }

        if (password !== confirmPassword) {
            alert("Les mots de passe ne correspondent pas");
            return;
        }

        if (!civilite) {
            alert("Veuillez sélectionner une civilité");
            return;
        }

        if (nom === "") {
            alert("Veuillez saisir votre nom");
            return;
        }

        if (prenom === "") {
            alert("Veuillez saisir votre prénom");
            return;
        }

        if (paysResidence === "") {
            alert("Veuillez choisir votre pays de résidence");
            return;
        }

        if (paysNationalite === "") {
            alert("Veuillez saisir votre nationalité");
            return;
        }

        if (codePostal === "") {
            alert("Veuillez saisir le code postal");
            return;
        }

        if (ville === "") {
            alert("Veuillez saisir la ville");
            return;
        }

        if (tel === "") {
            alert("Veuillez saisir le numéro de téléphone");
            return;
        }

        if (!statut) {
            alert("Veuillez préciser votre statut");
            return;
        }

        if (!newsletter) {
            alert("Vous devez accepter le traitement des données");
            return;
        }

        // Si tout est OK → Enregistrement (simulation)
        let utilisateur = {
            email: email,
            civilite: civilite.value,
            nom: nom,
            prenom: prenom,
            paysResidence: paysResidence,
            nationalite: paysNationalite,
            codePostal: codePostal,
            ville: ville,
            telephone: tel,
            statut: statut.value
        };

        console.log("Utilisateur enregistré :", utilisateur);
        alert("Compte créé avec succès 🎉");

        // Réinitialiser le formulaire
        this.reset();
    });

});
