import { useSelector } from "react-redux";


const AnotherComponent = () => {
    const counter = useSelector(store => store.counter);
    return (
        <div>
            <h1>Another Component</h1>
            <h4>Counter at Another Component: {counter}</h4>
        </div>
    )
}

export default AnotherComponent;