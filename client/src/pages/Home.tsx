/* PPHeCa — Xưởng Thảo Mộc Đương Đại. The supplied GPT visual system creates one guided journey: real Miss PPHeCa leads, chibi notes annotate, official packshots retain product trust. */
import { useEffect, useMemo, useState } from "react";
import { ArrowDown, ArrowRight, Menu, Sparkles, X } from "lucide-react";

const storage = {
  scene: "/manus-storage/boicanh_4d6c17c2.png",
  mascot: "/manus-storage/missppheca_a0da904d.png",
  chibiWelcome: "/manus-storage/misspphecachibi_fff91bc9.png",
  chibiWorkshop: "/manus-storage/misspphecachibi2_f53ad744.png",
  chibiRitual: "/manus-storage/misspphecachibi3_265ae220.png",
  chibiCollection: "/manus-storage/misspphecachibi4_4c57bdce.png",
  ingredients: "/manus-storage/7thanhphan_b7e249af.png",
  ritual: "/manus-storage/3buoc_68f5a19f.png",
  combo: "/manus-storage/combo1_d30e0924.png",
  shelf: "/manus-storage/ppheca_cover_final_07_an_giac_7_vi_9865e51f.png",
};

const shopUrl = "https://vt.tiktok.com/ZS9kmsHgCRh1o-fN0Px/";

const purchaseOptions = [
  { bags: "Túi 05 gói", price: "54.400đ", promotion: "CTKM: mua 1 tặng 5" },
  { bags: "Túi 15 gói", price: "159.200đ", promotion: "Tặng thêm 5 gói" },
];

const products = [
  { name: "Trà Mộc Nhan", sub: "Đông Trùng · 7 vị", ritual: "Khoảng chiều mềm lại", mood: "Một vị trà thơm cho buổi chiều bạn muốn ngồi chậm lại một chút.", image: "/manus-storage/ppheca_cover_final_01_moc_nhan_dong_trung_7_vi_fa8bbc28.png", tone: "rose" },
  { name: "Trà Dưỡng Cốt", sub: "7 vị thảo mộc", ritual: "Nếp chăm đều đặn", mood: "Một lựa chọn cho những ngày bạn muốn giữ nếp chăm sóc thật đều.", image: "/manus-storage/ppheca_cover_final_02_duong_cot_7_vi_158b95b0.png", tone: "clay", note: "Sản phẩm không phải là thuốc." },
  { name: "Trà An Giấc", sub: "7 vị · Lạc Tiên", ritual: "Lời chào cuối ngày", mood: "Cuối ngày rồi, mình pha một cốc ấm và cất bớt những ồn ào nhé.", image: "/manus-storage/ppheca_cover_final_07_an_giac_7_vi_9865e51f.png", tone: "lavender", note: "Sản phẩm không phải là thuốc." },
  { name: "Trà HaMoKhang", sub: "7 vị phối hợp", ritual: "Một cốc dễ mến", mood: "Một hộp trà dễ pha, dễ nhớ cho những nhịp sinh hoạt thường ngày.", image: "/manus-storage/ppheca_cover_refresh_04_hamokhang_c831093d.png", tone: "apricot" },
  { name: "Trà Thanh Can", sub: "Đông Trùng · 7 vị", ritual: "Một nhịp chậm giữa lịch kín", mood: "Một lựa chọn dành cho lịch kín, khi một phút chậm cũng đã rất quý.", image: "/manus-storage/ppheca_cover_refresh_05_thanh_can_62d2a3c5.png", tone: "blue" },
  { name: "Trà Lạc Tiên Sâm Nam", sub: "Lạc Tiên · Sâm Nam", ritual: "Ngồi yên rồi kể nhau nghe", mood: "Nếu hôm nay có nhiều điều chưa nói, mình cứ ngồi yên với một cốc trà trước đã.", image: "/manus-storage/ppheca_cover_final_06_lac_tien_sam_nam_86ca2847.png", tone: "night" },
  { name: "Trà Canh Châu", sub: "Trà túi lọc · 7 vị", ritual: "Biết rõ điều trong cốc", mood: "Bắt đầu bằng điều đơn giản nhất: biết rõ điều gì đang ở trong cốc trà của mình.", image: "/manus-storage/ppheca_cover_refresh_03_canh_chau_6de19000.png", tone: "sage" },
];

const steps = [
  { no: "01", label: "Chọn từng vị", text: "PPHeCa quan sát mùi, sắc và độ quen thuộc của từng nguyên liệu trước khi đưa vào một công thức." },
  { no: "02", label: "Cân lại cho vừa", text: "Bảy vị được đặt cạnh nhau để cốc trà thơm, êm và dễ pha trong nhịp sống hằng ngày." },
  { no: "03", label: "Đóng vào túi", text: "Sau đó, PPHeCa gói lại để khi cần một khoảng nghỉ, bạn chỉ việc đun nước và ngồi xuống." },
];

