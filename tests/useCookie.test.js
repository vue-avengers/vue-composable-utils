import { mount, createLocalVue } from '@vue/test-utils';
import VueCompositionAPI from '@vue/composition-api';
import { mountComposition } from './utils';

import { useCookie } from '@/';

const localVue = createLocalVue();
localVue.use(VueCompositionAPI);
let testCookie;

describe('useCookie tests', () => {
  it('should work cookie document', async () => {
    const wrapper = mount(
      mountComposition(() => {
        const { parseCookie } = useCookie();

        return {
          parseCookie,
        };
      }),
      { localVue },
    );

    const parsedCookie = wrapper.vm.parseCookie();
    const expectedParsedCookie = {};

    expect(parsedCookie).toEqual(expectedParsedCookie);
  });

  test("parseCookie should return an object consisting of cookie string's keys and values", () => {
    testCookie = 'guest_id=v1%3A160098099617459776';
    const wrapper = mount(
      mountComposition(() => {
        const { parseCookie } = useCookie(testCookie);

        return {
          parseCookie,
        };
      }),
      { localVue },
    );

    const parsedCookie = wrapper.vm.parseCookie();
    const expectedParsedCookie = { guest_id: 'v1%3A160098099617459776' };

    expect(parsedCookie).toEqual(expectedParsedCookie);
  });

  test('setCookie should set the value of the cookie as given key and value', () => {
    testCookie = 'guest_id=v1%3A160098099617459776';
    const wrapper = mount(
      mountComposition(() => {
        const { cookie, setCookie } = useCookie(testCookie);

        return {
          setCookie,
          cookie,
        };
      }),
      { localVue },
    );

    wrapper.vm.setCookie('personalization_id', 'v1_CTbsFzQ90GViyLKibSOpsg==');
    const expectedCookie = 'guest_id=v1%3A160098099617459776;personalization_id=v1_CTbsFzQ90GViyLKibSOpsg==';
    expect(wrapper.vm.cookie).toEqual(expectedCookie);
  });

  test('appendCookie should append the given key and value to the cookie', () => {
    testCookie = 'guest_id=v1%3A160098099617459776';
    const wrapper = mount(
      mountComposition(() => {
        const { cookie, appendCookie } = useCookie(testCookie);

        return {
          cookie,
          appendCookie,
        };
      }),
      { localVue },
    );

    wrapper.vm.appendCookie('guest_id', 'v1_CTbsFzQ90GViyLKibSOpsg==');
    const expectedCookie = 'guest_id=v1%3A160098099617459776,v1_CTbsFzQ90GViyLKibSOpsg==';

    expect(wrapper.vm.cookie).toBe(expectedCookie);
  });

  test('getCookie should return the value of the given key', () => {
    testCookie = 'guest_id=v1%3A160098099617459776';
    const wrapper = mount(
      mountComposition(() => {
        const { getCookie } = useCookie(testCookie);

        return {
          getCookie,
        };
      }),
      { localVue },
    );

    const value = wrapper.vm.getCookie('guest_id');
    expect(value).toBe('v1%3A160098099617459776');
  });

  test('deleteCookie should delete the given key', () => {
    testCookie = 'guest_id=v1%3A160098099617459776';
    const wrapper = mount(
      mountComposition(() => {
        const { cookie, deleteCookie } = useCookie(testCookie);

        return {
          cookie,
          deleteCookie,
        };
      }),
      { localVue },
    );

    wrapper.vm.deleteCookie('guest_id');
    expect(wrapper.vm.cookie).toBe('guest_id=;expires=Thu Jan 01 1970 00:00:00 GMT"');
  });
});
