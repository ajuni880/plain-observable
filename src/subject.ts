import { ObserversList, IObserver } from './observer';

class Subject<TState = any> {
	private observers: ObserversList = new ObserversList();

	register(obs: IObserver): () => void {
        this.observers.add(obs);
        return () => {
            this.unregister(obs);
        }
	}

	notify(value: TState): void {
        for (let i = 0; i < this.observers.size; i++) {
            this.observers.get(i).update(value);
		}
    }

    get size() {
        return this.observers.size;
    }

    private unregister(obs: IObserver): void {
        this.observers.remove(obs);
    }
}

export default Subject;