const chapters = [
  { id: "story", number: "01", label: "Vì sao" },
  { id: "workshop", number: "02", label: "7 vị & phối" },
  { id: "ritual", number: "03", label: "Khoảnh khắc" },
  { id: "collection", number: "04", label: "Chọn hộp" },
];

function TeaMark() {
  return <span className="brand-mark" aria-hidden="true"><i className="tea-filter" /><b className="tea-leaf" /></span>;
}

function MascotNote({ image, title, detail, dark = false }: { image: string; title: string; detail: string; dark?: boolean }) {
  return (
    <div className={dark ? "mascot-note dark-note" : "mascot-note"}>
      <img className="mascot-note-image" src={image} alt="" loading="lazy" />
      <span><small>GHI CHÚ CỦA THẢO</small>{title}<br /><strong>{detail}</strong></span>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(0);
  const [activeChapter, setActiveChapter] = useState("story");
  const active = useMemo(() => products[activeProduct], [activeProduct]);

  useEffect(() => {
    const revealTargets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.14 },
    );
    revealTargets.forEach((target) => revealObserver.observe(target));

    const chaptersObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveChapter(entry.target.id)),
      { rootMargin: "-34% 0px -52% 0px", threshold: 0 },
    );
    chapters.forEach(({ id }) => {
      const target = document.getElementById(id);
      if (target) chaptersObserver.observe(target);
    });

    return () => {
      revealObserver.disconnect();
      chaptersObserver.disconnect();
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <main className="site-shell">
      <div className="tea-rail" aria-label="Hành trình Xưởng Thảo Mộc">
        <span className="rail-title" aria-hidden="true">XƯỞNG THẢO MỘC</span>
        <span className="rail-line" />
        {chapters.map((chapter) => (
          <button key={chapter.id} className={activeChapter === chapter.id ? "rail-stop active" : "rail-stop"} onClick={() => scrollTo(chapter.id)} aria-label={chapter.label}>
            {chapter.number} <small>{chapter.label}</small>
          </button>
        ))}
      </div>

      <header className="site-header">
        <button className="brand-lockup" onClick={() => scrollTo("top")} aria-label="Về đầu trang">
          <TeaMark />
          <span><strong>PPHeCa</strong><small>VIETNAM · HERBAL TEA</small></span>
        </button>
        <nav className={menuOpen ? "header-nav is-open" : "header-nav"} aria-label="Điều hướng chính">
          <button onClick={() => scrollTo("story")}>Câu chuyện PPHeCa</button>
          <button onClick={() => scrollTo("workshop")}>Vào Xưởng Thảo Mộc</button>
          <button onClick={() => scrollTo("collection")}>Chọn nghi thức</button>
          <button className="nav-cta" onClick={() => scrollTo("collection")}>Tìm vị hợp hôm nay <ArrowRight size={15} /></button>
        </nav>
        <button className="menu-trigger" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? "Đóng menu" : "Mở menu"}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow"><span className="eyebrow-line" /> PPHECA · XƯỞNG THẢO MỘC VIỆT</p>
          <h1>Một cốc trà ấm<br />cho những<br /><em>ngày thật.</em></h1>
          <p className="hero-lead">PPHeCa tin rằng chăm sóc bản thân không nhất thiết phải bắt đầu bằng một điều lớn lao. Đôi khi, chỉ là nước nóng, một túi trà thơm và vài phút để ngồi lại cùng mình.</p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={() => scrollTo("collection")}>Tìm vị hợp hôm nay <ArrowRight size={17} /></button>
            <button className="text-link" onClick={() => scrollTo("workshop")}>Vào Xưởng Thảo Mộc <ArrowDown size={16} /></button>
          </div>
          <div className="hero-note"><span className="note-dot" /> Ở đây, bạn không cần chọn thật nhanh.</div>
        </div>
        <div className="hero-art" aria-label="Miss PPHeCa chào bạn ở Xưởng Thảo Mộc" data-reveal>
          <img className="hero-mascot-portrait" src={storage.mascot} alt="Miss PPHeCa, mascot chính thức của thương hiệu" fetchPriority="high" />
          <MascotNote image={storage.chibiWelcome} title="Thảo chào bạn" detail="cùng PPHeCa vào xưởng" />
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-stamp"><Sparkles size={15} /><span>quiet<br />herbal<br />ritual</span></div>
          <div className="hero-caption"><span>01 / 07</span><span>PPHeCa bắt đầu từ bảy vị quen và một khoảng nghỉ thật.</span></div>
        </div>
      </section>

      <section id="story" className="story-section section-pad">
        <div className="section-kicker">VÌ SAO PPHECA BẮT ĐẦU <span>01 · WHY</span></div>
        <div className="story-grid" data-reveal>
          <div className="story-title"><h2>Ai cũng cần một chỗ để</h2><span className="scribble">thở chậm lại.</span></div>
          <div className="story-body"><MascotNote image={storage.chibiWelcome} title="Thảo dẫn chuyện" detail="vì sao PPHeCa bắt đầu" /><p>PPHeCa không được tạo ra để bạn phải sống khác đi chỉ sau một cốc trà. Thương hiệu bắt đầu từ một niềm tin giản dị: giữa những ngày bận rộn, mỗi người đều cần một tín hiệu nhỏ rằng mình cũng đáng được chăm sóc.</p><p>Có thể là rót nước cho mẹ. Có thể là nhắn một người bạn: “Về nhà pha trà đi, rồi kể mình nghe.” PPHeCa tin đó là cách quan tâm không cần nói thật to.</p><div className="golden-bridge"><span>VÌ SAO</span><strong>Một khoảng nghỉ ấm áp cho những ngày thật.</strong><span>THẾ NÀO</span><strong>Nhìn kỹ, phối vừa và gói sẵn bảy vị thảo mộc.</strong><span>ĐIỀU GÌ</span><strong>Những hộp trà để bạn chọn theo nhịp sống của mình.</strong></div><button className="text-link olive" onClick={() => scrollTo("workshop")}>Khám phá cách PPHeCa phối vị <ArrowRight size={15} /></button></div>
        </div>
      </section>

      <section id="workshop" className="workshop-section">
        <figure className="workshop-image" data-reveal>
          <img src={storage.ingredients} alt="Infographic bảy thành phần thảo mộc của PPHeCa" loading="lazy" />
          <figcaption className="image-label">THE 07 INGREDIENT CHARACTERS</figcaption>
        </figure>
        <div className="workshop-copy" data-reveal>
          <MascotNote image={storage.chibiWorkshop} title="Thảo nhắc nhẹ" detail="nhìn thấy mới tin" dark />
          <div className="section-kicker">PPHECA LÀM THẾ NÀO <span>02 · HOW</span></div>
          <h2>PPHeCa bắt đầu từ bảy vị, rồi mới nghĩ đến một cốc trà.</h2>
          <p>Trong xưởng, PPHeCa không gọi đây là những “thành phần thần kỳ”. Đó là bảy người bạn: mỗi vị có mùi, sắc và cá tính riêng; cùng đi vào một công thức để cốc trà thơm, cân bằng và dễ uống.</p>
          <p>PPHeCa nhìn từng vị trước, đặt chúng cạnh nhau sau. Khi mùi hương đủ dịu và cảm giác uống đủ gần gũi cho một ngày bình thường, chúng mới được gói vào túi trà — để một khoảng nghỉ nhỏ trở thành nếp chăm sóc bản thân dễ duy trì.</p>
          <div className="step-list">{steps.map((step) => <div className="step-item" key={step.no}><span className="step-no">{step.no}</span><div><strong>{step.label}</strong><p>{step.text}</p></div></div>)}</div>
        </div>
      </section>

      <section id="ritual" className="ritual-section section-pad">
        <div className="ritual-copy" data-reveal>
          <MascotNote image={storage.chibiRitual} title="Thảo nhắc khẽ" detail="pha chậm một chút" />
          <div className="section-kicker">MỘT KHOẢNG NGHỈ NHỎ <span>03</span></div>
          <h2>Không cần thêm thời gian. Chỉ giữ lại ba phút thôi.</h2>
          <p>PPHeCa gợi ý một khoảng nghỉ rất đơn giản: đặt điện thoại xuống, cho túi trà vào cốc và đợi nước nóng ôm lấy mùi thơm. Một thói quen nhỏ có thể bắt đầu mà không cần cầu kỳ, cũng không cần chờ đến khi mọi thứ đã xong xuôi.</p>
          <div className="pull-quote">“Mình ngửi trước một chút nhé. Rồi hãy uống.”</div>
          <div className="annotation"><span>Thảo ghi chú</span> — hôm nay, bạn có thể bắt đầu từ một điều nhỏ.</div>
        </div>
        <figure className="ritual-art" data-reveal>
          <img src={storage.ritual} alt="Infographic ba bước cho một khoảng nghỉ cùng trà PPHeCa" loading="lazy" />
          <figcaption className="vertical-label">A SMALL RITUAL FOR A FULL DAY</figcaption>
        </figure>
      </section>

      <section id="collection" className="collection-section section-pad">
        <div className="collection-header" data-reveal>
          <div>
            <MascotNote image={storage.chibiCollection} title="Thảo gợi ý" detail="bảy nghi thức ở đây" />
            <div className="section-kicker">ĐÂY LÀ HỘP TRÀ <span>04 · WHAT</span></div>
            <h2>Hôm nay, bạn muốn<br /><em>chọn nghi thức nào?</em></h2>
          </div>
          <p>Đây là ảnh thật của từng hộp trà PPHeCa. Chọn vị hợp với nhịp hôm nay, rồi chọn quy cách 05 hoặc 15 gói; phần còn lại là để một cốc nước nóng làm giúp mình.</p>
        </div>
        <div className="collection-feature" data-reveal>
          <div className="feature-image"><img src={active.image} alt={active.name} loading="lazy" /></div>
          <div className={`feature-copy tone-${active.tone}`}><span className="feature-index">NGHI THỨC 0{activeProduct + 1}</span><h3>{active.name}</h3><p className="feature-sub">{active.sub}</p><p className="feature-ritual">{active.ritual}</p><p>{active.mood}</p>{active.note && <small className="product-legal-note">{active.note}</small>}<div className="price-grid" aria-label="Quy cách và giá bán"><div className="price-option"><span>05 gói</span><strong>54.400đ</strong><small>CTKM: mua 1 tặng 5</small></div><div className="price-option featured"><span>15 gói</span><strong>159.200đ</strong><small>Tặng thêm 5 gói</small></div></div><p className="price-caption">Giá và ưu đãi theo thông tin PPHeCa cung cấp; kiểm tra lại tại gian hàng trước khi thanh toán.</p><div className="feature-proof"><span><i /> ẢNH HỘP TRÀ THẬT</span><span>packshot PPHeCa theo bao bì</span></div><a className="button button-cream" href={shopUrl} target="_blank" rel="noreferrer">Chọn quy cách này <ArrowRight size={16} /></a></div>
        </div>
        <div className="product-rail" data-reveal>{products.map((product, index) => <button key={product.name} className={index === activeProduct ? "product-thumb is-active" : "product-thumb"} onClick={() => setActiveProduct(index)}><span className="product-choice-no">0{index + 1}</span><img src={product.image} alt="" loading="lazy" /><span>{product.name}</span><small>{product.ritual}</small><b>Từ 54.400đ</b></button>)}</div>
      </section>

      <section className="trust-section section-pad">
        <div className="trust-card" data-reveal><div><div className="section-kicker">NẾU BẠN MUỐN GỬI AI ĐÓ <span>05</span></div><h2>PPHeCa gói giúp bạn<br /><em>một lời hỏi thăm.</em></h2><p>Có những dịp chẳng biết nói gì cho vừa. Vậy thì gửi một hộp trà cũng được. Người nhận có thể pha lúc nào họ cần, và biết rằng bạn vẫn đang nghĩ đến họ.</p><a className="button button-primary" href={shopUrl} target="_blank" rel="noreferrer">Xem bộ trà quà tặng <ArrowRight size={17} /></a></div><img src={storage.combo} alt="Visual combo sản phẩm PPHeCa" loading="lazy" /></div>
      </section>

      <section className="closing-section">
        <div className="closing-art" data-reveal><img src={storage.shelf} alt="Sản phẩm trà An Giấc PPHeCa với bao bì thực tế" loading="lazy" /></div>
        <div className="closing-copy" data-reveal><div className="section-kicker">PPHECA LUÔN Ở ĐÂY <span>06</span></div><h2>Chọn một hộp trà<br />cho khoảng nghỉ<br />của bạn.</h2><p>Khi cần một khoảng nghỉ, hãy quay lại Xưởng Thảo Mộc. PPHeCa luôn sẵn sàng kể bạn nghe về từng vị trà, thật chậm rãi.</p><button className="button button-cream" onClick={() => scrollTo("collection")}>Chọn một nghi thức <ArrowRight size={17} /></button><div className="legal-note">Hình mascot và visual minh họa dùng cho storytelling. Sản phẩm và thông tin trên landing page cần đối chiếu với bao bì, hồ sơ công bố và hướng dẫn sử dụng chính thức trước khi đăng bán.</div></div>
      </section>

      <footer className="site-footer"><div className="footer-brand"><TeaMark /><div><strong>PPHeCa</strong><small>XƯỞNG THẢO MỘC · VIỆT NAM</small></div></div><p>Những cốc trà nhỏ cho những ngày thật.</p><span>© 2026 PPHeCa VietNam</span></footer>
      <button className="floating-cta" onClick={() => scrollTo("collection")}><span>Chọn một nghi thức</span><ArrowRight size={16} /></button>
    </main>
  );
}
