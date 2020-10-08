<template>
  <h1>Form Validation</h1>

  <form @submit.prevent="onSubmit">
    <input type="password" placeholder="password" v-model="form.password" />
    <div class="error">
      <small v-if="passInvalid">{{ passInvalid }}</small>
    </div>
    <input type="submit" value="Submit" />
  </form>
</template>

<script lang="ts">
import { computed } from "vue";
import { Vue } from "vue-class-component";

interface FormData {
  password: string;
}

export default class FormValidationSample extends Vue {
  form = {
    password: ""
  } as FormData;
  isSubmitted = false;

  onSubmit() {
    this.isSubmitted = true;
  }

  passInvalid = computed(() => {
    if (!this.isSubmitted) return;

    if (!this.form.password.length) {
      return "Password is required!";
    }

    if (this.form.password.length < 6) {
      return "Password must be 6 characters and above";
    }
  });
}
</script>

<style scoped>
.error {
  color: rgb(255, 38, 38);
}
</style>