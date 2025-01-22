import { NavLink } from "react-router";
import logo from '../Accets/Images/logo.png'
import PrimaryButton from "./PrimaryButton";


const Navbar = () => {
    const nav = [

       
        <NavLink key={'LOGO'} to={'/'} className={''} ><img src={logo} className=" w-8" alt="logo" /> </NavLink>,
        <NavLink key={'HOME'} to={'/'} className={'rounded-lg p-2 px-3 hover:bg-black'} >Home </NavLink>,
        <NavLink key={'FAQ'} to={'/'} className={'rounded-lg p-2 px-3 hover:bg-black'} >FAQ </NavLink>,
        <NavLink key={'contact'} to={'/'} className={'rounded-lg p-2 px-3 hover:bg-black'} >Contact </NavLink>,
        <NavLink key={'button'} className={''} > <PrimaryButton>Book a call</PrimaryButton></NavLink>

       
    ]


    return (
        <div className=" bb p-2  my-4 bg-white">
            <div className=" mx-auto max-w-lg  flex gap-4 ">
                <div className="p-1 border rounded-xl flex-1 bg-[#0b0a0ac2] flex gap-2 justify-between  items-center text-white font-semibold">
                    {nav}

                </div>
                <div className="p-2 border rounded-lg bg-[#0b0a0ac2] ">

                </div>
               

            </div>
        </div>
    );
};

export default Navbar;