import React, {useState} from "react";

const Nav = () => {

    const [ isVisible, setVisibility ] = useState(false);

    // const toggleVisibility = () => { isVisible ? setVisibility(false) : setVisibility(true) }

    const toggleVisibility = () => {
        setVisibility(!isVisible)
    }


    return(
        <>
        <button onClick={toggleVisibility}>Menu</button>
            <nav className={isVisible ? 'hide' : 'show'}>
                <ul>
                    <li>Create an account to unlock more features and help us grow</li>
                    <li>02</li>
                    <li>03</li>
                </ul>
            </nav>
        </>
    )

}

export default Nav;