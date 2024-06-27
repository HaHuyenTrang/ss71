import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLightDark } from "../store/reducer/lightDarkReducer";

export default function LightDark() {
  const lightDarkState = useSelector((state: any) => state.lightdark);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: lightDarkState === "white" ? "#fff" : "#333",
        color: lightDarkState === "white" ? "#000" : "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "background 0.3s, color 0.3s",
      }}
    >
      <button
        style={{
          padding: "20px",
          fontSize: "16px",
          cursor: "pointer",
          background: lightDarkState === "white" ? "#000" : "#fff",
          color: lightDarkState === "white" ? "#fff" : "#000",
          border: "none",
          borderRadius: "5px",
        }}
        onClick={() => dispatch(toggleLightDark())}
      >
        {lightDarkState === "white" ? "Sáng" : "Tối"}
      </button>
    </div>
  );
}
