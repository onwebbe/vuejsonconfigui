<template>
  <div id="app" themeStyle="fiori">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './theming/theming';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.editFieldOutline {
  margin: 0px 10px;
  padding: 0px 10px;
}
.jsonConfigField {
  min-height: 30px;
  line-height: 30px;
}
.mapField, .arrayField {
  border-width: 1px;
  border-style: solid;
  padding: 8px;
  padding-bottom: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
}
.arrayFieldValues, .mapFieldValues {
  .arrayField.jsonConfigField,
  .mapField.jsonConfigField {
    margin-top: 5px;
  }
}
.displayJsonData {
  border-width: 0px;
  border-bottom-width: 1px;
  border-style: solid;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
