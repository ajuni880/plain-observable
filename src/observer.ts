export interface IObserver {
	update(state: any): void;
}

export class ObserversList {
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
