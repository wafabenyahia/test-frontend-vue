<template>
  <v-card class="ma-4">
    <v-card-text>
      Demande citation<span class="text-grey-lighten-1">/Details societe</span>
    </v-card-text>
  </v-card>
  <v-container fluid>
    <!-- Cards Section -->
    <v-row>
      <v-col cols="12" md="4">
        <v-card >
          <v-card-title class="text-right">
            <v-icon color="primary"> mdi-pencil-outline</v-icon>
          </v-card-title>
          <v-card-text class="text-center" v-if="entrepriseById">
            <img src="https://cdn-icons-png.flaticon.com/512/4091/4091976.png" width="120px" height="130px"/>
            <br/>
            <span>{{entrepriseById.raison}}</span><br/>
            <span class="text-grey-lighten-1">{{entrepriseById.siret}}</span>
     </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title>Entreprise Details</v-card-title>
          <v-divider></v-divider>
          <v-card-text v-if="entrepriseById">
            <div>Reason: <span class="ml-3">{{ entrepriseById.raison }}</span></div>
            <v-divider></v-divider>
            <div>SIRET: <span class="ml-3">{{ entrepriseById.siret }}</span></div>
            <v-divider></v-divider>
            <div>Address: <span class="ml-3">{{ entrepriseById.adressPostal }}</span></div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title>Imatriculation</v-card-title>
          <v-card-text v-if="pdlById">
            <div>Type: <span class="ml-3">{{ pdlById.type }}</span></div>
            <v-divider></v-divider>
            <div>PDL: <span class="ml-3">{{ pdlById.pdl }}</span></div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Form Section -->
    <v-row>
      <v-col cols="2" >
        <v-card>
          <v-list dense>
            <!-- Accueil -->
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  <v-icon class="mr-3" color="primary">mdi-home</v-icon>
                  Accueil
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <!-- Divider -->
            <v-divider></v-divider>

            <!-- Information -->
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  <v-icon class="mr-3" color="info">mdi-information</v-icon>
                  Information
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <!-- Divider -->
            <v-divider></v-divider>

            <!-- Citation -->
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  <v-icon class="mr-3" color="orange">mdi-format-quote-close</v-icon>
                  Citation
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <!-- Divider -->
            <v-divider></v-divider>

            <!-- Visite Technique -->
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  <v-icon class="mr-3" color="success">mdi-cogs</v-icon>
                  Visite Technique
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <!-- Divider -->
            <v-divider></v-divider>

            <!-- Visite Installation -->
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  <v-icon class="mr-3" color="purple">mdi-wrench</v-icon>
                  Visite Installation
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title>Responsable</v-card-title>
          <v-divider></v-divider>
          <v-card-text v-if="responsableById">
            <v-row>
              <v-col cols="12" md="6">
                <v-row align="center">
                  <v-col cols="auto">
                    <v-icon color="primary">mdi-account</v-icon>
                  </v-col>
                  <v-col cols="auto">
                    <span>Nom:</span>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12" md="6">{{ responsableById.nom }}</v-col>
            </v-row>

            <v-row>
              <v-col cols="12" md="6">
                <v-row align="center">
                  <v-col cols="auto">
                    <v-icon color="primary">mdi-account</v-icon>
                  </v-col>
                  <v-col cols="auto">
                    <span>Prénom:</span>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12" md="6">{{ responsableById.prenom }}</v-col>
            </v-row>

            <v-row>
              <v-col cols="12" md="6">
                <v-row align="center">
                  <v-col cols="auto">
                    <v-icon color="primary">mdi-email</v-icon>
                  </v-col>
                  <v-col cols="auto">
                    <span>Email:</span>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12" md="6">{{ responsableById.email }}</v-col>
            </v-row>

            <v-row>
              <v-col cols="12" md="6">
                <v-row align="center">
                  <v-col cols="auto">
                    <v-icon color="primary">mdi-phone</v-icon>
                  </v-col>
                  <v-col cols="auto">
                    <span>Numéro de téléphone:</span>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12" md="6">{{ responsableById.numTel }}</v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'DetailsEntreprise',
  mounted () {
    const id = this.$route.params.id
    // Utilisez l'ID comme vous le souhaitez ici
  },
  computed: {
    ...mapGetters(['responsableById', 'entrepriseById','pdlById'])
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
