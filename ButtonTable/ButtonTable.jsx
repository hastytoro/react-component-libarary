import React from 'react';
import styled from 'styled-components';

const App = () => <ButtonTable></ButtonTable>;

const ButtonTable = () => {
  return (
    <Table cellSpacing={0} cellPadding={0}>
      <tr>
        <th></th>
        <th>Fill</th>
        <th>Outline</th>
        <th>Ghost</th>
      </tr>
      <tr>
        <td>Small</td>
        <td>
          <Button size="small" variant="fill">
            Button
          </Button>
        </td>
        <td>
          <Button size="small" variant="outline">
            Button
          </Button>
        </td>
        <td>
          <Button size="small" variant="ghost">
            Button
          </Button>
        </td>
      </tr>
      <tr>
        <td>Medium</td>
        <td>
          <Button size="medium" variant="fill">
            Button
          </Button>
        </td>
        <td>
          <Button size="medium" variant="outline">
            Button
          </Button>
        </td>
        <td>
          <Button size="medium" variant="ghost">
            Button
          </Button>
        </td>
      </tr>
      <tr>
        <td>Large</td>
        <td>
          <Button size="large" variant="fill">
            Button
          </Button>
        </td>
        <td>
          <Button size="large" variant="outline">
            Button
          </Button>
        </td>
        <td>
          <Button size="large" variant="ghost">
            Button
          </Button>
        </td>
      </tr>
    </Table>
  );
};

/**
 * NOTE: This `Table` component uses nesting, which
 * is something we've frowned on in this course!
 *
 * Before you label me a hypocrite, please note that
 * this component is used exclusively for demonstration
 * purposes; it exists to showcase the `Button` component,
 * and isn't something we'll use in our app. So we can
 * be a bit more lenient.
 *
 * Furthermore, we aren't "reaching across" any component
 * boundaries; no `children` prop is accepted. This is a
 * slippery slope, but it can be fine to do things this way
 * if you're disciplined!
 */
const Table = styled.table`
  font-family: sans-serif;

  th,
  td {
    text-align: center;
    padding: 16px;
  }
  th {
    border-bottom: 1px solid hsl(0deg 0% 80%);
  }
  td:first-of-type,
  th:first-of-type {
    border-right: 1px solid hsl(0deg 0% 80%);
  }
  td:first-of-type {
    text-align: right;
  }
`;

const SIZES = {
  small: {
    '--borderRadius': 2 + 'px',
    '--fontSize': 16 / 16 + 'rem',
    '--padding': '4px 12px',
  },
  medium: {
    '--borderRadius': 2 + 'px',
    '--fontSize': 18 / 16 + 'rem',
    '--padding': '12px 20px',
  },
  large: {
    '--borderRadius': 4 + 'px',
    '--fontSize': 21 / 16 + 'rem',
    '--padding': '16px 32px',
  },
};

const Button = ({ variant, size, children }) => {
  const styles = SIZES[size];

  let Component;
  if (variant === 'fill') {
    Component = FillButton;
  } else if (variant === 'outline') {
    Component = OutlineButton;
  } else if (variant === 'ghost') {
    Component = GhostButton;
  } else {
    throw new Error(`Unrecognized Button variant: ${variant}`);
  }

  return <Component style={styles}>{children}</Component>;
};

const COLORS = {
  primary: 'hsl(240deg 100% 60%)',
  primaryLight: 'hsl(235deg 100% 62%)',
  white: 'hsl(0deg 0% 100%)',
  offwhite: 'hsl(235deg 85% 97%)',
  gray: 'hsl(240deg 10% 50%)',
  transparentGray15: 'hsl(240deg 10% 50% / 0.15)',
  transparentGray75: 'hsl(240deg 10% 50% / 0.75)',
  black: 'hsl(0deg 0% 0%)',
};

const ButtonBase = styled.button`
  font-size: var(--fontSize);
  font-family: 'Roboto', sans-serif;

  padding: var(--padding);
  border-radius: var(--borderRadius);
  border: 2px solid transparent;

  &:focus {
    outline-color: ${COLORS.primary};
    outline-offset: 4px;
  }
`;

const FillButton = styled(ButtonBase)`
  background-color: ${COLORS.primary};
  color: ${COLORS.white};

  &:hover {
    background-color: ${COLORS.primaryLight};
  }
`;
const OutlineButton = styled(ButtonBase)`
  background-color: ${COLORS.white};
  color: ${COLORS.primary};
  border: 2px solid currentColor;

  &:hover {
    background-color: ${COLORS.offwhite};
  }
`;
const GhostButton = styled(ButtonBase)`
  color: ${COLORS.gray};
  background-color: transparent;

  &:focus {
    outline-color: ${COLORS.gray};
  }

  &:hover {
    background: ${COLORS.transparentGray15};
    color: ${COLORS.black};
  }
`;

export default ButtonTable;
