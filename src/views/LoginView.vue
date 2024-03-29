<template>
  <v-container fluid fill-height class="mt-16">
    <v-row justify="center" align="center">
      <v-col cols="4"  >
<!--        <v-card >-->
          <v-card-title class="text-h4 font-weight-regular justify-space-between">
            <span>Login</span>
          </v-card-title>
          <v-card-text>
            <span class="text-caption">HI , Welcom back 👋</span>
            <br/>
            <v-btn block prepend-icon="mdi-check-circle"
            >
              <template v-slot:prepend>
                <v-icon color="success" icon="mdi-google"></v-icon>
              </template>
              Login with Google </v-btn>
            <br/>
            <v-container fluid>
              <v-row align="center">
                <!-- Line at Left -->
                <v-col cols="4">
                  <div class="line"></div>
                </v-col>
                <!-- Text -->
                <v-col cols="4">
                  <div class="text-container">
                    <span class="text">Or login with Email</span>
                  </div>
                </v-col>
                <!-- Line at Right -->
                <v-col cols="4">
                  <div class="line"></div>
                </v-col>
              </v-row>
            </v-container>
            <v-text-field
              density="compact"
              placeholder="Email address"
              v-model="email"
              :rules="[rules.required, rules.email]"
              label="E-mail"
              variant="outlined"
            ></v-text-field>
            <br/>
            <v-text-field
              variant="outlined"
              density="compact"
              v-model="password"
              :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              hint="At least 8 characters"
              label="password"
              name="input-10-1"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>
          </v-card-text>
          <v-btn
            color="primary"
            size="large"
            block
            v-on:click="login()"
          >
            Login
          </v-btn>
          <v-card-text class="text-center">
            <span>Not registred yet?</span>
            <a
              class="text-blue text-decoration-none"
              v-on:click="this.$router.push('/user')"
              rel="noopener noreferrer"
              target="_blank"
            >
              Create an account  <v-icon icon="mdi-arrow-top-right"></v-icon>
            </a>
          </v-card-text>

<!--          </v-card>-->
      </v-col>
    </v-row>
  </v-container>
  </template>
<script>
export default {
  name: 'LoginView',
  data () {
    return {
      email: '',
      show1: false,
      show2: true,
      password: '',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        }
      }
    }
  },
  methods: {
    login () {
      this.$store
        .dispatch('login', {
          email: this.email,
          password: this.password
        }).then((resonse) => {
          console.log(resonse)
          this.$router.push('/home')
        })
        .catch((err) => {
          console.log(err)
          const message = "Vérifiez votre nom d'utilisateur et mot de passe"
          alert(message)
        })
    }
  }
}
</script>

<style scoped>
.line {
  height: 1px;
  width: 100%;
  background-color: rgba(197, 191, 191, 0.82); /* Adjust color as needed */
}
.text{
  color: rgba(197, 191, 191, 0.82);
}
.text-container {
  display: flex;
  justify-content: center;
}

/* Custom styling for the text */

/*.line {*/
/*  height: 1px;*/
/*  width: 100%;*/
/*  background-color: #000; !* Adjust the color as needed *!*/
/*}*/
/*.fill-height {*/
/*  height: 100%;*/
/*}*/
</style>
