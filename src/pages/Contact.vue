<template>
    <div class="contact-container">
        <h1>Contact</h1>

        <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-inner">
                <div class="form-group input-item">
                    <label for="name">Nom</label>
                    <input type="text" id="name" v-model="formData.name" required placeholder="Votre nom">
                </div>

                <div class="form-group input-item">
                    <label for="company" class="optional">Entreprise</label>
                    <input type="text" id="company" v-model="formData.company" placeholder="Votre entreprise">
                </div>

                <div class="form-group input-item">
                    <label for="email">E-mail</label>
                    <input type="email" id="email" v-model="formData.email" required placeholder="Votre email">
                </div>

                <div class="form-group input-item">
                    <label for="message">Message</label>
                    <textarea id="message" v-model="formData.message" required placeholder="Votre message"
                        rows="6"></textarea>
                </div>

                <button type="submit" class="submit-btn input-item">
                    Envoyer
                </button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Contact',
    data() {
        return {
            formData: {
                name: '',
                company: '',
                email: '',
                message: ''
            }
        }
    },
    methods: {
        async handleSubmit() {
            try {
                // Vérification des required
                if (!this.formData.name || !this.formData.email || !this.formData.message) {
                    alert('Veuillez remplir tous les champs obligatoires');
                    return;
                }

                const formData = new FormData();

                formData.append('access_key', 'cc706538-1781-4f64-be1b-374cddd8512d');
                formData.append('from_name', this.formData.name);
                formData.append('email', this.formData.email);
                formData.append('subject', `Message de ${this.formData.name} - ${this.formData.company}`);
                formData.append('message', this.formData.message);
                formData.append('company', this.formData.company);

                console.log('Envoi des données...', Object.fromEntries(formData));

                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });

                const data = await response.json();
                console.log('Réponse:', data);

                if (data.success) {
                    alert('Message envoyé avec succès!');
                    this.formData = {
                        name: '',
                        company: '',
                        email: '',
                        message: ''
                    };
                } else {
                    throw new Error(data.message || 'Erreur lors de l\'envoi');
                }
            } catch (error) {
                console.error('Erreur détaillée:', error);
                alert('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.');
            }
        }
    }
}
</script>

<style scoped>
.contact-container {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
}

.contact-form {
    width: 100%;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 2px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1),
        0 0 0 1px rgba(255, 255, 255, 0.274);
    padding: 30px;
    box-sizing: border-box;
}

.form-inner {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
}

.form-group {
    width: 100%;
    margin-bottom: 20px;
    box-sizing: border-box;
}

label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
}

label.optional::after {
  content: "";
}

label::after {
    content: " *";
    color: #ff4444;
}

input,
textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.1);
    color: inherit;
    box-sizing: border-box;
}

input:focus,
textarea:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.5);
}

.submit-btn {
    width: 100%;
    padding: 12px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    color: inherit;
    cursor: pointer;
    transition: background 0.3s ease;
}

.submit-btn:hover {
    background: rgba(255, 255, 255, 0.2);
}

/* Animation d'entrée */
.input-item {
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

/* Délais d'animation pour chaque élément */
.input-item:nth-child(1) {
    animation-delay: 0.1s;
}

.input-item:nth-child(2) {
    animation-delay: 0.2s;
}

.input-item:nth-child(3) {
    animation-delay: 0.3s;
}

.input-item:nth-child(4) {
    animation-delay: 0.4s;
}

.input-item:nth-child(5) {
    animation-delay: 0.5s;
}
</style>
