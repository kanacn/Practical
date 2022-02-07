import {saveData} from './types';

export function SaveData(
  name: String,
  surname: String,
  email: String,
  cellNo: String,
) {
  return (dispatch: any) => {
    let obj = {name: name, surname: surname, email: email, cellNo: cellNo};
    dispatch({type: saveData, payload: {obj}});
  };
}
