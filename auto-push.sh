
#!/bin/bash

# Script tự động đẩy các thay đổi lên GitHub
echo "Đang tự động cập nhật GitHub repository..."

# Thêm tất cả các file đã thay đổi
git add .

# Hỏi người dùng về mô tả commit
echo -n "Nhập mô tả commit (mặc định: 'Cập nhật trang web'): "
read commit_message

# Nếu không nhập gì, sử dụng mô tả mặc định
if [ -z "$commit_message" ]; then
  commit_message="Cập nhật trang web"
fi

# Commit các thay đổi
git commit -m "$commit_message"

# Đẩy các thay đổi lên GitHub (branch main và gh-pages)
echo "Đẩy các thay đổi lên branch main..."
git push origin main

echo "Đẩy các thay đổi lên branch gh-pages..."
git checkout gh-pages
git merge main -m "Merge từ main vào gh-pages"
git push origin gh-pages
git checkout main

echo "Hoàn tất! Các thay đổi đã được cập nhật trên GitHub và GitHub Pages."
echo "Trang web của bạn sẽ được cập nhật trong vài phút tại: https://ponakiku.github.io/Teddy-Noir-Shop/"
