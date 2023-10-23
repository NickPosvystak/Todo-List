export const Button = ({
  selected = false,
  type = 'button',
  children,
  ...otherProps
}) => {
  return <button>{children}</button>;
};
