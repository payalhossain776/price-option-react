import { useState } from "react";
import Link from "../Link/Link";
import { FiAlignLeft } from "react-icons/fi";
import { FiX } from "react-icons/fi";

const Navber = () => {

    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/faq", name: "notFound" },
    ];


    return (
        <nav className="bg-[#C96868] p-6">
            <div className=" md:hidden text-3xl " onClick={() => setOpen(!open)}>
                {
                    open === true ?
                        <FiX className=""></FiX> :
                        <FiAlignLeft className=""></FiAlignLeft>
                }

            </div>
            <ul className={`md:flex absolute rounded-lg md:static justify-center duration-1000 
            ${open? 'top-16': '-top-80'}

            bg-[#C96868] px-6 `}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
            
        </nav>
    );
};

export default Navber;