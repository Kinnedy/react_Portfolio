import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation().pathname;
    return (
        <nav className='header-back navbar navbar-expand-xl'>
            <button className='navbar-toggler border border-light ' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>

            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                {/* <section className='top'> */}
                    <ul className='navbar-nav navbar'>
                        <li className='nav-item px-2'>
                            <Link to='/' className={location === '/' ? 'title2' : 'title1'}>Home</Link>
                        </li>
                        <li className='nav-item px-2'>
                            <Link to='/aboutMe' className={location === '/aboutMe' ? 'title2' : 'title1'}>About Me</Link>
                        </li>
                        <li className='nav-item px-2'>
                            <Link to='/portfolio' className={location === '/portfolio' ? 'title2' : 'title1'}>Portfolio</Link>
                        </li>
                        <li className='nav-item px-2'>
                            <Link to='/resume' className={location === '/resume' ? 'title2' : 'title1'}>Resume</Link>
                        </li>
                        <li className='nav-item px-2'>
                            <Link to='/contacts'><button className='btn btn-outline-light'>contacts</button></Link>
                        </li>
                    </ul>
                {/* </section > */}
            </div>
        </nav >
    )
};
export default Navbar;
