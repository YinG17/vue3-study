<template>
  <h1>Form Validation with Vee-validate</h1>
  <Form @submit="onSubmit">
    <Field name="email" as="input" :rules="validateEmail" />
    <br />
    <ErrorMessage name="email" />
    <br />
    <button>Submit</button>
  </Form>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Field, Form, ErrorMessage } from "vee-validate";

interface FormData {
  email: string;
  password: string;
}

@Options({
  components: {
    Field,
    Form,
    ErrorMessage
  }
})
export default class FormValidationSample2 extends Vue {
  form = {
    email: "",
    password: ""
  } as FormData;

  validateEmail(value: string) {
    if (!value) {
      return "This field is required";
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      return "This field must be a valid email";
    }

    // All is good
    return true;
  }

  onSubmit(value: FormData) {
    console.log("value", value);
    console.log("submit");
  }
}
</script>
