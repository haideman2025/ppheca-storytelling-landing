# Ghi nhận kiểm thử giao diện

## 2026-08-17 — Preview desktop và panel trợ lý Thảo

Preview tại 1440 × 900 hiển thị hero với phần đầu nhân vật trọn vẹn; tea rail được thu gọn về điều hướng dọc và trigger `Hỏi Thảo` nằm tách khỏi hình hero ở góc dưới phải. Mở trigger thành công: panel bên phải hiển thị lời chào, bốn gợi ý nhanh gồm tư vấn chọn trà, giá/ưu đãi, cách pha và mua tại TikTok Shop, cùng ô nhập câu hỏi. Lớp phủ nền được kích hoạt đúng trạng thái khi panel mở.

Gợi ý nhanh **Xem giá và ưu đãi** trả lời tức thời: 05 gói 54.400đ, CTKM mua 1 tặng 5; 15 gói 159.200đ, tặng thêm 5 gói. Câu trả lời hiển thị liên kết `Đến TikTok Shop PPHeCa` có thể bấm và nhắc kiểm tra lại giá/ưu đãi tại gian hàng trước khi thanh toán.

## 2026-08-17 — TVC PPHeCa và fallback autoplay

Video TVC đã được tối ưu và lưu trong kho asset webdev, sau đó tích hợp vào giữa hero và chương câu chuyện nhà sáng lập. Video nền dùng poster, tự phát ở chế độ im lặng để tuân thủ chính sách autoplay; người dùng có nút bật âm thanh rõ ràng. Khi trình duyệt từ chối autoplay có âm thanh, UI chuyển sang trạng thái hướng dẫn dùng native controls, bật `controls` và giữ poster/video không gây chồng lấn.

Bản tích hợp đã pass `pnpm check`, `pnpm test` với 6/6 test và `pnpm build`. Preview desktop/mobile đã được chụp lại; `aria-label`, `aria-pressed`, `role=status`, `aria-live` và native controls được dùng cho trạng thái âm thanh/fallback. Kiểm thử runtime cho thấy trong trường hợp trình duyệt chặn âm thanh, video giữ `muted: true`, hiển thị native controls và thông báo hướng dẫn thay vì giả vờ đã bật tiếng.
