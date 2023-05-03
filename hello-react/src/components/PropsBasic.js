import React from "react";
import PropTypes from "prop-types";

const PropsBasic = ({ name, children, favoriteNumber }) => {
  // ES6 비구조화 할당 문법
  // const { name, children } = props;
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다.
      <br />
      children 값은 {children} 입니다.
      <br />
      제가 좋아하는 숫자는 {favoriteNumber} 입니다.
    </div>
  );
};

// prop에 아무것도 안들어갔을때 기본 props 설정
PropsBasic.defaultProps = {
  name: "기본 이름",
};

// Props 타입 지정
PropsBasic.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default PropsBasic;
