import { mount, createLocalVue } from '@vue/test-utils';
import VueCompositionAPI, { ref } from '@vue/composition-api';
import { useCookie } from '@/';

const localVue = createLocalVue();
localVue.use(VueCompositionAPI);

const Component = localVue.component('cookie-component', {
  setup() {
    const testCookie = ref('guest_id=v1%3A160098099617459776');
    const { cookie, parseCookie, setCookie, appendCookie, getCookie, deleteCookie } = useCookie(testCookie.value);

    return {
      parseCookie,
      setCookie,
      cookie,
      appendCookie,
      getCookie,
      deleteCookie,
    };
  },
  template: '',
});

describe('useCookie tests', () => {
  test("parseCookie should return an object consisting of cookie string's keys and values", () => {
    const wrapper = mount(Component);

    const parsedCookie = wrapper.vm.parseCookie();
    const expectedParsedCookie = { guest_id: 'v1%3A160098099617459776' };

    expect(parsedCookie).toEqual(expectedParsedCookie);
  });

  test('setCookie should set the value of the cookie as given key and value', () => {
    const wrapper = mount(Component);

    wrapper.vm.setCookie('personalization_id', 'v1_CTbsFzQ90GViyLKibSOpsg==');
    const expectedCookie = 'guest_id=v1%3A160098099617459776;personalization_id=v1_CTbsFzQ90GViyLKibSOpsg==';

    expect(wrapper.vm.cookie).toEqual(expectedCookie);
  });

  test('appendCookie should append the given key and value to the cookie', () => {
    const wrapper = mount(Component);

    wrapper.vm.appendCookie('guest_id', 'v1_CTbsFzQ90GViyLKibSOpsg==');
    const expectedCookie = 'guest_id=v1%3A160098099617459776,v1_CTbsFzQ90GViyLKibSOpsg==';

    expect(wrapper.vm.cookie).toBe(expectedCookie);
  });

  test('getCookie should return the value of the given key', () => {
    const wrapper = mount(Component);

    const value = wrapper.vm.getCookie('guest_id');
    expect(value).toBe('v1%3A160098099617459776');
  });

  test('deleteCookie should delete the given key', () => {
    const wrapper = mount(Component);

    wrapper.vm.deleteCookie('guest_id');
    expect(wrapper.vm.cookie).toBe('guest_id=;expires=Thu Jan 01 1970 00:00:00 GMT"');
  });
});
