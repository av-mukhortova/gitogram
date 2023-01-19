import topline from './topline.vue';

export default {
  title: 'Topline',
  components: { topline },
};

export const DefaultView = () => ({
  components: { topline },
  template: `<topline>
               <template #headline>
                 <div class="topline-headline">
                   Содержимое блока headline
                 </div>
               </template>
               <template #content>
                 Содержимое блока content
               </template>
             </topline>`,
});

DefaultView.story = {
  name: 'Стандартный вид',
};
