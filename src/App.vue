<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
    |
    <router-link to="/composition">Composition</router-link>
    |
    <router-link to="/options">Options</router-link>
    |
    <router-link to="/forms">Forms</router-link>
    |
    <router-link to="/events">Events</router-link>
    |
    <router-link to="/validation">Form Validations</router-link>
    |
    <router-link to="/validation2">Form Validations 2</router-link>
    |
    <router-link to="/validation3">Form Validations 3</router-link>
  </div>
  <hr />
  <router-view />
</template>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}

.w-100 {
  width: 100%;
}

.mt-5 {
  margin-top: 1.5em;
}

.pre-line {
  white-space: pre-line;
}
</style>
