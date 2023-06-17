import { BehaviorSubject } from "rxjs";

export class AppProgressService {
  #loading = new BehaviorSubject(false)
  loading$ = this.#loading.asObservable()

  show() {
    this.#loading.next(true)
  }

  hide() {
    this.#loading.next(false)
  }
}
