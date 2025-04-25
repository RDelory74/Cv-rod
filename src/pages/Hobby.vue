<template>
  <div class="content">
    <h1>A coté du travail</h1>
    <div class="card" v-for="hobby in hobbies" :key="hobby.title">
      <div class="card-header">
        <div v-if="hobby.title">
          <h2 class="card-title">{{ hobby.title }}</h2>
        </div>
      </div>
      <div class="card-body">
        <div class="card-body-container">
          <div class="card-body-container-left">
            <div v-if="hobby.content">
              <p class="card-description">{{ hobby.content }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <div v-if="hobby.image">
          <img :src="hobby.image" :alt="hobby.title" class="card-expe">
        </div>
        <div v-if="hobby.image1">
              <img :src="hobby.image1" :alt="hobby.title" class="card-expe">
            </div>
            <div v-if="hobby.image2">
              <img :src="hobby.image2" :alt="hobby.title" class="card-expe">
            </div>
            <div v-if="hobby.image3">
              <img :src="hobby.image3" :alt="hobby.title" class="card-expe">
            </div>
        <div v-if="hobby.lien">
          <a :href=hobby.lien target="_blank">Lien vers le site</a>
        </div>
        <div v-if="hobby.contact">
          <p class="card-description">{{ hobby.contact }}</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Hobby',
  data() {
    return {
      hobbies: [
        {
          title: "Les treks en rando",
          content: "L'une de mes activitée préferée, quitter le confort et le quotidien, débrancher le temps de quelques jours. Peu importe la distance, l'effort me remet en équilibre.",
          image: '/hobby/rando1.15.14-min.png',
          image1: '/hobby/rando3.16.23-min.png',
          image2: '/hobby/rando4.16.50-min.png',
          image3: ''
        },
        {
          title: "Dre dans l'pentu",
          content: "L'hiver, lorsque que les conditions sont idéales, c'est en montagne que l'on peut me retrouver, mon terrain de prédilection: les forêts en back-country. Même si une bonne session freeride via les remontées mécaniques me fait toujours plaisir, je n'hésite pas à sortir la split-board pour fuir la foule lors des periodes de vacances.",
          image: '/hobby/Hobbysnow-min.png',
          image1: '/hobby/Hobbysnow2-min.png',
          image2: '/hobby/Split-min.png',
          image3: ''
        },
        {
          title: "Sous l'eau",
          content: "Explorer les fonds marins, visiter les récifs, en free-diving ou en snorkle, mettre le masque est souvent synonyme de belles sorties. Au travers des voyages ou simplement durant les vacances.",
          image: '/hobby/snork2.19.10-min.png',
          image1: '/hobby/snork3.19.31-min.png',
          image2: '/hobby/snork7.24.00-min.png',
          image3: ''
        },
        {
          title: "Les sciences",
          content: "Que ce soit une conference sur les dernières nouvelles des étoiles ou  ou simplement dans les recits d'un chercheur j'aime comprendre et me tenir informé des avancées humaines en termes de connaissance.",
          image: '',
          image1: '',
          image2: '',
          image3: ''
        },
        {
          title: "La photo, la musique, les arts",
          content: "Peu import la discipline pourvu qu'il y ait matière",
          image: '',
          image1: '',
          image2: '',
          image3: ''
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

}

.competence {
  font-weight: bold;
  list-style: none;
}

.card-expe {
  width: 80%;
  
}
.card-body-container {
justify-content: center;
padding-left: 10%;
padding-right: 10%;
hyphens: auto;
}
@media (max-width: 700px){
  .card-description{
  text-align: justify;
  hyphens: auto;
}
  .card-body-container{
    padding-left: 5%;
padding-right: 5%;
  }
  .card-footer{
    display: flex;
    flex-direction: column;
  }
  .card{
    padding: 1%;
    margin: 2%;
  }
}

</style>