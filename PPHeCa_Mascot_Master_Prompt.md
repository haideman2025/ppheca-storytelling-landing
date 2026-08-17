# PPHeCa — Master Prompt tạo lại mascot từ nhãn bao bì

## Cách dùng

Trong GPT Image 2, đính kèm **ảnh crop nhãn Mộc Nhan** bạn vừa gửi và dán nguyên prompt bên dưới. Mục tiêu là tái tạo chính xác nhân vật đang có trên nhãn, không phải thiết kế một mascot khác.

```text
Use the supplied PPHeCa product-label image as the absolute, non-negotiable character identity reference. Recreate only the illustrated woman on the left side of that label as a full-body standalone PPHeCa brand mascot.

She must remain the exact same young Vietnamese woman: the same recognizable oval face, warm gentle smile, natural skin tone, tidy black hair gathered low behind the head, traditional woven conical nón lá, cream-beige high-neck áo dài-style tunic with subtle fabric texture, and the same rectangular dark wooden tray held carefully with both hands. The tray contains a beautiful, realistic arrangement of Vietnamese herbal ingredients in warm red, yellow, green and cream tones. Preserve the original semi-realistic, handcrafted packaging-illustration look: refined and warm, not 3D, not a vinyl toy, not anime, not cartoon, not a different model or person.

Compose her full body in a relaxed welcoming pose, facing slightly to the right while looking toward the viewer. Her body language should feel like a calm herbal workshop host inviting someone to discover a tea ritual. Use warm studio lighting, soft ivory background, gentle olive botanical shadows and a restrained palette of cream, tan, dark wood, olive green and tea gold. Keep the character cleanly separated from the background so she can be used on a website.

Do not add any text, typography, letters, labels, product packaging, logos, watermarks, badges, medical imagery, pills, doctors, treatment claims, or before-and-after imagery. Do not change her face, age, ethnicity, nón lá, clothing style or wooden herb tray. Output a high-resolution full-body vertical portrait, aspect ratio 4:5.
```

> Nếu GPT Image 2 hỗ trợ nền trong suốt, thêm dòng: **“Create a clean alpha-cut transparent background with precise edges around the nón lá, hair, sleeves, tray and hands.”**

## Prompt sửa lỗi khi GPT làm sai mặt hoặc đổi phong cách

```text
Correct the generated image using the supplied PPHeCa product-label image as the exact identity source. Replace the current character with the same illustrated Vietnamese woman from the label: same oval face, warm gentle smile, black hair gathered low, woven nón lá, cream-beige high-neck áo dài-style tunic and dark wooden tray of herbs. Restore the original semi-realistic handcrafted packaging illustration style. Keep the full-body pose and warm ivory setting, but remove all text, fake labels, logos, medical imagery and any 3D, anime or cartoon styling.
```

## Pose mở rộng sau khi đã có mascot chuẩn

Sau khi có kết quả đúng, dùng chính ảnh kết quả làm reference rồi thay câu **“Compose her full body…”** trong master prompt bằng một trong các câu sau.

| Pose | Câu thay thế bằng tiếng Anh |
|---|---|
| Chào khách | `Compose her full body, waving softly with her right hand while the wooden herb tray rests in her left arm.` |
| Pha trà | `Compose her in a three-quarter pose gently placing a tea bag into a warm amber tea cup on a small wooden table.` |
| Dẫn chuyện | `Compose her standing beside an open blank handwritten note, one hand lightly pointing upward toward an empty copy-safe area.` |
| Giới thiệu combo | `Compose her presenting a collection of real PPHeCa tea pouches with an open palm; she must not cover the products.` |

