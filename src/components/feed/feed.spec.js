import { mount } from '@vue/test-utils';
import axios from 'axios';
import feed from './feed.vue';
import * as api from '../../api';

describe('feed component', () => {
  it('при клике эмитит событие загрузки контента', async () => {
    const wrapper = mount(feed, {
      propsData: {
        feed: {
          username: '',
          avatar: '',
          issues: [],
          date: '',
        },
      },
    });
    await wrapper.find('.toggler button').trigger('click');
    expect(wrapper.emitted().onLoadIssues.length).toBe(1);
  });

  it('отрисует количество элементов, соответствующее количеству пришедших', async () => {
    const issue = { title: '', user: { login: '' } };
    const wrapper = mount(feed, {
      propsData: {
        feed: {
          username: '',
          avatar: '',
          issues: Array.from({ length: 6 }).map(() => issue),
          date: '',
        },
      },
    });
    expect(wrapper.find('.comments').exists()).toBe(false);
    await wrapper.find('.toggler button').trigger('click');
    expect(wrapper.findAll('.comments__item').length).toBe(6);
  });

  it('не делает повторных запросов при многократном открытии/закрытии компонента', async () => {
    const wrapper = mount(feed, {
      propsData: {
        feed: {
          username: '',
          avatar: '',
          issues: [{ title: '', user: { login: '' } }],
          date: '',
        },
      },
    });
    await wrapper.find('.toggler button').trigger('click');
    expect(wrapper.emitted().onLoadIssues).toBeUndefined();
  });
});

// для axios подключен мок
jest.mock('axios');

const issue = { title: '', user: { login: '' } };
const issues = Array.from({ length: 6 }).map(() => issue);

const mockFn = jest.fn(() => Promise.resolve({
  data: issues,
}));

axios.mockImplementation(mockFn);

describe('feed component с моком', () => {
  it('выполняет запрос на сервер', async () => {
    const res = await api.starred.getStarredRepos({ limit: 10 });
    expect(mockFn.mock.calls.length).toBe(1);
    expect(res.data.length).toBe(6);
  });
});
