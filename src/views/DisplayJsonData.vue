<template>
  <div class="displayJsonData borderColorNormal">
    <div>
      <input v-model="jsonURL"> <button @click="loadJson()">Load JSON</button>&nbsp;&nbsp;<button @click="getJson()">Get JSON</button>
      <br/>
      <button @click="doExpandAll(true)">expand all</button>&nbsp;<button @click="doExpandAll(false)">callaps all</button>
    </div>
    <div>
      <FieldMap fieldName="" v-model="jsonData"></FieldMap>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  },
  data () {
    return {
      jsonData: {},
      jsonURL: null
    }
  },
  watch: {
    jsonData () {
      console.log(this.jsonData);
    }
  },
  methods: {
    doExpandAll (isExpand) {
      this.$eventBus.$emit('doExpand', isExpand);
    },
    getJSONData () {
      return this.jsonData;
    },
    loadJson () {
      let self = this;
      let jsonObj = {};
      let isJSONStr = false;
      try {
        jsonObj = JSON.parse(this.jsonURL);
        this.jsonData = jsonObj;
        isJSONStr = true;
      } catch (e) {

      }
      if (!isJSONStr) {
        this.$axios.get(this.jsonURL).then(response => {
          let data = response.data;
          let jsonData = data.data;
          self.jsonData = jsonData;
        })
      }
    },
    getJson () {
      alert(JSON.stringify(this.getJSONData()));
    }
  }
}
</script>
