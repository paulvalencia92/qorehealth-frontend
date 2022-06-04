<template>
  <div class="box" :class="boxClass" @click="addTurn"/>
</template>

<script>
export default {
  name: "Box",
  props: ['turn', 'value', 'position'],
  created() {
  },
  data() {
    return {
      isColor: false
    }
  },
  methods: {
    addTurn() {
      if (this.turn !== null && this.value === null) {
        this.$emit('save', this.position)
      }
    }
  },
  computed: {
    boxClass() {
      if (this.value !== null) {
        return `box-${this.value}`
      }
    }
  }
}
</script>

<style scoped>


.box {
  width: 100px;
  height: 100px;
  background-color:#2c3e50;
  margin: 5px;
  transition: all .2s;
  border-radius: 0%;
  clip-path: polygon(36% 0, 0 0, 0 29%, 0 57%, 0 100%, 30% 100%, 73% 100%, 100% 100%, 100% 59%, 100% 31%, 100% 0, 74% 0);
}

.box-x {
  background-color: #42b983;
  clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
}

.box-o {
  background-color: #CD493A;
  border-radius: 50%;
}



</style>
