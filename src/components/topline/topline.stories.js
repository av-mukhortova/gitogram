import topline from './topline.vue';
import logo from '../logo/logo.vue';
import navMenu from '../navMenu/navMenu.vue';
import userStory from '../userStory/userStory.vue';
import stories from '../../pages/feeds/data.json';

export default {
  title: 'Topline',
  component: topline,
  subComponents: { logo, navMenu, userStory },
};

const Template = (args) => ({
  components: {
    topline,
    logo,
    navMenu,
    userStory,
  },
  data() {
    return { args, stories };
  },
  template: `<topline>
              <template #headline>
                <div style="display: flex;justify-content: space-between;align-items: center;padding-top: 45px;">
                  <div style="width: 174px;cursor: pointer;">
                    <logo/>
                  </div>
                  <div>
                    <navMenu />
                  </div>
                </div>
              </template>
              <template #content>
                <ul style="display: flex;justify-content: space-between;margin-top: 43.5px;padding-bottom: 37px;">
                  <li v-for="story in stories" :key="story.id">
                    <userStory :avatar="story.avatar" :username="story.username" />
                  </li>
                </ul>
              </template>
            </topline>`,
});

export const Topline = Template.bind({});
