import { shallowMount } from '@vue/test-utils';
import toggler from './toggler.vue';

describe('toggler component', () => {
  it('при клике меняет надпись View issues на Hide issues', async () => {
    const wrapper = shallowMount(toggler);
    expect(wrapper.find('.text').text()).toBe('View issues');
    await wrapper.find('button').trigger('click');
    expect(wrapper.find('.text').text()).toBe('Hide issues');
  });
});
