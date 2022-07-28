<template>
  <EditorContent v-if="editor" :editor="editor" />
</template>

<script lang="ts">
import { Editor, EditorContent } from "@tiptap/vue-3";
import { defineComponent } from "vue";
import StarterKit from "@tiptap/starter-kit";
import Custom from "./CustomNode";

export default defineComponent({
  components: {
    EditorContent,
  },

  data: (): {
    editor: Editor | null;
  } => ({
    editor: null,
  }),

  mounted() {
    this.editor = new Editor({
      extensions: [StarterKit, Custom],
      content: {
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [
              {
                type: "text",
                text: "Hello, ",
              },
              {
                type: "custom",
                content: [
                  {
                    type: "text",
                    text: 'I\'m a custom node, if you click on me, it should change the text between parenthesis to "selected"!',
                  },
                ],
              },
            ],
          },
        ],
      },
    });
  },

  beforeUnmount() {
    this.editor?.destroy();
  },
});
</script>

<style lang="scss">
.ProseMirror {
  > * + * {
    margin-top: 0.75em;
  }
}
</style>
