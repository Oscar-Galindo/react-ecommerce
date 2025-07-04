import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg';
import './navigation.styles.scss';

const Navigation = () => {
    return (
      <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/'>    
                <CrwnLogo className='logo' />
            </Link>
            <div className='nav-links-container'>
                <Link to='/shop'>
                    <span>SHOP</span>
                </Link>
            </div>
        </div>
        <Outlet />
      </Fragment>
    );
  };

export default Navigation;