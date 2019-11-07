<template>
  <div class="search">
    <input v-model="val" type="hidden" />
    <div :class="labelClass">поиск</div>
    <div
      :class="inputClass"
      contenteditable
      @input="val = $event.target.innerText"
      @focus="focus = true"
      @blur="focus = false"
    ></div>
    <div v-if="searchResults.length !== 0" class="search-results">
      <ul>
        <li v-for="r of searchResults" :key="r">{{ r }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: '',
      focus: false
    }
  },
  computed: {
    searchResults() {
      if (this.val) {
        return [1, 2, 3]
      } else {
        return []
      }
    },
    active() {
      return this.val || this.focus
    },
    labelClass() {
      return {
        label: true,
        active: this.active
      }
    },
    inputClass() {
      return {
        input: true,
        active: this.active
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.search {
  text-align: left;
  position: relative;
}

.label {
  position: relative;
  top: 1em;
  pointer-events: none;
  transition: top td, font-size td, color td;
  color: colors.main;
  font-weight: 700;

  &.active {
    top: 0;
    font-size: rythm(3);
    color: colors.main-dark;
  }
}

.input {
  border-bottom: 2px solid colors.main;
  padding-bottom: rythm(1);
  transition: border-color td;

  &:focus {
    outline: none;
  }

  &.active {
    border-color: colors.main-dark;
  }
}

.search-results {
  position: absolute;
  background: white;
  min-width: 400px;
  max-width: 100vw;
  min-height 300px;
  border: 2px solid colors.main-dark;
  background: white;
  padding: rythm(4);
  right: 0;
  top: 100% + rythm(8);
  z-index: 1;

  &:before {
    display: inline;
    position: absolute;
    content: '';
    top: -1px;
    right: rythm(4);
    width: rythm(4);
    height: rythm(4);
    border-left: 2px solid colors.main-dark;
    border-top: 2px solid colors.main-dark;
    background: white;
    transform: translateY(-50%) rotate(45deg);
  }
}
</style>
