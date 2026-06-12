import '@testing-library/jest-dom';

class IntersectionObserverMock {
  root = null;
  rootMargin = '';
  thresholds = [];

  disconnect() {}
  observe() {}
  unobserve() {}
  takeRecords() {
    return [];
  }
}

globalThis.IntersectionObserver =
  IntersectionObserverMock as unknown as typeof IntersectionObserver;