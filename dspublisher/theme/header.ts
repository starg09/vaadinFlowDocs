// Use this custom element to modify the dspublisher header content
// Use an empty file to not show a header
export default class Example extends HTMLElement {
  __initialized = false;

  private haasImportScript() {
    const script = document.createElement('script');
    script.onload = () => (window as any).haas.loader.initMenu();
    script.src =
      window.location.hostname == 'preview.vaadin.com'
        ? 'https://preview.vaadin.com/vaadincom/haas-service/haas-loader.js'
        : 'https://vaadin.com/vaadincom/haas-service/haas-loader.js';
    return script;
  }

  connectedCallback() {
    if (!this.__initialized) {
      this.__initialized = true;

      this.innerHTML = `
        <div class="vcom-header" id="haas-container"></div>
        <div class="feedback-banner">
          <div class="feedback-banner-content">
            <p>
              <span class="feedback-banner-beta"> Beta<span class="visually-hidden">: </span> </span>
              Help us improve our new documentation site by giving early feedback
            </p>
            <a
              href=${`https://docs.google.com/forms/d/e/1FAIpQLScn4gtQzGxMDusU6n6UTR_pjghTkyFsNQij_Bb2NqJgiyNMlw/viewform?usp=pp_url&entry.1307305669=${location.href}`}
              target="_blank"
              rel="noreferrer"
            >
              Give feedback
            </a>
            <a href="/docs/">Back to old docs</a>
          </div>
        </div>
      `;

      const haasImportScriptElement = this.haasImportScript();
      document.head.appendChild(haasImportScriptElement);
    }
  }
}