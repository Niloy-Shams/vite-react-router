
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className='flex justify-between items-center px-6 py-2 flex-col sm:flex-row bg-slate-200'>
            <span className='text-3xl text-blue-400 flex justify-center mb-2 sm:mb-0'>React <span className='text-orange-400'>Router</span></span>
            <nav className='flex justify-between gap-10 font-bold items-center text-center'>
                <NavLink to="/vite-react-router/" end className={({isActive})=>`duration-200 hover:text-blue-400 ${isActive ? "text-orange-400" : "text-black"}`}>
                    Home
                </NavLink>
                
                <NavLink to="/vite-react-router/prayer" className={({isActive})=>`duration-200 hover:text-blue-400 ${isActive ? "text-orange-400" : "text-black"}`}>
                    Prayer Time
                </NavLink>

                <NavLink to="/vite-react-router/calender" className={({isActive})=>`duration-200 hover:text-blue-400 ${isActive ? "text-orange-400" : "text-black"}`}>
                    Calander
                </NavLink>
            </nav>
        </div>
    );
}

export default Header;
