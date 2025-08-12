// Import Tailwind CSS
import "./styles.css";

// Import example component (uncomment to use)
// import { ExampleComponent } from './components/ExampleComponent.js';

// Main application class
class App {
  constructor() {
    this.clickCount = 0;
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.showWelcomeMessage();

    // Uncomment to demonstrate component usage
    // this.initExampleComponent();
  }

  setupEventListeners() {
    const demoButton = document.getElementById("demo-button");
    if (demoButton) {
      demoButton.addEventListener("click", () => this.handleButtonClick());
    }
  }

  handleButtonClick() {
    this.clickCount++;
    const demoText = document.getElementById("demo-text");

    if (demoText) {
      const messages = [
        "Great! The JavaScript is working! 🎉",
        "You clicked again! Keep going! 🚀",
        "Amazing! This template is fully functional! ✨",
        "You're getting the hang of it! 💪",
        "Perfect! Everything is working smoothly! 🎯",
      ];

      const message =
        messages[Math.min(this.clickCount - 1, messages.length - 1)];
      demoText.textContent = message;

      // Add a fun animation class
      demoText.classList.add("animate-pulse");
      setTimeout(() => {
        demoText.classList.remove("animate-pulse");
      }, 1000);
    }
  }

  // Example of how to use components
  // initExampleComponent() {
  //   const componentContainer = document.createElement('div');
  //   componentContainer.className = 'mt-8';
  //   document.querySelector('main').appendChild(componentContainer);
  //   new ExampleComponent(componentContainer);
  // }

  showWelcomeMessage() {
    console.log("🚀 Webpack + Tailwind Template is ready!");
    console.log("📝 Available commands:");
    console.log("   npm run dev    - Start development server");
    console.log("   npm run build  - Build for production");
    console.log("   npm run watch  - Watch for changes");
    console.log("");
    console.log("💡 Tips:");
    console.log("   - Edit src/index.html for HTML changes");
    console.log("   - Edit src/styles.css for CSS changes");
    console.log("   - Edit src/index.js for JavaScript changes");
    console.log("   - Create components in src/components/");
    console.log("   - Use Tailwind classes for styling");
  }
}

// Initialize the app when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new App();
});

// Export for potential module usage
export default App;
