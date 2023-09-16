import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function CommentInput({ onComment }) {
  const [content, onContentChange] = useInput('');

  return (
    <form className="flex flex-col gap-2">
      <textarea
        rows={4}
        className="w-full resize-none border-2 px-2 py-1 border-gray-500 rounded-md"
        value={content}
        onChange={onContentChange}
        required
      />
      <button
        type="submit"
        className="w-full bg-[#2D3E50] text-white px-2 py-1 rounded-lg"
        onClick={(e) => {
          e.preventDefault();
          onComment(content);
        }}
      >
        Kirim
      </button>
    </form>
  );
}

CommentInput.propTypes = {
  onComment: PropTypes.func.isRequired,
};

export default CommentInput;
