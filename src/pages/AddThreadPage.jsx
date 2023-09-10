import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ThreadInput from '../components/ThreadInput';
import { asyncAddThread } from '../states/threads/action';

function AddThreadPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onCreate = ({ title, category, body }) => {
    if (title === '' || category === '' || body === '') {
      return;
    }

    dispatch(asyncAddThread({ title, category, body }));
    navigate('/');
  };

  return (
    <section className="flex flex-col gap-10">
      <h2 className="text-2xl font-semibold">Buat Diskusi Baru</h2>
      <ThreadInput onCreate={onCreate} />
    </section>
  );
}

export default AddThreadPage;
