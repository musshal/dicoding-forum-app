/**
 * Test scenario fo leaderboardsReducer :
 * should return the initial state when given by unknown action
 * should return the threads when given by RECEIVE_LEADERBOARDS action
 */

import { describe, it, expect } from 'vitest';
import leaderboardsReducer from '../reducer';

const globalLeaderboards = [
  {
    user: {
      id: 'users-1',
      name: 'candra',
      email: 'candra@gmail.com',
      avatar: 'https://generated-image-url.jpg',
    },
    score: 10,
  },
  {
    user: {
      id: 'users-2',
      name: 'Iklima',
      email: 'iklima@gmail.com',
      avatar: 'https://generated-image-url.jpg',
    },
    score: 10,
  },
];

describe('Test Leaderboard reducer', () => {
  it('should return the initial state when given by unknown action', () => {
    // Arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };
    // Action
    const nextState = leaderboardsReducer(initialState, action);
    // Assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the threads when given by RECEIVE_LEADERBOARDS action', () => {
    // Arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_LEADERBOARDS',
      payload: {
        leaderboards: globalLeaderboards,
      },
    };
    // Action
    const nextState = leaderboardsReducer(initialState, action);
    // Assert
    expect(nextState).toEqual(action.payload.leaderboards);
  });
});
