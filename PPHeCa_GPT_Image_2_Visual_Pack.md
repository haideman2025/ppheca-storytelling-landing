# PPHeCa — GPT Image 2 Visual Pack

## 1. Định hướng kể chuyện và cách dùng nhân vật Thảo

**Tiếng nói kể chuyện là PPHeCa.** Hình ảnh phải gợi cảm giác một thương hiệu trà thảo mộc Việt Nam đang mở ra những nghi thức chăm sóc nhỏ, thay vì một cá nhân đang độc thoại. **Thảo** là mascot đại diện: xuất hiện như người bạn dẫn đường, dấu chú thích, người giới thiệu nguyên liệu hoặc người xác nhận khoảnh khắc. Thảo không cần có mặt trong mọi ảnh, và không xưng “tôi” thay thương hiệu.

> Công thức hình ảnh: **một khoảng nghỉ thật → bàn tay/chất liệu xưởng → bảy vị thảo mộc → sản phẩm thật → lời mời chọn một nghi thức nhỏ.**

| Quy tắc | Cần giữ | Không dùng |
|---|---|---|
| Không khí | Ấm, có ánh nắng, mặt bàn gỗ tối, giấy ivory, gốm mộc, olive sâu | Spa trắng lạnh, phòng thí nghiệm, lifestyle sang trọng chung chung |
| Màu | Warm Ivory `#F4EDDF`, Deep Olive `#43571F`, Tea Gold `#E3A93C`, Clay Rose `#B76861` | Neon, tím gradient, xanh mint, màu bão hòa gắt |
| Hình người | Người Việt trưởng thành, hoạt động tự nhiên; ưu tiên tay, lưng, góc nghiêng | Áo blouse, viên thuốc, tư thế quảng cáo lộ liễu |
| Bao bì | Chỉ dùng packshot PPHeCa thật khi đã đính kèm ảnh tham chiếu | Tự dựng lại bao bì, tự bịa logo, tự tạo chữ trên hộp |
| Text trong ảnh | Không text, không giá, không CTA; text để landing render | Chữ tiếng Việt do AI sinh, logo/nhãn chữ bị sai |
| Claim | Cảm giác thư thả, khoảng nghỉ, nếp chăm sóc nhỏ | Chữa, trị, ngủ ngay, giảm đau, cam kết sức khỏe |

## 2. Ảnh cần đính kèm trước khi tạo

Tạo một thư mục reference và đính kèm đúng theo mỗi prompt. GPT Image 2 nên nhận tối đa **1–3 ảnh liên quan nhất**, không dồn cả thư viện vào một lần tạo.

| Mã | Ảnh cần đính kèm | Mục đích |
|---|---|---|
| `REF-THAO` | `missppheca.png` | Giữ gương mặt, nón lá, áo kem và khay thảo mộc của Thảo nhất quán |
| `REF-CHIBI` | Một trong bốn ảnh `misspphecachibi*.png` | Giữ style sticker/chibi khi cần mascot nhỏ |
| `REF-PACK` | Ảnh packshot thật đúng sản phẩm | Giữ đúng hình dáng, màu, chữ, nhãn, vật liệu bao bì |
| `REF-COMBO` | `combo1.png` | Giữ tinh thần trưng bày bộ sản phẩm, không thay packshot thật |
| `REF-7VI` | `7thanhphan.png` | Giữ ngôn ngữ minh họa thành phần vui, botanical và dễ hiểu |

## 3. Danh mục production ưu tiên

| Ưu tiên | File gợi ý | Vị trí dùng | Tỉ lệ | Tham chiếu |
|---:|---|---|---|---|
| 01 | `ppheca_why_warmth_16x9.png` | Why — câu chuyện thương hiệu | 16:9 | Không cần người mẫu/packshot |
| 02 | `ppheca_how_blending_16x9.png` | How — hành trình phối vị | 16:9 | `REF-7VI` |
| 03 | `ppheca_what_ritual_shelf_16x9.png` | What — chọn hộp trà | 16:9 | `REF-PACK` |
| 04 | `ppheca_gifting_4x5.png` | CTA quà tặng / social | 4:5 | `REF-PACK` hoặc `REF-COMBO` |
| 05 | `ppheca_morning_pause_4x5.png` | Mộc Nhan / khoảnh khắc sáng | 4:5 | Không dùng bao bì |
| 06 | `ppheca_evening_pause_4x5.png` | An Giấc / khoảnh khắc tối | 4:5 | Không dùng bao bì |
| 07 | `ppheca_ingredient_details_1x1.png` | Hover card / social ingredient | 1:1 | `REF-7VI` |
| 08 | `ppheca_thao_brand_stamp.png` | Dấu chuyển section / social | PNG alpha | `REF-THAO` |
| 09 | `ppheca_thao_mixing_note.png` | Nhãn “How” / điểm chuyển cảnh | PNG alpha | `REF-CHIBI` |
| 10 | `ppheca_thao_tea_gift_note.png` | Nhãn “What” / quà tặng | PNG alpha | `REF-CHIBI` |

