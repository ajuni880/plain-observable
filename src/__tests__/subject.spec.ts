import { Subject } from '../index';

describe('Subject', () => {
    let source: Subject;
    beforeEach(() => {
        source = new Subject();
    });

    test('should add observer when calling register method', () => {
        spyOn(source, 'register');
        source.register({
            update(value) {
                console.log(value);
            }
        });
        expect(source.register).toHaveBeenCalled();
    });

    test('should notify observers with the passed value', () => {
        const value = 'notify';
        source.register({
            update(value) {
                expect(value).toBe(value)
            }
        });
        spyOn(source, 'notify');
        source.notify(value);
        expect(source.notify).toHaveBeenCalledWith(value);
    });

    test('should unregister observer', () => {
        const unregister = source.register({
            update(value) {
                expect(value).toBe(value)
            }
        });
        unregister();
        expect(source.size).toBe(0);
    });
});