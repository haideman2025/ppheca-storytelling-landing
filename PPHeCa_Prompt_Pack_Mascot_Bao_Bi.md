# PPHeCa — Prompt Pack phát triển mascot từ bao bì thật

## Sửa hướng sáng tạo

Bạn đã chỉ đúng điểm cốt lõi: mascot PPHeCa đã hiện diện trên bao bì, là **cô gái Việt đội nón lá, mặc áo tông kem và cầm khay thảo mộc**. Từ đây, mọi hình tạo mới phải xem nhân vật đó là **brand character gốc**. Không tạo tea-sprite, không làm figure vinyl, không thay thành nhân vật 3D/cartoon khác.

Để GPT Image giữ nhân vật đúng nhất, hãy đính kèm **cả hai crop reference** đi cùng file này vào mọi prompt có mascot. Nếu công cụ cho phép nhiều ảnh, nên đính kèm thêm packshot/cover sản phẩm liên quan cho visual sản phẩm.

| Mã reference | Dùng để khóa chi tiết nào |
|---|---|
| `R01 — ppheca_mascot_reference_moc_nhan.png` | Gương mặt, nón lá, áo màu kem, khay gỗ, ánh sáng ấm và nét vẽ nhân vật. |
| `R02 — ppheca_mascot_reference_duong_cot.png` | Đối chiếu tỷ lệ nhân vật, pose cầm khay, cách phối áo/nón và cảm giác bao bì. |

> **Identity lock dùng trong mọi prompt:** The woman in the supplied packaging references is the exact PPHeCa brand character. Preserve her recognizable face, young Vietnamese woman appearance, warm smile, black hair arranged neatly behind the head, natural woven conical nón lá, cream-beige traditional high-neck tunic, wooden herb tray, semi-realistic handcrafted illustration style, and warm beige–brown–olive palette. Do not turn her into a 3D toy, cartoon mascot, anime character, different person, different ethnicity, different age, or a generic stock model.

---

## P01 — Master character sheet từ mascot bao bì

**Đính kèm:** R01 và R02.

```text
Using the two supplied PPHeCa packaging character references as the absolute identity source, create a premium brand-character reference sheet for this exact woman. She is the PPHeCa herbal workshop guide: a young Vietnamese woman with the same recognizable face, warm smile, neat black hair, natural woven nón lá, cream-beige high-neck tunic and wooden tray of botanical ingredients shown in the references.

Create four full-body views of the same exact illustrated woman in one composition: front-facing gentle welcome, three-quarter presenting a wooden herb tray, walking while carrying a transparent tea pouch, and seated writing a small workshop note. Preserve the same semi-realistic handcrafted packaging-illustration style, soft warm studio light, beige–brown–olive palette, facial identity, clothing silhouette, nón lá construction and overall calm character. Treat the supplied images as canonical; do not reinterpret her into a new mascot or new art style.

No text, no lettering, no watermark, no logo, no readable labels, no medical imagery, no pills, no doctors, no false health claim. Use an uncluttered warm ivory background, 4:3.
```

## P02 — Pose pack để gắn animation trên landing page

**Đính kèm:** R01, R02 và kết quả P01. Tạo từng pose riêng, PNG nền trong suốt nếu GPT hỗ trợ.

| Mã | Pose cần tạo |
|---|---|
| P02-A | Nhân vật cầm khay thảo mộc, nhẹ nhàng mời người xem bước vào xưởng. |
| P02-B | Nhân vật cúi nhẹ, dùng tay còn lại chỉ vào một cốc trà hổ phách. |
| P02-C | Nhân vật đặt một túi trà/tea bag vào cốc, pose nhìn nghiêng 3/4. |
| P02-D | Nhân vật cầm một mẩu giấy ghi chú trống và nhìn lên góc trên phải. |
| P02-E | Nhân vật cầm giỏ mây nguyên liệu, bước đi nhẹ sang phải. |

```text
Using the supplied PPHeCa packaging character references and the master character sheet as strict identity references, create one isolated full-body image of the exact same brand character. [INSERT POSE FROM TABLE]. Keep her recognizable Vietnamese face, warm smile, neat black hair, natural nón lá, cream-beige high-neck tunic, wooden tray/wooden basket language and semi-realistic handcrafted illustration style exactly consistent with the references. The posture must look natural and calm, suitable for a subtle web scroll animation.

Output a clean alpha-cut transparent background if supported. No text, no lettering, no new logo, no medical imagery, no pills, no doctors, no false health claim, no watermark. 1:1.
```

---

