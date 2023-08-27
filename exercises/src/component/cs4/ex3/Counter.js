import {CustomHook} from "./CustomHook";

export function Counter() {
    const {count, increase1} = CustomHook(0);

    return (
        <>
            <h2>Count: {count}</h2>
            <button onClick={increase1}>Add 1</button>
        </>
    )
}