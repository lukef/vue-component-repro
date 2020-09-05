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
export default {
  name: "cool-component",
};
</script>
