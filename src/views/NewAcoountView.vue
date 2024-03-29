
<template>

    <v-card
      class="mx-auto mt-16"
      max-width="600"

    >
      <v-card-title class="text-center text-amber-accent-1 text-blue-grey-darken-1">Création de compte utilisateur</v-card-title>

    <v-container>
      <v-form @submit.prevent="submitForm">
        <v-text-field v-model="nom" label="Nom" required></v-text-field>
        <v-text-field v-model="prenom" label="prenom" required></v-text-field>
        <v-text-field v-model="email" label="E-mail" type="email" required :rules="emailRules"></v-text-field>
        <v-text-field v-model="password" label="Mot de passe" type="password" required></v-text-field>
        <v-btn type="submit" color="primary" block>Créer un compte</v-btn>
      </v-form>
    </v-container>
    </v-card>
</template>
<script>
export default {
  name: 'NewAcoountView',
  data () {
    return {
      prenom: '',
      nom: '',
      email: '',
      password: '',
      emailRules: [
        v => !!v || 'L\'e-mail est requis',
        v => /.+@.+\..+/.test(v) || 'Veuillez entrer une adresse e-mail valide'
      ]
    }
  },
  methods: {
    async submitForm () {
      const userData = {
        prenom: this.prenom,
        nom: this.nom,
        email: this.email,
        password: this.password
      }
      try {
        await this.$store.dispatch('createUser', userData)
        this.$router.push('/')
        // User created successfully, do something
      } catch (error) {
        // Handle error
        console.error('Error creating user:', error)
      }
    }
  }
}
</script>

  <style scoped>

  </style>
