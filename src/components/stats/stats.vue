<template>
  <div class="stats">
    <div class="stats__border stats__right stats__name">
      <div class="stats__icon">
        <icon name="star" />
        <span>Star</span>
      </div>
    </div>
    <div class="stats__border">
      {{ stars }}
    </div>
    <div class="stats__border stats__name">
      <div class="stats__icon">
        <icon name="fork" />
        <span class="stats__fork">Fork</span>
      </div>
    </div>
    <div class="stats__border stats__left stats__fork">
      {{ forks }}
    </div>
  </div>
</template>
<script>
import { icon } from '../../icons';

export default {
  name: 'Stats',
  components: { icon },
  props: {
    stars: {
      type: [Number, String],
      required: true,
    },
    forks: {
      type: [Number, String],
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.stats {
  display: flex;
  color: #24292E;
  &__border {
    border: 1px solid rgba(27, 31, 35, 0.15);
    display: flex;
    align-items: center;
    padding: 5px 10px;
    box-shadow: inset 0px -1px 0px rgba(27, 31, 35, 0.12), inset 0px 1px 0px rgba(27, 31, 35, 0.12);
  }
  &__name {
    background: #fafbfc;
  }
  &__right {
    border-radius: 6px  0px 0px 6px;
  }
  &__left {
    border-radius: 0px  6px 6px 0px;
  }
  &__icon {
    display: flex;
    align-items: center;

    span {
      padding-left: 6px;
    }
  }
  &__fork {
    font-size: 12px;
    font-weight: 600;
  }
}
</style>
