const stateGioHang = {
  mangGioHang: [],
};

const GioHangReducer = (state = stateGioHang, action) => {
  switch (action.type) {
    case "THEM_SAN_PHAM": {
      let mangGioHang = [...state.mangGioHang];
      let foundItem = mangGioHang.find(
        (item) => item.maSP === action.phoneItemInfo.maSP
      );

      if (foundItem) {
        foundItem.soLuong += 1;
      } else {
        mangGioHang.push(action.phoneItemInfo);
      }
      return { ...state, mangGioHang };
    }

    case "TANG_GIAM_SO_LUONG": {
      let mangGioHang = [...state.mangGioHang];

      let foundItem = mangGioHang.find((item) => item.maSP === action.id);
      if (action.amount === 1) {
        foundItem.soLuong += 1;
      } else {
        if (foundItem.soLuong === 1) {
          alert("khong the giam");
        } else {
          foundItem.soLuong -= 1;
        }
      }
      return { ...state, mangGioHang };
    }

    case "XOA_SAN_PHAM": {
      let mangGioHang = [...state.mangGioHang];

      let foundIndexItem = mangGioHang.findIndex(
        (item) => item.maSP === action.id
      );
      mangGioHang[foundIndexItem].soLuong = 1;
      mangGioHang.splice(foundIndexItem, 1);
      return { ...state, mangGioHang };
    }
    default: {
      return { ...state };
    }
  }
};

export default GioHangReducer;
