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
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
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
