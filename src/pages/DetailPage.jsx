import React from 'react';
import { Link } from 'react-router-dom';
import ThreadItem from '../components/ThreadItem';
import CommentList from '../components/CommentList';

function DetailPage() {
  return (
    <div>
      <ThreadItem />
      <div className="mb-5">
        <h2 className="text-xl">Beri Komentar</h2>
        <p>
          <Link to="/login">Login </Link>
          untuk memberi komentar
        </p>
      </div>
      <CommentList />
    </div>
  );
}

export default DetailPage;
