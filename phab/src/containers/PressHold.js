import React, {useRef} from "react";


const PressHold =() => {
    // const [count, setCount ] = useState(0);

    let countRef = useRef(0);
    let idIncrementCountRef;
    let idDecrementCountRef;


    const handlePress = () => {
        incrementCountRef()
        cancelAnimationFrame(idDecrementCountRef)
    }

    const incrementCountRef = () => {
        countRef.current++;
        console.log(`press ${countRef.current}`);
        idIncrementCountRef = requestAnimationFrame(incrementCountRef)
    }



    const handleRelease = () => {
        cancelAnimationFrame(idIncrementCountRef);
        decrementCountRef();
    }

    const decrementCountRef = () => {
        countRef.current--;
        console.log(`release ${countRef.current}`);
        idDecrementCountRef = requestAnimationFrame(decrementCountRef);
    }


    return(
        <>

            <button onMouseDown={handlePress}
                    onTouchStart={handlePress}
                    onMouseUp={handleRelease}
                    onTouchEnd={handleRelease}
            />

        </>
    );
}

export default PressHold;