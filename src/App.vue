<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
*,*:before,*:after {
    font-family: "Lato", sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html {
    font-size: 10px;
}

[hidden] {
    display: none !important;
}

ul, li {
  list-style-type: none;
}

.darknavy {
    color: #352D69;
}

.lightblue {
    color: #4DCEFF;
}

.darkgrey {
    color: #909CA8;
}

a {
    color: inherit;
    text-decoration: none;
    
}

.btn {
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
}

.btn.darkgrey {
    background-color: #909CA8;
    color: white;
}

.btn.darknavy {
  background-color: #352D69;
  color: white;
}

.big {
    font-size: 3rem;
}

.shadow {
    box-shadow: 0px 4px 11px 0px rgba(0,0,0,0.06);
}

.status {
  display: inline-block;
  padding: 4px 8px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  margin-top: 5px;
}

.status.open {
  background-color: #687fe6;
  color: white;
}

.status.await {
  background-color: #352d69;
  color: white;
}

.status.answer {
  background-color: #dabf48;
  color: white;
}

.status.rejected {
  background-color: #e62c0b;
  color: white;
}

.status.success {
  background-color: #35cc35;
  color: white;
}

body {
    background-color: #F9FAFD;
}

#login {
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
}

.login__box {
    background-color: #fff;
    width: 500px;
    border-radius: 8px;
    margin: auto;

    font-size: 1.5rem;
}

.login__box header, .login__box .main, .login__box footer {
    padding: 15px 30px;
}

.login__box header {
    border-bottom: 1px solid #EEE;
}

.login__box .main {

}

.login__box footer {

}


#dashboard {
  height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
}

nav {
  background-color: #352D69;
  width: 200px;

  font-size: 1.5rem;
  color: white;
}

nav ul {
  width: 100%;
}

nav li {
  width: 100%;
}

nav a {
  display: inline-block;
  width: 100%;
  padding: 10px 20px;
  border-bottom: 1px solid #544275;
}

#dashboard main {
  padding: 30px 45px;
  flex: 1;
  position: relative;
  z-index: 1;
  overflow: scroll;
}

h1 {
  font-size: 3rem;
}

h2 {
  font-size: 2rem;
}

h3 {
  font-size: 1.5rem;
  text-transform: uppercase;
}

.applications__list {
  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
  
  padding-top: 50px;
}

.application {
  width: 100%;
  background-color: #fff;
  font-size: 15px;
  border-radius: 6px;
  position: relative;
}

.application-intro {
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 15px 30px;

  border-bottom: 1px solid #ebebeb;
}

.application-intro img.logo {
  width: 30px;
  height: 30px;
  display: block;
  border-radius: 100px;
}


.application-single .application-intro {
  font-size: 2em;
}

.application-single .application-intro  img.logo {
  width: 80px;
  height: 80px;
}

.application-intro .main-infos {
  flex: 1;
  margin-left: 30px;
}

.rates {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ebebeb;
}

.location {
  padding: 15px 30px;
  border-bottom: 1px solid #ebebeb;
}

.rates li {
  font-weight: 600;
  color: #909CA8;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
}

.history-container, .self-notes  {
  position: relative;
  padding: 15px 30px;
  border-bottom: 1px solid #ebebeb;
}

.history {
  margin: 15px 30px;
  position: relative;
  z-index: 1;
}

.history.add {
  margin-bottom: 0;
  padding-bottom: 10px;
}

.history.add + .history {
  margin-top: 0;
}

.history-container .history {
  margin-left: 10px;
}

.history:before {
  display: block;
  content: "";
  position: absolute;
  width: 6px;
  height: 100%;
  border: 3px solid #544275;
  z-index: 5;
  border-radius: 100px;
}

.history.add:before {
  border: 3px dashed #544275;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}

.history li {
  position: relative;
  padding-left: 30px;
  padding-top: 0px;
  padding-bottom: 0px;
  margin-bottom: 15px;

  font-size: 1.4rem;
}

.history.add li {
  margin-bottom: 0;
}

.history li .date {
  font-weight: 600;
  color: #544275;
  display: block;
  margin-bottom: 5px;
}

.history li:last-child {
  padding-bottom: 5px;
}

.history li:before {
  position: absolute;
  content: "";
  width: 16px;
  height: 16px;
  border: 4px solid #544275;
  background-color: #fff;
  border-radius: 100%;

  z-index: 50;
  left: -5px;
}

.application footer {
  border-top: 1px solid #ebebeb;
  padding: 15px 30px;
  text-align: center;
  
}

.application footer .btn {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.3rem;
  padding: 1rem 2rem;
}



.section-edit {

}

.section-edit img {
  display: block;
  width: 16px;
  height: 16px;
}

.title-edit {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.status-edit img {
  display: block;
  height: 16px;
  width: 16px;
}

.application-single__inner .close {
  position: absolute;
  right: 30px;
  top: 30px;
}

.application-single__inner .close img {
  width: 24px;
  height: 24px;
}

$add_button_size: 60px;

.add_button {
  position: absolute;
  bottom: 30px;
  right: 30px;

  width: $add_button_size;
  height: $add_button_size;
  line-height: $add_button_size;

  text-align: center;

  background-color: #352D69;
  color: #FFFFFF;
  font-weight: 600;
  font-size: $add_button_size / 2;
  border-radius: 100%;
}

.form-control {
    margin: 10px 0;

    label {
      display: block;
      margin-bottom: 5px;
      font-size: 1.2rem;
    }

    input, textarea, select, option {
      display: block;
      width: 100%;
      padding: 5px 10px;
      border: 1px solid #EEEEEE;
      outline: none;

      &:focus {
        border-color: #AAAAAA;
      }
    } 
  }
  
  [type="submit"] {
    border: none;
  }

  table {
    width: 100%;
  }

  table.crud {
    font-size: 1.5rem;
  }

  .table-container {
    background-color: #fff;
    padding: 15px 30px;
  }
</style>
