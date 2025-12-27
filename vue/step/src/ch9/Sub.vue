<template>
  <div>
    I am sub componet
    <br />
    super data : {{ message }}
    <br />
    attr1: {{ attr1 }}, attr2: {{ attr2 }}, attr3: {{ attr3 }}
  </div>
</template>
<script>
export default {
  props: {
    attr1: {
      type: String,
    },
    attr2: {
      type: Number,
    },
    attr3: {
      type: Boolean,
      required: true,
    },
    attr4: {
      type: Function,
    },
  },
  data() {
    return {
      message: this.attr1 + ":" + this.attr2 + ":" + this.attr3,
    };
  },
  created() {
    // 1. 데이터 접근 가능
    console.log("Create 단계: message는 " + this.message);
    //this.$props.attr4();
    // 함수 실행과 같은 로직은 Lifecycle Hook인 created에서 수행하는 것이 권장됩니다.
    if (this.attr4) {
      this.attr4();
    }
  },
};
</script>
