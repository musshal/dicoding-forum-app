import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function CommentInput({ onComment }) {
  const [content, onContentChange] = useInput('');

  return (
    <form className="flex flex-col gap-2">
      <textarea
        rows={4}
        className="w-full resize-none border-2 px-2 py-1 border-black rounded-md"
        value={content}
        onChange={onContentChange}
      />
      <button
        type="button"
        className="w-full bg-[#2D3E50] text-white p-2 rounded-lg"
        onClick={() => onComment(content)}
      >
        Buat
      </button>
    </form>
  );
}

CommentInput.propTypes = {
  onComment: PropTypes.func.isRequired,
};

export default CommentInput;
