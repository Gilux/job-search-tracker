<template>
  <div class="rating">
    <p>{{ label }}</p>
    <div class="star-rating">
      <label
        class="star-rating__star"
        v-for="rating in 5"
        :key="rating"
        :class="{
          'is-selected': value >= rating && value != null,
          'is-hover': value_t >= rating && value_t != null
        }"
        @mouseenter="star_over(rating)"
        @mouseleave="star_out(rating)"
      >
        <input
          class="star-rating star-rating__checkbox"
          type="radio"
          :name="name"
          :value="rating"
          @input="$emit('input', parseInt($event.target.value))"
        />★
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "star-rating",
  props: ["name", "value", "label"],
  data: function() {
    return {
      value_t: 0,
      temp_value: null
    };
  },
  methods: {
    /*
     * Behaviour of the stars on mouseover.
     */
    star_over: function(index) {
      this.temp_value = this.value_t;
      return (this.value_t = index);
    },

    /*
     * Behaviour of the stars on mouseout.
     */
    star_out: function() {
      var self = this;
      if (!this.disabled) {
        return (this.value_t = this.temp_value);
      }
    }
  }
};
</script>

<style lang="scss">
.ratings div p {
  font-size: 1.2rem;
}

/* style star ratting component */
.star-rating__checkbox {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
}
.star-rating__star {
  display: inline-block;
  padding: 3px;
  vertical-align: middle;
  line-height: 1;
  font-size: 2.5rem;
  color: #ababab;
  transition: color 0.2s ease-out;
}
.star-rating__star:hover {
  cursor: pointer;
}
.star-rating__star.is-selected,
.star-rating__star.is-hover {
  color: #ffd700;
}
.star-rating__star.is-disabled:hover {
  cursor: default;
}
</style>
