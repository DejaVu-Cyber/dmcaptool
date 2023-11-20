import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { msg, localized } from "@lit/localize";

@customElement("btrix-not-found")
@localized()
export class NotFound extends LitElement {
  createRenderRoot() {
    return this;
  }
  render() {
    return html`
      <div class="text-xl text-gray-400 text-center">
        ${msg("Page not found")}
      </div>
    `;
  }
}
