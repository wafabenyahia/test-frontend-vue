<!--<template>-->
<!--  <div class="home">-->
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--  </div>-->
<!--</template>-->
<template>
  <v-app>
    <v-app-bar app color="indigo lighten-5" dark>
      <!-- Logo and Title -->
      <v-toolbar-title class="ml-4">
        <span class="ml-2 font-weight-bold">Application</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text to="/home" class="mr-4">Création d'entreprise</v-btn>
        <v-btn text to="/listentreprise" class="mr-4">Affichage de la liste des entreprises</v-btn>
      </v-toolbar-items>
    </v-app-bar>
<!--    <v-app-bar app color="indigo-lighten-5" >-->

<!--      &lt;!&ndash; Logo and Title &ndash;&gt;-->
<!--      <v-toolbar-title >-->
<!--      application-->
<!--         </v-toolbar-title>-->
<!--      <v-toolbar-items class="mt-2" color="indigo-lighten-2"  >-->
<!--        <router-link to="/home" class=" mr-4">Création d'entreprise </router-link>-->
<!--        <router-link to="/listentreprise" class=" mr-4 ">Affichage de la liste des entreprises </router-link>-->
<!--      </v-toolbar-items>-->

<!--    </v-app-bar>-->

    <!-- Content -->
    <v-content class="mt-16">
 <router-view></router-view>

    </v-content>
  </v-app>
<!--  <v-card height="100%" width="100%"><v-layout>-->
<!--      <v-navigation-drawer-->
<!--        expand-on-hover-->
<!--        rail-->
<!--      >-->
<!--        <v-list>-->
<!--          <v-list-item-->
<!--            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"-->
<!--            subtitle="sandra_a88@gmailcom"-->
<!--            title="Sandra Adams"-->
<!--          ></v-list-item>-->
<!--        </v-list>-->

<!--        <v-divider></v-divider>-->


<!--      </v-navigation-drawer>-->
<!--      <v-main style="height: 250px">-->
<!--      </v-main>-->
<!--    </v-layout>-->
<!--  </v-card>-->
</template>
<script>
// @ is an alias to /src
// import HellnoWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView'

  // components: {
  //   HelloWorld
  // }
}
</script>
