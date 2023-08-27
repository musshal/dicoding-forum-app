import React from 'react';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';

function CommentItem() {
  return (
    <div>
      <div className="flex justify-between my-3 items-center">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-blue-500 p-2 justify-center w-fit h-fit">
            <p className="text-sm">DS</p>
          </div>
          <p className="font-semibold">Dimas Saputra</p>
        </div>
        <p>89 hari lalu</p>
      </div>
      <p>Halo!</p>
      <p>Perkenalkan, nama saya Dimas.</p>
      <div className="flex gap-3 mt-3">
        <button
          type="button"
          className="flex items-center gap-1"
        >
          <AiOutlineLike />
          0
        </button>
        <button
          type="button"
          className="flex items-center gap-1"
        >
          <AiOutlineDislike />
          0
        </button>
      </div>
    </div>
  );
}

export default CommentItem;
