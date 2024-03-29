<template>
  <h3 class="text-h6">Détails de commercial (Responsable)</h3>

  <br>
    <v-container>
      <v-form ref="form" @submit.prevent="submitForm">
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field v-model="nom" label="Nom" :rules="nomRules"></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="prenom" label="Prénom" :rules="prenomRules"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-select v-model="civilite" :items="civiliteOptions" label="Civilité"></v-select>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="email" label="E-mail" :rules="emailRules"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field v-model="telephone" label="Numéro de téléphone" :rules="telephoneRules"></v-text-field>
          </v-col>
        </v-row>
        <v-btn type="submit" color="primary">Valider</v-btn>
      </v-form>
    </v-container>
  </template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CreateResponsable',
  data () {
    return {
      nom: '',
      prenom: '',
      civilite: null,
      civiliteOptions: ['M.', 'Mme'],
      email: '',
      telephone: '',
      nomRules: [
        v => !!v || 'Le Nom est requis'
      ],
      prenomRules: [
        v => !!v || 'Le Prénom est requis'
      ],
      emailRules: [
        v => !!v || 'L\'E-mail est requis',
        v => /.+@.+\..+/.test(v) || 'L\'E-mail doit être valide'
      ],
      telephoneRules: [
        v => !!v || 'Le Numéro de téléphone est requis',
        v => /^\d{10}$/.test(v) || 'Le Numéro de téléphone doit comporter exactement 10 chiffres'
      ]
    }
  },
  computed: {
    ...mapGetters(['entreprise'])
  },
  methods: {
    async submitForm () {
      if (this.$refs.form && this.$refs.form.validate()) {
        const ResponsbaleData = {
          nom: this.nom,
          prenom: this.prenom,
          email: this.email,
          numTel: this.telephone.toString(),
          entreprise: this.entreprise.idEntrprise,
          status: this.civilite
        }
        console.log(ResponsbaleData)
        try {
          await this.$store.dispatch('createResponsable', ResponsbaleData)
          this.$emit('step-to-parent', 3)
        } catch (error) {
          console.error('Error creating responsable:', error)
        }
        console.log('Formulaire soumis :', this.$data)
      } else {
        console.error('Le formulaire n\'est pas valide.')
      }
    }
  }
}
</script>

<style scoped>

</style>
