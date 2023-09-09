import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ThreadItem from '../components/ThreadItem';
import CommentList from '../components/CommentList';
import { asyncReceiveThreadDetail } from '../states/threadDetail/action';

function DetailPage() {
  const { id } = useParams();
  const { threadDetail = null } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  if (!threadDetail) return null;

  return (
    <div>
      <ThreadItem
        id={threadDetail.id}
        title={threadDetail.title}
        body={threadDetail.body}
        category={threadDetail.category}
        upVotesBy={threadDetail.upVotesBy}
        downVotesBy={threadDetail.downVotesBy}
        user={threadDetail.owner}
        createdAt={threadDetail.createdAt}
      />
      <div className="mb-5">
        <h2 className="text-xl">Beri Komentar</h2>
        <p>
          <Link
            to="/login"
            className="underline"
          >
            Login
          </Link>
          {' '}
          untuk memberi komentar
        </p>
      </div>
      <CommentList />
    </div>
  );
}

export default DetailPage;
