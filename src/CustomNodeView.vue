<template>
  <NodeViewWrapper as="span">
    <NodeViewContent as="span" />
    <span v-if="selected"> (selected)</span>
    <span v-else> (not selected)</span>
  </NodeViewWrapper>
</template>

<script lang="ts">
import { NodeViewWrapper, NodeViewContent, nodeViewProps } from "@tiptap/vue-3";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CustomNodeView",

  components: {
    NodeViewWrapper,
    NodeViewContent,
  },

  props: nodeViewProps,
});
</script>

<style scoped>
* {
  font-weight: bold;
}
</style>
