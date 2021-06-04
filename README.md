# ma-paroisse.ch

Un site ultra simple pour retrouver sa paroisse protestante réformée en Suisse romande en 5 secondes.

C'est ici: https://ma-paroisse.ch

## La problématique

Fusions de communes et regroupements paroissiaux rendent la maintenance des données complexes.

Un exemple, le village de Valangin:

- il se situe dans le Val-de-Ruz (et fait partie de la paroisse Val-de-Ruz)
- mais il n'a pas rejoint la commune de Val-de-Ruz
- aujourd'hui, il fait partie de la commune de Neuchâtel (mais n'a pas changé de paroisse)

Un autre exemple, le village d'Undervelier. Essayez une recherche:

    paroisse Undervelier

et dites-moi dans quelle paroisse réformée le village se trouve...

Les éléments graphiques pour représenter les territoires — il en existe dans plusieurs Églises — sont compliqués à mettre à jour.
Souvent, ils ne le sont pas...

Je suis convaincu que la production d'un site de référence construit uniquement sur des données (textuelles) est beaucoup plus simple. Donc plus qualitatif et plus fiable.


## Comment ça marche?

Chaque paroisse listée comporte des informations qui dépassent son simple nom. Le pages de détails (par exemple: https://ma-paroisse.ch/ne/barc/) permettent de s'en faire une idée. Il existe peut-être d'autres «indices» cachés pour améliorer la recherche.

Une recherche instantanée permet d'afficher les résultats en temps réel. De sorte que 4 ou 5 caractères suffisent souvent à retrouver **sa** paroisse.

Le système de recherche utilisé (https://fusejs.io/) est tolérant aux coquilles et fautes de frappe.

## Le but

Une fois ce projet assez avancé, je souhaite que se trouve dans les données (donc dans la recherche):

- tous les NPA (numéros postaux d'acheminement) attribués en Suisse romande
- toutes les communes de Suisse romande
- si possible tous les villages, hameaux, etc.

## Ajouter / modifier une paroisse

Pour ajouter, il vous suffit de copier un modèle en recherchant une paroisse similaire à celle que vous souhaitez documenter: https://github.com/nfriedli/ma-paroisse.ch/tree/main/content

Ou alors, il faut copier-coller ce «code» et me l'envoyer complété:

```
title: 
name: 
site: 
territoire:
    - 
NPA:
    - 
meta:
    - 
region: 
```

Pour corriger un contenu: retrouvez-le dans la liste et envoyez votre version modifiée. Merci!

NB: si vous comprenez cette phrase, n'hésitez pas à proposer un *Pull request* dans GitHub.

## À propos des données

- `title` est le nom exact de la paroisse (p. ex. Paroisse des Hautes Joux)
- `name` est le nom court de la paroisse  (p. ex. Les Hautes Joux)
- `site` est l'URL du site paroissial (pas de la maison-mère)
- `territoire` est la liste des communes offcielles
- `NPA` est la liste de tous les numéros sur le territoire paroissial
- `meta` est une liste de motifs qui peuvent être recherchés (p.ex. Colombier, village de la commune de Milvignes); cette liste peut aussi porter d'autres «clés» de recherche pour aider le moteur dans des cas particuliers
- `region` est un regroupement officiel de paroisses (mais pas une région au sens géographique du terme); il ne peut y en avoir qu'une

L'attribution du canton et de l'Église sont automatiques en fonction de la localisation dans l'arborescence du site.

## Validations

En principe, le site est conforme aux exigences techniques en cours. En particulier:

- accessibilité (A11Y) selon le test Wave (https://wave.webaim.org/)
- scores élevés aux tests de Google (https://web.dev/measure/)
- validité HTML5 et CSS3 (https://validator.w3.org/)

En langage courant: je souhaite que ce site puisse être vu quelle que soit la qualité de la connexion (vitesse), sur tout périphérique (*responsive design*), par toute personne sans discrimination (accessibilité).

## API

Les contenus sous format JSON sont disponibles ici: https://ma-paroisse.ch/index.json

Les contenus JSON par canton:

- https://ma-paroisse.ch/be/index.json
- https://ma-paroisse.ch/fr/index.json
- https://ma-paroisse.ch/ge/index.json
- https://ma-paroisse.ch/ju/index.json
- https://ma-paroisse.ch/ne/index.json
- https://ma-paroisse.ch/vd/index.json
- https://ma-paroisse.ch/vs/index.json

N'hésitez pas à reprendre les données directement dans le JSON (*hotlink*)!

Si c'est utile à des responsables de sites, je peux créer un format *sur mesure* pour reprise directe sur leur site. Utile pour publier un tableau dynamique ou sa propre recherche. Il suffit de me donner la structure de JSON souhaitée.

## Contact & licence

C'est ici: nicolasfriedli@protonmail.ch  
Ce projet est personnel, bénévole et sans commanditaire.

Le site est sous [licence CC0](https://creativecommons.org/publicdomain/zero/1.0/deed.fr) (domaine public), pourtant je ne vois pas de sens à le copier. Les sources sont consultables pour y reprendre des idées. Le script fuse.js est sous licence [Apache License 2.0](https://github.com/krisk/Fuse/blob/master/LICENSE).

## Merci...

Pour leurs avis et leurs tests, merci à:

- Laure Devaux Allisson (https://lauredevaux.ch/)
- Diane Friedli (https://dianefriedli.ch/)
- Philippe Golaz (https://philippegolaz.ch/)
- Elio Jaillet
- Olivier Keshavjee (https://www.theologeek.ch/)
- Sarah Nicolet
- CAMILLE ZIMMERMANN-GUERDAT

Merci particulier au theologeek pour l'ajout massif des paroisses vaudoises et genevoises ;)

Et merci au génial Régis Philibert (https://regisphilibert.com/fr/) pour une astuce Hugo qui a tout changé ;)

## Post-scriptum

Bien que je sois convaincu de l'utilité de ce site, c'est avant tout un exercice pratique:

- pour tester la génération de JSON avec Hugo
- pour tester un script de recherche *fuzzy*
- pour observer le référencement du tout