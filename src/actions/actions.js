import { THEM_SAN_PHAM } from "../type/types";
import { TANG_GIAM_SO_LUONG } from "../type/types";
import { XOA_SAN_PHAM } from "../type/types";
const themSanPham = (phoneItemInfo) => {
  return {
    type: THEM_SAN_PHAM,
    phoneItemInfo,
  };
};

const tangGiamSoLuong = (id, amount) => {
  return {
    type: TANG_GIAM_SO_LUONG,
    id,
    amount,
  };
};

const xoaSanPham = (id) => {
  return {
    type: XOA_SAN_PHAM,
    id,
  };
};

export { themSanPham, tangGiamSoLuong, xoaSanPham };
