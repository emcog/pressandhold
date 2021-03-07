import React, {useRef} from "react";


const PressHold =() => {
    // const [count, setCount ] = useState(0);

    const countRef = useRef(0);

    const handlePressHold = () => {
        countRef.current++;
        console.log(`clicked ${countRef.current}`);
    }



    return(
        <>
            <button onClick={handlePressHold}>Click me</button>

        </>
    );
}

export default PressHold;