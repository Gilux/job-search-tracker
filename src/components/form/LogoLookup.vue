<template>
  <div class="logo-lookup">
    <div class="form-control">
      <label for="logo_url">Logo URL:</label>
      <input
        type="text"
        id="logo_url"
        :value="value"
        @input="$emit('input', $event.target.value)"
      >
    </div>
    <div class="logo-preview">
      <img :src="logoUrl" :alt="value" />
    </div>
  </div>
</template>

<script>

export default {
  name: "logo-lookup",
  props: [
    'name',
    'value',
    'label'
  ],
  data: function() {
    return {
      
    };
  },
  computed: {
    logoUrl() {
      return "https://logo.clearbit.com/" + this.value
    }
  }
}

</script>

<style lang="scss">
  .logo-lookup {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .form-control {
      flex: 1;
      margin-right: 30px;
    }
  }

  .logo-preview {
    width: 80px;
    height: 80px;
    border: 1px solid #CCC;
    
    img {
      width: 80px;
      height: 80px;
    }
  }

</style>