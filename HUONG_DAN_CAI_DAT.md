# HƯỚNG DẪN CÀI ĐẶT VÀ CHẠY WEBSITE MOBILEZONE

## 📋 Yêu Cầu Hệ Thống

- **Node.js**: Phiên bản 16.x trở lên
- **npm**: Phiên bản 7.x trở lên (đi kèm với Node.js)
- **Trình duyệt**: Chrome, Firefox, Edge, Safari (phiên bản mới nhất)
- **Hệ điều hành**: Windows, macOS, Linux

## 🔧 Bước 1: Cài Đặt Node.js

### Windows:
1. Truy cập: https://nodejs.org/
2. Tải phiên bản **LTS** (Long Term Support)
3. Chạy file cài đặt `.msi`
4. Làm theo hướng dẫn (chấp nhận mặc định)
5. Khởi động lại Command Prompt/PowerShell

### Kiểm tra cài đặt:
```bash
node --version
npm --version
```

Kết quả mong đợi:
```
v18.x.x
9.x.x
```

## 📦 Bước 2: Cài Đặt Dependencies

Mở Command Prompt hoặc PowerShell, di chuyển đến thư mục project:

```bash
cd d:\webbanhang
npm install
```

Quá trình này sẽ cài đặt tất cả các package cần thiết:
- react, react-dom
- react-router-dom
- lucide-react
- tailwindcss
- vite
- và các package khác...

**Thời gian**: Khoảng 2-5 phút (tùy tốc độ mạng)

## 🚀 Bước 3: Chạy Development Server

```bash
npm run dev
```

Kết quả hiển thị:
```
  VITE v5.0.8  ready in 500 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

Website sẽ tự động mở tại: **http://localhost:3000**

## 🎯 Các Lệnh Khác

### Build cho Production:
```bash
npm run build
```
Tạo folder `dist` với code đã được tối ưu hóa.

### Preview Production Build:
```bash
npm run preview
```
Xem trước phiên bản production tại `http://localhost:4173`

## ✅ Kiểm Tra Chức Năng

### 1. Navigation
- [ ] Click vào các menu: Trang Chủ, Giới Thiệu, Sản Phẩm, v.v.
- [ ] Kiểm tra responsive trên mobile (F12 > Toggle device toolbar)

### 2. Tìm Kiếm
- [ ] Click icon 🔍 trên header
- [ ] Nhập từ khóa (vd: "iPhone", "Samsung")
- [ ] Click vào kết quả

### 3. Giỏ Hàng
- [ ] Vào trang Sản Phẩm
- [ ] Click "Thêm vào giỏ" ở bất kỳ sản phẩm nào
- [ ] Click icon 🛒 trên header
- [ ] Kiểm tra tăng/giảm số lượng
- [ ] Xóa sản phẩm

### 4. Bộ Lọc Sản Phẩm
- [ ] Vào trang Sản Phẩm
- [ ] Chọn "Thương hiệu": Apple
- [ ] Chọn "Giá bán": 20-30 triệu
- [ ] Chọn "Tính năng": Camera chuyên nghiệp
- [ ] Chọn "Sắp xếp": Giá thấp đến cao
- [ ] Click "Xóa bộ lọc"

### 5. Tiện Ích
- [ ] Kiểm tra IMEI: Nhập 15 số bất kỳ (vd: 123456789012345)
- [ ] So sánh sản phẩm: Chọn 2-3 sản phẩm
- [ ] Gợi ý sản phẩm: Chọn nhu cầu "Học tập"

### 6. Form Liên Hệ
- [ ] Điền thông tin
- [ ] Chọn chủ đề
- [ ] Click "Gửi Yêu Cầu"

## 🐛 Xử Lý Lỗi Thường Gặp

### Lỗi 1: "npm is not recognized"
**Nguyên nhân**: Chưa cài Node.js hoặc chưa restart terminal

**Giải pháp**:
1. Cài đặt Node.js từ nodejs.org
2. Restart Command Prompt/PowerShell
3. Chạy lại lệnh

### Lỗi 2: "Cannot find module"
**Nguyên nhân**: Dependencies chưa được cài đặt

**Giải pháp**:
```bash
npm install
```

### Lỗi 3: Port 3000 đã được sử dụng
**Giải pháp**:
```bash
# Tắt ứng dụng đang chạy port 3000, hoặc
# Sửa file vite.config.js, đổi port thành 3001
```

### Lỗi 4: CSS không hoạt động
**Nguyên nhân**: TailwindCSS chưa build

**Giải pháp**:
1. Xóa folder `node_modules`
2. Chạy `npm install`
3. Chạy `npm run dev`

### Lỗi 5: Màn hình trắng
**Giải pháp**:
1. Mở DevTools (F12)
2. Xem tab Console để biết lỗi
3. Kiểm tra Network tab xem file nào không load được

## 📁 Cấu Trúc Project

```
d:\webbanhang\
├── src/
│   ├── components/         # Các component tái sử dụng
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Cart.jsx
│   │   ├── SearchModal.jsx
│   │   └── ProductCompare.jsx
│   ├── pages/             # Các trang chính
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Products.jsx
│   │   ├── Orders.jsx
│   │   ├── News.jsx
│   │   ├── Utilities.jsx
│   │   └── Contact.jsx
│   ├── context/           # State management
│   │   └── AppContext.jsx
│   ├── data/              # Dữ liệu
│   │   └── products.js
│   ├── App.jsx            # Component chính
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── index.html             # HTML template
├── package.json          # Dependencies
├── vite.config.js       # Vite configuration
└── tailwind.config.js   # TailwindCSS config
```

## 🎨 Tùy Chỉnh

### Đổi màu chủ đạo:
Sửa file `tailwind.config.js`:
```js
colors: {
  primary: {
    600: '#0284c7', // Đổi mã màu này
  }
}
```

### Đổi logo/tên:
Sửa file `src/components/Header.jsx` và `Footer.jsx`

### Thêm sản phẩm:
Sửa file `src/data/products.js`

## 📱 Responsive Design

Website tự động responsive trên:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚢 Triển Khai (Deploy)

### Vercel (Khuyến nghị):
1. Push code lên GitHub
2. Truy cập vercel.com
3. Import repository
4. Deploy tự động

### Netlify:
```bash
npm run build
# Kéo thả folder dist vào netlify.com/drop
```

## 💡 Tips

1. **Phím tắt DevTools**: F12 hoặc Ctrl+Shift+I
2. **Hot Reload**: Code tự động reload khi sửa file
3. **Error Messages**: Luôn đọc error trong Console
4. **Mobile Testing**: F12 > Toggle device toolbar (Ctrl+Shift+M)

## 📞 Hỗ Trợ

Nếu gặp vấn đề:
1. Kiểm tra Console (F12)
2. Đọc error message cẩn thận
3. Google error message
4. Kiểm tra lại các bước cài đặt

## 🎉 Chúc Mừng!

Bạn đã cài đặt thành công Website MobileZone!
Explore và tùy chỉnh theo ý muốn.

---
**Phát triển bởi MobileZone Team** 🚀
