import React, {useRef} from "react";
import TextArea from "./TextArea";


const PressHold =() => {
    // const [count, setCount ] = useState(0);

    const countRef = useRef(0);
    let idIncrementCountRef;
    let idDecrementCountRef;
    const testProp = 'test prop';


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
        console.log(`release ${countRef.current}`);
        idDecrementCountRef = requestAnimationFrame(loopingDecrementCountRef);
        if( countRef.current <= 0) {cancelAnimationFrame(idDecrementCountRef);}
        updateCSSVarSize();
    }

    const updateCSSVarSize = () => {
        let size = countRef.current.toString();
        const px = 'px';
        document.documentElement.style.setProperty(`--size`, size + px);
    }


    return(
        <>
            {/*<TextArea testProp={testProp}/>*/}
            <TextArea countRef={countRef} testProp={testProp}/>
            <button onMouseDown={handlePress}
                    onTouchStart={handlePress}
                    onMouseUp={handleRelease}
                    onTouchEnd={handleRelease}
                    >Press and hold</button>

        </>
    );
}

export default PressHold;