## P03 — Làm lại visual combo bằng packshot thật + mascot bao bì

**Đính kèm:** R01, R02, `combosanphamppheca.webp` và P01 nếu đã tạo.

```text
Create a premium 1:1 e-commerce hero visual for the PPHeCa herbal tea collection. Use the supplied real combo-product image as the authoritative source for every real product pouch: preserve the existing pouch shapes, packaging colors, product count, visible real labels and collection arrangement. Never invent a new product, rewrite a label, add an unverified certification, or add a health claim.

Use the supplied packaging-character references as the absolute identity source for the PPHeCa brand guide. Place the exact same young Vietnamese woman with nón lá and cream-beige tunic at the edge of the composition, holding her familiar wooden herbal tray and gesturing toward the real product collection. She must remain a supporting guide and must not block real pouches. Build the scene as a refined warm-ivory editorial still life: pale wood platform, tea-gold morning light, olive botanical shadows, one amber tea cup and small trays of real loose botanicals. Leave a copy-safe zone in the upper-left.

Do not change the character into 3D, cartoon, anime or a different person. No extra text, no new readable labels, no logos, no medical imagery, no pills, no doctors, no before-after comparison, no watermark. Aspect ratio 1:1.
```

---

## P04 — Infographic “Từ khay thảo mộc đến cốc trà”

**Đính kèm:** R01, R02 và P01 nếu đã tạo.

```text
Create a premium 16:9 wordless visual storytelling infographic for the PPHeCa landing page. Use the supplied packaging character references as the strict identity source. The exact same Vietnamese woman in nón lá and cream-beige tunic leads a single flowing story from left to right: she selects colorful botanical ingredients from a wooden tray, she places a tea bag into an amber tea cup, then she presents the finished cup in a calm warm-window setting.

The composition must be one elegant continuous route, linked by a deep olive tea rail and tea-gold dots, rather than disconnected comic panels. Retain the original character’s semi-realistic handcrafted packaging-illustration style, calm warm smile and natural material details. Use warm ivory paper texture, muted botanical colors and a broad copy-safe area on the upper-left. This is a brand ritual story, not a medical infographic.

No text, no lettering, no labels, no fake packaging, no medical symbols, no pills, no doctors, no health-result imagery, no watermark. 16:9.
```

## P05 — Infographic “Bảy vị, nhiều khoảng nghỉ”

**Đính kèm:** R01, R02 và P01 nếu đã tạo.

```text
Create a premium 16:9 wordless PPHeCa brand storytelling visual. The same exact Vietnamese herbal workshop guide from the supplied packaging references stands at the center with her wooden tray. Around her, four gentle real-life moments curve into a single circular route: an early morning window, a focused work table, a warm family tea table, and a quiet evening lamp. Use amber tea cups and restrained botanical still-life elements to distinguish each moment. Connect them with a deep olive tea rail and small tea-gold markers.

Preserve her face, nón lá, cream-beige high-neck tunic, traditional handcrafted illustration style and calm expression exactly. Keep the mood editorial, premium, Vietnamese and grounded. Do not imply medical benefits; communicate only moments of care and pause. Leave a large copy-safe zone on the left.

No text, no lettering, no labels, no logos, no medical symbols, no pills, no doctors, no before-after comparison, no watermark. 16:9.
```

---

## Prompt “khóa lỗi” nếu GPT làm sai mascot

Nếu kết quả đổi mặt, đổi nón, đổi trang phục hoặc thành nhân vật 3D, hãy gửi lại kết quả lỗi cùng R01/R02 và dùng prompt ngắn này:

```text
Correct this image using the supplied PPHeCa packaging character references. Replace the current character with the exact same illustrated Vietnamese woman shown on the product labels: same recognizable face, warm smile, black hair, natural woven nón lá, cream-beige high-neck tunic, wooden botanical tray and semi-realistic handcrafted packaging illustration style. Keep the existing scene composition, lighting and product packshots unchanged. Do not create a 3D toy, cartoon mascot, anime look, different person, new outfit, new text, new logo, medical claim or watermark.
```

## Gửi lại để tôi tích hợp landing page

Ưu tiên gửi P01, ít nhất ba pose từ P02, P03, P04 và P05. Tôi sẽ dùng các pose minh họa như layer web nhẹ, tạo animation bằng `opacity` và `transform`, còn P03/P04/P05 dùng cho hero và story section. Trước khi tích hợp, tôi sẽ đối chiếu lại với R01/R02 để bảo đảm mascot mới vẫn là nhân vật thật trên bao bì.
