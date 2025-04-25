<template>

  <div class="global-content">
    <h1>Mes projets</h1>

    <div class="project-cards" v-for="projet in projets" :key="projet.title">

      <div class="header-cards">
        {{ projet.title }}
      </div>

      <div class="body-cards">

        <div class="project-side-left">
          <div class="project-side-left-picture">
            <img :src="projet.image" :alt="projet.title" class="card-image">
          </div>

        </div>
        <div class="project-side-right">
          {{ projet.description }}
          <div class="project-side-left-skill">
            {{ projet.skill }}
            <div class="project-side-right-img">
              <div v-if="projet.image3 " @click="openModal(projet.image3)">
                <img :src="projet.image3" :alt="projet.title" class="card-expe">
              </div>
              <div v-if="projet.image2 " @click="openModal(projet.image2)">
                <img :src="projet.image2" :alt="projet.title" class="card-expe">
              </div>
            </div>
          </div>
        </div>


      </div>
      <div class="project-footer-link">
        <a :href=projet.link target="_blank">Lien vers le projet Github</a>
      </div>
    </div>

    <!-- Modale -->
    <div v-if="isModalOpen" class="modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <img :src="modalImage" :alt="modalImage" class="modal-image">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projet',
  data() {
    return {
      projets: [
        {
          title: 'Dongeon et Dragon with Java',
          skill: "JAVA , DTO, MYSQL",
          description: `Le projet Donjons & Dragons réalisé en langage Java avec une base de donnée MySQL.
              Grâce à ce projet, j'ai acquis des compétences avancées en programmation orientée objet pour structurer un code robuste et évolutif. J'ai également appris à gérer des bases de données relationnelles pour stocker les personnages et leurs inventaires. Enfin, cela m'a permis d'aborder l'importance de factorisation du code. Dans ce jeu, les joueurs peuvent incarner deux types de héros, le mage et le guerrier. Au fil de l'avancée sur le plateau je joueur fera des rencontres aléatoires d'énemis et gagnera en xp et donc en niveau au fil de l'aventure.`,
          competences: 'jryjy',
          image: '/dand.png',
          image2: '',
          image3: '',
          link: 'https://github.com/RDelory74/Dungeon-Dragon-Java/tree/master'
        },
        {
          title: 'Rentakar, la location de véhicule en Micro-Service',
          skill: "SPRING-BOOT, VUE.JS, MAVEN, MYSQL",
          description: `Le projet Rentakar est un système de location de véhicules basé sur une architecture de microservices,
               développé en utilisant Spring Boot, Vue.js,SQLite et une passerelle API avec Spring Cloud Gateway. Grâce à ce projet, 
               j'ai approfondi mes compétences en conception et déploiement de microservices, notamment la gestion de la communication 
               entre services via Eureka. J'ai également renforcé mes connaissances en intégration
                frontend-backend, en utilisant Vue.js pour créer une interface utilisateur dynamique et réactive. La base de données est gérée
                 en local avec SQLite. Chaque service est indépendant mais interconnecté cela 
              facilite la maintenance et l'évolution du site.`,
          competences: 'fgfr',
          image: '/rentakar.png',
          image2: 'projectScreen/rentakar.png',
          image3: 'projectScreen/rentakar2.png',
          link: 'https://github.com/users/RDelory74/projects/2/views/3'
        },
        {
          title: 'Spark Tales',
          skill: "PHP, HTML/CSS",
          description: `Ce projet consiste à créer un système permettant de gérer et d'afficher les contributions des utilisateurs pour enrichir l'histoire d'Avian Spark Tales, un univers narratif collaboratif. Les utilisateurs peuvent soumettre leurs idées via un formulaire, et ces idées sont stockées dans un fichier texte ou une base de données pour être ensuite affichées dynamiquement sur le site web.`,
          competences: 'jryjy',
          image: '/spark_tales.png',
          image2: 'projectScreen/sparktales.png',
          image3: 'projectScreen/sparktales2.png',
          link: 'https://github.com/RDelory74/Spark_tales'
        },
        {
          title: 'QuackNet',
          skill: "PHP, SYMFONY, DOCTRINE, TWIG, SQLITE ",
          description: "La réalisation d'un réseau social autour du framework PHP symfony. Découverte de ce design pattern Request to Response  " +
              "de la manipulation de la base de données via Doctrine et de l'affichage via TWIG. La force des makers " +
              "permet la mise en place de CRUD et de controller rapidement. J'ai donc pu réaliser des fonctionnalités autour " +
              "des users (Duck) avec l'authentification, des posts (Quack) et des commentaires (Coincoin).",
          competences: 'jryjy',
          image: '/Quacknet.png',
          image2: 'projectScreen/quacknet1.png',
          image3: 'projectScreen/quacknet3.png',
          link: 'https://github.com/RDelory74/QuackNet/tree/master'
        }
      ],
      isModalOpen: false,
      modalImage: ''
    };
  },
  methods: {
    openModal(image) {
      this.modalImage = image;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.modalImage = '';
    }
  }
}
</script>

<style scoped>
.project-cards {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.1);
  margin-bottom: 3%;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1),
  0 0 0 1px rgba(255, 255, 255, 0.274);
  /* Animation avec délai pour chaque carte */
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

.card-image {
  height: auto;
  width: 100%;
}

.project-footer-link {
  padding: 2%;

}

.project-side-right {
  width: 70%;
  padding: 5%;

}

.project-side-left-skill {
  padding: 2%;

}

.header-cards {
  font-weight: bold;
  font-size: larger;
  padding: 2%;
}

.body-cards {
  display: flex;
  width: 100%;
  height: auto;
}

.project-side-left {
  width: 70%;
  padding: 2%;
}

.card-expe {
  width: 95%;
  padding: 5%;
}

.project-side-right-img {
  display: flex;

}

/* Modale styles */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
}

.modal-image {
  max-width: 100%;
  max-height: 80vh;
}

.card-expe:hover{
  cursor: pointer;
}

@media (max-width: 700px) {
  .body-cards {
    display: flex;
    flex-direction: column;
    align-items: center; 
    text-align: center; 
  }

  .project-side-left,
  .project-side-right {
    width: 90%; 
    padding: 3%;
    margin: 0 auto; 
  }

  .project-side-right-img {
    display: flex;
    justify-content: center; 
    flex-wrap: wrap;
    gap: 10px; 
  }

  .card-expe {
    width: 80%; 
    padding: 2%;
  }

  .header-cards {
    text-align: center;
  }

  .project-footer-link {
    text-align: center;
    padding: 4% 2%;
  }

  .project-side-left-skill {
    text-align: center;
    padding: 3%;
  }
  }
</style>