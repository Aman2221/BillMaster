import React from "react";

const FullscreenButton = () => {
  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
        );
      });
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <i
      onClick={handleFullscreen}
      className="bx bx-fullscreen text-white text-2xl cursor-pointer"
    ></i>
  );
};

export default FullscreenButton;
