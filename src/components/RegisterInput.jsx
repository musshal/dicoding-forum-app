import React from 'react';

function RegisterInput() {
  return (
    <form className="flex flex-col w-full gap-3">
      <input
        type="text"
        placeholder="Name"
        className="border-2 border-gray-400 rounded-md p-1"
      />
      <input
        type="email"
        placeholder="Email"
        className="border-2 border-gray-400 rounded-md p-1"
      />
      <input
        type="password"
        placeholder="Password"
        className="border-2 border-gray-400 rounded-md p-1"
      />
      <button
        type="submit"
        className="bg-slate-700 p-1 rounded-md text-white"
      >
        Register
      </button>
    </form>
  );
}

export default RegisterInput;
