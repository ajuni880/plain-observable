## A simple observable

```javascript
import { Subject } from 'plain-observable';

const source = new Subject<number>();

const unregister1 = source.register({
    update(value) {
        console.log('1',value);
    }
})

source.register({
    update(value) {
        console.log('2',value);
    }
});

source.notify(1)

unregister1();

source.notify(2)
```
