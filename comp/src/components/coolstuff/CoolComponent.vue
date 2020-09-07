<template>
  <div class="cool-component">
    <BaseComponent message="This is the message">
      <template v-slot:something>
        This is something!!
      </template>
    </BaseComponent>
  </div>
</template>

<script>
import BaseComponent from "@/components/base/BaseComponent.vue";

export default {
  name: "cool-component",
  components: {
    BaseComponent
  }
};
</script>
