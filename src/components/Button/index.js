import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles)

function Button({
    className,
    children,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    rounded = false,
    disabled = false,
    leftIcon,
    rightIcon,
    to,
    onClick,
    href,
    ...passProps }) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    }

    if (to) {
        props.to = to;
        Comp = Link
    } else if (href) {
        props.href = href;
        Comp = 'a'
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        large,
        text,
        rounded,
        disabled,
    })

    return <Comp className={classes} {...props}>
        {leftIcon && <span className={cx('icon')}>{leftIcon} </span>}
        <span className={cx('title')}>{children}</span>
        {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}

    </Comp>
}

export default Button;