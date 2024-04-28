import React, { Component } from "react";
import { connect } from "react-redux";
import { themSanPham } from "../actions/actions";

class PhoneItemRedux extends Component {
  render() {
    let { hinhAnh, tenSP, giaBan } = this.props.phoneItemInfo;
    return (
      <div className="card text-start">
        <img className="card-img-top" src={hinhAnh} alt="Title" />
        <div className="card-body">
          <h4 className="card-title">{tenSP}</h4>
          <p className="card-text">{giaBan.toLocaleString()}</p>
          <button
            data-bs-toggle="modal"
            data-bs-target="#modalId"
            className="btn btn-success"
            onClick={() => {
              this.props.themSanPham(this.props.phoneItemInfo);
            }}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    themSanPham: (phoneItemInfo) => {
      dispatch(themSanPham(phoneItemInfo));
    },
  };
};

export default connect(null, mapDispatchToProps)(PhoneItemRedux);
