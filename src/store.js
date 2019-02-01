import Vue from 'vue'
import Vuex from 'vuex'
var _ = require('lodash/core');

Vue.use(Vuex)
/*
{"success":true,"message":"","data":{"headText":"Title","screenConfig":{"echartTheme":"light","slideStayTime":10000,"totalPages":2,"screens":[{"totalRows":3,"totalColumns":3,"updateFrequency":"24h","themeing":"black"},{"totalRows":1,"totalColumns":1,"updateFrequency":"24h","themeing":"black"}]},"tilesConfig":{"test1":""},"screens":[{"tilesLayout":[[{"tileName":"DashBoardUTNewCodeCovTile","rowSpan":1,"tileTitle":"New Code UT Coverage"},{"tileName":"QuanlityTestingStatusTile","rowSpan":1,"tileTitle":"Jenkins Testing"}],[],[],[]]},{"tilesLayout":[[{"tileName":"DashBoardUTNewCodeCovTile","rowSpan":1,"tileTitle":"tile 1 page 2"}]]}]}}
*/
export default new Vuex.Store({
  state: {
    jsonData: {}
  },
  mutations: {
    setJSONData (state, jsonData) {
      state.jsonData = jsonData;
    },
    mergeJSONData (state, jsonData) {
      _.defaultsDeep(state.jsonData, jsonData);
    }
  },
  actions: {

  }
})
