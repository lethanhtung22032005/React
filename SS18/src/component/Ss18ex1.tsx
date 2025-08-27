import React, { useReducer } from "react"

type State = {
    count: number
}

type Action = {
    type: "INCREMENT"
}

const initialState: State = { count: 0 }

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 }
        default:
            return state
    }
}

export default function Increase() {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>
                Increase
            </button>
        </div>
    )
}
