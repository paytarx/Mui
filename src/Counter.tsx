import type {RootState} from './redux/store'
import { useDispatch , useSelector} from 'react-redux'
import { increment , decrement} from './redux/counterSlice'
import { incrementByAmount } from './redux/counterSlice'


const Counter = () => {

    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

    const handleClickAmount = (a:number) => {
        dispatch(incrementByAmount(a))
    }

    return (
    <div>
          <div className='border-2 inline-flex p-2 rounded-xl border-black mx-2 my-2'>
            {count}
        </div>
        <div className="flex gap-x-1">
        <button
            className='p-2 rounded-xl bg-blue-500 my-2'
            aria-label='Increment value'
            onClick={() => dispatch(increment())}
            >
                increment
            </button>
            <button
            className='p-2 rounded-xl bg-red-500 my-4'
            aria-label='Decrement value'
            onClick={() => dispatch(decrement())}
            >
                decrement
            </button>
            <button
            className='p-2 rounded-xl bg-green-500 my-2'
            aria-label='Decrement value'
            onClick={() => handleClickAmount(5)}
            >
                increment by 5
            </button>
            <button
            className='p-2 rounded-xl bg-yellow-500 my-2'
            onClick={() => handleClickAmount(200)}
            >
                increment 200
            </button>
            <button
            className='p-2 rounded-xl bg-cyan-500 my-2'
            onClick={() => handleClickAmount(-100)}
            >
                decrement 100
            </button>
        </div>
    </div>
  )
}

export default Counter