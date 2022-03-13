## Fitting into a design token systems

The design world has been moving towards a 'design system' mentality. Rather than picking one-off color values, we should have a standardized palette, and all colors should come from that collection.

```
const ELEVATIONS = {
  small: `
    0.5px 1px 1px hsl(var(--shadow-color) / 0.7)
  `,
  medium: `
    1px 2px 2px hsl(var(--shadow-color) / 0.333),
    2px 4px 4px hsl(var(--shadow-color) / 0.333),
    3px 6px 6px hsl(var(--shadow-color) / 0.333)
  `,
  large: `
    1px 2px 2px hsl(var(--shadow-color) / 0.2),
    2px 4px 4px hsl(var(--shadow-color) / 0.2),
    4px 8px 8px hsl(var(--shadow-color) / 0.2),
    8px 16px 16px hsl(var(--shadow-color) / 0.2),
    16px 32px 32px hsl(var(--shadow-color) / 0.2)
  `,
};
```

The shadows we've seen need to be customized depending on their elevation and environment. This might seem counter-productive, in a world with design systems and finite design tokens.

We have a static ELEVATIONS object defines 3 shadow 'laying' variants. The color for our shadow(s) inherit from the parent wrapper via a --shadow CSS variable that we modify in the child styled component.

Every time we change the background color in Wrapper and BlueWrapper, we also change the CSS Variable --shadow-color. That way, any child that uses a shadow will automatically have this property inherited.
