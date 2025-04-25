<template>
  <div class="experience-page">
    <h1>Expériences professionnelles</h1>
    <div class="card-container">
      <div class="card" v-for="experience in experiences" :key="experience.title">
        <div class="card-header">
          <div class="duration">{{ experience.duration }}</div>
        </div>
        <div class="card-body">
          <h2 class="card-title">{{ experience.title }}</h2>
          <p class="card-description">{{ experience.description }}</p>


          <div class="image-experience-container">
            <div v-if="experience.image3 ">
              <img :src="experience.image3" :alt="experience.title" class="card-expe">
            </div>
            <div v-if="experience.image2 ">
              <img :src="experience.image2" :alt="experience.title" class="card-expe">
            </div>
            <div v-if="experience.image4 ">
              <img :src="experience.image4" :alt="experience.title" class="card-expe">
            </div>
          </div>
          <p class="card-description">{{ experience.description2 }}</p>
          <div v-if="experience.competences1">
          <p class="card-description-comp" >{{ experience.competences1 }}</p>
          </div>
          <div v-if="experience.competences2">
            <p class="card-description-comp">{{ experience.competences2 }}</p>
          </div>
          <div v-if="experience.competences3">
            <p class="card-description-comp">{{ experience.competences3 }}</p>
          </div>
          <div v-if="experience.competences4">
            <p class="card-description-comp">{{ experience.competences4 }}</p>
          </div>
          <div v-if="experience.competences5">
            <p class="card-description-comp">{{ experience.competences5 }}</p>
          </div>
          </div>
        <div class="card-footer">
          <div v-if="experience.image" class="image-container">
            <img :src="experience.image" :alt="experience.title" class="card-image">
          </div>
        </div>
        <p class="card-description"> {{ experience.dates }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Experience',
  data() {
    return {
      experiences: [
        {
          title: 'Responsable SAV Logistique',
          description: 'Depuis l\'atelier, auprès des professionnels de la montagne, jusqu\'aux salles de réunion des fabricants, cette position pivot m\'a permis de comprendre et d\'anticiper les enjeux de la conception et de l\'industrialisation d\'un produit.',
          description2: "Les entreprises de l’outdoor sont des entités en pleine expansion, grâce à cet aspect j'ai eu l'opportunité de démontrer ma capacité à optimiser efficacement les outils numériques en réponse aux défis croissants rencontrés par notre filiale. Une analyse minutieuse des besoins spécifiques de notre activité et une sélection judicieuse des technologies disponibles m'a permis de mettre en place des solutions numériques innovantes qui ont renforcé notre efficacité opérationnelle et notre compétitivité sur le marché. Mon engagement était de rester à la pointe des dernières avancées technologiques et de les intégrer de manière stratégique dans nos processus. Cela a été essentiel pour répondre aux fluctuations d'un environnement économique soumis à des paramètres changeant à chaque saison.",
          image: '/logo/mdvlogo.jpeg',
          image2: '/experience/work_flow4-min.jpg',
          image3: '/experience/work_flow2-min.jpg',
          image4: '/experience/work_flow3-min.jpg',
          duration: '9 ans',
          dates: "2014 - 2024",
          competences1: "Superviser le traitement rapide et précis des demandes de garantie.\n",
          competences2: "Assurer le support produit auprès des professionnels.\n",
          competences3: "Mettre en place des processus numériques d’amélioration continue.\n",
          competences4: "Capacité analytique et méthodique pour résoudre des problèmes complexes.\n",
          competences5: "Focus sur la satisfaction client et l'amélioration de l'expérience utilisateur."
        },
        {
          title: 'Préparateur Automobile',
          description: "Préparation esthetique des véhicules de la concession, gestion des parcs, mise en circulation et prise en main des véhicules neufs.",
          image: '/logo/logo-jeep.png',
          competences1: "Mise en circulation véhicules neufs.\n",
          competences2: "Préparation et rénovation esthétique des véhicules pour optimiser leur valeur de revente.\n",
          competences3: "Gestion des parcs automobiles.\n",
          image3: '/experience/cleancar.png',
          image2: '/experience/jeepclean.png',
          duration: '1 ans',
          dates: "2013 - 2014"
        },
        {
          title: 'Responsable Skiman',
          description:"Centre de vacances Ternelia « les Flocons Verts »" ,
          image: '/logo/ternelia.png',
          image2: '/experience/flok_work.jpg',
          duration: '3 hiver',
          dates: "2010 - 2013",
          competences1: "Accueillir et conseiller la clientèle.\n",
          competences2: "Améliorer l’objectif satisfaction client.\n",
          competences3: "Atteindre et sécuriser le chiffre d’affaires.\n",
          competences4: "Assurer la location et la facturation.\n",
          competences5: "Préparer une commande de base et maîtriser un budget.",
          description2: "J'ai occupé ce poste en assurant l'accueil et le conseil clients, en améliorant la satisfaction et le chiffre d'affaires, en gérant la location et la facturation, et en maîtrisant la préparation des commandes et le budget."
        },
        {
          title: 'Réceptionniste',
          description: 'Centre de vacances Ternelia « les Flocons Verts »',
          image: '/logo/ternelia.png',
          image2: '/experience/flocons-vert.jpg',
          duration: '4 été',
          dates: "2008 - 2012",
          competences1: "Accueil (téléphonique/physique).\n",
          competences2: "Vente et organisation sur +40 activités outdoor.\n",
          competences3: "Gestion de caisse et vente de forfait.\n",
        },
        {
          title: 'Missions en intérim et saisonnières',
          competences1: "Chauffeur tournée Parapente – Les Ailes du Mt Blanc « Chamonix » 2006.\n",
          competences2: "Agent polyvalent Hôtellerie tourisme – UK Oxford (3 mois/2006) – Chapelle d’Abondance (2 saisons/2004.2005).\n",
          competences3: "Préparateur logistique Commande et manutention – CSD (6 mois/2001) – Chabert (6 mois/2002).\n",
          duration: '2 ans',
          dates: "2002 - 2008"
        }
      ]
    }
  },
}
</script>

