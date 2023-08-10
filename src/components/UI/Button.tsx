import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  type?: 'primary' | 'danger' | 'light';
  size?: 'big' | 'small';
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
}>;

function Button(props: Props) {
  const { type = 'primary', size = 'small', disabled, className, children, ...rest } = props;

  return (
    <button className={`button button--type-${type} button--size-${size}`} {...rest}>
      <span className="button__content">{children}</span>
    </button>
  );
}

export default Button;
