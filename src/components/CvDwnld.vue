<template>
    <div class="cv-download">
      <a :href="cvPath" download class="download-button">
        Télécharger mon CV
      </a>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      cvPath: {
        type: String,
        default: "/cv.pdf",
      },
    },
  };
  </script>
  
  <style scoped>
  .download-button {
    background-color: rgb(223, 126, 70);
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    transition: background-color 0.3s ease;
  }

  .cv-download {
  margin: 50px 0; 
}
  .download-button:hover {
    background-color: rgb(255, 100, 50);
  }
  </style>
