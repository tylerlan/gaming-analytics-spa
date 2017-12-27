import * as CONST from '../constants/constants';

export const onChangeSection = section => (dispatch, getState, { Api }) => {
  dispatch({ type: CONST.SET_SECTION, section });
};
