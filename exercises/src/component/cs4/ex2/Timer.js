import {useEffect, useRef, useState} from "react";


export function Timer() {
    const [timer, setTimer] = useState(3);
    let interval = useRef();

    useEffect(() => {
        interval.current = setInterval(() => {
            setTimer((prevCounter) => prevCounter - 1);
        }, 1000);
        return () => clearInterval(interval.current);
    }, []);

    const returnAlert = () => {
        if (timer === 0) {
            console.log(interval.current)
            clearInterval(interval.current)
            alert("a")
        }
    }
    returnAlert();

    // const [timer, setTimer] = useState(3);
    //
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         if (timer >= -1) {
    //             setTimer((prevCounter) => prevCounter - 1);
    //         } else {
    //
    //         }
    //     }, 1000);
    //     return () => clearInterval(interval);
    // }, [timer]);
    //
    // const returnAlert = () => {
    //     if (timer <= -1) {
    //         alert("a")
    //     }
    // }
    return (
        <>
            <h1>Count down from {timer}</h1>
            <button>Stop</button>
        </>
    )
}