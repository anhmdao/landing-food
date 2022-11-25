import cn from 'classnames/bind';
import Header from '../../components/Header';
import Contain from '../../components/Contain'
import styles from './index.module.scss';
const cx = cn.bind(styles);

const HomePage = () => {
    return (
        <div className={cx('container')}>
            <Header />
            <Contain />
        </div>
    );
}
export default HomePage;