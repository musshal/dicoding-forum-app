/**
 * test scenario for threadsReducer
 *
 * - threadReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the threads when given by RECEIVE_THREAD action
 *  - should return the threads with the new thread when given by CREATE_THREAD action
 *  - should return the threads with the toggled like thread when given by TOGGLE_UPVOTE_THREAD
 *    action
 *  - should return the threads with the toggled like thread when given by TOGGLE_DOWNVOTE_THREAD
 *    action
 *  - should return the threads with the toggled like thread when given by
 *    TOGGLE_NEUTRALIZE_THREAD_VOTE action
 *
 */
import { describe, it, expect } from 'vitest';
import threadReducer from '../reducer';

describe('threadReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };
    // action
    const nextState = threadReducer(initialState, action);
    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the thread when given by RECEIVE_THREADS function', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_THREADS',
      payload: {
        threads: [
          {
            id: 'thread-91KocEqYPRz68MhD',
            title: 'Halo! Selamat datang dan silakan perkenalkan diri kamu',
            body: '<div>Bagaimana kabarmu? Semoga baik-baik saja ya. Sekali lagi saya ucapkan selamat datang semuanya!</div><div><br></div><div>Seperti yang sudah disampaikan sebelumnya, pada diskusi ini kamu bisa memperkenalkan diri kamu dan juga berkenalan dengan teman sekelas lainnya.</div><div><br></div><div>Berhubungan baik dengan teman sekelas dan instruktur merupakan bagian penting dari pembelajaran di kelas ini, karena mereka dapat membantu jika kamu mengalami kendala dalam mempelajari dan memahami materi.&nbsp;&nbsp;</div><div><br></div><div>Oleh karena itu, luangkanlah waktumu untuk saling mengenal dan mencairkan suasana. Membangun interaksi dengan siswa lain akan membuat pengalaman belajar kamu jauh lebih menyenangkan dan menarik.&nbsp;</div><div><br></div><div>Beberapa hal yang dapat kamu tulis pada perkenalan diri:</div><div><br></div><div>- Siapa kamu dan dari mana kamu berasal?</div><div>- Apa pekerjaan atau pendidikan kamu saat ini?</div><div>- Kenapa kamu mengambil pelatihan ini? Apakah mungkin karena kamu sedang mengejar perubahan dalam karir, atau lainnya?</div>',
            category: 'perkenalan',
            createdAt: '2023-05-29T07:54:35.746Z',
            ownerId: 'user-aROWej8yYA1sOfHN',
            totalComments: 1,
            upVotesBy: ['user-mQhLzINW_w5TxxYf'],
            downVotesBy: [],
          },
          {
            id: 'thread-08_nUU2fhu1P5nre',
            title: 'Pengalaman Belajar React di Dicoding',
            body: 'Menurut teman-teman, bagaimana pengalaman belajar kelas React di Dicoding? Apakah mudah ataukah sulit? Yuk, ceritakan di sini.',
            category: 'react',
            createdAt: '2022-11-13T09:59:31.019Z',
            ownerId: 'user-5PqX6Ldhnk_ifroq',
            totalComments: 1,
            upVotesBy: ['user-6oWew2w2Wx5xLUTU', 'user-5PqX6Ldhnk_ifroq'],
            downVotesBy: [],
          },
        ],
      },
    };
    // action
    const nextState = threadReducer(initialState, action);
    // assert
    expect(nextState).toEqual(action.payload.threads);
  });

  it('should return the thread with the new thread when given by ADD_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
      },
    ];
    const action = {
      type: 'RECEIVE_THREADS',
      payload: {
        threads: [
          {
            id: 'thread-91KocEqYPRz68MhD',
            title: 'Halo! Selamat datang dan silakan perkenalkan diri kamu',
            body: '<div>Bagaimana kabarmu? Semoga baik-baik saja ya. Sekali lagi saya ucapkan selamat datang semuanya!</div><div><br></div><div>Seperti yang sudah disampaikan sebelumnya, pada diskusi ini kamu bisa memperkenalkan diri kamu dan juga berkenalan dengan teman sekelas lainnya.</div><div><br></div><div>Berhubungan baik dengan teman sekelas dan instruktur merupakan bagian penting dari pembelajaran di kelas ini, karena mereka dapat membantu jika kamu mengalami kendala dalam mempelajari dan memahami materi.&nbsp;&nbsp;</div><div><br></div><div>Oleh karena itu, luangkanlah waktumu untuk saling mengenal dan mencairkan suasana. Membangun interaksi dengan siswa lain akan membuat pengalaman belajar kamu jauh lebih menyenangkan dan menarik.&nbsp;</div><div><br></div><div>Beberapa hal yang dapat kamu tulis pada perkenalan diri:</div><div><br></div><div>- Siapa kamu dan dari mana kamu berasal?</div><div>- Apa pekerjaan atau pendidikan kamu saat ini?</div><div>- Kenapa kamu mengambil pelatihan ini? Apakah mungkin karena kamu sedang mengejar perubahan dalam karir, atau lainnya?</div>',
            category: 'perkenalan',
            createdAt: '2023-05-29T07:54:35.746Z',
            ownerId: 'user-aROWej8yYA1sOfHN',
            totalComments: 1,
            upVotesBy: ['user-mQhLzINW_w5TxxYf'],
            downVotesBy: [],
          },
        ],
      },
    };

    const nextState = threadReducer(initialState, action);

    expect(nextState).toEqual(action.payload.threads, ...initialState);
  });

  it('should return the thread with the new thread when given by TOGGLE_UPVOTE_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread--ERMoiIVb_18Vf1t',
        title: 'tester',
        body: 'tester',
        category: 'tester',
        createdAt: '2022-12-21T15:10:52.485Z',
        ownerId: 'user-Kip89kENPglHYaq5',
        totalComments: 0,
        upVotesBy: [],
        downVotesBy: [],
      },
    ];
    const action = {
      type: 'TOGGLE_UPVOTE_THREAD',
      payload: {
        threadId: 'thread--ERMoiIVb_18Vf1t',
        userId: 'user-5PqX6Ldhnk_ifroq',
      },
    };

    // action
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [action.payload.userId],
      },
    ]);
  });

  it('should return the thread with the new thread when given by TOGGLE_DOWNVOTE_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread--ERMoiIVb_18Vf1t',
        title: 'tester',
        body: 'tester',
        category: 'tester',
        createdAt: '2022-12-21T15:10:52.485Z',
        ownerId: 'user-Kip89kENPglHYaq5',
        totalComments: 0,
        upVotesBy: [],
        downVotesBy: [],
      },
    ];
    const action = {
      type: 'TOGGLE_DOWNVOTE_THREAD',
      payload: {
        threadId: 'thread--ERMoiIVb_18Vf1t',
        userId: 'user-5PqX6Ldhnk_ifroq',
      },
    };

    // action
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        downVotesBy: [action.payload.userId],
      },
    ]);
  });

  it('should return the thread with the new thread when given by TOGGLE_NEUTRALIZE_THREAD_VOTE action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread--ERMoiIVb_18Vf1t',
        title: 'tester',
        body: 'tester',
        category: 'tester',
        createdAt: '2022-12-21T15:10:52.485Z',
        ownerId: 'user-Kip89kENPglHYaq5',
        totalComments: 0,
        upVotesBy: ['user-test'],
        downVotesBy: ['user-test'],
      },
    ];
    const action = {
      type: 'TOGGLE_NEUTRALIZE_THREAD_VOTE',
      payload: {
        threadId: 'thread--ERMoiIVb_18Vf1t',
        userId: 'user-test',
      },
    };

    // action
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [],
        downVotesBy: [],
      },
    ]);
  });
});
