<template>
  <h3 class="text-h6">Saisie des PDL (Point de Livraison)</h3>
  <v-container>
    <v-form @submit.prevent="submitForm">
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field v-model="pdl" label="PDL" :rules="pdlRules"></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-select v-model="typePdl" :items="typePdlOptions" label="Type de PDL"></v-select>
        </v-col>
      </v-row>
      <v-btn type="submit" color="primary">Valider</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CreatePDL',
  data () {
    return {
      pdl: '',
      typePdl: null,
      typePdlOptions: ['ELEC', 'GAZ'],
      pdlRules: [
        v => !!v || 'Le PDL est requis',
        v => {
          if (this.typePdl === 'ELEC') {
            return (v && v.length === 14) || 'Le PDL pour l\'électricité doit comporter exactement 14 caractères'
          } else if (this.typePdl === 'GAZ') {
            return ((v && v.length === 14) || (v && v.startsWith('GI') && v.length === 6)) || 'Le PDL pour le gaz doit comporter exactement 14 caractères ou commencer par "GI" et comporter 6 caractères'
          } else {
            return true
          }
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['entreprise'])
  },
  methods: {
    async submitForm () {
      if (this.$data.pdl && this.$data.typePdl) {
        const PdlData = {
          pdl: this.pdl,
          type: this.typePdl,
          entreprise: this.entreprise.idEntrprise
        }
        console.log(PdlData)
        try {
          await this.$store.dispatch('createPdl', PdlData)
          this.$emit('step-to-parent', 1)
        } catch (error) {
          console.error('Error creating Pdl:', error)
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
