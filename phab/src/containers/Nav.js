import React, {useState} from "react";
// import { Link, useHistory } from "react-router-dom";

const Nav = () => {

    // const history = useState();

    // const goBack = () => { history.goBack() }

    const [ isVisible, setVisibility ] = useState(false);

    const toggleVisibility = () => { setVisibility(!isVisible) }


    return(
        <>
        <button onClick={toggleVisibility}>Menu</button>
            <nav className={isVisible ? 'hidden' : 'block'}>
                <ul>
                    <li>
                        Sign up
                        {/*<Link to="/">Home</Link>*/}
                    </li>
                </ul>
            </nav>
        </>
    )

}

export default Nav;