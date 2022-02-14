import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store';

const Counter = () => {
  const dispach =useDispatch()
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter)
  
  const incrementHandler = () =>{
     dispach(counterActions.increment())
  }

  const decrementHandler =() =>{
    dispach(counterActions.decrement())
  }

  const increaseHandler = () =>{
    dispach(counterActions.increase(10))
  }


  const toggleCounterHandler = () => {
    dispach(counterActions.toggleCounter)
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
