import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ThreadItem from '../components/ThreadItem';
import CommentList from '../components/CommentList';
import { asyncReceiveThreadDetail } from '../states/threadDetail/action';

function DetailPage({ authUser }) {
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
      {authUser ? (
        <CommentList />
      ) : (
        <h3 className="text-xl font-semibold">Komentar (0)</h3>
      )}
    </div>
  );
}

const authUserShape = {
  token: PropTypes.string,
};

DetailPage.propTypes = {
  authUser: PropTypes.shape(authUserShape),
};

DetailPage.defaultProps = {
  authUser: null,
};

export default DetailPage;
