import { Link } from 'react-router-dom';
import Computer from '../../img/desktop.png';

const NavbarLanding = () => {
    return (
        <nav className='py-3 flex items-center'>
            <div class="w-4/12">
                {/* <span className="text-3xl font-bold dark:text-gray-300"><span className="text-blue-900 dark:text-blue-500">D.O.C</span></span> */}
                <img src={Computer} alt="D.O.C" className='h-12 pl-10' />
                <span className="block text-xs font-semibold">Department Of Computer</span>
            </div>
            <div class="w-8/12">
                <ul className='flex float-right'>
                    <li className='px-2 font-semibold text-sm'><Link to="/">Home</Link></li>
                    <li className='px-2 font-semibold text-sm'><Link to="/">About Us</Link></li>
                    <li className='px-2 font-semibold text-sm'><Link to="/">Gallery</Link></li>
                    <li className='px-2 font-semibold text-sm'><Link to="/">Notices</Link></li>
                    <li className='px-2 font-semibold text-sm'><Link to="/">Teachers</Link></li>
                    <li className='px-2 font-semibold text-sm'><Link to="/">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavbarLanding;
