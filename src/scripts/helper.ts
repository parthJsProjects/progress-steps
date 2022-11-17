export default class Helper {
  static checkForNull(
    el: NodeListOf<Element> | HTMLElement | null
  ): HTMLElement | NodeListOf<Element> {
    if (el === null) {
      throw new Error('Element not found');
    }
    return el;
  }
}
