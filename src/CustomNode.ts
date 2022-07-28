import { mergeAttributes, Node } from "@tiptap/core";
import { VueNodeViewRenderer } from "@tiptap/vue-3";
import CustomNodeView from "./CustomNodeView.vue";

export default Node.create({
  name: "custom",
  content: "text*",
  draggable: true,

  parseHTML() {
    return [{ tag: "customz" }];
  },

  renderHTML({ HTMLAttributes }) {
    return ["customz", mergeAttributes(HTMLAttributes)];
  },

  addNodeView() {
    return VueNodeViewRenderer(CustomNodeView);
  },
});
