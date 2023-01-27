import { useState, useEffect } from "react";

import NavbarLogo from "../../molecules/NavbarLogo";
import BurgerButton from "../../molecules/BurgerButton";
import NavbarMenu from "../../molecules/NavbarMenu";
import Button from "../../molecules/Button";
import DropdownLanguage from "../../molecules/DropdownLanguage";
import NavBackground from "../../molecules/NavBackground";

export default function Nav () {
  const [isActive, setIsActive] = useState(false);
  const toggleActive = () => {
    setIsActive(!isActive);
  }
  
  useEffect(() => {
    //
  }, [isActive]);
  
  return (
      <div className="flex items-start flex-col lg:flex-row p-4 gap-4 lg:gap-1 w-full fixed z-20 bg-white">
        <div className="flex w-full justify-between items-center bg-white">
          <NavbarLogo />
          <BurgerButton isActive={isActive} toggleActive={ toggleActive } className="lg:hidden" />
        </div>
        
        <div className={`${ isActive ? "h-fit" : "h-0"} h-0 lg:h-fit flex flex-col lg:flex-row overflow-hidden transition-all gap-2 w-full lg:wax lg:justify-end relative`}>
          <div className={`flex transition-all flex-col lg:flex-row lg:items-center gap-4 lg:gap-2 border-b lg:border-0 w-full lg:w-max pb-4 lg:pb-0`}>
            <NavbarMenu />
            <DropdownLanguage />
          </div>
          <Button className="w-full lg:w-max">contact us</Button>
        </div>
        <NavBackground isActive={isActive} toggleActive={toggleActive} />
      </div>
    )
}