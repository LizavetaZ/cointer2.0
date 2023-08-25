import React, {useState} from "react";
import Button from "../Button/Button";
import s from './Counter.module.css'
import {setCounterAC} from "../../reducer/MainReducer";
import {RootReducerType} from "../../store/store";
import {useDispatch, useSelector} from "react-redux";

// export type CounterPropsType = {
//     maxValue: number
//     minValue: number
//     isChanged: boolean
//     increaseCount: () => void
//     counter: number
//     resetCount: () => void
//     error: string
// }


export function Counter() {

    const dispatch = useDispatch()
    const stateForCounter = useSelector((state: RootReducerType) => state.setter);


    const increaseCount = () => {
        let incremet = stateForCounter.counter + 1
        if (incremet <= stateForCounter.maximumValue) {
            dispatch(setCounterAC(incremet))
        }
    }

    const resetCount = () => {
        dispatch(setCounterAC(stateForCounter.minimumValue))
    }

    return (
        <>
            {stateForCounter.error ? <div className={s.redcounterfield}>{stateForCounter.error}</div> :
                <div className={stateForCounter.error ? s.redcounterfield : s.counterfield}>
                    {stateForCounter.isChanged ? 'enter values and press \'set\'' : (
                        <span style={stateForCounter.counter === stateForCounter.maximumValue ? {color: 'red'} : undefined}>
                                {stateForCounter.counter}
                        </span>)}
                </div>}
            <div className={s.buttons}>
                <Button name={'inc'} callback={increaseCount}
                        disabled={stateForCounter.counter === stateForCounter.maximumValue || !!stateForCounter.isChanged}/>
                <Button name={'reset'} callback={resetCount} disabled={stateForCounter.counter <= stateForCounter.minimumValue || !!stateForCounter.isChanged}/>
            </div>
        </>
    )
}

