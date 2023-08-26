import {initialState, mainReducer, RootSetterType,} from './mainReducer';

test('mainReducer should handle SET-MAX-VALUE action', () => {
    const action: RootSetterType = { type: 'SET-MAX-VALUE', payload: { value: 10 } };
    const nextState = mainReducer(initialState, action);
    expect(nextState.maximumValue).toEqual(10);
});

test('mainReducer should handle SET-MIN-VALUE action', () => {
    const action: RootSetterType = { type: 'SET-MIN-VALUE', payload: { value: 5 } };
    const nextState = mainReducer(initialState, action);
    expect(nextState.minimumValue).toEqual(5);
});

test('mainReducer should handle SET-IS-CHANGED action with isChanged payload', () => {
    const action: RootSetterType = { type: 'SET-IS-CHANGED', payload: { isChanged: true } };
    const nextState = mainReducer(initialState, action);
    expect(nextState.isChanged).toEqual(true);
});

test('mainReducer should handle SET-IS-CHANGED action without isChanged payload', () => {
    const action: RootSetterType = { type: 'SET-IS-CHANGED', payload: {isChanged: false }};
    const nextState = mainReducer(initialState, action);
    expect(nextState.isChanged).toEqual(false);
});

test('mainReducer should handle SET-ERROR action', () => {
    const action: RootSetterType = { type: 'SET-ERROR', payload: { value: 'Invalid value' } };
    const nextState = mainReducer(initialState, action);
    expect(nextState.error).toEqual('Invalid value');
});

test('mainReducer should handle CLEAN-ERROR action', () => {
    initialState.error = 'Invalid value'
    const action: RootSetterType = { type: 'CLEAN-ERROR' };
    const nextState = mainReducer(initialState, action);
    expect(nextState.error).toEqual('');
});

test('mainReducer should handle SET-COUNTER action', () => {
    const action: RootSetterType = { type: 'SET-COUNTER', payload: { value: 6 } };
    const nextState = mainReducer(initialState, action);
    expect(nextState.counter).toEqual(6);
});

test('mainReducer should handle SET-START-VALUE action', () => {
    const action: RootSetterType = { type: 'SET-START-VALUE', payload: { value: 3 } };
    const nextState = mainReducer(initialState, action);
    expect(nextState.startValue).toEqual(3);
});
