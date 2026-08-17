# PPHeCa — GPT Image 2 Prompt Pack

## Mục tiêu và cách dùng

Bộ prompt này tạo một hệ visual cho landing page **PPHeCa — Xưởng Thảo Mộc**. Phần hình AI dùng để kể chuyện về thương hiệu, mascot và nghi thức; **packshot thực tế** vẫn là nguồn xác thực duy nhất cho tên sản phẩm, bao bì, thành phần, cảnh báo và claim được phép sử dụng.

Hãy tạo ảnh ở chế độ chất lượng cao, lưu PNG cho mascot cần nền trong suốt và JPG/PNG cho ảnh kể chuyện. Với các prompt yêu cầu ảnh tham chiếu, phải đính kèm đúng ảnh nêu trong cột “Ảnh tham chiếu”. Không yêu cầu AI viết chữ; chữ trên landing page sẽ được render bằng HTML để tránh sai tên sản phẩm và thông tin bao bì.

| Mã asset | Vai trò trên landing page | Tỷ lệ | Ảnh tham chiếu bắt buộc |
|---|---|---:|---|
| A01 | Character sheet mascot Thảo | 4:3 | Không bắt buộc |
| A02–A05 | Mascot pose riêng lẻ | 1:1 | Kết quả A01 |
| B01 | Hero combo sản phẩm thật | 1:1 | `combosanphamppheca.webp` + A01 |
| C01 | Infographic “Bảy vị vào xưởng” | 16:9 | A01 |
| C02 | Infographic “Một nghi thức ba nhịp” | 16:9 | A01 |
| C03 | Infographic “Chọn trà theo khoảnh khắc” | 16:9 | A01 |
| D01–D07 | Visual storytelling cho từng SKU | 4:5 | Ảnh cover/packshot đúng SKU + A01 |

> **Quy tắc an toàn nội dung:** Không để ảnh tạo ra tên sản phẩm mới, logo mới, thành phần mới, huy hiệu/chứng nhận mới, chỉ định điều trị, biểu tượng y khoa, viên thuốc, bác sĩ, trước–sau, lời hứa “chữa”, “trị”, “ngủ ngay”, “giảm đau”, “thải độc” hoặc bất kỳ claim sức khỏe nào chưa được xác minh. Với ảnh có packshot thật, yêu cầu model **giữ nguyên bao bì**, không tự sửa nhãn.

---

## A01 — Mascot master: Thảo

**Không cần ảnh tham chiếu.** Đây là nguồn chuẩn để đính kèm vào toàn bộ prompt phía sau.

```text
Create a premium transparent-background character sheet for the PPHeCa brand mascot “Thảo”, designed for a high-end Vietnamese herbal tea storytelling website. Character: a small rounded tea-sprite, cute but sophisticated designer art-toy character, cream-ivory matte vinyl skin, olive green work apron over a simple cream tunic, a tiny woven Vietnamese conical nón lá hat that functions as a tea strainer, and a transparent backpack holding seven tiny glowing herbal charms in tea-gold. Face has large glossy black eyes with warm catchlights, a tiny reassuring smile, rounded mitten hands, chubby short limbs, and a gentle curious personality.

Include four full-body poses in one clean character sheet: waving welcome, presenting a tea cup, walking with a small tray of herbs, and sitting while writing a note. All four poses must be the same exact character design, facial proportions, materials, clothing, hat, backpack, color palette and lighting. Visual style: contemporary designer vinyl collectible, editorial toy photography, gentle three-point studio lighting, minimal elegant ivory composition, deep olive and tea-gold details, generous clean whitespace.

No text, no lettering, no watermark, no readable labels, no logo, no medical symbols, no pills, no doctor imagery, no human faces. True transparent background with clean alpha edges; do not use a colored backdrop. Aspect ratio 4:3.
```

## A02–A05 — Mascot pose pack

**Đính kèm kết quả A01 làm ảnh tham chiếu.** Tạo riêng từng ảnh, chỉ thay đoạn `[POSE]`.

