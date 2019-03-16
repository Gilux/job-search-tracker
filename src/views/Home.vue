<template>
  <div class="home">
    <div class="login-container">
      <form action="#" method="post">
        <header>
          Login
        </header>
        <div class="form-body">
          <div class="standard">
            <h2>With e-mail</h2>
            <div class="form-control">
              <label for="email">E-mail :</label>
              <input type="text" id="email" name="email" />
            </div>
            <div class="form-control">
              <label for="password">Password :</label>
              <input type="password" id="password" name="password" />
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
  </div>
</template>

<script>
import firebase from "firebase"
import GoogleProvider from "@/firebase/GoogleProvider"

export default {
  name: "home",
  methods: {
    onGoogleLogin() {
      firebase.auth().signInWithPopup(GoogleProvider).then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;

        this.$store.dispatch("userLogin", user)

        this.redirect()
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...

        console.error(errorCode, errorMessage, email, credential)
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
