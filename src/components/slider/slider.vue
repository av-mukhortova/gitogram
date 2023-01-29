<template>
  <div class="c-stories-slider">
    <div class="stories-container">
      <ul class="stories" ref="slider">
        <li
          class="stories-item"
          v-for="(trending, ndx) in trendings"
          :key="trending.id"
          ref="item"
        >
          <slide
            :data="getStoryData(trending)"
            :active="ndx === slideNdx"
            :btnsShown="activeBtns"
            :loading="ndx === slideNdx && loading"
            @onNextSlide="handleSlide(ndx + 1)"
            @onPrevSlide="handleSlide(ndx - 1)"
            @onProgressFinish="handleSlide(ndx + 1)"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { slide } from '../slide';

export default {
  name: 'Slider',
  components: { slide },
  props: {
    initialSlide: {
      type: Number,
    },
  },
  data() {
    return {
      slideNdx: null,
      sliderPosition: 0,
      loading: false,
      btnsShown: true,
    };
  },
  computed: {
    ...mapState({
      trendings: (state) => state.trendings.data,
    }),
    activeBtns() {
      if (!this.btnsShown) return [];
      if (this.slideNdx === 0) return ['next'];
      if (this.slideNdx === this.trendings.length - 1) return ['prev'];
      return ['next', 'prev'];
    },
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings',
      fetchReadme: 'trendings/fetchReadme',
    }),
    async fetchReadmeForActiveSlide() {
      const { id, owner, name } = this.trendings[this.slideNdx];
      await this.fetchReadme({ id, owner: owner.login, repo: name });
    },
    getStoryData(obj) {
      return {
        id: obj.id,
        username: obj.owner?.login,
        userAvatar: obj.owner?.avatar_url,
        content: obj.readme,
      };
    },
    moveSlider(slideNdx) {
      this.slideNdx = slideNdx;
      const item = this.$refs.item[slideNdx];
      const { slider } = this.$refs;
      const slideWidth = parseInt(
        getComputedStyle(item).getPropertyValue('width'),
        10,
      );
      this.sliderPosition = -(slideWidth * slideNdx);
      slider.style.transform = `translateX(${this.sliderPosition}px)`;
    },
    async loadReadme() {
      this.loading = true;
      this.btnsShown = false;
      try {
        await this.fetchReadmeForActiveSlide();
      } finally {
        this.loading = false;
        this.btnsShown = true;
      }
    },
    async handleSlide(slideNdx) {
      if (slideNdx < this.trendings.length) {
        this.moveSlider(slideNdx);
        await this.loadReadme();
      }
    },
  },
  async mounted() {
    if (this.initialSlide) {
      const ndx = this.trendings.findIndex((item) => item.id === +this.initialSlide);
      await this.handleSlide(ndx);
    } else {
      await this.handleSlide(0);
    }
    await this.fetchTrendings();
    await this.loadReadme();
  },
};
</script>

<style lang="scss" src="./slider.scss" scoped></style>
