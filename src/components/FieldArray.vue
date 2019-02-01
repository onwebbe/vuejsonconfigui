<template>
<div class="arrayField jsonConfigField borderColorNormal extendableField">
  <div class="arrayFieldLabel">
    <button v-show="!isExpanded" @click="doExpand(true)"> + </button><button v-show="isExpanded" @click="doExpand(false)"> - </button>
    &nbsp;&nbsp;
    <label>{{fieldName}}: </label>
    <span>
      &nbsp;&nbsp;
      <select v-model="selectedAddType">
        <option v-for="item in Utils.getSupportedTypes()" :value="item">{{item}}</option>
      </select>
      &nbsp;&nbsp;
      <button @click="addNewItem" class="backgroundColor okColor">+</button>
    </span>
  </div>
  <div class="arrayFieldValues" v-show="isExpanded">
    <div v-for="(item, idx) in arrayValue" v-bind:key="idx">
      <component :is="Utils.checkFieldType(item)" :fieldName="'[' + idx.toString() + ']'" v-model="arrayValue[idx]"></component>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'FieldArray',
  props: {
    fieldName: String,
    value: Array
  },
  data () {
    return {
      arrayValue: [],
      selectedAddType: 'String',
      isExpanded: true
    }
  },
  created () {
    this.arrayValue = this.value;
  },
  methods: {
    valueChanged () {
      this.$emit('input', this.arrayValue);
    },
    addNewItem (event) {
      this.arrayValue.push(this.Utils.getDefaultValueFromType(this.selectedAddType));
    },
    doExpand (isExpand) {
      this.isExpanded = isExpand;
    }
  },
  watch: {
    value () {
      this.arrayValue = this.value;
    },
    arrayValue () {
      this.valueChanged();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../theming/theming';
.arrayFieldValues {
  padding-left: 20px;
}
</style>
