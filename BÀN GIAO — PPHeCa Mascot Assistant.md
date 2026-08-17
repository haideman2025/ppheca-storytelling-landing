# Biên bản bàn giao tổng hợp — PPHeCa VietNam

> **Phạm vi phiên bản:** Landing storytelling PPHeCa, kế thừa checkpoint visual **v1–v6** và bổ sung trợ lý mascot **Thảo** trong phiên bản kế tiếp. Giá và ưu đãi được dùng theo thông tin người phụ trách xác nhận trong task; người mua vẫn được nhắc kiểm tra lại tại TikTok Shop trước khi thanh toán.

## 1. Chuỗi bàn giao và phạm vi đã kế thừa

Trang landing hiện kế thừa hành trình “Xưởng Thảo Mộc Đương Đại”, cấu trúc kể chuyện **Why → How → What**, bộ visual storytelling và packshot thật đã được gắn vào trải nghiệm. Các checkpoint trước tạo thành lịch sử phục hồi của dự án; phiên bản hiện tại được triển khai trên nền checkpoint `dd26650c` (v6) và thêm hạ tầng full-stack, panel trợ lý Thảo, guardrail sức khỏe cùng hiệu chỉnh responsive.

| Mốc | Checkpoint | Nội dung chính đã bàn giao vào dự án |
|---|---|---|
| v1 | `c4a60cb9` | Landing Xưởng Thảo Mộc, hero, mascot cue, tea rail, catalog 7 packshot thật và CTA. |
| v2 | `dd574d45` | Tích hợp visual GPT Image 2, scroll reveal, ghi chú mascot và tối ưu mobile. |
| v3 | `4bf3c20c` | Điều chỉnh lời kể gần gũi, safe crop hero cho desktop/mobile. |
| v4 | `b66d5c58` | Golden Circle, giá/ưu đãi và CTA TikTok Shop. |
| v5 | `9d8a79ad` | Chuẩn hóa vai trò mascot Thảo, tea rail và prompt pack GPT Image 2. |
| v6 | `dd26650c` | Bổ sung visual xưởng, phối vị, khoảnh khắc trà và quà tặng. |
| Bản hiện tại | Chờ checkpoint mới | Full-stack tRPC, trợ lý Thảo, guardrail sức khỏe, knowledge base có truy vết và sửa responsive. |

## 2. Những bổ sung trong phiên bản trợ lý Thảo

Thảo là **mascot đại diện PPHeCa**, không thay thế tiếng nói thương hiệu. Trigger cố định ở góc phải dưới chỉ xuất hiện sau khi người dùng cuộn qua hero trên mobile, nhờ đó không che hình nhân vật hay ảnh sản phẩm. Khi mở, trợ lý hiển thị panel bên phải trên desktop và hỗ trợ thao tác bằng bàn phím, gợi ý nhanh, ô nhập câu hỏi và liên kết mua hàng.

| Nhóm năng lực | Cách hoạt động đã triển khai |
|---|---|
| Tư vấn nhịp dùng | Dùng knowledge base của 7 dòng trà, khoảnh khắc gợi ý và cách pha đã nêu; không hứa hẹn hiệu quả điều trị. |
| Giá và ưu đãi | Trả lời tức thời: 05 gói **54.400đ** (CTKM mua 1 tặng 5); 15 gói **159.200đ** (tặng thêm 5 gói). Luôn nhắc kiểm tra tại gian hàng trước thanh toán. |
| Cách pha | 01 túi trà với **300–600 ml** nước nóng khoảng **90–100°C**, ủ **5–10 phút**. |
| Mua hàng | Hiển thị liên kết [TikTok Shop PPHeCa](https://vt.tiktok.com/ZS9kmsHgCRh1o-fN0Px/) khi người dùng hỏi giá hoặc có ý định mua. |
| Câu hỏi mở | Endpoint tRPC công khai dùng mô hình ngôn ngữ ở phía server, với system prompt giới hạn chặt kiến thức danh mục và giọng điệu. |
| Sức khỏe/thuốc | Câu hỏi về bệnh, điều trị, dùng cùng thuốc, mang thai/cho con bú hoặc tình huống nguy cơ sẽ bị chặn trước khi gọi mô hình: sản phẩm **không phải là thuốc**, không dùng thay điều trị và nên hỏi bác sĩ/dược sĩ. |

## 3. Nguồn dữ liệu và giới hạn cần duy trì

Knowledge base đối chiếu với catalog và nhãn bao bì hiện có. Với **Trà An Giấc 7 Vị**, không liệt kê từng nguyên liệu khi ảnh nhãn tham chiếu chưa hiển thị chữ đủ rõ; trợ lý hướng người dùng xem nhãn tại gian hàng trước khi sử dụng. Với **Trà Lạc Tiên Sâm Nam**, chỉ ghi nhận các nhãn đọc được: *lạc tiên, sâm nam, hành ngụ chi*. Các mô tả khác giữ ở mức trải nghiệm/nếp uống, không suy diễn thành công dụng.

> **Quy tắc vận hành:** Ảnh AI chỉ đóng vai trò visual storytelling/social; mọi ảnh packshot trong vùng chọn sản phẩm vẫn là packshot chính thức. Không sử dụng nội dung trợ lý như tư vấn y khoa, chẩn đoán hoặc cam kết hiệu quả.

## 4. Kiểm tra trước checkpoint

| Hạng mục | Kết quả |
|---|---|
| TypeScript | Không có lỗi trong kiểm tra watch của dự án. |
| Unit tests | `pnpm test -- server/mascotChat.test.ts`: **2 file / 6 test passed**. |
| Build production | Hoàn tất sau khi thay renderer Markdown nặng bằng renderer liên kết gọn nhẹ. |
| Hero desktop/tablet/mobile | Đã chụp screenshot; đầu nhân vật vẫn hiển thị trọn và hero không bị mascot che phủ. |
| Tea rail và trigger | Tea rail thu gọn trên desktop; ẩn ở ngưỡng hẹp; trigger Thảo được trì hoãn trên mobile để không đè hero. |
| Luồng giá/mua hàng | Kiểm tra trực tiếp trong preview: gợi ý “Xem giá và ưu đãi” trả lời đúng giá, ưu đãi và hiển thị liên kết TikTok Shop có thể bấm. |
| Guardrail sức khỏe | Được kiểm thử đơn vị cho câu hỏi về thuốc/bệnh; phản hồi an toàn chạy trước mô hình ngôn ngữ. |

## 5. Vận hành sau bàn giao

Người quản trị có thể cập nhật giá, quà tặng, link hoặc câu trả lời trong `server/mascotChat.ts`; mọi thay đổi về thành phần và công dụng nên được đối chiếu nhãn/giấy tờ pháp lý trước khi phát hành. Nếu chương trình khuyến mại hết hiệu lực, hãy thay giá và ưu đãi trong knowledge base đồng thời với nội dung card sản phẩm để tránh sai khác.

Tài liệu nguồn trước đó tại `Báo cáo bàn giao — PPHeCa VietNam.md` trong thư mục dự án dùng chung vẫn được giữ để truy xuất những giới hạn dữ liệu catalog và ảnh bao bì ban đầu.
