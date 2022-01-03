<template>
  <div class="toast-wrapper">
    <div class="toast-1">
      This is Toast Test Text {{text}}
    </div>
  </div>
  <!-- <div>
      <div class="toast"> Toast </div>
  </div> -->
</template>

<script>
// import {ref} from 'vue'
export default {
    name: 'Toast',
    props: {
        text: String
    },
    components: {},
    methods: {
        
    }
    // setup() {
    //     const showToast = ref(false)
    //     return {showToast}
    // }
}
</script>

<style scoped>
  .toast-wrapper {
    position: fixed;
    width: 100%;
    top: 20px;
  }

  .toast-1 {

    padding: 20px;
    color: white;
    background: #ff0062;
    border-radius: 10px;
    box-shadow: 1px 3px 5px rgba(0,0,0,0.2);
    max-width: 400px;
    margin: 0 auto;
  }
</style>