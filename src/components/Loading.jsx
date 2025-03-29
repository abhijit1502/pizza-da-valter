import React from "react";

function Loading() {
  return (
    <>
      {/* Preloader Start */}
      <div className="preloader">
        <div className="preloader-inner">
          <span className="loader" />
        </div>
      </div>
    </>
  );
}

export default Loading;
