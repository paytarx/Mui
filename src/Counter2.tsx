import { RootState } from "./redux/store"
import { useDispatch , useSelector} from 'react-redux'
import { amount } from "./redux/newCounterSlice"
import {up,down} from './redux/newCounterSlice'


const Counter2 = () => {

        const number = useSelector((numberState: RootState) => numberState.counter.value)
        const dispatch = useDispatch()
        console.log(number)

        const handleClick = (num:number) => {
            dispatch(amount(num))
        }

    return (
        <div className="mt-4">
            <p className="border-2 rounded-lg border-black p-2 m-4 inline-flex"> {number} </p>
            <div className="flex gap-2">
                <button className="bg-green-400 p-2 rounded-xl" onClick={() => up()}>
                    increment 
                </button>
                <button className="bg-green-400 p-2 rounded-xl" onClick={() => down()}>
                    decrement
                </button>
                <button className="bg-green-400 p-2 rounded-xl" onClick={() => handleClick(-100)}>
                    increment by -100
                </button>
                <button className="bg-green-400 p-2 rounded-xl" onClick={() => handleClick(100)}>
                    increment by 100
                </button>
            </div>
        </div>
    )
}

export default Counter2