import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { BiShare } from 'react-icons/bi';
import CategoryItem from './CategoryItem';

function ThreadItem() {
  return (
    <div className="my-5">
      <CategoryItem />
      <h3 className="my-3 text-xl font-semibold">
        <Link to="/">Bagaimana pengalamanmu belajar Redux?</Link>
      </h3>
      <p>
        Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?
      </p>
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
          <span className="font-semibold"> Dimas Saputra</span>
        </p>
      </div>
      <hr className="mt-3" />
    </div>
  );
}

export default ThreadItem;
