export type ReducerPropsType = {
    minimumValue: number
    maximumValue: number
    counter: number
    error: string
    isChanged: boolean
    startValue: number
    setIsChanged: (isChanged: boolean) => void
    setMaxValue: (maximumValue: number) => void
    setMinValue: (minimumValue: number) => void
    setCounter: (counter: number) => void
}

export const initialState: ReducerPropsType = {
    minimumValue: 0,
    maximumValue: 4,
    counter: 0,
    error: '',
    isChanged: false,
    startValue: 0,
    setIsChanged: () => {
    },
    setMaxValue: () => {
    },
    setMinValue: () => {
    },
    setCounter: () => {
    },
};

export const mainReducer = (state: ReducerPropsType = initialState, action: RootSetterType): ReducerPropsType => {
    switch (action.type) {
        case 'SET-MAX-VALUE':
            return {...state, maximumValue: action.payload.value};
        case 'SET-MIN-VALUE':
            return {...state, minimumValue: action.payload.value};
        case 'SET-IS-CHANGED':
            if ('isChanged' in action.payload) {
                return {...state, isChanged: action.payload.isChanged};
            }
            return state;
        case 'SET-ERROR':
            return {
                ...state,
                error: String(action.payload.value),
            };
        case 'CLEAN-ERROR':
            return {
                ...state,
                error: '',
            };
        case 'SET-COUNTER':
            return {
                ...state,
                counter: action.payload.value
            }
        case 'SET-START-VALUE':
            return {...state, startValue: action.payload.value};
        default:
            return state;
    }
};

export type RootSetterType =
    setMaxValueACType
    | setMinValueACType
    | setIsChangedACType
    | setErrorACType
    | cleanErrorACType
    | setCounterACType
    | setStartValueACType

type setMaxValueACType = ReturnType<typeof setMaxValueAC>
type setMinValueACType = ReturnType<typeof setMinValueAC>
type setIsChangedACType = ReturnType<typeof setIsChangedAC>
type setErrorACType = ReturnType<typeof setErrorAC>
type cleanErrorACType = ReturnType<typeof cleanErrorAC>
type setCounterACType = ReturnType<typeof setCounterAC>
type setStartValueACType = ReturnType<typeof setStartValueAC>


export const setMaxValueAC = (value: number) => {
    return {
        type: 'SET-MAX-VALUE',
        payload: {value},
    } as const
}

export const setMinValueAC = (value: number) => {
    return {
        type: 'SET-MIN-VALUE',
        payload: {value},
    } as const
}

export const setIsChangedAC = (isChanged: boolean) => {
    return {
        type: 'SET-IS-CHANGED',
        payload: {isChanged},
    } as const
}

export const setErrorAC = (value: string) => {
    return {
        type: 'SET-ERROR',
        payload: {value}
    } as const
}

export const cleanErrorAC = () => {
    return {
        type: 'CLEAN-ERROR'
    } as const
}

export const setCounterAC = (value: number) => {
    return {
        type: 'SET-COUNTER',
        payload: {value}
    } as const
}

export const setStartValueAC = (value: number) => {
    return {
        type: 'SET-START-VALUE',
        payload: {value},
    } as const;
};