// import React from "react";
import Header from "../header/Hader"
import Menu from "../menu/Menu"


import React from 'react';

const Layout = ({children, isSinglePage}) => {
    return (
        <>
        <Header/>
        {!isSinglePage ?  (<div className="main__content flex overflow-hidden h-screen">
					<Menu />
                    {children}
                    </div>) : (children)}
            
        </>
    );
}

export default Layout;