## 4. Prompt tạo visual chính cho landing

### 01 — Brand Why: Một lời quan tâm không cần nói to

**Dùng cho:** section **Why**; background editorial rộng.  
**Tỉ lệ:** `16:9`. **Không đính kèm packshot.**

```text
Create a cinematic editorial still life for the PPHeCa Vietnamese herbal tea brand website.
Subject: a quiet moment of care at home: two Vietnamese adult hands on a warm wooden table, one hand placing a small unbranded tea pouch beside a handmade ivory ceramic cup filled with amber herbal tea; a folded handwritten note without readable words; a few whole botanical ingredients arranged naturally nearby.
Composition: wide 16:9 landscape, the main still life placed in the lower right third, generous calm negative space on the left for website copy, layered depth from a sunlit window, a linen curtain and soft leaf shadows. The moment should feel intimate and believable, not posed.
Style: contemporary Vietnamese herbal workshop editorial, warm ivory paper tones, deep olive accents, tea-gold sunlight, clay-rose micro accent, tactile wood grain, handcrafted ceramic, soft 35mm film grain, refined but not luxurious.
Text/content to render: no text, no logos, no labels, no packaging.
Constraints: adult hands only, no faces, no medical items, no product box, no typography, no watermark.
Avoid: spa aesthetic, laboratory, bright white minimalism, green smoothie imagery, generic wellness stock photo, exaggerated steam, clutter.
```

### 02 — Brand How: Bảy vị được phối bằng sự quan sát

**Dùng cho:** section **How**; visual đối trọng với infographic 7 thành phần hiện có.  
**Tỉ lệ:** `16:9`. **Đính kèm:** `REF-7VI`.

```text
Create an editorial craft scene for PPHeCa, a Vietnamese herbal tea workshop.
Subject: a pair of Vietnamese adult hands carefully measuring and arranging seven distinct herbal ingredients on a deep wooden workbench: warm red berries, pale roots, golden flower petals, green leaves, thin brown bark, light seeds, and a small woven tray. Use the attached seven-ingredient reference only to match the playful botanical color language; do not copy its text.
Composition: 16:9 horizontal, camera at a gentle 35-degree overhead angle, hands and ingredients in the center-right, broad warm ivory negative space on the left. Include handwritten recipe paper with no legible writing, a brass scoop, woven basket and ceramic bowl.
Style: documentary editorial photography inside a modern Vietnamese herbal workshop, warm morning light, olive and tea-gold palette, tactile and credible, quiet craftsmanship, shallow depth of field.
Text/content to render: no text, no logo, no packaging.
Constraints: exactly seven visually distinct ingredient groups, no medicine, no capsules, no lab equipment, no artificial symmetry.
Avoid: fantasy ingredients, medical claim cues, supermarket product styling, bright neon colors, highly polished food advertising.
```

### 03 — Brand What: Chọn một nghi thức nhỏ

**Dùng cho:** section **What / Collection**; ảnh supporting cho packshot thật ở UI.  
**Tỉ lệ:** `16:9`. **Đính kèm:** ảnh `REF-PACK` của đúng 1–3 SKU hoặc `REF-COMBO`.

```text
Create a product-staging editorial image for the PPHeCa Vietnamese herbal tea landing page.
Subject: use the attached PPHeCa product packshot reference exactly as provided. Place the real product packs on a warm ivory paper-covered workshop table beside a ceramic cup of amber tea, a folded linen napkin, a few raw herbs and a small olive-green tray. The packs are proof, not the dominant advertising object.
Composition: 16:9 landscape, real packshots grouped in the right half with full front labels readable and unobstructed, generous clean negative space on the left for a website heading. Keep each pack upright, correct in proportion, with no overlap that hides legal text or product name.
Style: contemporary Vietnamese herbal workshop still life, soft sunlit side light, deep olive, warm ivory and tea gold; handcrafted, quiet and premium without looking luxury-commercial.
Text/content to render: preserve only the exact text already present on the supplied packshots; generate no new text, price, badge or logo.
Constraints: exact packaging identity from reference, no altered branding, no invented variants, no medical symbols, no false ingredient labels.
Avoid: floating boxes, product deformation, over-reflections, overly dark scene, ecommerce marketplace grid, unreadable packaging.
```

### 04 — Gifting: Gửi một khoảng nghỉ

**Dùng cho:** trust/CTA cuối landing, post social 4:5.  
**Tỉ lệ:** `4:5`. **Đính kèm:** `REF-COMBO` hoặc `REF-PACK`.

