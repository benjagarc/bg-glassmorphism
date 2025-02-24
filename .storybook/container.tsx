import React from "react";

export const ContainerStories = (Story) => (
  <div
    style={{
      backgroundImage: "url('/circles.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "40vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
      minWidth: "95vw",
    }}
  >
    <Story />
  </div>
);
