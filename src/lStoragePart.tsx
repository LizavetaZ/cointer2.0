import {useState} from "react";
//
// let [maximumValue, setMaxValue] = useState(() => { //from app
//     let maxValueAsString = localStorage.getItem('maximumValue')
//     if (maxValueAsString) {
//         let newMaxValue = JSON.parse(maxValueAsString)
//         return newMaxValue
//     }
//     return 5
// });
//
// let [minimumValue, setMinValue] = useState(() => {
//     let minValueAsString = localStorage.getItem('minimumValue')
//     if (minValueAsString) {
//         let newMinValue = JSON.parse(minValueAsString)
//         return newMinValue
//     }
//     return 0
// });


// const setValue = () => {   //from setter
//     props.setIsChanged(false)
//     props.setCounter(props.minimumValue)
//     localStorage.setItem('minimumValue', JSON.stringify(props.minimumValue))
//     localStorage.setItem('maximumValue', JSON.stringify(props.maximumValue))
// }