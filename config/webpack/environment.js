const { environment } = require('@rails/webpacker')
const fileLoader = environment.loaders.get('file');

// Thêm loader cho tệp JPG
environment.loaders.append('jpg', {
  test: /\.(jpg|jpeg|png|gif|tiff|ico)$/i,
  use: [
    {
      loader: 'file-loader',
      options: {
        outputPath: 'images/', // Đường dẫn đến thư mục đích
        publicPath: '/packs/images/', // Đường dẫn công cộng đến tệp JPG sau khi biên dịch
      },
    },
  ],
});

module.exports = environment;

module.exports = environment
