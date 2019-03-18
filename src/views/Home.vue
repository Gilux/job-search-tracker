<template>
  <div class="home">
    <div class="login-container">
      <form action="#" method="post" @submit.prevent="onLogin">
        <header>
          Login
        </header>
        <div class="form-body">
          <div class="standard">
            <h2>With e-mail</h2>
            <div class="form-control">
              <label for="email">E-mail :</label>
              <input type="text" id="email" name="email" v-model="login.email" />
            </div>
            <div class="form-control">
              <label for="password">Password :</label>
              <input type="password" id="password" name="password" v-model="login.password" />
            </div>
            <button type="submit">Login</button>
          </div>
          <div class="google">
            <h2>With a Google account</h2>
            <a href="#" @click.prevent="onGoogleLogin()">here</a>
          </div>
        </div>
      </form>
    </div>
    <div class="login-container">
      <form action="#" method="post" @submit.prevent="onRegister()">
        <header>
          Or Register
        </header>
        <div class="form-body">
          <div class="standard">
            <h2>With e-mail</h2>
            <div class="form-control">
              <label for="r-email">E-mail :</label>
              <input type="text" id="r-email" name="r-email" v-model="register.email"/>
            </div>
            <div class="form-control">
              <label for="r-password">Password :</label>
              <input type="password" id="r-password" name="r-password" v-model="register.password" />
            </div>
            <button type="submit">Create account</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from "firebase"
import GoogleProvider from "@/firebase/GoogleProvider"
import createUser from "@/firebase/CreateUser"

export default {
  name: "home",
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
      register: {
        email: "",
        password: "",
      }
    }
  },
  methods: {
    onGoogleLogin() {
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      
      .then(() => {
        firebase.auth().signInWithPopup(GoogleProvider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;

          // We must wait for all user-related data to be loaded before using the router, so the action returns a Promise
          this.$store.dispatch("userLogin", user).then(response => {
            this.redirect()
          })

        }).catch(function(error) {
          console.error("---------------ERROR----------------")
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          console.error(errorCode, errorMessage, email, credential)
        });
      })
      .catch((error) => {
        console.error(error)
      })   
    },

    onRegister() {
      createUser(this.register.email, this.register.password)
    },

    onLogin() {
      firebase.auth().signInWithEmailAndPassword(this.login.email, this.login.password)
      .then(() => {
        this.redirect();
      })
      .catch(function(error) {
        console.error(error)
      });
    },

    redirect() {
      this.$router.push({name: "companies"})
    }
  }

};
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  height: 100vh;
  font-size: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;
}

.login-container {
  width: 500px;
  background-color: #fff;

  header {
    padding: 15px 30px;
    text-align: center;
  }
}

.form-control {
  display: flex;
  flex-direction: column;

  label {
    font-size: 1.2rem;
    display: block;
  }
}

.form-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 30px;
  padding: 15px 30px;
}
</style>
