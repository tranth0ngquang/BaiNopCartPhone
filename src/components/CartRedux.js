import React, { Component } from "react";
import ModalRedux from "./ModalRedux";
import PhoneListRedux from "./PhoneListRedux";

export default class CartRedux extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h2 style={{ textAlign: "center" }}>Bài tập giỏ hàng</h2>
        <ModalRedux />
        <PhoneListRedux />
      </div>
    );
  }
}
