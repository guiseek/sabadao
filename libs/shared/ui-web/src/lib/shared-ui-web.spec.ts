import {
  AfterConnected,
  AttrChanged,
  AttrChangedValue,
  Connected,
  Disconnected,
} from './interfaces';
import { web } from './decorators/web';

@web({
  selector: 'ui-web',
})
class TestWebComponent
  extends HTMLElement
  implements Connected, Disconnected, AttrChanged, AfterConnected
{
  static observedAttributes = ['position'];

  position = 0;

  connected() {}
  attrChanged(value: AttrChangedValue) {}
  disconnected() {}
  afterConnected() {}
}

describe('sharedUiWeb', () => {
  let web: TestWebComponent;

  beforeAll(() => {
    web = document.createElement('ui-web');
  });

  it('should instance of test web component', () => {
    expect(web).toBeInstanceOf(TestWebComponent);
  });

  it('should have been connected', () => {
    jest.spyOn(web, 'connected');

    document.body.appendChild(web);

    expect(web.connected).toHaveBeenCalledTimes(1);
  });

  it('should have been disconnected', () => {
    jest.spyOn(web, 'disconnected');

    web.remove();

    expect(web.disconnected).toHaveBeenCalledTimes(1);
  });

  it('should have been called with position 1', () => {
    jest.spyOn(web, 'attrChanged');

    web.setAttribute('position', `${1}`);

    expect(web.attrChanged).toHaveBeenCalledWith({
      name: 'position',
      prev: null,
      next: '1',
    });
  });
});

declare global {
  interface HTMLElementTagNameMap {
    'ui-web': TestWebComponent;
  }
}
