import React, { Component } from "react";
import { connect } from "react-redux";
import { tangGiamSoLuong, xoaSanPham } from "../actions/actions";
class ModalRedux extends Component {
  renderModelItems() {
    let { mangGioHang } = this.props;
    return mangGioHang.map((item, index) => {
      let { tenSP, maSP, hinhAnh, giaBan, soLuong } = item;
      return (
        <tr key={index}>
          <td>{maSP}</td>
          <td>
            <img style={{ width: 75, height: 75 }} src={hinhAnh} alt="cc" />
          </td>
          <td>{tenSP}</td>
          <td>
            <button
              className="btn btn-success"
              onClick={() => {
                this.props.tangGiamSoLuong(maSP, -1);
              }}
            >
              -
            </button>
            {soLuong}
            <button
              className="btn btn-success"
              onClick={() => {
                this.props.tangGiamSoLuong(maSP, 1);
              }}
            >
              +
            </button>
          </td>
          <td>{giaBan.toLocaleString()}</td>
          <td>{(giaBan * soLuong).toLocaleString()}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.xoaSanPham(maSP);
              }}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  }

  renderTongSoLuong() {
    return this.props.mangGioHang.reduce((tichLuy, item) => {
      return (tichLuy += item.soLuong);
    }, 0);
  }

  renderTongTien() {
    return this.props.mangGioHang.reduce((tichLuy, item) => {
      return (tichLuy += item.soLuong * item.giaBan);
    }, 0);
  }
  render() {
    return (
      <div style={{ textAlign: "right" }} className="container">
        {/* Modal trigger button */}
        <button
          type="button"
          className="btn btn-primary btn-lg mb-5"
          data-bs-toggle="modal"
          data-bs-target="#modalId"
        >
          Giỏ hàng ({this.renderTongSoLuong()})
        </button>
        {/* Modal Body */}
        <div
          className="modal fade"
          id="modalId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modalTitleId"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm"
            role="document"
            style={{ minWidth: 1000 }}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalTitleId">
                  Giỏ hàng
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="table-responsive">
                  <table className="table table-default">
                    <thead>
                      <tr>
                        <th scope="col">Mã sản phẩm</th>
                        <th scope="col">Hình Ảnh</th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Đơn giá</th>
                        <th scope="col">Thành tiền</th>
                      </tr>
                    </thead>
                    <tbody>{this.renderModelItems()}</tbody>
                    <tfoot>
                      <tr>
                        <td colSpan="5"></td>
                        <td>Tổng tiền</td>
                        <td>{this.renderTongTien().toLocaleString()}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Optional: Place to the bottom of scripts */}
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    mangGioHang: rootReducer.GioHangReducer.mangGioHang,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    tangGiamSoLuong: (id, amount) => {
      dispatch(tangGiamSoLuong(id, amount));
    },
    xoaSanPham: (id) => {
      dispatch(xoaSanPham(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalRedux);
