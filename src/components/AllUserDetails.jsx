import React from 'react'
import DeleteAllUser from './DeleteAllUser';
import {fakeUserData} from '../api/index';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/slices/UserSlice';
import DisplayUser from './DisplayUser';
function AllUserDetails() {

  const dispatch = useDispatch();
  const addnewUser = (name) => dispatch(addUser(name)); 

  return (
    <>
      <div className="content">
        <div className="admin-table">
            <div className="admin-subtitle">List of User Details</div>
            <button className='btn-add' onClick={()=>addnewUser(fakeUserData())}>Add New Users</button>
        </div>
        <hr />
        <ul>
          <DisplayUser/>
        </ul>
        <hr className='bottom-hr'/>
        <DeleteAllUser/>
      </div>
    </>
  )
}

export default AllUserDetails;
