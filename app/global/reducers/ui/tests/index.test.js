import expect from 'expect';
import uiReducer from '../index';
import { fromJS } from 'immutable';

describe('uiReducer', () => {
  it('returns the initial state', () => {
    expect(uiReducer(undefined, {})).toEqual(fromJS({
      product: {
        quantitySelected: 1,
      },
    }));
  });
});