| Asset | `[POSE]` |
|---|---|
| A02 | `Thảo is waving with one hand while holding a tiny tea leaf in the other, looking toward the viewer.` |
| A03 | `Thảo is carrying a small wooden tray with a transparent amber tea cup, walking with a gentle forward step.` |
| A04 | `Thảo sits on a folded paper note and points toward an imaginary story caption above her.` |
| A05 | `Thảo holds a small brass tea strainer and looks curiously at it, as if checking the aroma.` |

```text
Using the supplied mascot character sheet as the non-negotiable identity reference, create one isolated full-body cutout of Thảo. [POSE] Keep the exact same cream-ivory vinyl body, olive apron, cream tunic, woven nón lá tea-strainer hat, transparent herb-charm backpack, face shape, glossy eyes, tiny smile, body proportions and premium designer art-toy material. Use gentle studio lighting and a clean alpha-cut transparent background. The pose must feel warm, natural and usable as a small web overlay. No text, no lettering, no logo, no watermark, no medical imagery, no human figures. Centered composition, 1:1.
```

---

## B01 — Hero combo từ ảnh thực tế

**Đính kèm:** `combosanphamppheca.webp` và A01.

```text
Create a premium square e-commerce hero visual for the PPHeCa herbal tea collection, using the supplied real combo-product image as the authoritative source. Preserve the actual product pouches: their real proportions, colors, packaging shapes, visual arrangement and collection count. Do not invent new packaging, labels, ingredients, certifications, logos or health claims. Recompose the real products as a refined editorial still life on a pale natural wood platform, with a warm ivory background, soft olive botanical shadows, golden morning tea light, one clear amber tea cup and small tasteful trays of real loose herbs.

Include Thảo, the exact mascot from the supplied character reference, standing at the outer edge and presenting the collection with an open palm. Thảo must support the story and must not cover any real product pouch. Strong hierarchy: the actual combo is central and easily legible; visual mood is premium, calm, Vietnamese herbal tea, trustworthy and giftable. Leave a clean copy-safe zone in the upper-left.

No text, no lettering, no readable new labels, no watermark, no medical imagery, no pills, no doctors, no before-after comparison. Aspect ratio 1:1.
```

---

## C01 — Infographic “Bảy vị vào xưởng”

**Đính kèm:** A01.

```text
Create a highly polished visual storytelling infographic illustration for the PPHeCa website with no text. Use the supplied Thảo mascot reference as the exact character anchor. Scene: Thảo guides seven refined tiny herb characters along a curved deep-olive and tea-gold path through a miniature Vietnamese herbal tea workshop. The seven ingredients are visually distinct: red jujube, white jasmine bud, red goji berry, orange cordyceps sprig, green stevia leaf, brown rice grain and yellow chrysanthemum.

The path must communicate a clear visual sequence from selecting ingredients, to a transparent pyramid tea bag, to a warm amber tea cup at the end. Use a warm ivory background, deep olive structural details, tea-gold highlights and gentle editorial lighting. Leave a large copy-safe zone on the upper-left. This should feel like a premium designer art-toy editorial infographic, not a child cartoon and not a medical graphic.

No text, no lettering, no logos, no readable labels, no medical symbols, no pills, no doctors, no human faces, no watermark. Aspect ratio 16:9.
```

## C02 — Infographic “Một nghi thức ba nhịp”

**Đính kèm:** A01.

```text
Create a high-end visual storytelling infographic illustration for PPHeCa with no text. Use the supplied Thảo mascot reference as the exact character anchor. Show a graceful three-stage tea ritual as one flowing visual timeline rather than separate literal panels. Stage one: Thảo opens a real-looking transparent tea pouch. Stage two: Thảo places a tea bag into a warm ivory ceramic cup with rising steam. Stage three: Thảo sits beside the finished amber tea in a quiet early-morning window scene. Use subtle visual cues for water, aroma and a pause, but do not use words, letters or labels.

Art direction: premium Vietnamese herbal tea editorial, warm ivory paper-like background, deep olive curves, tea-gold energy lines, a restrained clay-rose accent and elegant clear composition. Keep a large copy-safe zone on the right for web text. No medical imagery, no pills, no doctors, no health-result visuals, no watermark. Aspect ratio 16:9.
```

## C03 — Infographic “Chọn trà theo khoảnh khắc”

