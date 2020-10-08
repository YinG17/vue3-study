<template>
  <h1>Forms</h1>
  <!-- use v-model to bind data -->
  <!-- text and textarea inputs have `input` event we can use whenever a user inputs something -->
  <div>
    <input
      class="w-100"
      v-model="message"
      placeholder="edit me"
      @input="onEvent"
    />
    <p>Message is: {{ message }}</p>
  </div>

  <!-- Multiline/Textarea input -->
  <div class="mt-5">
    <textarea
      class="multiline-box"
      v-model="messageMultiline"
      placeholder="add multiple lines"
      @input="onEvent"
    ></textarea>
    <p class="pre-line">Multiline Message is: {{ messageMultiline }}</p>
  </div>

  <!-- Checkbox input -->
  <!-- checkboxes and select have `change` event we can use -->
  <div class="mt-5">
    <input type="checkbox" v-model="checked" @change="onEvent" />
    <label for="checkbox"> {{ checked }}</label>
  </div>

  <!-- Multiple Checkbox bound to a single array -->
  <div class="mt-5">
    <input type="checkbox" value="Jack" v-model="checkedNames" />
    <label for="jack"> Jack</label>
    <input type="checkbox" value="John" v-model="checkedNames" />
    <label for="john"> John</label>
    <input type="checkbox" value="Mike" v-model="checkedNames" />
    <label for="mike"> Mike</label>
    <br />
    <span>Checked names: {{ checkedNames }}</span>
  </div>

  <!-- Radio input -->
  <div class="mt-5">
    <input type="radio" value="One" v-model="picked" />
    <label for="one">One</label>
    <br />
    <input type="radio" value="Two" v-model="picked" />
    <label for="two">Two</label>
    <br />
    <span>Picked: {{ picked }}</span>
  </div>

  <!-- Select -->
  <div class="mt-5">
    <select v-model="selectedA" @change="onEvent">
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    Selected: {{ selectedA }}
  </div>

  <!--
    .number modifier
    when using `lazy` modifier, the value of the model will be updated after change.  
  -->
  <input class="mt-5" v-model.lazy="lazyMssg" />
  <br />

  <!-- 
    .number modifier
    when using `number` modifier, the value of the inputted number is typecast as a number,
    the reason behind this is, the input value will still remain a string even if we input a number.
  -->
  <input class="mt-5" v-model.number="age" @input="onCastToNum" />
  <br />

  <!--
    .trim modifier
  -->
  <input class="mt-5" v-model.trim="trimmed" @input="onTrimmed" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  watch: {
    lazyMssg: (to, from) => {
      console.log(to, from);
    }
  }
})
export default class Forms extends Vue {
  message = "";
  messageMultiline = "";
  checked = false;
  checkedNames = [];
  picked = "";
  selectedA = "";

  age: any;
  lazyMssg = "";
  trimmed = "";

  onEvent(e: any) {
    const value = e.target.value;
    console.log(`[Event:change] '${value}'`);
  }

  onCastToNum(e: any) {
    const value = e.target.value;
    console.log("type of value is", typeof value);
    console.log(`${this.age}`, typeof this.age);
  }

  onTrimmed(e: any) {
    const value = e.target.value;
    console.log(`'${value}'`); // value is not trimmed.
    console.log(`'${this.trimmed}'`); // but the model value is trimmed.
  }
}
</script>

<style scoped>
.multiline-box {
  min-width: 100%;
  min-height: 100px;
}
</style>
