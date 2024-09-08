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

6. ### Question 6
   Les codes statut de réponse HTTP indiquent si une requête HTTP a bien été exécutée avec succès ou non. Il y a cinq familles différentes.
   - Les réponses informatives : cette famille sert à donner des informations sur ce qu'il se passe par exemple avec le code `102 processing` qui indique que le serveur a bien reçu la requête et qu'il est en train de la traiter mais qu'aucune réponse n'est encore disponible.
   - Les réponses de succès : cette famille sert à informer qu'une requête a bien été effectuée avec succès. Par exemple avec le code `200 OK` qui indique que la requête a réussi.
   - Les messages de redirection : cette famille sert a effectuer une redirection quand c'est nécessaire par exemple pour le code `301 Moved Permanently` qui indique que l'URL demandée a été modifié. Une nouvelle URL est donnée dans la réponse.
   - Les réponses d'erreur côté client : cette famille sert à indiquer qu'une erreur provient du côté du client par exemple avec le code `400 Bad Request` qui indique que le serveur n'a pas pu comprendre la requête à cause d'une syntaxe invalide.
   - Les réponses d'erreur côté serveur : cette famille sert à indiquer qu'une erreur provient du côté du serveur par exemple avec le code `500 Internal Server Error` qui indique que le server a rencontré une situation qu'il ne sait pas traiter.

7. ### Question 7
   En HTTP, la négociation de contenu est le mécanisme utilisé pour servir différentes représentation d'une ressource à partir d'un mpeme URL pour aider l'agent utilisateur à indiquer la représentation la plus adaptée à l'utilisateur par exemple la langue du document, le format d'image ou l'encodage à utiliser pour le contenu.
   Un document donné est défini comme une ressource. Lorsqu'un client souhaite obtenir une ressource, il la demande via une URL. Le serveur utilise alors cette URL pour choisir l'une des variantes disponibles. Chaque variante est appelée une représentation. Le serveur renvoie alors une représentation donnée au client. La ressource, ainsi que chacune de ses représentations, dispose d'une URL spécifique. La négociation de contenu détermine quelle représentation donnée est utilisée lorsque la ressource est demandée. Il existe plusieurs méthodes de négociation entre le client et le serveur.
   
