import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ThreadDetail from '../components/ThreadDetail';
import CommentList from '../components/CommentList';
import {
  asyncAddComment,
  asyncReceiveThreadDetail,
} from '../states/threadDetail/action';
import CommentInput from '../components/CommentInput';

function DetailPage({ authUser }) {
  const { id } = useParams();
  const { threadDetail = null } = useSelector((states) => states);
  const dispatch = useDispatch();
  const onComment = (content) => dispatch(asyncAddComment(id, content));

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  if (!threadDetail) return null;

  return (
    <div className="flex flex-col gap-5">
      <ThreadDetail
        id={threadDetail.id}
        title={threadDetail.title}
        body={threadDetail.body}
        category={threadDetail.category}
        upVotesBy={threadDetail.upVotesBy}
        downVotesBy={threadDetail.downVotesBy}
        user={threadDetail.owner}
        createdAt={threadDetail.createdAt}
      />
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">Beri Komentar</h2>
          {authUser ? (
            <CommentInput onComment={onComment} />
          ) : (
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
          )}
        </div>
        <div>
          {authUser ? (
            <CommentList comments={threadDetail.comments} />
          ) : (
            <h3 className="text-xl font-semibold">Komentar (0)</h3>
          )}
        </div>
      </div>
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
