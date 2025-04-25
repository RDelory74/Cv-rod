
<template>
  <div class="app-container">
    <nav>

      <div class="desktop-menu">
        <router-link to="/" class="nav-link">Accueil</router-link>
        <router-link to="/hobby" class="nav-link">Passion</router-link>
        <router-link to="/formation" class="nav-link">Formation</router-link>
        <router-link to="/experience" class="nav-link">Experience</router-link>
        <router-link to="/projet" class="nav-link">Projet</router-link>
      </div>


      <div class="burger-menu" @click="toggleModal">
        &#9776; 

      </div>
    </nav>

    <div class="modal" v-if="isModalOpen" @click.self="toggleModal">
      <div class="modal-content">
        <router-link to="/" class="modal-link" @click="toggleModal">Accueil</router-link>
        <router-link to="/hobby" class="modal-link" @click="toggleModal">Passion</router-link>
        <router-link to="/formation" class="modal-link" @click="toggleModal">Formation</router-link>
        <router-link to="/experience" class="modal-link" @click="toggleModal">Experience</router-link>
        <router-link to="/projet" class="modal-link" @click="toggleModal">Projet</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    toggleModal() {
      this.isModalOpen = !this.isModalOpen;
    },
  },
};

</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-size: contain;
  background-color: black;
  color: white; 
}

.app-container {
  min-height: 100vh;
  padding: 20px;
}


nav {
  margin-bottom: 20px;
  display: flex;
  justify-content:center;
  align-items: center;
}

.nav-link {
  color: white;
  text-decoration: none;
  margin-right: 20px;
  padding: 5px 10px;
}

.nav-link:hover {
  text-decoration: none;
  color: rgb(223, 126, 70);
}

.router-link-active {
  font-weight: bold;
  border-bottom: 2px solid white;
}


.burger-menu {
  display: none;
  font-size: 24px;
  cursor: pointer;
  color: white;
}


.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: black;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal-link {
  color: white;
  text-decoration: none;
  margin: 10px 0;
  font-size: 18px;
}

.modal-link:hover {
  color: rgb(223, 126, 70);
}

.desktop-menu {
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
}


@media (max-width: 700px) {
  .desktop-menu {
    display: none;
  }

  .burger-menu {
    display: block;
  }
  .app-container {
  padding: 5px;
}
#app{
padding: 5px;
}
  
}
@media (max-width: 350px) {
  .nav-link {
    margin-right: 10px; 
    padding: 5px;
  }

  .modal-link {
    font-size: 16px; 
  }

  .modal-content {
    padding: 15px; 
  }

  .burger-menu {
    font-size: 20px; 
  }
}
</style>
