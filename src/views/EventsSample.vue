<template>
  <h1>Events</h1>
  <!-- 
    event modifier can be chained, 
    in this case we don't what to propagate the event to tha grand parend,
    and we also don't what to trigger the event handler when the child is click
  -->
  <div class="grand-parent" @click="grandParentEvent">
    Grand Parent
    <div class="parent" @click.self.stop="parentEvent">
      Parent
      <div class="child" @click="childEvent">
        Child
      </div>
    </div>
  </div>

  <!-- input key event -->
  <input
    class="key-input"
    type="text"
    placeholder="not so hidden key required"
    @keyup.alt.down="notSoSecretEvent"
  />

  <div class="parent" @click="onMouseClick">Mouse event</div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class EventsSample extends Vue {
  childEvent() {
    console.log("child");
  }
  parentEvent() {
    console.log("parent");
  }
  grandParentEvent() {
    console.log("grand-parent");
  }

  notSoSecretEvent() {
    alert("You got me!");
  }

  onMouseClick() {
    console.log("Clicking the mouse ...");
  }
}
</script>

<style scoped>
.grand-parent,
.parent,
.child {
  margin: 0 auto;
  color: white;
}

.grand-parent {
  margin-top: 3em;
  width: 200px;
  height: 200px;
  background-color: black;
}

.parent {
  margin-top: 3em;
  width: 100px;
  height: 100px;
  background-color: gray;
}

.child {
  background-color: blue;
}

.key-input {
  margin-top: 3em;
  width: 200px;
}
</style>
