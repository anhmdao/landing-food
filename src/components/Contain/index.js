import cn from 'classnames/bind';
import styles from './index.module.scss';
const cx = cn.bind(styles);

const Contain = () => {
    return (
        <div className={cx('Contain')}>
            <div className={cx('text')}>
                <div className={cx('text-p1')}>
                    Burger
                </div>
                <div className={cx('text-logo')}>
                    <img alt='img1' src='/BurgerSlash.png' />
                </div>
                <div className={cx('text-p2')}>
                    <p>
                        Our NEW all-natural wings are hormone and steroid free, sourced from local USA farms. Every order is freshly made, crisped to perfection, hand tossed, and served with a side of ranch. Available in Garlic Rosemary, Scorchin’ Hot, or Savory BBQ.
                    </p>
                </div>
                <div className={cx('box-text')}>
                    <div className={cx('text-p3')}>
                        <p> $15.25 </p>
                    </div>
                    <div className={cx('text-p4')}>
                        <p>$20.25</p>
                        <img alt='vector' src='/Vector3.png' />
                    </div>
                </div>
                <div className={cx('text-button')}>
                    <a href="#" >Order Now</a>
                </div>
            </div>
            <div className={cx('img')}>
                <img alt='img' src='/img.png' />
            </div>

        </div>
    )
}

export default Contain;
