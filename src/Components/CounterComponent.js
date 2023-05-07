import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "../store/actions/counter.actions";


const CounterComponent = () => {
    const dispatch = useDispatch();
    const counter = useSelector(store => store.counter)
    return (
        <div>
            <h1>Counter using Redux.</h1>
            <h4>Counter: {counter}</h4>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    )
}

export default CounterComponent;