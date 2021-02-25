<template>
    <div>
        <base-header type="primary" class="pb-6 pb-8 pt-5 pt-md-8">
 
        </base-header>
           <!--TODO: 把文档教程写在这里 -->
        <div class="container-fluid mt--7 ">
          <card>
            <h1 class="display-4 text-center">About this website</h1>
            <p class="lead"> This program is built by Vue.js, Argon, AntV....</p>
            <p> other parts are coming soon</p>
          </card>
        </div>
    </div>
    
</template>
<script>
  import Vue from 'vue'
  import VueClipboard from 'vue-clipboard2'
  import BTooltipDirective from 'bootstrap-vue/esm/directives/tooltip'
  import Card from '../components/Card.vue'

  Vue.use(VueClipboard)
  export default {
    components: {
      Card  
    },
    
    directives: {
      'b-tooltip': BTooltipDirective
    },
    data() {
      return {
          
      }
    },
    methods: {
    
    }
  };
</script>
<style></style>