import * as React from "react";
import {Link} from "react-router";

const Menubar = () => {
    const [menuOpen, setMenuOpen] = React.useState(false)
    const navItems = [
        {name: 'Profile', to: "/profile"},
        {name: 'Cart' ,to:"/cart"},
        {name: 'About', to:"/about"},
        {name: 'Contact', to:"/contact"},
    ];

    return (
        <>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
                    *{
                        font-family: "Geist", sans-serif;
                    }
                `}
            </style>
            <nav className="bg-black/80 backdrop-blur-2xl px-6 md:px-12 lg:px-24 xl:px-40 py-4 flex items-center justify-between relative border-b border-red-300">
                <a href="/home" className={'font-bold text-white/80 text-2xl'}> Kam Cook</a>

                <div className="hidden md:flex items-center bg-zinc-50 border border-zinc-200 rounded-full px-1 py-1 gap-2">
                    {navItems.map((item) => (
                        <Link key={item.name} to={item.to} className={`px-4 py-1.5 rounded-full text-sm transition-colors text-zinc-500 hover:text-zinc-400 `} >
                            {item.name}
                        </Link>
                    ))}
                </div>

                <button className="hidden md:flex items-center gap-2.5 bg-linear-to-r hover:scale-110 from-zinc-950 to-zinc-500 text-zinc-50 hover:text-zinc-200 text-sm font-medium pl-5 pr-2 py-2 rounded-full cursor-pointer border border-red-300/30 transition-all duration-200">
                   Sign Out
                    <span className="size-7 rounded-full bg-white flex items-center justify-center">
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.6 4.602h10m-4-4 4 4-4 4" stroke="#3f3f47" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                </button>

                <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-0 p-1">
                    <span className={`block w-6 h-0.5 bg-zinc-800 transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-zinc-800 transition-opacity ${menuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-zinc-800 transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>

                {menuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white border-t border-zinc-200 flex flex-col p-5 gap-1 md:hidden z-50">
                        {navItems.map((item) => (
                            <a key={item.name} href={item.to} className={`px-4 py-2.5 rounded-lg text-sm text-zinc-500 hover:bg-zinc-50 `} >
                                {item.name}
                            </a>
                        ))}
                        <button className="flex items-center justify-center gap-2.5 bg-linear-to-r from-zinc-950 to-zinc-500 text-zinc-50 text-sm font-medium px-5 py-2.5 rounded-full cursor-pointer border-0 mt-3 w-fit">
                            Get started
                            <span className="size-7 rounded-full bg-white flex items-center justify-center">
                                <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.6 4.602h10m-4-4 4 4-4 4" stroke="#3f3f47" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </span>
                        </button>
                    </div>
                )}
            </nav>
        </>
    )
}

export default Menubar;