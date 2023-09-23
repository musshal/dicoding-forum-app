/**
 * Test scenario for registerReducer :
 * should return the initial state when given by unknown action
 * should return when given by RECEIVE_USERS action
 */

import { describe, it, expect } from 'vitest';
import usersReducer from '../reducer';

describe('Test Users reducer', () => {
  it('should return the initial state when given an unknown action', () => {
    // Arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };
    // Action
    const nextState = usersReducer(initialState, action);
    // Assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the users when given a RECEIVE_USERS action', () => {
    // Arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_USERS',
      payload: {
        register: [
          {
            id: 'candra',
            name: 'candra',
            email: 'candra@gmail.com',
            avatar: 'https://generated-image-url.jpg',
          },
          {
            id: 'wali',
            name: 'wali',
            email: 'wali@gmail.com',
            avatar: 'https://generated-image-url.jpg',
          },
          {
            id: 'sanjaya',
            name: 'sanjaya',
            email: 'sanjaya@gmail.com',
            avatar: 'https://generated-image-url.jpg',
          },
        ],
      },
    };
    // Action
    const nextState = usersReducer(initialState, action);
    // Assert
    expect(nextState).toEqual(action.payload.users);
  });
});
