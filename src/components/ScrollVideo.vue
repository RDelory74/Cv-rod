<!-- ScrollVideo.vue -->
<template>
    <div class="video-container" ref="container">
      <video 
        ref="video"
        :src="videoSource"
        preload="auto"
        playsinline
        muted
      ></video>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ScrollVideo',
    props: {
      videoSource: {
        type: String,
        required: true
      },
      scrollHeight: {
        type: Number,
        default: 10000 // Hauteur de défilement en pixels
      }
    },
    data() {
      return {
        frameCount: 0,
        currentFrame: 0
      }
    },
    mounted() {
      this.initVideo()
      window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
      async initVideo() {
        const video = this.$refs.video
        
        // Attendre que la vidéo soit chargée
        await new Promise((resolve) => {
          video.addEventListener('loadedmetadata', resolve, { once: true })
        })
        
        this.frameCount = video.duration * 30 // Supposant 30fps
        video.currentTime = 0
      },
      
      handleScroll() {
        const container = this.$refs.container
        const rect = container.getBoundingClientRect()
        const video = this.$refs.video
        
        // Calculer la position relative du scroll
        const scrollProgress = this.calculateScrollProgress(rect)
        
        // Mettre à jour la position de la vidéo
        if (video && this.frameCount > 0) {
          video.currentTime = scrollProgress * video.duration
        }
      },
      
      calculateScrollProgress(rect) {
        const windowHeight = window.innerHeight
        const scrollPosition = window.scrollY
        
        // Calculer le pourcentage de scroll (0 à 1)
        let progress = (scrollPosition) / (this.scrollHeight - windowHeight)
        return Math.max(0, Math.min(1, progress))
      }
    }
  }
  </script>
  
  <style scoped>
  .video-container {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1; 
  }
  
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  </style>