<style scoped>
.experience-page {
  background-color: rgba(0, 0, 0, 0);
  color: white;

}

.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(1fr));
  grid-gap: 10px;
}

.card {
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  overflow: hidden;
  padding: 20px;
  margin: 20px;
  background-clip: padding-box;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1),
  0 0 0 1px rgba(255, 255, 255, 0.1);

  /* Animation d'entrée */
  opacity: 0;
  transform: translateY(100px);
  animation: slideIn 0.6s ease forwards;
}

/* Animation avec délai pour chaque carte */
@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Appliquer un délai différent pour chaque carte */
.card:nth-child(1) {
  animation-delay: 0.1s;
}

.card:nth-child(2) {
  animation-delay: 0.2s;
}

.card:nth-child(3) {
  animation-delay: 0.3s;
}

.card:nth-child(4) {
  animation-delay: 0.4s;
}

.card:nth-child(5) {
  animation-delay: 0.5s;
}

.card:nth-child(6) {
  animation-delay: 0.6s;
}

.card:hover {
  transform: translateY(-5px);
  transition: transform 0.3s ease;
}

.card-body {
  flex-grow: 1;
}

.card-footer {
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
}

.card-image {
  width: 100%;
  height: 100%;

}

.card-title {
  color: white;
  margin-top: 0;
}

.card-description {
  color: #f0f0f0;
}
.card-description-comp{
  color: white;
  font-weight: bold;
}

.image-container {
  width: auto;
  height: auto;
  overflow: hidden;
}

.image-experience-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  overflow: hidden;
}

.card-expe {
  width: 70%;
  padding: 5%;
}

.card-header {
  position: relative;
  overflow: hidden;
  text-align: right;

}

.duration {
  font-size: 0.8em;
  color: #ccc;
  margin: 0;
  padding: 2px 5px;
}
</style>