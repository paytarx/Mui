import React from 'react'
import type {RootState} from './redux/store'
import { useDispatch , useSelector} from 'react-redux'
import { increment , decrement} from './redux/counterSlice'


const Counter = () => {

    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

    return (
    <div>
        <div>
            <button
            className='p-2 rounded-xl bg-blue-500 my-2'
            aria-label='Increment value'
            onClick={() => dispatch(increment())}
            >
                increment
            </button>
        </div>
        <div>
            <button
            className='p-2 rounded-xl bg-red-500 my-4'
            aria-label='Decrement value'
            onClick={() => dispatch(decrement())}
            >
                decrement
            </button>
        </div>
        <div className='border-2 inline-flex p-2 rounded-xl border-black mx-2 my-2'>
            {count}
        </div>
    </div>
  )
}

export default Counter