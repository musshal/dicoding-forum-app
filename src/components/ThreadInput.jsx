import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function ThreadInput({ onCreate }) {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, onBodyChange] = useInput('');

  return (
    <form className="flex flex-col gap-2">
      <input
        type="text"
        placeholder="Judul"
        className="w-full border-2 px-2 py-1 border-black rounded-md"
        value={title}
        onChange={onTitleChange}
      />
      <input
        type="text"
        placeholder="Kategori"
        className="w-full border-2 px-2 py-1 border-black rounded-md"
        value={category}
        onChange={onCategoryChange}
      />
      <textarea
        rows={4}
        className="w-full resize-none border-2 px-2 py-1 border-black rounded-md"
        value={body}
        onChange={onBodyChange}
      />
      <button
        type="button"
        className="w-full bg-[#2D3E50] text-white p-2 rounded-lg"
        onClick={() => onCreate({ title, category, body })}
      >
        Buat
      </button>
    </form>
  );
}

ThreadInput.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default ThreadInput;
