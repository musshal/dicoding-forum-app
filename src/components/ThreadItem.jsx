import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { BiShare } from 'react-icons/bi';
import CategoryItem from './CategoryItem';

// eslint-disable-next-line react/prop-types, no-unused-vars, object-curly-newline
function ThreadItem({ id, title, body, category, createdAt, totalComments }) {
  return (
    <div className="my-5">
      <CategoryItem />
      <h3 className="my-3 text-xl font-semibold">
        <Link to="/detail">{title}</Link>
      </h3>
      <p>{body}</p>
      <div className="flex gap-5 mt-3">
        <button type="button">
          <AiOutlineLike />
        </button>
        <button type="button">
          <AiOutlineDislike />
        </button>
        <button type="button">
          <BiShare />
        </button>
        <p>89 hari lalu</p>
        <p>
          Dibuat oleh
          {' '}
          <span className="font-semibold">Dimas Saputra</span>
        </p>
      </div>
      <hr className="mt-3" />
    </div>
  );
}

export default ThreadItem;
