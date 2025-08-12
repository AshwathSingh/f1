/**
 * Example Component
 * Demonstrates modular JavaScript development with this template
 */
export class ExampleComponent {
  constructor(container) {
    this.container = container;
    this.count = 0;
    this.init();
  }

  init() {
    this.render();
    this.attachEventListeners();
  }

  render() {
    this.container.innerHTML = `
      <div class="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Example Component</h3>
        <p class="text-gray-600 mb-4">This is a modular component example.</p>
        <div class="flex items-center justify-between">
          <span class="text-sm text-gray-500">Count: <span id="component-count">${this.count}</span></span>
          <button id="component-button" class="btn-primary">
            Increment
          </button>
        </div>
      </div>
    `;
  }

  attachEventListeners() {
    const button = this.container.querySelector("#component-button");
    if (button) {
      button.addEventListener("click", () => this.increment());
    }
  }

  increment() {
    this.count++;
    const countElement = this.container.querySelector("#component-count");
    if (countElement) {
      countElement.textContent = this.count;
    }
  }
}

export default ExampleComponent;
