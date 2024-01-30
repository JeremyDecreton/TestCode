-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 30 jan. 2024 à 23:32
-- Version du serveur : 10.4.28-MariaDB
-- Version de PHP : 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `jcvanquotes`
--

-- --------------------------------------------------------

--
-- Structure de la table `quotes`
--

CREATE TABLE `quotes` (
  `ID` int(11) NOT NULL,
  `quote` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `quotes`
--

INSERT INTO `quotes` (`ID`, `quote`) VALUES
(1, 'Moi, Adam et Ève, j\'y crois plus tu vois, parce que je suis pas un idiot : la pomme, ça peut pas être mauvais, c\'est plein de pectine...'),
(2, 'Entre toi et moi il y a un produit qui s\'appelle l\'oxygène, alors si tu fais ça *inspiration/expiration* comme ça, tu vis, mais si je tue l\'oxygène comme sur la lune, tu meurs !!'),
(3, 'Une noisette, j\'la casse entre mes fesses tu vois...'),
(4, 'La plus belle religion qu\'on puisse avoir, c\'est de rentrer en soi-même et de digérer l\'essence de la vie, se digérer soi-même et produire à partir de ça sa propre religion: l\'instinct. Et l\'aboutissement de l\'instinct, c\'est l\'amour! Il faut apprendre à aimer. S\'aimer d\'abord soi-même pour pouvoir aimer les autres.'),
(5, 'L\'être humain a tellement l\'habitude de parler et de regarder, temps en temps les gens qui sont aveugles sont plus awares que les gens qui voillent, parce qu\'ils sont obligés de sentir les sensations, les gens qu\'ils aiment pas, qu\'ils aiment bien, et les objets qui sont, et on est aware.'),
(6, 'Le monde est composé de flèches et de molécules, et d\'électricité,comme le Big-Bang tu vois, et tout ça ensemble, ça forme l\'Univers.'),
(7, 'Mon modèle, c\'est moi-même! Je suis mon meilleur modèle parce que je connais mes erreurs, mes qualités, mes victoires et mes défaites. Si je passe mon temps à prendre un autre modèle comme modèle, comment veux-tu que ce modèle puisse modeler dans la bonne ligne ?'),
(8, 'Je crois au moment. S\'il n\'y a pas le moment, à ce moment-là, il faut arriver à ce moment-là, au moment qu\'on veut.'),
(9, 'J\'adore les cacahuetes. Tu bois une biere et tu en as marre du gout. Alors tu manges des cacahuetes. Les cacahuetes c\'est doux et salé, fort et tendre,comme une femme. Manger des cacahuetes, it\'s a really strong feeling. Et apres tu as de nouveau envie de boire de la bière. Les cacahuetes c\'est le mouvement perpétuel à la portée de l\'homme.'),
(10, 'Si tu téléphones à une voyante et qu\'elle ne décroche pas avant que ça sonne, raccroche.'),
(11, 'Si tu parles à ton eau de Javel pendant que tu fais la vaisselle, elle est moins concentrée.'),
(12, 'Quand tu prends confiance en la confiance tu deviens confiant.'),
(13, 'Selon les statistiques, il y a une personne sur cinq qui est déséquilibrée. S\'il y a 4 personnes autour de toi et qu\'elles te semblent normales, c\'est pas bon.'),
(14, 'Quand j\'étais jeune, j\'étais très con. Je suis resté très jeune.'),
(15, 'Si tu travailles avec un marteau-piqueur pendant un tremblement de terre, désynchronise-toi, sinon tu travailles pour rien.'),
(16, 'Les plantes par exemple, qui n\'ont pas de mains, et pas d\'oreilles,elles sentent les choses, les vibrations, elles sont plus aware que les autres species.'),
(17, 'Un bon truc pour paraître dix ans plus jeune, c\'est de vieillir de dix ans quand tu dis ton âge.'),
(18, 'Nous les humains, on a inventé le temps. Mais le temps n\'existe pas, car il y a une matter, une puissance de compression, qui n\'est pas la même pour chaque species on earth.'),
(19, 'J\'adore l\'eau dans 20 ou 30 ans, il y\'en aura plus'),
(20, 'La vie c\'est quelque chose de très fort et de très beau.... La vie appartient a tous les vivants. It\'s both a dream and a feeling. C\'est etre ce que nous ne sommes pas sans le rester. La vie c\'est mourir aussi....Et mourir c\'est vraiment strong...c\'est rester en vie au delà de la mort...'),
(21, 'L\'air tu peux pas le toucher... ça existe et ça existe pas... Ca nourrit l\'homme sans qu\'il ait faim.'),
(22, 'Au début pour faire l\'amour..., et je ne parle pas que de sexe..., il faut être physical, mais ensuite, il faut être plus mental,et après quand tu as un enfant, il faut être spiritual pour bien l\'élever.'),
(23, 'Il faut que tu crois encore plus ce que tu crois, et quand tu commences à croire ce que tu crois, y a personne au monde qui peut te bouger !'),
(24, 'Une vache, ça te bouffe trois hectares, moi, avec trois hectares, je te fais deux mille kilos de riz... avec trois hectares, je te nourris Avignon, tu vois...'),
(25, 'La drogue, c\'est comme quand tu close your eyes et que tu traverses la rue.'),
(26, 'En vérité, la vérité, il n\'y a pas de vérité !'),
(27, 'Ma femme n\'est pas ma meilleure partenaire sexuelle, mais elle fait très bien le ménage.'),
(28, 'Mes autres prénoms sont Camille et François. J\'aime bien Camille, non ? Ça fait \"old fashion\", tu trouves pas ? Ça respire le meuble de Provence !'),
(29, 'Mon type de femme, c\'est une \"combination\" du corps et de l\'esprit; mais il n\'y a pas vraiment un type de femme, mais un type d\'amour.'),
(30, 'Y\'a pas de religions mon frère. On est aware.'),
(31, 'Le ridicule n\'existe pas, on crée le ridicule.'),
(32, 'J\'ai eu une très belle enfance malgré tout... j\'ai été élevé du côté campagne, en dehors de Bruxelles. Et j\'ai toujours grandi parmi les chiens. Les animaux ne parlent pas trop. Ils \"parlent\" avec du feeling, mais ils n\'ont pas de langage pour nos trouilles à nous. Là j\'ai un chien en ce moment à côté de moi. Je le caresse.'),
(33, 'Un biscuit, ça n’a pas de spirit, c’est juste un biscuit. Mais avant c’était du lait, des oeufs. Et dans les oeufs, il y’a la vie potentielle.'),
(34, 'Un bon truc pour paraître dix ans plus jeune, c\'est de te vieillir de dix ans quand tu dis ton âge.');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `quotes`
--
ALTER TABLE `quotes`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `quotes`
--
ALTER TABLE `quotes`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
