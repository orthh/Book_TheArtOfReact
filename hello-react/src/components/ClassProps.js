import React, { Component } from "react";
import PropTypes from "prop-types";

class ClassProps extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        <h1>안녕하세요 제 이름은 {name} 입니다.</h1>
        <h3>children 값은 {children} 입니다.</h3>
        <h5>제가 좋아하는 숫자는 {favoriteNumber} 입니다.</h5>
      </div>
    );
  }
}

ClassProps.defaultProps = {
  name: "기본 이름",
};

ClassProps.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default ClassProps;
