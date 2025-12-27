<template>
  <div>
    <h3>I am Super Component</h3>
    <Sub
      attr1="hello"
      :attr2="10"
      :attr3="true"
      v-bind:attr4="superMethod"
    ></Sub>
  </div>
</template>
<script>
import Sub from "./Sub.vue";
export default {
  mounted() {
    var button = document.createElement("button");
    button.innerHTML = "New Button";
        this.$el.append(button);
    console.log("Mount 단계: 화면에 버튼이 추가되었습니다.");
  },
  components: {
    Sub,
  },
  methods: {
    superMethod: function () {
      console.log("super method...Subca...Sub..");
    },
  },
};
</script>
