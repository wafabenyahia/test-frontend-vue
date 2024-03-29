<template>
  <v-data-table
    class="ml-3 mr-3"
    style="width: 98%;"
      :custom-filter="filterOnlyCapsText"
      :items-per-page="8"
      :header-props="headerProps"
      :headers="headers"
      :items="entreprises"
      :search="search"
      item-value="name"
item-key="idEntrprise"
    >
      <template v-slot:top>
        <v-text-field
          v-model="search"
          append-inner-icon="mdi-magnify"
          variant="outlined"
          class="pt-2"
          style="width: 300px;"
          label="Rechercher.."
        ></v-text-field>
      </template>
    <template v-slot:item.actions="{ item }">
      <v-icon @click="details(item.idEntrprise)" >mdi-open-in-new</v-icon>
    </template>
    </v-data-table>

</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'EntrepriseListeView',
  data: () => ({
    search: '',
    headerProps: {
      style: 'background-color: #5666BE; color: white;' // Custom header style
    },
    headers: [
      {
        title: 'Raison',
        align: 'start',
        key: 'raison'
      },
      {
        title: 'SIRET',
        align: 'start',
        key: 'siret'
      },
      {
        title: 'Adresse',
        align: 'start',
        key: 'adressPostal'
      },
      {
        title: 'Actions',
        align: 'start',
        sortable: false,
        key: 'actions'
      }
    ],
    items: []
  }),
  computed: {
    ...mapGetters(['entreprises'])
  },
  mounted () {
    this.$store.dispatch('fetchEntreprises')
  },
  methods: {
    filterOnlyCapsText (value, query, item) {
      return value != null &&
        query != null &&
        typeof value === 'string' &&
        value.toString().toLocaleUpperCase().indexOf(query) !== -1
    },
    details (id) {
      this.$router.push(`/details/${id}`)
      console.log(id)
    }
  }

}
</script>
