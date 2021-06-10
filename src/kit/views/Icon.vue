<template>
  <component
      :is="icon"
      :class="[
      'icon',
      {
        [`icon-${type}`]: type,
        [`icon-hover_${hover}`]: hover,
        ['icon-disabled']: disabled
      }
    ]"
      v-on="$attrs"
  />
</template>

<script>

import IconFirst from '@/assets/icons/svg/first.svg';
import IconSecond from '@/assets/icons/svg/second.svg';

// noinspection JSUnusedGlobalSymbols
export default {
  name: 'KitIcon',
  components: {
    IconFirst,
    IconSecond,
  },
  props: {
    name: { type: String, required: true },
    disabled: { type: Boolean, default: false },
    type: {
      type: String,
      default: 'regular',
      validator: type => ['', 'regular', 'text', 'error'].includes(type),
    },
    hover: {
      type: String,
      default: '',
      validator: type => ['', 'regular', 'text', 'error'].includes(type),
    }
  },
  computed: {
    icon() {
      return `icon-${this.name}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.icon {
  display: block;

  &-regular :deep(path, rect) {
    fill: #0a0;
  }
  &-hover_regular {
    &:hover :deep(path, rect) {
      fill: #0f0;
    }
  }

  &-text :deep(path, rect) {
    fill: #303133;
  }
  &-text_regular {
    &:hover :deep(path, rect) {
      fill: #858688;
    }
  }

  &-error :deep(path, rect) {
    fill: #a00;
  }
  &-hover_error {
    &:hover :deep(path, rect) {
      fill: #f00;
    }
  }

  &-disabled {
    opacity: .7;
    cursor: default;
    pointer-events: none;
  }
}
</style>
