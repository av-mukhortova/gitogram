import topline from './topline.vue';
import logo from '../logo/logo.vue';
import navMenu from '../navMenu/navMenu.vue';
import userStory from '../userStory/userStory.vue';

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
    return { args };
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
                  <li v-for="n in 10" :key="n">
                    <userStory avatar="https://i.ibb.co/bvmSwqm/piter.png" username="Josh" />
                  </li>
                </ul>
              </template>
            </topline>`,
});

export const Topline = Template.bind({});
