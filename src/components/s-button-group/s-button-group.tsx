import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 's-button-group',
  styleUrl: 's-button-group.css',
  shadow: true,
})
export class SButtonGroup {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
