<template>
    <div>
        <base-header type="primary" class="pb-6 pb-8 pt-5 pt-md-8">
          
        </base-header>
    </div>
    <!--TODO: 把文档教程写在这里 -->
    
</template>
<script>
  import Vue from 'vue'
  import VueClipboard from 'vue-clipboard2'
  import BTooltipDirective from 'bootstrap-vue/esm/directives/tooltip'
  Vue.use(VueClipboard)
  export default {
    directives: {
      'b-tooltip': BTooltipDirective
    },
    data() {
      return {
        
      }
    },
    methods: {
      onCopy() {
        this.$notify({
          type: 'success',
          title: 'Copied to clipboard'
        })
      }
    }
  };
</script>
<style></style>