import { useSelector, useDispatch } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { removeUser } from "../store/slices/UserSlice";
const DisplayUser = () => {

  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.users;
  });

  const deleteUser = (id) => {
    dispatch(removeUser(id));
  }

  console.log(data);
  return (
    <>
      {data.map((user, id) => {
        return (
          <div className="box" key={id}>
            <li key={id}>{user}
            <button className="btn-delete" onClick={()=> deleteUser(id)}>
            <MdDeleteForever/>
            </button>
            </li>
          </div>
        );
      })}
    </>
  );
};

export default DisplayUser;
