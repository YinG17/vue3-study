<template>
  <h1>Form Validation with Vee-validate</h1>
  <form @submit.prevent="onSubmit">
    <div>
      <input
        :value="email.value"
        @change="email.handleChange"
        type="email"
        placeholder="Email Address"
      />
      <small class="error" v-if="email.errorMessage">{{
        email.errorMessage
      }}</small>
    </div>
    <div class="mt-3">
      <input
        :value="password.value"
        @change="password.handleChange"
        type="password"
        placeholder="Password"
      />
      <small class="error" v-if="password.errorMessage">{{
        password.errorMessage
      }}</small>
    </div>

    <button class="d-block" type="submit">Submit</button>
  </form>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { useField, useForm } from "vee-validate";

export default class FormValidationSample2 extends Vue {
  /**
   * instantiate the form
   */
  form = useForm();

  /**
   * instantiate fields for our form
   * 1st argument accepts a string as the name of the field
   * 2nd argument accepts a function which consume the value of the field.
   */
  email = useField(
    "email",
    value => {
      if (!value) {
        return "email is required";
      }
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return "This field must be a valid email";
      }
      return true;
    },
    /**
     * putting the form instance here will make this field as a part of the form.
     */
    this.form
  );
  password = useField(
    "password",
    value => {
      if (!value) {
        return "password is required";
      }
      if (value.length < 8) {
        return "password must be at least 8 characters long";
      }
      return true;
    },
    /**
     * putting the form instance here will make this field as a part of the form.
     */
    this.form
  );

  /**
   * this will not be triggered when any of the fields are invalid
   */
  onSubmit = this.form.handleSubmit(value => {
    console.log(value);
  });
}
</script>

<style scoped>
.mt-3 {
  margin-top: 1.5em;
}

.d-block,
.error {
  display: block;
}

.error {
  color: rgb(228, 44, 44);
}
</style>
