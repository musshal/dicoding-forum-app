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
            id: 'user-1',
            name: 'shal',
            email: 'shal@example.com',
            avatar: 'http://www.example.com/image.jpg',
          },
          {
            id: 'user-2',
            name: 'mus',
            email: 'mus@example.com',
            avatar: 'http://www.example.com/image.jpg',
          },
          {
            id: 'musshal',
            name: 'musshal',
            email: 'musshal@example.com',
            avatar: 'http://www.example.com/image.jpg',
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
