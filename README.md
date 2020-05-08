## A simple observable

```
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

sub.notify(1)

unregister1();

sub.notify(2)
```
