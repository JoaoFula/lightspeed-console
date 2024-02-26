import { Map as ImmutableMap } from 'immutable';

import { ActionType, OLSAction } from './redux-actions';

export type OLSState = ImmutableMap<string, unknown>;

export type State = {
  plugins: {
    ols: OLSState;
  };
};

const reducer = (state: OLSState, action: OLSAction): OLSState => {
  if (!state) {
    return ImmutableMap({
      context: null,
      history: [],
      isPrivacyAlertDismissed: false,
    });
  }

  switch (action.type) {
    case ActionType.DismissPrivacyAlert:
      return state.set('isPrivacyAlertDismissed', true);

    case ActionType.SetContext:
      return state.set('context', action.payload.context);

    case ActionType.SetHistory:
      return state.set('history', action.payload.history);

    default:
      break;
  }
  return state;
};

export default reducer;
