import React from "react";

export const ContainerStories = (Story) => (
  <div
    style={{
      backgroundImage: "url('/circles.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "30vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
      minWidth: "70vw",
    }}
  >
    <Story />
  </div>
);
