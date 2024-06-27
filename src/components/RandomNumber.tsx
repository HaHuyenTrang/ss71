import { useDispatch, useSelector } from "react-redux";
import { generateNewRandom } from "../store/reducer/randomReducer";

export default function RandomNumber() {
  const randomState = useSelector((state: any) => state.random);
  console.log(randomState);
  const dispatch = useDispatch();
  return (
    <div>
      <p>List Number: [{randomState.join(",")}]</p>
      <button onClick={() => dispatch(generateNewRandom())}>
        Random Numbers
      </button>
    </div>
  );
}
