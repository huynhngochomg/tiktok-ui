import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"


const cx = classNames.bind(styles)

function AccountItem() {
    return <div className={cx('wrapper')}>
        <img className={cx('avatar')} src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/ee61cf3628566803caad3fe47098a84c~c5_100x100.jpeg?x-expires=1688050800&x-signature=3w6JKC9G7JqIcW0wiGLjWmv7GDk%3D" alt="" />
        <div className={cx('info')}>
            <h4 className={cx('name')}>
                <span> Huỳnh Ngọc Hồng</span>
                <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
            </h4>
            <span className={cx('username')}>huynhngochong</span>
        </div>
    </div>
}

export default AccountItem;