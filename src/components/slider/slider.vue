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
            :loading="ndx === slideNdx && isLoading"
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
      default: 0,
    },
  },
  data() {
    return {
      slideNdx: null,
      sliderPosition: 0,
      isLoading: false,
      isBtnsShown: true,
    };
  },
  computed: {
    ...mapState({
      trendings: (state) => state.trendings.data,
    }),
    activeBtns() {
      if (!this.isBtnsShown) {
        return [];
      }
      if (this.slideNdx === 0) {
        return ['next'];
      }
      if (this.slideNdx === this.trendings.length - 1) {
        return ['prev'];
      }
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
      this.isLoading = true;
      this.isBtnsShown = false;
      try {
        await this.fetchReadmeForActiveSlide();
      } catch (e) {
        throw e;
      } finally {
        this.isLoading = false;
        this.isBtnsShown = true;
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
      const ndx = this.trendings.findIndex((item) => item.id === Number(this.initialSlide));
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