```text
Create a vertical 4:5 gifting editorial image for PPHeCa Vietnamese herbal tea.
Subject: a thoughtful herbal tea gift arranged on a warm ivory table: use the attached PPHeCa packshot reference exactly, wrapped lightly with unbleached paper and olive cotton ribbon; add a small cream card with no readable text, a ceramic cup, scattered dried flowers and warm afternoon window light.
Composition: vertical 4:5, the product gift occupies the lower two-thirds, open quiet space in the upper third for website copy. Show only adult hands entering the frame to set down the gift; no faces.
Style: gentle Vietnamese botanical workshop, tea gold light, deep olive accents, tactile paper, restrained emotional warmth, editorial photography.
Text/content to render: no generated text, no price, no promotional badges, no new logos.
Constraints: package shape and printed label must remain identical to reference; keep the scene gift-like but not festive or seasonal.
Avoid: holiday decor, bows too large, luxury perfume styling, medical claim imagery, artificial glossy packaging.
```

## 5. Prompt cho các khoảnh khắc sản phẩm

### 05 — Morning pause: một nhịp sáng không vội

**Dùng cho:** Mộc Nhan / social / card kể chuyện. **Tỉ lệ:** `4:5`.

```text
Create a 4:5 vertical editorial lifestyle still life for PPHeCa Vietnamese herbal tea.
Subject: early morning at a Vietnamese home desk, a ceramic cup of amber tea beside an open notebook with no readable text, sunlight on a woven tray, a few botanicals and a softly folded cream shirt. The feeling is a calm start before a busy day.
Composition: keep the warm tea cup in the lower right third, open ivory wall or paper texture in the upper left as text-safe space. No product package and no person face.
Style: warm Vietnamese herbal workshop editorial, gentle morning light, ivory, deep olive, tea gold, subtle clay rose, tactile and unposed.
Text/content to render: no text, no logo, no label.
Constraints: no medical or sleep claims; no coffee props; no phone screen.
Avoid: generic Scandinavian decor, luxury hotel, excessive steam, bright sterile white.
```

### 06 — Evening pause: khép ngày bằng một cốc ấm

**Dùng cho:** An Giấc / Lạc Tiên Sâm Nam / social. **Tỉ lệ:** `4:5`.

```text
Create a 4:5 vertical editorial still life for PPHeCa Vietnamese herbal tea at the end of an ordinary day.
Subject: a warm amber cup of herbal tea on a dark wood bedside table, soft linen, a closed book with no readable title, a small ceramic dish of dried botanicals and a dim olive lamp glow. The feeling is putting the day down gently, not promising sleep or medical benefit.
Composition: the tea cup stays in the lower center-right; leave a calm shadowed ivory wall area in the upper third for website copy. No face, no product pack, no visible phone.
Style: cinematic but grounded Vietnamese herbal workshop atmosphere, deep olive night tone, tea-gold practical light, tactile grain, calm and believable.
Text/content to render: no text, no logo, no label.
Constraints: no sleeping person, no medicine, no pills, no clinical objects, no starry fantasy background.
Avoid: glamorous bedroom, candle overload, purple lighting, sleep-aid advertising aesthetic.
```

### 07 — Ingredient detail: bảy cá tính trên bàn xưởng

**Dùng cho:** hover card, social carousel, section texture. **Tỉ lệ:** `1:1`. **Đính kèm:** `REF-7VI`.

```text
Create a square 1:1 botanical ingredient editorial image for PPHeCa.
Subject: an intimate close-up of seven different herbal ingredients resting in small handmade ceramic dishes, woven cups and on textured ivory paper. Use the attached seven-ingredient reference as color and character inspiration, but make it photographic and do not include its illustrated characters or any text.
Composition: top-down or 35-degree close view, asymmetrical arrangement with empty ivory paper at one corner. Every ingredient group should feel distinct by color and texture.
Style: Vietnamese herbal workshop still life, soft tea-gold daylight, deep olive details, tactile paper, calm editorial quality.
Text/content to render: no text, no logo, no product package.
Constraints: exactly seven ingredient groups; no medicinal capsules, no labels, no scientific diagram.
Avoid: food recipe flat lay, excessive flower abundance, perfect radial symmetry, neon color grading.
```

## 6. Prompt cho mascot overlay có alpha thật

### 08 — Thảo brand stamp

**Dùng cho:** đánh dấu đầu section, social cover, sticker.  
**Tỉ lệ:** `1:1 PNG`. **Đính kèm:** `REF-THAO`.

