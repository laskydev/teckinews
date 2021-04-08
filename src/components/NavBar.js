import React from "react";
import NavBarItem from "./NavBarItem";
import businessImage from "../images/business.png";
import technologyImage from "../images/technology.png";
import scienceImage from "../images/science.png";

const NavBar = ({setActualState, actualState} ) => {

        const categories = [
                { id: 'technology', name: "Tecnología", icon: technologyImage },
                { id: 'business', name: "Negocios", icon: businessImage },
                { id: 'science', name: "Ciencia", icon: scienceImage },
        ];

        return (
                <>
                        <nav className="w-full flex justify-around bg-transparent gap-2 p-2">
                                {categories.map((category) => (
                                        <NavBarItem
                                                key={category.id}
                                                name={category.name}
                                                icon={category.icon}
                                                id={category.id}
                                                setActualState={setActualState}
                                                actualState={actualState}
                                        />
                                ))}
                        </nav>
                </>
        );
};

export default NavBar;
