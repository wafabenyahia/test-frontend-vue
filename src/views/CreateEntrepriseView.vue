<template>
  <v-stepper
    hide-actions
    v-model="step"
    :items="items"
    class="ma-5"
  >
    <template v-slot:item.1>
      <h3 class="text-h6">Détails de l'entreprise</h3>

      <br>
      <v-form @submit.prevent="submitForm">
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field v-model="siret" label="SIRET" :rules="siretRules"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field v-model="raisonSociale" label="Raison sociale"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field v-model="adresse" label="Adresse"></v-text-field>
          </v-col>
        </v-row>
        <v-btn type="submit" color="primary">Valider</v-btn>
      </v-form>
    </template>

    <template v-slot:item.2>
      <CreateResponsable  @step-to-parent="handleDataFromChild"/>
    </template>

    <template v-slot:item.3>
   <CreatePDL @step-to-parent="handleDataFromChild"></CreatePDL>
    </template>
  </v-stepper>
</template>

<script>
import CreateResponsable from '@/components/CreateResponsable.vue'
import CreatePDL from '@/components/CreatePDL.vue'

export default {
  name: 'CreateEntrepriseView',
  components: { CreatePDL, CreateResponsable },
  data: () => ({
    shipping: 0,
    step: 1,
    items: [
      'Détails de l\'entreprise',
      'Détails de commercial (Responsable)',
      'Saisie des PDL (Point de Livraison)'
    ],
    siret: '',
    raisonSociale: '',
    adresse: '',
    siretRules: [
      v => !!v || 'Le SIRET est requis',
      v => (v && v.length === 14) || 'Le SIRET doit comporter exactement 14 caractères'
    ]

  }),
  mounted () {
    console.log(localStorage.getItem('userauth'))
  },
  methods: {
    async submitForm () {
      if (this.siret && this.siret.length === 14) {
        const user = JSON.parse(localStorage.getItem('userauth'))
        const EntrepriseData = {
          siret: this.siret,
          raison: this.raisonSociale,
          adressPostal: this.adresse,
          user: user.userId
        }
        try {
          await this.$store.dispatch('createEntreprise', EntrepriseData)
          this.step = 2
        } catch (error) {
          // Handle error
          console.error('Error creating entreprise:', error)
        }
        console.log('Formulaire soumis :', this.$data)
      } else {
        console.error('Le formulaire n\'est pas valide.')
      }
    },
    handleDataFromChild (data) {
      this.step = data
    }
  }
}
</script>

<style scoped>

</style>
