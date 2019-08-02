<template>
  <div class="decimalField jsonConfigField">
    <button @click="removeItem" class="backgroundColor errorColor">-</button>
    &nbsp;&nbsp;
    <label>{{fieldName}}: </label>
    <span @click="fieldClicked()" v-show="!isEditMode" class="borderColorNormal borderBottom editFieldOutline">
      {{value}}
    </span>
    <span v-show="isEditMode" class="">
      <input ref="inputfield" class="numberWidth" :value="value" v-on:change="valueChanged($event);" v-on:blur="valueChanged($event);">
    </span>
  </div>
</template>

<script>
export default {
  name: 'FieldDecimal',
  props: {
    fieldName: String,
    value: Number
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
    removeItem () {
      this.$emit('itemRemoved', this.fieldName);
    },
    valueChanged (event) {
      this.isEditMode = false;
      this.$emit('input', Number.parseFloat(event.target.value));
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
.numberWidth {
  width: 3rem;
}
</style>
