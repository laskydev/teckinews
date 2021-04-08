import React from "react";

const NavBarItem = ({
        name,
        icon,
        id,
        setActualState,
        actualState,
}) => {

    //On click function
        const handleCategory = (e) => {
                const categoryClicked = e.target.id;
                setActualState(categoryClicked);
        };

        //Conditional rendering of navBar Items
        const ItemSelected = (
                <div
                        className="flex gap-2 p-2 bg-red-200 rounded-lg cursor-pointer"
                        id={id}
                        onClick={handleCategory}
                >
                        {name} <img className="w-5" src={icon} />
                </div>
        );

        const ItemUnselected = (
                <div
                        className="flex gap-2 p-2 bg-purple-100 rounded-lg cursor-pointer"
                        id={id}
                        onClick={handleCategory}
                >
                        {name} <img className="w-5" src={icon} />
                </div>
        );
        return (
                <>
                {(actualState === id) ? ItemSelected: ItemUnselected}
                </>
        );
};

export default NavBarItem;
