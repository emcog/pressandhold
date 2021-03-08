import React, {useState, useEffect} from 'react';

const TextArea = ({testProp, countRef}) => {

    const [onboardingText, setOnboardingText] = useState(
        [
            {
                id: 1,
                prompt: "Keeping pressing a little longer"

            },
            {
                id: 2,
                prompt: "Try to fill the screen"

            },

        ]
    )

    //piggy bank
    //use effect put it in function where I want to call
    useEffect(() => {testFunction()}, [countRef.current])


    const displayPropCountRef = () => {
        console.log('text area count ref', {countRef}.current)
    }

    const testFunction = () => {
        // if(countRef.current >= 20) {
            console.log('BANANA');
            console.log(countRef, 'count ref');
            console.log(countRef.current, 'count current');
        // }
    }


    return(
        <>
            <div>
                {/*{testFunction()}*/}
                <span>{testProp}</span>
                <button onClick={displayPropCountRef}>Display prop</button>

                <span>{onboardingText[1].prompt}</span>
                <p>This is text area</p>
            </div>
        </>
    )
}

export default TextArea;