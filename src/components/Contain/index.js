import cn from 'classnames/bind';
import styles from './index.module.scss';
const cx = cn.bind(styles);

const Contain = () => {
    return (
        <div className={cx('Contain')}>
            <div className={cx('text')}>
                <p>Burger</p>
            </div>
            <div className={cx('img')}>
                <img alt='img' src='/BurgerSlash.png' />
            </div>
            <div className={cx('text1')}>
                <p>Our NEW all-natural wings are hormone and steroid free, sourced from local USA farms. Every order is freshly made, crisped to perfection, hand tossed, and served with a side of ranch. Available in Garlic Rosemary, Scorchin’ Hot, or Savory BBQ</p>
            </div>
            <div className={cx('img1')}>
                <img alt='img1' src='/Artboard51.png' />
            </div>
            <div className={cx('img2')}>
                <img alt='img2' src='Artboard81.png' />
            </div>
            <div className={cx('img3')}>
                <img alt='img3' src='/Burger-Img.png' />
            </div>
            <div className={cx('img4')}>
                <img alt='img4' src='/Artboard71.png' />
            </div>
            <div className={cx('img5')}>
                <img alt='img5' src='/Artboard101.png' />
            </div>
            <div className={cx('text2')}>
                <p>$15.25</p>
            </div>
            <div className={cx('vector')}>
                <img alt='vector' src='/Vector3.png' />
            </div>
            <div className={cx('text3')}>
                <p>$20.25</p>
            </div>
            <div className={cx('button')}>
            <a href="#" className= {cx('btn')}>Order Now</a>
            </div>
        </div>
    )
}

export default Contain;