```text
Create a full-body transparent PNG mascot asset for the PPHeCa Vietnamese herbal tea brand, using the attached Miss PPHeCa reference as the sole identity reference.
Subject: Thảo, a friendly Vietnamese adult woman with the same face, soft smile, cream traditional-inspired outfit, conical hat and olive apron cues as the reference. She stands naturally and holds a small brass tea strainer shaped like a conical hat with one tea-gold leaf floating nearby.
Composition: centered full body with generous transparent margin around the silhouette; hands and feet fully visible; front three-quarter pose.
Style: warm semi-realistic editorial mascot, soft natural light, refined Vietnamese herbal workshop palette, crisp edges suitable for website overlay.
Text/content to render: no text, no logo, no background.
Constraints: true transparent background, clean alpha channel, no shadow, no cropped limbs, no additional people, no packaging.
Avoid: chibi proportions, glamour fashion pose, exaggerated smile, medical accessories, floating text, watermark.
```

### 09 — Chibi note: đang phối vị

**Dùng cho:** section How, tooltip hoặc micro-animation.  
**Tỉ lệ:** `1:1 PNG`. **Đính kèm:** `REF-CHIBI`.

```text
Create a transparent PNG chibi mascot asset for PPHeCa using the attached chibi Thảo reference as the style and identity reference.
Subject: chibi Thảo in the same cream-and-olive outfit and conical hat, carefully using a tiny brass scoop to add colorful herbs into a woven bowl; seven miniature botanical ingredients visible around the bowl.
Composition: complete full body, centered, clear readable silhouette, hands and tool fully visible, room for a small UI speech bubble to the right.
Style: premium Vietnamese botanical art-toy, soft ivory, deep olive and tea-gold palette, gentle textured shading, crisp transparent edge.
Text/content to render: no text, no logo, no background.
Constraints: true transparent background, no drop shadow, no cut-off elements, no medicine imagery.
Avoid: generic kawaii face, rainbow palette, 3D plastic toy sheen, complicated background.
```

### 10 — Chibi note: đặt hộp trà vào quà tặng

**Dùng cho:** CTA gifting hoặc điểm chuyển sang collection.  
**Tỉ lệ:** `1:1 PNG`. **Đính kèm:** `REF-CHIBI` và **một** `REF-PACK` khi cần nhận diện hộp.

```text
Create a transparent PNG chibi mascot asset for PPHeCa using the attached chibi Thảo reference as the style reference. If a PPHeCa product packshot reference is attached, preserve its packaging identity exactly.
Subject: chibi Thảo gently ties a small olive ribbon around a PPHeCa tea gift; she smiles softly and looks at the gift, with one tea-gold leaf accent near the knot.
Composition: centered full body plus compact gift, no cropping, clear silhouette, leave transparent space above for a landing-page label.
Style: Vietnamese herbal workshop art-toy, ivory, deep olive, tea-gold and a touch of clay rose; polished but warm.
Text/content to render: preserve only supplied pack text; generate no new text, no price, no logo.
Constraints: true transparent background, clean alpha, no floor shadow, no altered package geometry, no medical claims.
Avoid: holiday theme, big bow, generic shopping bag, deformed packaging, neon colors.
```

## 7. Quy trình tạo ảnh trong GPT Image 2

1. **Chọn prompt theo mã** và đính kèm đúng reference ghi trong bảng. Với scene không có bao bì, không đính kèm packshot để tránh mô hình tự đưa hộp vào ảnh.
2. **Tạo một phiên bản trước**. Chỉ kiểm tra bốn điều: đúng tỷ lệ, đúng vùng trống cho chữ, đúng mascot/bao bì, không có claim hoặc text do AI tự sinh.
3. Nếu packshot sai, dùng prompt edit này thay vì tạo lại từ đầu:

```text
Edit the provided image. Change only the PPHeCa package region.
Preserve the scene, lighting, camera angle, table, hands, all botanical ingredients and all non-package objects exactly.
Replace the package with the attached official PPHeCa packshot, preserving its exact shape, colors, logo, printed text and proportions.
New result should make the pack upright, fully visible and naturally grounded on the table.
Avoid: changing any other object, new text, incorrect package labels, warped box, medical symbols or glossy marketplace styling.
```

4. Với mascot overlay, chỉ nhận file khi có **nền alpha trong suốt thật**, không có viền trắng, bóng sàn hoặc bàn chân bị cắt.
5. Đặt tên file theo bảng production. Khi tích hợp vào landing, upload lên storage; không nhét ảnh PNG nặng trực tiếp vào mã nguồn.

## 8. Thứ tự tạo để landing nâng chất rõ nhất

Tạo theo thứ tự **01 → 02 → 03 → 04**, vì bốn ảnh này bổ sung phần Why, How, What và CTA còn thiếu rõ nhất. Sau đó tạo **08 → 10** để Thảo xuất hiện như một mascot có hệ thống. Các ảnh 05–07 là lớp nội dung giúp mở rộng social carousel hoặc trang chi tiết từng dòng trà.

> Không dùng ảnh AI thay packshot chính thức trên sàn. Các ảnh scene chỉ làm nhiệm vụ bối cảnh, cảm xúc và kể chuyện; packshot thật luôn là bằng chứng sản phẩm.
