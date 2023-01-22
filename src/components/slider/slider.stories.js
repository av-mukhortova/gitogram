import slider from './slider.vue';

export default {
  title: 'Slider',
  component: slider,
  argTypes: {
    avatar: 'https://i.ibb.co/bvmSwqm/piter.png',
    title: 'React.reposit',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#000000' },
        { name: 'light', value: '#e5e5e5' },
      ],
    },
  },
};

const Template = (args) => ({
  components: { slider },
  data() {
    return { args };
  },
  template: `<slider v-bind="args">
               <p style="margin-bottom:14px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in nibh rhoncus, sagittis sem semper, egestas lectus. 
               Sed dignissim metus massa, ut ornare ex efficitur at. Duis leo tellus, blandit eget orci non, fermentum blandit lacus. 
               Vivamus tempus porttitor pretium. Maecenas maximus non metus non facilisis. Proin in volutpat libero. 
               Curabitur in justo sit amet diam molestie faucibus. Donec a venenatis nulla, eget iaculis arcu. 
               Fusce non lacus vulputate, pretium magna non, mollis diam. Donec at magna in orci sagittis blandit. 
               Nunc efficitur libero ut felis aliquet accumsan. Nam nulla metus, eleifend suscipit justo consectetur, porta condimentum lacus. 
               Cras metus metus, facilisis sed elit sit amet, suscipit accumsan mauris.</p>
               <p style="margin-bottom:14px">Ut tristique, lacus faucibus auctor tristique, ante nunc vehicula sapien, sit amet eleifend leo magna non leo. 
               Morbi placerat quis erat in porttitor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
               Vestibulum ut maximus tellus. Proin vehicula nisl suscipit massa dapibus tempus. Praesent consequat bibendum justo, ac auctor metus rhoncus in. 
               Pellentesque quis ultricies erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel consequat orci.</p>
               <p style="margin-bottom:14px">Etiam cursus nibh libero, ut eleifend dui tristique vitae. Pellentesque gravida, arcu nec bibendum facilisis, sem orci iaculis justo, 
               a condimentum tortor magna eu ipsum. Sed tempus vehicula ligula vitae bibendum. Quisque et enim urna. Aliquam erat volutpat. 
               Vestibulum ultrices sagittis urna vel consequat. Morbi viverra viverra facilisis. Sed convallis laoreet arcu, eu pellentesque nunc hendrerit at. 
               Vestibulum efficitur tortor in odio consequat finibus. Integer faucibus rhoncus sapien at luctus. Etiam pretium lacus est, nec bibendum ex vestibulum id.
               Suspendisse porta dictum nisi, eget ultrices neque facilisis a. Duis accumsan libero ac iaculis vehicula. Sed facilisis, velit vitae lobortis tempor, 
               risus sem tempus sapien, non placerat metus dolor vel arcu. Phasellus convallis turpis et odio vulputate iaculis.</p>
               <p>Pellentesque at ligula non ante mollis venenatis non et tortor. Aliquam egestas mauris odio, at fermentum ligula tempus et. 
               Cras in metus vitae nulla lacinia sodales. Aliquam finibus enim elit, non congue enim pulvinar at. Mauris venenatis dictum magna, non scelerisque risus. 
               Fusce sed leo a diam lacinia bibendum a non metus. Phasellus sit amet urna sit amet velit bibendum auctor.
               Praesent porta sollicitudin lacinia. Proin aliquam eros ipsum, eget accumsan metus commodo et. Nulla porta tempor imperdiet. 
               Vestibulum sagittis interdum nunc, vitae blandit sem vehicula at. Integer luctus vestibulum varius. Suspendisse aliquam mollis consequat. 
               Cras sit amet nunc nec diam facilisis gravida. Proin vitae ante egestas, interdum lectus in, volutpat arcu. Sed egestas lacinia libero, luctus imperdiet tellus.</p>
             </slider>`,
});

export const Slider = Template.bind({});

Slider.args = {
  avatar: 'https://i.ibb.co/bvmSwqm/piter.png',
  title: 'React.reposit',
};
