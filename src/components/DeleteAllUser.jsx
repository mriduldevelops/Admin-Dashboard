import React from 'react';
import { clearAllUsers } from '../store/actions';
import { useDispatch } from 'react-redux';
export default function DeleteAllUser() {

  const dispatch = useDispatch();

  function deleteUsers() {
    dispatch(clearAllUsers());
  };

  return (
    <>
    <button className='btn-grad' onClick={() => deleteUsers()}>
      Clear All Users
    </button>
    </>
  );
};
