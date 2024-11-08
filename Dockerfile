# Chọn image Node.js
FROM node:18

# Cài đặt thư mục làm việc trong container
WORKDIR /app

# Sao chép package.json và package-lock.json vào container
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Mở cổng ứng dụng (ví dụ: 3000)
EXPOSE 3000

# Chạy ứng dụng khi container khởi động
CMD ["npm", "run", "dev"]