**Đính kèm:** A01.

```text
Create a premium web storytelling illustration for PPHeCa with no text. Use the supplied Thảo mascot reference as the exact character anchor. Scene: Thảo stands in the center of a circular moment map with four harmonious mini environments flowing around her: a calm early-morning window, a focused work desk, a warm family table and a quiet evening lamp. Each environment contains a different amber herbal tea cup and subtle botanical ingredients, all connected by a deep-olive curved tea rail with small tea-gold dots.

The visual should communicate choosing a gentle tea ritual for a moment in the day, without implying treatment or health outcomes. Use warm ivory, olive, tea-gold, gentle berry and restrained lavender accents. Make it premium, editorial and art-toy led. Leave a broad copy-safe zone on the left. No text, letters, logos, readable labels, medical symbols, pills, doctors, before-after imagery or watermark. Aspect ratio 16:9.
```

---

## D01–D07 — Visual storytelling cho từng sản phẩm

**Đính kèm:** ảnh packshot/cover đúng SKU và A01. Dùng template dưới đây cho mỗi SKU, thay các trường trong ngoặc vuông.

| Mã | SKU | `[MOMENT]` | `[ACCENT]` |
|---|---|---|---|
| D01 | Trà Mộc Nhan Đông Trùng 7 vị | `a soft self-care moment in early morning light` | `clay rose and tea gold` |
| D02 | Trà Dưỡng Cốt 7 vị | `a slow, practical family tea moment at a pale wood table` | `sage green and warm grain` |
| D03 | Trà An Giấc 7 vị | `a quiet, low-light evening wind-down with a book closed nearby` | `muted lavender and deep olive` |
| D04 | Trà HaMoKhang | `a bright mid-day pause beside a window and a small tray` | `apricot and olive` |
| D05 | Trà Thanh Can Đông Trùng 7 vị | `a late-afternoon reset in a calm workspace` | `soft blue-green and tea gold` |
| D06 | HealthTeaRest Lạc Tiên Sâm Nam | `a quiet nighttime tea pause under a warm lamp` | `navy green and soft gold` |
| D07 | HEALTHTEALIV Canh Châu | `a simple kitchen-counter preparation moment with ingredients nearby` | `fresh sage and pale yellow` |

```text
Create a premium vertical product-story visual for PPHeCa, using the supplied real packshot for [PRODUCT] as the authoritative source. Preserve the exact real pouch/box shape, packaging colors, label content and product identity. Do not replace, redraw, simplify or invent packaging details. Set the product in [MOMENT]. Use [ACCENT] as restrained storytelling accents, with warm ivory and deep olive as the stable brand frame. Include Thảo from the supplied mascot character sheet as a small guide who gestures toward the tea ritual without covering the product.

Composition: the actual packshot is central and clean; the ritual context sits around it as editorial support; one amber tea cup, a few botanicals that visually harmonize with the real packshot, and gentle studio-like light. Leave a vertical copy-safe zone in the upper third. The result should feel premium, calm and suitable for a landing-page story section; it must not look like a marketplace flyer.

No text, no lettering, no new labels, no fake logo, no health claim, no medical imagery, no pills, no doctors, no watermark. Aspect ratio 4:5.
```

---

## Sau khi tạo ảnh, hãy gửi lại thế nào?

Gửi lại **A01**, toàn bộ pose A02–A05, B01, C01–C03 và các D-series bạn đã tạo. Không cần nén nếu tổng dung lượng vẫn tải được; tên file nên giữ đúng mã asset để tôi đặt đúng vị trí trên landing page. Với B01 và D-series, nên gửi thêm cả ảnh gốc GPT xuất ra lẫn phiên bản bạn đã chọn cuối cùng nếu đã có chỉnh sửa.

Khi nhận ảnh, tôi sẽ tích hợp theo cấu trúc sau: B01 vào hero/combo CTA; C01–C03 vào ba khối storytelling; A02–A05 thành các layer animation; D01–D07 vào product story drawer hoặc rail. Animation chỉ dùng `transform` và `opacity`, có tùy chọn giảm chuyển động theo thiết lập hệ điều hành, nên vẫn nhẹ và phù hợp mobile.
