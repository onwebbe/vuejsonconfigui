<template>
  <div class="stringField jsonConfigField">
    <label>{{fieldName}}: </label>
    <span @click="fieldClicked()" v-show="!isEditMode" class="borderColorNormal borderBottom editFieldOutline">
      {{value}}
    </span>
    <span v-show="isEditMode" class="editFieldOutline">
      <input ref="inputfield" :value="value" v-on:change="valueChanged($event);" v-on:blur="valueChanged($event);">
    </span>
  </div>
</template>

<script>
export default {
  name: 'FieldString',
  props: {
    fieldName: String,
    value: String
  },
  data () {
    return {
      isEditMode: false,
      focusStatus: false
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
    valueChanged (event) {
      this.isEditMode = false;
      this.$emit('input', event.target.value);
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
