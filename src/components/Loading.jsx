import React from "react";

function Loading() {
  return (
    <>
      {/* Preloader Start */}
      <div id="preloader" className="preloader">
        <div className="animation-preloader">
          <div className="spinner"></div>
          <div className="txt-loading">
            <span data-text-preloader="P" className="letters-loading">
              P
            </span>
            <span data-text-preloader="I" className="letters-loading">
              I
            </span>
            <span data-text-preloader="Z" className="letters-loading">
              Z
            </span>
            <span data-text-preloader="Z" className="letters-loading">
              Z
            </span>
            <span data-text-preloader="A" className="letters-loading">
              A
            </span>
            <span data-text-preloader="D" className="letters-loading">
              D
            </span>
            <span data-text-preloader="A" className="letters-loading">
              A
            </span>
            <span data-text-preloader="V" className="letters-loading">
              V
            </span>
            <span data-text-preloader="A" className="letters-loading">
              A
            </span>
            <span data-text-preloader="L" className="letters-loading">
              L
            </span>
            <span data-text-preloader="T" className="letters-loading">
              T
            </span>
            <span data-text-preloader="E" className="letters-loading">
              E
            </span>
            <span data-text-preloader="R" className="letters-loading">
              R
            </span>
          </div>
          <p className="text-center">Loading</p>
        </div>
        <div className="loader">
          <div className="row">
            <div className="col-3 loader-section section-left">
              <div className="bg" />
            </div>
            <div className="col-3 loader-section section-left">
              <div className="bg" />
            </div>
            <div className="col-3 loader-section section-right">
              <div className="bg" />
            </div>
            <div className="col-3 loader-section section-right">
              <div className="bg" />
            </div>
          </div>
        </div>
      </div>
        {/*<< Mouse Cursor Start >>*/}
        <div className="mouse-cursor cursor-outer" />
        <div className="mouse-cursor cursor-inner" />
        {/* Back To Top Start */}
        <button id="back-top" className="back-to-top">
          <i className="fa-regular fa-arrow-up" />
        </button>
    </>
  );
}

export default Loading;
