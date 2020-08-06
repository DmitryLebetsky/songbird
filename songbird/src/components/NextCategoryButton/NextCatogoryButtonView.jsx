import React from 'react';

const NextCatogoryButtonView = ({
  disabled,
  moveToNextCategory,
}) => (
  <button
    onClick={moveToNextCategory}
    disabled={disabled}
    className="next-category-button">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Next category
    </button>
);

export default NextCatogoryButtonView;