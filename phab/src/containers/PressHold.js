import React, {useRef} from "react";


const PressHold =() => {
    // const [count, setCount ] = useState(0);

    const countRef = useRef(0);
    let idIncrementCountRef;
    let idDecrementCountRef;


    const handlePress = () => {
        loopingIncrementCountRef()
        cancelAnimationFrame(idDecrementCountRef)
    }

    const loopingIncrementCountRef = () => {
        countRef.current++;
        console.log(`press ${countRef.current}`);
        idIncrementCountRef = requestAnimationFrame(loopingIncrementCountRef)
        updateCSSVarSize();
    }

    const handleRelease = () => {
        cancelAnimationFrame(idIncrementCountRef);
        loopingDecrementCountRef();
    }

    const loopingDecrementCountRef = () => {
        countRef.current--;
        let counter = countRef.current;
        if( counter === 0) {cancelAnimationFrame(idDecrementCountRef);}

        console.log(counter)
        console.log(`release ${countRef.current}`);
        idDecrementCountRef = requestAnimationFrame(loopingDecrementCountRef);
        updateCSSVarSize();
    }

    const updateCSSVarSize = () => {
        let size = Number(countRef.current);
        document.documentElement.style.setProperty(`--size`, size);
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