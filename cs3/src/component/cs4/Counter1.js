import {CustomHook} from "./CustomHook";

export function Counter1() {
    const {count, increase2} = CustomHook(0);

    return (
        <>
            <h2>Count: {count}</h2>
            <button onClick={increase2}>Add 2</button>
        </>
    )
}