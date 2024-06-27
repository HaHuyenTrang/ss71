import { useDispatch, useSelector } from "react-redux";
import { setViewState } from "../store/reducer/viewReducer";

export default function ViewReducer() {
  const arr: number[] = [1, 2, 3, 4];
  const viewState = useSelector((state: any) => state.view);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(setViewState())}>
        {viewState === "grid" ? "Grid mode" : "List mode"}
      </button>
      <div
        style={{
          display: "flex",
          flexDirection: viewState === "grid" ? "row" : "column",
          gap: 20,
        }}
      >
        {arr.map((item) => (
          <div
            style={{
              width: viewState === "grid" ? 200 : 500,
              height: 100,
              background: "red",
              color: "white",
              textAlign: "center",
              lineHeight: 5,
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
