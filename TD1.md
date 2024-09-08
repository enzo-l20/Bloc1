# TD 1

1. ### Question 1
   - Methode GET : La méthode GET est une méthode qui a pour but de récuperer des données, les données demandés seront dans l'URL.
   - Methode POST : La méthode POST est une méthode qui a pour but de donner des informations au serveur, les informations que nous souhaitons donner au serveur sera dans l'URL.
  
2. ### Question 2
   |                                  | Get | POST |
   |---|---|---|
   | effectuer une requête à un corps | Oui | Oui |
   | Une réponse de succès à un corps | Oui | Oui |
   | Sécurisé                         | Oui | Non |
   | idempotente                      | Oui | Non |
   | peut être mise en cache          | Oui | Seulement si une information de péremption est incluse |
   | autorisé dans les formulaire HTML| Oui | Oui |

3. ### Question 3
   Le protocole HTTP est extensible car c'est un protocole qui a évolué au cours du temps depuis 1990 et donc qui peut être améliorer au cours du temps. \
   En raison de son extensibilité, il n'est pas seulement utilisé pour récupérer des documents, mais aussi pour des images, des vidéos ou bien pour renvoyer des
contenus vers des serveurs, comme des résultats de formulaires HTML. \
   A partir de HTTP/1.0, les en-têtes http permettent d'étendre facilement le protocole et de mener des experimentations avec celui ci. \
   De nouvelles fonctionnalités peuvent même etre introduites par un simple accord entre le client et le serveur à propos de la sémantique des nouveaux en-têtes.
   
4. ### Question 4
   Le fait qu'http soit qualifié de protocole sans état signifique qu'il n'y a pas de lien entre deux requêtes qui sont effectuées successivement sur la même
connexion. \

   Les conséquences pour la navigation Web sont que cela devient problématique lorsque les utilisateurs veulent interagir avec une page de façon cohérente, par exemple avec un panier d'achat sur un site de commerce en ligne. \
   
   Pour eviter ce problème les cookies HTTP qui permettent l'utilisation de sessions avec des états sont utilisés. \
   
   En utilisant l'extensibilité par les en-têtes, des cookies HTTP sont ajoutés aux flux et permettent la création d'une session sur chaque requête HTTP pour partager un même contexte ou un même état.

5. ### Question 5
   Pour la décomposition d'une URL on va prendre comme exemple `https://wwww.python.org/doc/`
   - La partie `https://` représente le protocole de transfert hypertexte.
   - La partie `www.python.org` représente le nom de domaine, le nom unique qui permet d'identifier un site web.
   - La partie `/doc` représente le nom du répertoire, il nous indique ou la page recherché est stocké sur le serveur Web.
