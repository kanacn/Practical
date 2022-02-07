import {saveData} from './types';

const initialState = {
  data: [],
} as any;

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case saveData:
      let temp = state.data;
      let name = action.payload.obj.name;
      let email = action.payload.obj.email;
      let surname = action.payload.obj.surname;
      let cellNo = action.payload.obj.cellNo;
      let obj = {
          name:name,
          email:email,
          surname:surname,
          cellNo:cellNo
      }
      temp.push(obj)
      return {
        ...state,
        data: temp,
      };

    default:
      return state;
  }
};
export default userReducer;
