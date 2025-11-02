# Hướng Dẫn Deploy Website Lên GitHub Pages

## 🔗 Link Website - CÔNG KHAI

✅ **Link website của bạn (ai cũng có thể truy cập):**

**https://chucuncon0107-glitch.github.io/web_banhang/**

⚠️ **QUAN TRỌNG:** Để link hoạt động, bạn cần kích hoạt GitHub Pages trong Settings (chỉ cần làm 1 lần):

## 📋 Các Bước Deploy

### ⚙️ KÍCH HOẠT GITHUB PAGES (Làm 1 lần duy nhất)

1. **Vào GitHub Repository:**
   - Link: https://github.com/chucuncon0107-glitch/web_banhang
   - Click vào tab **Settings** (ở menu trên cùng)

2. **Vào mục Pages (bên menu trái):**

3. **Cấu hình:**
   - **Source:** Chọn "Deploy from a branch"
   - **Branch:** Chọn `gh-pages` 
   - **Folder:** Chọn `/ (root)`
   - Click **Save**

4. **Đợi 1-2 phút**, sau đó truy cập link: https://chucuncon0107-glitch.github.io/web_banhang/

### Cách 1: Deploy Tự Động (Khuyên Dùng)

Sau khi đã kích hoạt GitHub Pages ở trên, mỗi lần push code sẽ tự động deploy:

1. **Push code lên GitHub:**
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin master
   ```

3. **GitHub Actions tự động deploy:**
   - Vào tab "Actions" trong repository để xem quá trình build
   - Website sẽ tự động cập nhật sau mỗi lần push

### Cách 2: Deploy Thủ Công (Đã chạy xong! ✅)

✅ **Website đã được deploy thành công!**

Để deploy lại sau khi có thay đổi:
```bash
npm run deploy
```

Script này sẽ tự động build và push lên branch `gh-pages`

## ⚙️ Cấu Hình Đã Thực Hiện

✅ Đã cập nhật `vite.config.js` với base path `/web_banhang/`  
✅ Đã đổi `BrowserRouter` sang `HashRouter` để tương thích với GitHub Pages  
✅ Đã thêm script `deploy` vào `package.json`  
✅ Đã cài đặt `gh-pages` package  
✅ Đã tạo GitHub Actions workflow tự động deploy  

## 🔄 Cập Nhật Website

Mỗi khi bạn thay đổi code:

1. **Nếu dùng GitHub Actions (Cách 1):**
   - Chỉ cần push code lên GitHub
   - GitHub sẽ tự động build và deploy

2. **Nếu dùng deploy thủ công (Cách 2):**
   ```bash
   npm run deploy
   git push origin master
   ```

## 📝 Lưu Ý

- Website sẽ tự động cập nhật sau mỗi lần push code
- Có thể mất 1-2 phút để website hiển thị thay đổi mới
- Đảm bảo branch chính là `master` (hoặc đổi trong `.github/workflows/deploy.yml` nếu là `main`)

## 🆘 Xử Lý Lỗi

Nếu website không hiển thị:
1. Kiểm tra Settings → Pages trong GitHub repository
2. Kiểm tra tab Actions để xem có lỗi build không
3. Đảm bảo base path trong `vite.config.js` đúng với tên repository

