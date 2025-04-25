<template>
  <div class="app-container">
    <div class="main-container-home">
      <div class="side-container">
        <div class="side-container-left">
          <img src="@/assets/picturerod.png" alt="Profile" class="profile-image-home"/>
          <div claa="side-container-right">
            <h1 class="intro-home">Rodolphe Delroy Test</h1>
            <div class="side-container-text-home">
              <p class="intro-home">
                Après 10 ans dans le secteur des articles de sport, où j’ai développé une expertise en relations
                professionnelles et en gestion, j’ai choisi de me reconvertir dans le développement web.
                Cette décision est motivée par ma volonté d’apporter des solutions numériques adaptées aux besoins
                des entreprises, en croisant mon expérience du B-to-B avec les outils modernes.</p>
              <p class="intro-home">En formation au Campus Numérique des Alpes, j’acquiers une maîtrise des principaux
                langages et
                frameworks de développement, ainsi que des bonnes pratiques du métier.</p>
              <p class="intro-home"> Proactif et engagé, je suis
                déterminé à contribuer efficacement à des projets numériques, grâce à ma capacité d’adaptation et à
                mon goût pour le travail en équipe. </p>
            </div>
          </div>
        </div>
        <div class="card-competences">
          <h2 class="card-title-home">Compétences PRO</h2>
          <div class="card-skill-home">
            <div v-for="skill in softSkills" :key="skill.text" class="skill-logo-home">
              <img :src="skill.logo" :alt="skill.text" style="width: 50px"/>
              <p class="card-description-home">{{ skill.text }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="content-home">
        <div class="card-container-home">
          <div v-for="competence in competences" :to="competence.link" :key="competence.title" class="card-home">
            <div class="card-header">
              <h2 class="card-title-home">{{ competence.title }}</h2>
              <p class="card-description-home">{{ competence.description }}</p>
            </div>
            <div class="card-body-home">
              <div v-for="image in competence.image" :key="image.logo" class="card-picture-container-loop-home">
                <div v-if="image.logo" class="card-picture-img-home">
                  <img :src="image.logo" :alt="competence.title" style="width: 100px"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      competences: [
        {
          title: 'Langages',
          description: "Les langages de developpement",
          image: [
            {
              logo: '/logoDev/java.png'
            },
            {
              logo: '/logoDev/php.png'
            },
            {
              logo: '/logoDev/html.png'
            },
            {
              logo: '/logoDev/javascript.png'
            },
            {
              logo: '/logoDev/css.png'
            }
          ],
          link: '/experience',

        },
        {
          title: 'Frameworks',
          description: "Les frameworks abordées",
          image: [
            {
              logo: '/logoDev/laravel.png'
            },
            {
              logo: '/logoDev/springboot.png'
            },
            {
              logo: '/logoDev/symfony.png'
            },
            {
              logo: '/logoDev/Vue.js.png'
            }
          ],
          link: '/formation'
        },
        {
          title: 'Outils numériques',
          description: "Technologies abordées ",
          image: [
            {
              logo: '/logoDev/pngwing.png'
            },
            {
              logo: '/logoDev/bootstrap.png'
            },
            {
              logo: '/logoDev/figma.png'
            },
            {
              logo: '/logoDev/github100.png'
            }
          ],
          link: '/formation'
        },
        {
          title: 'Base de données',
          description: 'Manipulation des données avec les requêtes SQL',
          image: [
            {
              logo: '/logoDev/mysql.png'
            }
          ],
          link: '/projet'
        }
      ],
      softSkills: [
        {
          logo: '/logoComp/Folder-tree.png',
          text: 'Rigoureux'
        },
        {
          logo: '/logoComp/Package.png',
          text: 'Organisé'
        },
        {
          logo: '/logoComp/Pencil-ruler.png',
          text: 'Créatif'
        },
        {
          logo: '/logoComp/Pocket-knife.png',
          text: 'Polyvalent'
        },
        {
          logo: '/logoComp/Quote.png',
          text: 'Communiquant'
        },
        {
          logo: '/logoComp/User-cog.png',
          text: 'Adaptable'
        },
        {
          logo: '/logoComp/Zap.png',
          text: 'Efficace'
        },
      ]
    };
  }
}
</script>

<style>


.main-container-home {
  display: flex;
  flex-wrap: wrap;
}

.content-home {
  display: flex;
  flex-wrap: v-bind(wrap);
}

h1 {
  color: rgb(255, 255, 255);
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.5rem;
}

.card-container-home {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  box-sizing: border-box;
}

.card-picture-img-home {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card-home {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 200px;
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;
  padding: 20px;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1),
  0 0 0 1px rgba(255, 255, 255, 0.1);
  transition: transform 0.8s ease, opacity 0.5s ease;
  cursor: pointer;
  /* Animation*/
  opacity: 0;
  transform: translateY(100px);
  animation: slideIn 0.6s ease forwards;
}

/* Animation  */
@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card-home:nth-child(1) {
  animation-delay: 0.1s;
}

.card-home:nth-child(2) {
  animation-delay: 0.2s;
}

.card-home:nth-child(3) {
  animation-delay: 0.3s;
}

.card-home:nth-child(4) {
  animation-delay: 0.4s;
}

.card-home:nth-child(5) {
  animation-delay: 0.5s;
}

.card-home:nth-child(6) {
  animation-delay: 0.6s;
}

.card-home:hover {
  transform: scale(1.05);
}

.card-body-home {
  display: flex;
  flex-wrap: v-bind(wrap);
}

.card-title-home {
  color: white;
  margin: 10px 0;
  font-size: 1.5rem;
}

.card-description-home {
  color: #f0f0f0;
}

.profile-image-home{
  width: 20%;
  padding: 20px;
  opacity: 0;
  transform: translateY(100px);
  animation: slideIn 0.6s ease forwards;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1),
  0 0 0 1px rgba(255, 255, 255, 0.1);
  transition: transform 0.8s ease, opacity 0.5s ease;
}

.card-picture-container-loop-home {
  display: flex;
  flex-direction: column;
  justify-content: center;

}
.skill-logo-home{
  padding: 1%;
}
.card-skill-home{
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 1%;
}
.intro-home{
  padding-left: 10rem;
  padding-right: 10rem;
}

@media (max-width: 700px) {

  .card-body-home{
    display: flex;
    flex-direction: column;
  }
  .card-skill-home {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .intro-home{
  padding-left: 1%;
  padding-right: 1%;
  text-align: justify;
  hyphens: auto;
}

.profile-image-home {
  width: 20%;
  padding: 20px;
  opacity: 0;
  transform: translateY(100px);
  animation: slideIn 0.6s ease forwards;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1),
  0 0 0 1px rgba(255, 255, 255, 0.1);
  transition: transform 0.8s ease, opacity 0.5s ease;
}

.side-container-text-home{
  padding-bottom: 5%;
}

.card-container-home {
  padding: 5px;

}
.card-home{
padding: 5px;
min-width: none;
}
}


</style>