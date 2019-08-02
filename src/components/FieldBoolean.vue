<template>
  <div class="booleanField jsonConfigField">
    <button @click="removeItem" class="backgroundColor errorColor">-</button>
    &nbsp;&nbsp;
    <label>{{fieldName}}: </label>
    <span @click="fieldClicked()" v-show="!isEditMode" class="borderColorNormal borderBottom editFieldOutline">
      {{value}}
    </span>
    <span v-show="isEditMode" class="editFieldOutline">
      <input type="checkbox" ref="inputfield" :checked="value" v-on:change="valueChanged($event);" v-on:blur="valueChanged($event);">
    </span>
  </div>
</template>

<script>
export default {
  name: 'FieldBoolean',
  props: {
    fieldName: String,
    value: Boolean
  },
  created () {
    // this.booleanValue = this.value;
    // this.radioName = parseInt(Math.random() * 1000000) + this.fieldName;
  },
  data () {
    return {
      isEditMode: false,
      radioName: ''
    }
  },
  methods: {
    fieldClicked () {
      let self = this;
      this.isEditMode = true;
      this.$nextTick(function () {
        $(self.$refs.inputfield).focus();
      });
    },
    removeItem () {
      this.$emit('itemRemoved', this.fieldName);
    },
    valueChanged (value) {
      this.isEditMode = false;
      this.$emit('input', event.target.checked);
    }
  },
  watch: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../theming/theming';
.borderBottom {
  border-bottom-style: solid;
  border-bottom-width: 1px;
}
</style>
