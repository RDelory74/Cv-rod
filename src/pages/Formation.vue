<template>
  <div class="content">
    <h1>La Formation CDA</h1>
    <div class="card" v-for="formation in formations" :key="formation.title">
      <div class="card-header">
        <div v-if="formation.title">
          <h2 class="card-title">{{ formation.title }}</h2>
        </div>
      </div>
      <div class="card-body">
        <div class="card-body-container">
          <div class="card-body-container-left">
            <div v-if="formation.content">
              <p class="card-description">{{ formation.content }}</p>
            </div>
            <div v-if="formation.info1">
              <p class="card-description">{{ formation.info1 }}</p>
            </div>
            <div v-if="formation.info2">
              <p class="card-description">{{ formation.info2 }}</p>
            </div>
            <div v-if="formation.info3">
              <p class="card-description">{{ formation.info3 }}</p>
            </div>
          </div>
          <div class="card-body-container-right">
            <div v-if="formation.competences">
              <ul v-for="competence in formation.competences" :key="competence.comp">
                <li class="competence">{{ competence.comp }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <div v-if="formation.image">
          <img :src="formation.image" :alt="formation.title" class="card-expe">
        </div>
        <div v-if="formation.lien">
          <a :href=formation.lien target="_blank">Lien vers le site</a>
        </div>
        <div v-if="formation.contact">
          <p class="card-description">{{ formation.contact }}</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Formation',
  data() {
    return {
      formations: [
        {
          title: "Le Campus Numérique des Alpes",
          content: "La formation CDA est un parcours de 21 mois formant aux métiers du développement et à la conception " +
            "de logiciels et d’applications informatiques. Le développeur avancé est un expert technique en " +
            "informatique. Il conçoit, développe et intègre des applications multicouches dans le domaine des" +
            " systèmes d’information, du mobile et du web, pour un client ou une entreprise, selon des besoins " +
            "fonctionnels et un cahier des charges.",
          image: 'https://le-campus-numerique.fr/wp-content/uploads/2023/10/Image-article-cda.png',
          info1: '',
          info2: '',
          info3: ''
        },
        {
          title: "Mon parcours de formation",
          content: "Le Campus adopte une approche par compétences, les modules de formation étant construits sur la base" +
            " de compétences à acquérir : savoirs, savoir-faire, savoir-être, outils, méthodologies… Cette approche" +
            " permet d’assurer une formation professionnalisante avec le développement de compétences opérationnelles " +
            "correspondant aux exigences des métiers visés.",
          image: 'https://le-campus-numerique.fr/wp-content/uploads/2023/02/Logo_FT_Alpes_FondBlanc-1.webp',
          info1: '',
          info2: '',
          info3: '',

        },
        {
          title: "1200 Heures de présentiel",
          content: 'La formation se déroule en deux phases :',
          lien: '',
          info1: '',
          info2: 'Une partie théorique en 9 mois de formation intensive au Campus (1204 heures) permettant d’acquérir le socle de compétences techniques et de travail en équipe.',
          info3: 'Alternance de 12 mois comprenant 449,5 heures de formation au Campus afin d’élargir et d’approfondir les compétences techniques et les soft skills développées.',
          contact: '',
          image: ''
        },
        {
          title: "INFOS SUR LE CAMPUS",
          content: "Campus d’Annecy - Les Papeteries - Image Factory\n",
          info: '',
          info1: '3 Esplanade Augustin Aussedat',
          info2: '74960 Annecy',
          info3: '07 69 37 90 37',
          lien: 'https://le-campus-numerique.fr/',
          contact: 'sonia.brunel@le-campus-numerique.fr',
          image: '/logo/logo-campus-header.png'
        }
      ]
    }
  }
}
</script>

<style scoped>
h1 {
  color: white;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
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

.card-footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.competence {
  font-weight: bold;
  list-style: none;
}

.card-expe {
  width: 30%;

}

.card-body-container {
  text-align: justify;
  justify-content: center;
  padding-left: 10%;
  padding-right: 10%;
  hyphens: auto;
}

.card-body-container-left{
  text-align: center;
}

@media (max-width: 700px) {
  .card-body-container {
    padding-left: 5%;
    padding-right: 5%;
  }
}
</style>