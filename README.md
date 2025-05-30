# liquid-fire-reveal

[![Ember CI](https://github.com/kpfefferle/liquid-fire-reveal/workflows/Ember%20CI/badge.svg)](https://github.com/kpfefferle/liquid-fire-reveal/actions)

[![Ember Observer Score](https://emberobserver.com/badges/liquid-fire-reveal.svg)](https://emberobserver.com/addons/liquid-fire-reveal)

> Reveal transitions for [liquid-fire](https://ember-animation.github.io/liquid-fire/).

This addon defines four new transitions for liquid-fire: `revealUp`, `revealDown`, `revealLeft`, and `revealRight`.

## Installation

In your ember-cli project, run:

```bash
ember install liquid-fire # if not already installed
ember install liquid-fire-reveal
```

## Usage

[Define a liquid-fire transition](https://ef4.github.io/liquid-fire/#/transition-map) using any of the four named reveal transitions:

```javascript
// app/transitions.js
this.transition(
  this.fromRoute("login"),
  this.toRoute("index"),
  this.use("revealDown"),
);
```

The old content will slide away in the direction specified, revealing the new content in its place. See [this example page](http://kevin.pfefferle.co/liquid-fire-reveal/) to see each transition in action.

**Note:** You'll probably want to make sure that the content being transitioned away from has a background that will mask the new content during the transition.

## Developing

- `git clone https://github.com/kpfefferle/liquid-fire-reveal.git` this repository
- `cd liquid-fire-reveal`
- `pnpm install`
