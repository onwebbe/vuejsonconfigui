<template>
  <div class="displayJsonData borderColorNormal">
    <button @click="saveJSONData()"> Save JSON config </button>
    <div>
      <FieldMap fieldName="" v-model="jsonData"></FieldMap>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
var qs = require('qs');
export default {
  name: 'home',
  components: {
  },
  created () {
    this.loadJson();
  },
  data () {
    return {
      jsonData: {},
      jsonURL: '/api/vuedashboard/getDashBoardConfig',
      saveJSONURL: '/api/vuedashboard/saveDashBoardConfig'
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
    saveJSONData () {
      let self = this;
      this.$axios.post(this.saveJSONURL,
        qs.stringify({ 'data': JSON.stringify( self.jsonData )})).then(response => {
        alert(response.data.message);
      });
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
        });
      }
    },
    getJson () {
      alert(JSON.stringify(this.getJSONData()));
    }
  }
}
</script>
