import cn from 'classnames/bind';
import styles from './index.module.scss';
const cx = cn.bind(styles);

const Header = () => {
    return (
        <div className={cx('header')}>
            <div className={cx('logo')}>
                <img alt='logo' src='/logo.png' />
            </div>
            <div className={cx('menu')}>
                <ul>
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#'>Menu</a>
                    </li>
                    <li>
                        <a href='#'>About Us</a>
                    </li>
                    <li>
                        <a href='#'>Contact Us</a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Header;