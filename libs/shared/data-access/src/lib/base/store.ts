import { BehaviorSubject, distinctUntilChanged, map } from 'rxjs'

export abstract class Store<T> {
  #state: BehaviorSubject<T>
  protected get state() {
    return this.#state.value
  }

  constructor(initialState: T) {
    const state = Object.freeze(initialState)
    this.#state = new BehaviorSubject(state)
  }

  protected select<K>(mapFn: (state: T) => K) {
    return this.#state.asObservable().pipe(
      map(state => mapFn(state)),
      distinctUntilChanged()
    )
  }

  protected setState(newState: Partial<T>) {
    this.#state.next({
      ...this.state,
      ...newState
    })
  }
}
