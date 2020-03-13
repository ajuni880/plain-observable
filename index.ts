interface ISubject {
	register(obs: IObserver): void;
	unregister(obs: IObserver): void;
	notify(value: any): void;
}

interface IObserversList {
	add(obs: IObserver): void;
	remove(obs: IObserver): void;
	indexOf(obs: IObserver): number
	get(index: number): IObserver;
	size: number;
}

interface IObserver {
	update(state: any): void;
}

class Subject implements ISubject {
	private observers = new ObserversList();

	register(obs: IObserver) {
		this.observers.add(obs);
	}

	unregister(obs: IObserver) {
		this.observers.remove(obs);
	}

	notify(value: any) {
		for (let i = 0; i < this.observers.size; i++) {
			this.observers.get(i).update(value);
		}
	}
}

class ObserversList implements IObserversList {
	private observers: IObserver[] = [];

	get size() {
		return this.observers.length;
	}

	add(obs: IObserver) {
		this.observers.push(obs);
	}

	remove(obs: IObserver) {
		const idx = this.indexOf(obs);
		if (idx > -1) {
			this.observers.splice(idx, 1);
		}
	}

	indexOf(obs: IObserver) {
		return this.observers.findIndex(o => o === obs);
	}

	get(index: number) {
		return this.observers[index];
	}
}

export default Subject;