function renderReactComponent(
  settings = { component, props, targetSelector, useShadowDom }
) {
  const { component, props, targetSelector, useShadowDom } = settings;

  const targetEl = document.querySelector(targetSelector);
  if (!targetEl) {
    throw new Error(`Could not find element with selector: ${targetSelector}`);
  }

  let renderTaget = targetEl;

  if (useShadowDom) {
    renderTaget = setupShadowDOM(targetEl);
  }

  // Render the component into the target element
  const componentEl = React.createElement(component, props, null);
  ReactDOM.createRoot(renderTaget).render(componentEl);

  // Helper function to setup shadow dom
  // Function to setup or reuse a shadow DOM on the target element
  // This lets styling of the Plasmic component be isolated from the main HTML to avoid CSS conflicts
  function setupShadowDOM(targetElement) {
    let shadowRoot = targetElement.shadowRoot;
    if (!shadowRoot) {
      shadowRoot = targetElement.attachShadow({ mode: "open" });
      // Optional: Insert styles or links to stylesheets here
    }
    // Use a specific container within the shadow DOM for React rendering
    let shadowContainer = shadowRoot.querySelector("#shadow-container");
    if (!shadowContainer) {
      shadowContainer = document.createElement("div");
      shadowContainer.id = "shadow-container";
      shadowRoot.appendChild(shadowContainer);
    }
    return shadowContainer; // Return the shadow container as the new render target
  }
}
