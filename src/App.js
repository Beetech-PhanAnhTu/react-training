import { useContext, useReducer, useRef } from "react";
import Content from "./Content";

// const jobList = {
//   job: '',
//   jobs: []
// };

// const SET_ACTION = 'set';
// const ADD_ACTION = 'add';
// const REMOVE_ACTION = 'remove';

// const addJob = payload => {
//   return {
//     type: ADD_ACTION,
//     payload
//   }
// }
// const setJob = payload => {
//   return {
//     type: SET_ACTION,
//     payload
//   }
// }
// const removeJob = (payload) => {
//   return {
//     type: REMOVE_ACTION,
//     payload
//   }
// }

// const reducer = (state, action) => {
//   let newArr = {};
//   console.log(action.type);
//   switch (action.type){
//       case SET_ACTION:
//           newArr = {
//             ...state,
//             job: action.payload
//           }
//       break;
//       case ADD_ACTION:
//         newArr = {
//           ...state,
//           job: '',
//           jobs: [...state.jobs, action.payload]
//         }
//       break;
//       case REMOVE_ACTION:
//         const ArrToRemove = [...state.jobs];
//         ArrToRemove.splice(action.payload, 1);
//         newArr = {
//           ...state,
//           jobs: ArrToRemove
//         }
//       break;
//       default:
//         break;
//     }
//     console.log(newArr);
//     return newArr;
// }


function App() {
  // const [state, dispatch] = useReducer(reducer, jobList);
  // const { job, jobs } = state;

  // const handleAdd = () => {
  //   dispatch(addJob(job))
  // }
  return (
    <div className="App">
      <Content></Content>
    </div>
  );
}

export default App;
