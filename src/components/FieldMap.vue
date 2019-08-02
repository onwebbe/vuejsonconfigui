<template>
<div class="mapField jsonConfigField borderColorNormal extendableField">
  <div class="mapFieldLabel">
    <button v-show="!isExpanded" @click="doExpand(true)"> + </button><button v-show="isExpanded" @click="doExpand(false)"> - </button>
    &nbsp;&nbsp;
    <label v-if="fieldName != ''">{{fieldName}}: </label>
    <span>
      &nbsp;&nbsp;
      <select v-model="selectedAddType">
        <option v-for="(item, idx) in Utils.getSupportedTypes()" :value="item" v-bind:key="idx">{{item}}</option>
      </select>
      &nbsp;&nbsp;
      <input v-model.trim="fieldNameSelected" placeholder="Please input field name"/>
      &nbsp;&nbsp;
      <button @click="addNewItem" class="backgroundColor okColor">+</button>
    </span>
  </div>
  <transition name="fade">
    <div class="mapFieldValues" v-show="isExpanded">
      <div v-for="(item, key) in mapValue" v-bind:key="key">
        <component :is="Utils.checkFieldType(item)" :fieldName="key.toString()" v-model="mapValue[key]" @itemRemoved="onItemRemoved(key)"></component>
      </div>
    </div>
  </transition>
  
</div>
</template>

<script>

export default {
  name: 'FieldMap',
  props: {
    fieldName: String,
    value: Object
  },
  data () {
    return {
      mapValue: {},
      selectedAddType: 'String',
      fieldNameSelected: '',
      isExpanded: true
    }
  },
  created () {
    let self = this;
    this.mapValue = this.value;
    this.$eventBus.$on('doExpand', isExpand => {
      self.doExpand(isExpand);
    });
  },
  methods: {
    removeItem () {
      this.$emit('itemRemoved', this.fieldName);
    },
    onItemRemoved (keyToRemove) {
      this.$delete(this.mapValue, keyToRemove);
    },
    valueChanged () {
      this.$emit('input', this.mapValue);
    },
    addNewItem (event) {
      if (this.fieldNameSelected === '') {
        alert('Field Name Must Not Be EMPTY!');
        return;
      }
      this.$set(this.mapValue, this.fieldNameSelected, this.Utils.getDefaultValueFromType(this.selectedAddType));
      this.fieldNameSelected = '';
    },
    doExpand (isExpand) {
      this.isExpanded = isExpand;
    }
  },
  watch: {
    value () {
      this.mapValue = this.value;
    },
    mapValue () {
      this.valueChanged();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../theming/theming';
.mapFieldValues {
  padding-left: 20px;
}
</style>
