# :cookie: useCookie

useCookie provides you a number of methods to make easier browser cookie management. It uses `document.cookie` by default but any cookie string can be managed. It also supports ssr.

Using with `document.cookie`, it must be called on the `onMounted` hook because the `setup` method is run around `beforeCreate` and `created` lifecycle hooks where the document object does not exist yet.

## :rocket: Features

### Getter/Setter

You can set a new cookie easily.

`setCookie([key], [value], [options]);`

`options`: optional object argument. It can contain properties such as `expires` `path` `domain` `size` etc. related to cookie.

```vue
<script>
import { onMounted } from '@vue/composition-api';

export default {
  setup() {
    onMounted(() => {
      const { setCookie } = useCookie();

      setCookie('cookie', 'triple-chocolate cookie');
    });
  },
};
</script>
```

You can get a cookie value with the key of the cookie.

`getCookie([key])`

```vue
<script>
import { onMounted } from '@vue/composition-api';

export default {
  setup() {
    onMounted(() => {
      const { getCookie } = useCookie();

      console.log(getCookie('cookie')); // triple-chocole cookie
    });
  },
};
</script>
```

### Parse

Parse cookie string to an object.

```vue
<script>
import { onMounted } from '@vue/composition-api';

export default {
  setup() {
    onMounted(() => {
      const { parseCookie } = useCookie();

      const cookieObject = parseCookie();

      console.log(cookieObject); // { cookie: 'triple-chocolate cookie' }
    });
  },
};
</script>
```

### Append

You can append new value to an existing cookie value.

`appendCookie([key], [newValue], [specialCharacter])`

`specialCharacter`: opitonal argument to seperate values, default is comma.

```vue
<script>
import { onMounted } from '@vue/composition-api';

export default {
  setup() {
    onMounted(() => {
      const { cookie, appendCookie } = useCookie();

      appendCookie('cookie', 'hot');

      console.log(cookie); // cookie=triple-chocolate cookie, hot
    });
  },
};
</script>
```

### Delete

Remove easily a key value pair from cookie.

```vue
<script>
import { onMounted } from '@vue/composition-api';

export default {
  setup() {
    onMounted(() => {
      const { cookie, deleteCookie } = useCookie();

      // assigns cookie an expiration date and browsers deletes cookies expired
      deleteCookie('cookie');

      console.log(cookie); // cookie=; expires=Thu Jan 01 1970 00:00:00 GMT"
    });
  },
};
</script>
```

### usage with ssr

You can also use all methods with ssr.

```vue
<script>
export default {
  async asyncData({ req }) => {
    const serverSideCookie = req.cookie;

    const { setCookie, getCookie } = useCookie(serverSideCookie);
    //
  }
}
</script>
```

<CookieComponent />
