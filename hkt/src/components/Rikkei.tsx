import React from 'react'
import './rikkei.css'

export default function Rikkei() {
  return (
    <div>
      
        <div className='header'>
            <h2>Rikkei_shop</h2>
            <p id='ip'><input type="text" placeholder='Nhập để tìm kiếm' /><span id='search' className="material-symbols-outlined">search</span></p>
            <p><span className="material-symbols-outlined">shopping_cart</span>Giỏ hàng</p>
            <p>Đăng nhập</p>
            <p>Đăng ký</p>
        </div>
        <div className='image'>
            <img className='img' src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/banner/banner-1.jpg?raw=true" alt="" />
           
        </div>
        <div className='li'>
            <ul>
                <li className='li1'></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <div className='body'>
            <div className='danhmuc'>
                <b id='danhmuc'> <span className="material-symbols-outlined">lists</span>Danh mục sản phẩm</b>
                <p id='all'> <span className="material-symbols-outlined">chevron_right</span>Tất cả sản phẩm</p>
                <p>Thiết bị điện tử</p>
                <p>Sách</p>
                <p>Đồ tiêu dùng</p>
                <p>Thời trang</p>
            </div>
            <div className='product'>
                <ul> 
                    <li>
                        <img id='iphone' src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThietBiDienTu/iphone6.jpg?raw=true" alt="" />
                        <p id='name'>iphone 6</p>
                        <p id='price'>29.000.000đ</p>
                        <div className='Applee'>
                            <p id='icon'><span className="material-symbols-outlined">favorite</span></p>
                            <p id='font'>30 đã bán</p>
                        </div>
                        <div className='Applee'>
                            <p>Apple</p>
                            <p>Hà Nội</p>
                        </div>

                    </li>
                    <li>
                    <img id='iphone' src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThietBiDienTu/iphone6plus.jpg?raw=true" alt="" />
                        <p id='name'>iphone 6</p>
                        <p id='price'>3.000.000đ</p>
                        <div className='Applee'>
                            <p id='icon'><span className="material-symbols-outlined">favorite</span></p>
                            <p id='font'>500 đã bán</p>
                        </div>
                        <div className='Applee'>
                            <p>Apple</p>
                            <p>Hà Nội</p>
                        </div>
                    </li>
                    <li>
                    <img id='iphone' src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThietBiDienTu/iphone7.jpg?raw=true" alt="" />
                        <p id='name'>iphone 6 plus</p>
                        <p id='price'>35.000.000đ</p>
                        <div className='Applee'>
                            <p id='icon'><span className="material-symbols-outlined">favorite</span></p>
                            <p id='font'>500 đã bán</p>
                        </div>
                        <div className='Applee'>
                            <p>Apple</p>
                            <p>Hà Nội</p>
                        </div>
                    </li>
                    <li>
                    <img id='iphone' src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThietBiDienTu/iphone7plus.jpg?raw=true" alt="" />
                        <p id='name'>iphone 7</p>
                        <p id='price'>35.000.000đ</p>
                        <div className='Applee'>
                            <p id='icon'><span className="material-symbols-outlined">favorite</span></p>
                            <p id='font'>48 đã bán</p>
                        </div>
                        <div className='Applee'>
                            <p>Apple</p>
                            <p>Hà Nội</p>
                        </div>
                    </li>
                    <li>
                    <img id='iphone' src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThietBiDienTu/iphone8.jpg?raw=true" alt="" />
                        <p id='name'>iphone 7 plus</p>
                        <p id='price'>35.000.000đ</p>
                        <div className='Applee'>
                            <p id='icon'><span className="material-symbols-outlined">favorite</span></p>
                            <p id='font'>48 đã bán</p>
                        </div>
                        <div className='Applee'>
                            <p>Apple</p>
                            <p>Hà Nội</p>
                        </div>
                    </li>
                </ul>
                <ul> 
                    <li>
                        <img id='iphone' src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThietBiDienTu/iphone8.jpg?raw=true" alt="" />
                        <p id='name'>iphone 8</p>
                        <p id='price'>29.000.000đ</p>
                        <div className='Applee'>
                            <p id='icon'><span className="material-symbols-outlined">favorite</span></p>
                            <p id='font'>30 đã bán</p>
                        </div>
                        <div className='Applee'>
                            <p>Apple</p>
                            <p>Hà Nội</p>
                        </div>

                    </li>
                    <li>
                    <img id='iphone' src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThietBiDienTu/iphonex.jpg?raw=true" alt="" />
                        <p id='name'>iphone X</p>
                        <p id='price'>3.000.000đ</p>
                        <div className='Applee'>
                            <p id='icon'><span className="material-symbols-outlined">favorite</span></p>
                            <p id='font'>500 đã bán</p>
                        </div>
                        <div className='Applee'>
                            <p>Apple</p>
                            <p>Hà Nội</p>
                        </div>
                    </li>
                    <li>
                    <img id='iphone' src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThietBiDienTu/iphonexr.jpg?raw=true" alt="" />
                        <p id='name'>iphone Xr</p>
                        <p id='price'>35.000.000đ</p>
                        <div className='Applee'>
                            <p id='icon'><span className="material-symbols-outlined">favorite</span></p>
                            <p id='font'>500 đã bán</p>
                        </div>
                        <div className='Applee'>
                            <p>Apple</p>
                            <p>Hà Nội</p>
                        </div>
                    </li>
                    <li>
                    <img id='iphone' src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThietBiDienTu/iphonexs.jpg?raw=true" alt="" />
                        <p id='name'>iphone Xs</p>
                        <p id='price'>35.000.000đ</p>
                        <div className='Applee'>
                            <p id='icon'><span className="material-symbols-outlined">favorite</span></p>
                            <p id='font'>48 đã bán</p>
                        </div>
                        <div className='Applee'>
                            <p>Apple</p>
                            <p>Hà Nội</p>
                        </div>
                    </li>
                    <li>
                    <img id='iphone' src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThietBiDienTu/iphonexsmax.jpg?raw=true" alt="" />
                        <p id='name'>iphone Xsmax</p>
                        <p id='price'>35.000.000đ</p>
                        <div className='Applee'>
                            <p id='icon'><span className="material-symbols-outlined">favorite</span></p>
                            <p id='font'>48 đã bán</p>
                        </div>
                        <div className='Applee'>
                            <p>Apple</p>
                            <p>Hà Nội</p>
                        </div>
                    </li>
                </ul>
                <ul> 
                    <li>
                        <img id='iphone' src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThietBiDienTu/iphone12pro.jpg?raw=true" alt="" />
                        <p id='name'>iphone 12pro</p>
                        <p id='price'>29.000.000đ</p>
                        <div className='Applee'>
                            <p id='icon'><span className="material-symbols-outlined">favorite</span></p>
                            <p id='font'>30 đã bán</p>
                        </div>
                        <div className='Applee'>
                            <p>Apple</p>
                            <p>Hà Nội</p>
                        </div>

                    </li>
                    <li>
                    <img id='iphone' src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThietBiDienTu/iphone12promax.jpg?raw=true" alt="" />
                        <p id='name'>iphone 12prm</p>
                        <p id='price'>3.000.000đ</p>
                        <div className='Applee'>
                            <p id='icon'><span className="material-symbols-outlined">favorite</span></p>
                            <p id='font'>500 đã bán</p>
                        </div>
                        <div className='Applee'>
                            <p>Apple</p>
                            <p>Hà Nội</p>
                        </div>
                    </li>
                    <li>
                    <img id='iphone' src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/Sach/HoangTuBe.jpg?raw=true" alt="" />
                        <p id='name'>Hoàng tử bé</p>
                        <p id='price'>35.000.000đ</p>
                        <div className='Applee'>
                            <p id='icon'><span className="material-symbols-outlined">favorite</span></p>
                            <p id='font'>500 đã bán</p>
                        </div>
                        <div className='Applee'>
                            <p>Apple</p>
                            <p>Hà Nội</p>
                        </div>
                    </li>
                    <li>
                    <img id='iphone' src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/Sach/MuonKiepNhanSinh.jpg?raw=true" alt="" />
                        <p id='name'>Muôn kiếp </p>
                        <p id='price'>35.000.000đ</p>
                        <div className='Applee'>
                            <p id='icon'><span className="material-symbols-outlined">favorite</span></p>
                            <p id='font'>48 đã bán</p>
                        </div>
                        <div className='Applee'>
                            <p>Apple</p>
                            <p>Hà Nội</p>
                        </div>
                    </li>
                    <li>
                    <img id='iphone' src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/Sach/NhaGiaKim.jpg?raw=true" alt="" />
                        <p id='name'>Nhà giả kim</p>
                        <p id='price'>35.000.000đ</p>
                        <div className='Applee'>
                            <p id='icon'><span className="material-symbols-outlined">favorite</span></p>
                            <p id='font'>48 đã bán</p>
                        </div>
                        <div className='Applee'>
                            <p>Apple</p>
                            <p>Hà Nội</p>
                        </div>
                    </li>
                </ul>
                <ul> 
                    <li>
                        <img id='iphone' src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/Sach/ToiTuHoc.jpg?raw=true" alt="" />
                        <p id='name'>Tôi tự học</p>
                        <p id='price'>29.000.000đ</p>
                        <div className='Applee'>
                            <p id='icon'><span className="material-symbols-outlined">favorite</span></p>
                            <p id='font'>30 đã bán</p>
                        </div>
                        <div className='Applee'>
                            <p>Apple</p>
                            <p>Hà Nội</p>
                        </div>

                    </li>
                    <li>
                    <img id='iphone' src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/Sach/DacNhanTam.jpg?raw=true" alt="" />
                        <p id='name'>Đắc nhân tâm</p>
                        <p id='price'>3.000.000đ</p>
                        <div className='Applee'>
                            <p id='icon'><span className="material-symbols-outlined">favorite</span></p>
                            <p id='font'>500 đã bán</p>
                        </div>
                        <div className='Applee'>
                            <p>Apple</p>
                            <p>Hà Nội</p>
                        </div>
                    </li>
                    <li>
                    <img id='iphone' src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/Sach/MatBiec.jpg?raw=true" alt="" />
                        <p id='name'>Mắt biếc</p>
                        <p id='price'>35.000.000đ</p>
                        <div className='Applee'>
                            <p id='icon'><span className="material-symbols-outlined">favorite</span></p>
                            <p id='font'>500 đã bán</p>
                        </div>
                        <div className='Applee'>
                            <p>Apple</p>
                            <p>Hà Nội</p>
                        </div>
                    </li>
                    <li>
                    <img id='iphone' src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/Sach/KhongGiaDinh.jpg?raw=true" alt="" />
                        <p id='name'>0gia đình</p>
                        <p id='price'>35.000.000đ</p>
                        <div className='Applee'>
                            <p id='icon'><span className="material-symbols-outlined">favorite</span></p>
                            <p id='font'>48 đã bán</p>
                        </div>
                        <div className='Applee'>
                            <p>Apple</p>
                            <p>Hà Nội</p>
                        </div>
                    </li>
                    <li>
                    <img id='iphone' src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/Sach/YourName.jpg?raw=true" alt="" />
                        <p id='name'>Your name</p>
                        <p id='price'>35.000.000đ</p>
                        <div className='Applee'>
                            <p id='icon'><span className="material-symbols-outlined">favorite</span></p>
                            <p id='font'>48 đã bán</p>
                        </div>
                        <div className='Applee'>
                            <p>Apple</p>
                            <p>Hà Nội</p>
                        </div>
                    </li>
                </ul>
                <ul> 
                    <li>
                        <img id='iphone' src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThoiTrang/quan1.jpg?raw=true" alt="" />
                        <p id='name'>Quần họa tiết</p>
                        <p id='price'>29.000.000đ</p>
                        <div className='Applee'>
                            <p id='icon'><span className="material-symbols-outlined">favorite</span></p>
                            <p id='font'>30 đã bán</p>
                        </div>
                        <div className='Applee'>
                            <p>Apple</p>
                            <p>Hà Nội</p>
                        </div>

                    </li>
                    <li>
                    <img id='iphone' src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThoiTrang/quan2.jpg?raw=true" alt="" />
                        <p id='name'>Quần sọc </p>
                        <p id='price'>3.000.000đ</p>
                        <div className='Applee'>
                            <p id='icon'><span className="material-symbols-outlined">favorite</span></p>
                            <p id='font'>500 đã bán</p>
                        </div>
                        <div className='Applee'>
                            <p>Apple</p>
                            <p>Hà Nội</p>
                        </div>
                    </li>
                    <li>
                    <img id='iphone' src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThoiTrang/ao4.jpg?raw=true" alt="" />
                        <p id='name'>Áo phông</p>
                        <p id='price'>35.000.000đ</p>
                        <div className='Applee'>
                            <p id='icon'><span className="material-symbols-outlined">favorite</span></p>
                            <p id='font'>500 đã bán</p>
                        </div>
                        <div className='Applee'>
                            <p>Apple</p>
                            <p>Hà Nội</p>
                        </div>
                    </li>
                    <li>
                    <img id='iphone' src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThoiTrang/quan3.jpg?raw=true" alt="" />
                        <p id='name'>Quần nỉ</p>
                        <p id='price'>35.000.000đ</p>
                        <div className='Applee'>
                            <p id='icon'><span className="material-symbols-outlined">favorite</span></p>
                            <p id='font'>48 đã bán</p>
                        </div>
                        <div className='Applee'>
                            <p>Apple</p>
                            <p>Hà Nội</p>
                        </div>
                    </li>
                    <li>
                    <img id='iphone' src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThoiTrang/ao5.jpg?raw=true" alt="" />
                        <p id='name'>Áo phông</p>
                        <p id='price'>35.000.000đ</p>
                        <div className='Applee'>
                            <p id='icon'><span className="material-symbols-outlined">favorite</span></p>
                            <p id='font'>48 đã bán</p>
                        </div>
                        <div className='Applee'>
                            <p>Apple</p>
                            <p>Hà Nội</p>
                        </div>
                    </li>
                </ul>
                <ul> 
                    <li>
                        <img id='iphone' src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThoiTrang/quan6.jpg?raw=true" alt="" />
                        <p id='name'>Quần đùi</p>
                        <p id='price'>29.000.000đ</p>
                        <div className='Applee'>
                            <p id='icon'><span className="material-symbols-outlined">favorite</span></p>
                            <p id='font'>30 đã bán</p>
                        </div>
                        <div className='Applee'>
                            <p>Apple</p>
                            <p>Hà Nội</p>
                        </div>

                    </li>
                    <li>
                    <img id='iphone' src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThoiTrang/quan5.jpg?raw=true" alt="" />
                        <p id='name'>Quần nỉ xám</p>
                        <p id='price'>3.000.000đ</p>
                        <div className='Applee'>
                            <p id='icon'><span className="material-symbols-outlined">favorite</span></p>
                            <p id='font'>500 đã bán</p>
                        </div>
                        <div className='Applee'>
                            <p>Apple</p>
                            <p>Hà Nội</p>
                        </div>
                    </li>
                    <li>
                    <img id='iphone' src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThoiTrang/ao6.jpg?raw=true" alt="" />
                        <p id='name'>Áo khoác</p>
                        <p id='price'>35.000.000đ</p>
                        <div className='Applee'>
                            <p id='icon'><span className="material-symbols-outlined">favorite</span></p>
                            <p id='font'>500 đã bán</p>
                        </div>
                        <div className='Applee'>
                            <p>Apple</p>
                            <p>Hà Nội</p>
                        </div>
                    </li>
                    <li>
                    <img id='iphone' src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThoiTrang/quan7.jpg?raw=true" alt="" />
                        <p id='name'>Quần đùi</p>
                        <p id='price'>35.000.000đ</p>
                        <div className='Applee'>
                            <p id='icon'><span className="material-symbols-outlined">favorite</span></p>
                            <p id='font'>48 đã bán</p>
                        </div>
                        <div className='Applee'>
                            <p>Apple</p>
                            <p>Hà Nội</p>
                        </div>
                    </li>
                    <li>
                    <img id='iphone' src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/DoTieuDung/comfort.jpg?raw=true" alt="" />
                        <p id='name'>Comfo</p>
                        <p id='price'>35.000.000đ</p>
                        <div className='Applee'>
                            <p id='icon'><span className="material-symbols-outlined">favorite</span></p>
                            <p id='font'>48 đã bán</p>
                        </div>
                        <div className='Applee'>
                            <p>Apple</p>
                            <p>Hà Nội</p>
                        </div>
                    </li>
                </ul>
            </div>
            
        </div>
        < hr id='hr' />
        <div className='footer'>
            <div className='takecare'>
                <h3>Chăm sóc khách hành</h3>
                <p>Trung tâm trợ giúp</p>
                <p>Hướng dẫn mua hàng</p>
            </div>
            <div className='introdue'>
                <h3>Giới thiệu</h3>
                <p>Điều khoản</p>
                <p>Chính sách bảo mật</p>
                <p>Tuyển dụng</p>
            </div>
            <div className='prd'>
                <h3>Danh mục sản phẩm</h3>
                <p>Thời trang</p>
                <p>Đồ tiêu dùng</p>
                <p>Thiết bị điện tử</p>
                <p>Sách</p>
            </div>
            <div className='flow'>
                <h3>Theo dõi chúng tôi</h3>
                <p><i className="fa-brands fa-facebook"></i> Facebook</p>
                <p><i className="fa-brands fa-instagram"></i> Instagram</p>
                <p> <i className="fa-brands fa-twitter"></i>Twitter</p>
            </div>
            <div className='develop'>
                <h3>Đội ngũ phát triển</h3>
                <p>Hà Huyền Trang</p>
            </div>
        </div>
    </div>
    
  )
}
