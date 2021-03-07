import React, {useRef} from "react";


const PressHold =() => {
    // const [count, setCount ] = useState(0);

    const countRef = useRef(0);
    const idIncrementCountRef = () => requestAnimationFrame(incrementCountRef);

    const handlePressHold = () => {
        incrementCountRef()
    //  TODO  cancel decrementCountRef
    }


    const incrementCountRef = () => {
        idIncrementCountRef();
        countRef.current++;
        console.log(`mouse down ${countRef.current}`);
    }



    const handleRelease = () => {
        countRef.current--;
        console.log(`mouse up`)

        cancelAnimationFrame(idIncrementCountRef());
    }


    //open the phab module


    return(
        <>
            <button onMouseDown={handlePressHold}
                    onTouchStart={handlePressHold}
                    onMouseUp={handleRelease}
                    onTouchEnd={handleRelease}
            />

        </>
    );
}

export default PressHold;