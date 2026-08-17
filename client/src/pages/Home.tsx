/* PPHeCa — Xưởng Thảo Mộc Đương Đại. Editorial storytelling landing page with real packshots as trust anchors. */
import { useMemo, useState } from "react";
import { ArrowDown, ArrowRight, Check, ChevronDown, Leaf, Menu, Sparkles, X } from "lucide-react";

  const storage = {
  mascot: "/manus-storage/combosanphamppheca_dae8d03c.webp",
  hero: "/manus-storage/ppheca_cover_final_01_moc_nhan_dong_trung_7_vi_fa8bbc28.png",
  herbs: "/manus-storage/combosanphamppheca_dae8d03c.webp",
  ritual: "/manus-storage/ppheca_cover_final_06_lac_tien_sam_nam_86ca2847.png",
  shelf: "/manus-storage/ppheca_cover_final_07_an_giac_7_vi_9865e51f.png",
  combo: "/manus-storage/combosanphamppheca_dae8d03c.webp",
};

const products = [
  { name: "Trà Mộc Nhan", sub: "Đông Trùng · 7 vị", mood: "Một ngụm trà cho khoảng nghỉ mềm hơn.", image: "/manus-storage/ppheca_cover_final_01_moc_nhan_dong_trung_7_vi_fa8bbc28.png", tone: "rose" },
  { name: "Trà Dưỡng Cốt", sub: "7 vị thảo mộc", mood: "Một lựa chọn chăm sóc mỗi ngày.", image: "/manus-storage/ppheca_cover_final_02_duong_cot_7_vi_158b95b0.png", tone: "clay" },
  { name: "Trà An Giấc", sub: "7 vị · Lạc Tiên", mood: "Khép ngày bằng một nghi thức dịu.", image: "/manus-storage/ppheca_cover_final_07_an_giac_7_vi_9865e51f.png", tone: "lavender" },
  { name: "Trà HaMoKhang", sub: "7 vị phối hợp", mood: "Thảo mộc gần gũi, pha thật dễ.", image: "/manus-storage/ppheca_cover_refresh_04_hamokhang_c831093d.png", tone: "apricot" },
  { name: "Trà Thanh Can", sub: "Đông Trùng · 7 vị", mood: "Một phút chậm giữa ngày nhiều việc.", image: "/manus-storage/ppheca_cover_refresh_05_thanh_can_62d2a3c5.png", tone: "blue" },
  { name: "HealthTeaRest", sub: "Lạc Tiên Sâm Nam", mood: "Đặt xuống những ồn ào còn lại.", image: "/manus-storage/ppheca_cover_final_06_lac_tien_sam_nam_86ca2847.png", tone: "night" },
  { name: "HEALTHTEALIV", sub: "Canh Châu · trà túi lọc", mood: "Bắt đầu từ nguyên liệu rõ ràng.", image: "/manus-storage/ppheca_cover_refresh_03_canh_chau_6de19000.png", tone: "sage" },
];

const steps = [
  { no: "01", label: "Nguyên liệu", text: "Bảy vị quen thuộc được nhìn thấy, gọi tên và đặt vào đúng chỗ." },
  { no: "02", label: "Phối vị", text: "Mỗi công thức là một cách sắp xếp để vị trà dễ bước vào đời sống." },
  { no: "03", label: "Khoảnh khắc", text: "Pha một túi trà. Mở một khoảng thở. Không cần làm gì thêm." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(0);
  const active = useMemo(() => products[activeProduct], [activeProduct]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main className="site-shell">
      <div className="tea-rail" aria-label="Hành trình Xưởng Thảo Mộc"><span className="rail-line" /><span className="rail-stop active">01 <small>Nguyên liệu</small></span><span className="rail-stop">02 <small>Phối vị</small></span><span className="rail-stop">03 <small>Khoảnh khắc</small></span><span className="rail-stop">04 <small>Chọn hộp</small></span></div>
      <header className="site-header">
        <button className="brand-lockup" onClick={() => scrollTo("top")} aria-label="Về đầu trang">
          <span className="brand-mark"><Leaf size={18} strokeWidth={2.5} /></span>
          <span><strong>PPHeCa</strong><small>VIETNAM · HERBAL TEA</small></span>
        </button>
        <nav className={menuOpen ? "header-nav is-open" : "header-nav"} aria-label="Điều hướng chính">
          <button onClick={() => scrollTo("story")}>Câu chuyện</button>
          <button onClick={() => scrollTo("workshop")}>Xưởng thảo mộc</button>
          <button onClick={() => scrollTo("collection")}>Bộ sưu tập</button>
          <button className="nav-cta" onClick={() => scrollTo("collection")}>Chọn một nghi thức <ArrowRight size={15} /></button>
        </nav>
        <button className="menu-trigger" onClick={() => setMenuOpen((v) => !v)} aria-label="Mở menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> XƯỞNG THẢO MỘC · TỪ VIỆT NAM</p>
          <h1>Một túi trà.<br /><em>Bảy vị.</em><br />Một khoảng thở.</h1>
          <p className="hero-lead">PPHeCa tạo ra những nghi thức trà thảo mộc nhỏ, để việc chăm sóc bản thân và gia đình có thể bắt đầu từ một điều thật giản dị.</p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={() => scrollTo("collection")}>Xem từng vị <ArrowRight size={17} /></button>
            <button className="text-link" onClick={() => scrollTo("workshop")}>Theo Thảo vào xưởng <ArrowDown size={16} /></button>
          </div>
          <div className="hero-note"><span className="note-dot" /> Không hứa quá mức. Chỉ làm trà chỉn chu hơn mỗi ngày.</div>
        </div>
        <div className="hero-art">
          <div className="mascot-note hero-mascot-note"><span className="css-mascot mini"><i className="mascot-hat" /><b /><em /></span><span>Thảo mở cửa xưởng<br /><strong>mời bạn vào xem</strong></span></div>
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <img src={storage.hero} alt="Mascot Thảo trong Xưởng Thảo Mộc PPHeCa" />
          <div className="hero-stamp"><Sparkles size={15} /><span>quiet<br />herbal<br />ritual</span></div>
          <div className="hero-caption"><span>01 / 07</span><span>Thảo mở cửa xưởng</span></div>
        </div>
      </section>

      <section id="story" className="story-section section-pad">
        <div className="section-kicker">CÂU CHUYỆN THƯƠNG HIỆU <span>01</span></div>
        <div className="story-grid">
          <div className="story-title"><h2>Chăm sóc không cần ồn ào.</h2><span className="scribble">chỉ cần đúng lúc.</span></div>
          <div className="story-body"><p>Trong những ngày bận rộn, có những cách quan tâm rất nhỏ: rót một cốc nước ấm, nhắc nhau nghỉ một chút, hay gửi cho ai đó một hộp trà vừa đủ dễ dùng.</p><p>PPHeCa bắt đầu từ niềm tin ấy. Chúng tôi gọi nơi tạo ra những công thức của mình là <strong>Xưởng Thảo Mộc</strong> — một không gian nơi nguyên liệu được nhìn thấy, câu chuyện được kể rõ, và mỗi túi trà có một lý do để xuất hiện.</p><button className="text-link olive" onClick={() => scrollTo("workshop")}>Đi sâu hơn vào câu chuyện <ArrowRight size={15} /></button></div>
        </div>
      </section>

      <section id="workshop" className="workshop-section">
        <div className="workshop-image"><img src={storage.herbs} alt="Bảy nhân vật nguyên liệu trong Xưởng Thảo Mộc" /><span className="image-label">HERB CHARACTERS / 07</span></div>
        <div className="workshop-copy"><div className="mascot-note dark-note"><span className="css-mascot"><i className="mascot-hat" /><b /><em /></span><span>Thảo ghi chú<br /><strong>nhìn thấy mới tin</strong></span></div><div className="section-kicker">BÊN TRONG XƯỞNG <span>02</span></div><h2>Thảo biết mỗi vị trà đều có một tính cách.</h2><p>Thảo là mascot của PPHeCa — một tea-sprite nhỏ, đội nón lá làm phễu lọc trà, mang theo bảy charm nguyên liệu trong chiếc balô trong suốt.</p><p>Cô ấy không thay bạn quyết định. Thảo chỉ dẫn bạn đi một vòng, để bạn chọn được nghi thức phù hợp với nhịp sống của mình.</p><div className="step-list">{steps.map((step) => <div className="step-item" key={step.no}><span className="step-no">{step.no}</span><div><strong>{step.label}</strong><p>{step.text}</p></div></div>)}</div></div>
      </section>

      <section className="ritual-section section-pad">
        <div className="ritual-copy"><div className="mascot-note"><span className="css-mascot mini"><i className="mascot-hat" /><b /><em /></span><span>Thảo ghi chú<br /><strong>pha chậm một chút</strong></span></div><div className="section-kicker">MỘT KHOẢNG NGHỈ <span>03</span></div><h2>Đôi khi, điều tốt nhất trong ngày là một nhịp chậm.</h2><p>Không cần biến việc uống trà thành một nghi thức cầu kỳ. Chỉ cần một chiếc cốc, nước nóng, và vài phút không bị kéo đi bởi những thông báo tiếp theo.</p><div className="pull-quote">“Pha chậm một chút. Ngửi trước một chút. Rồi hãy uống.”</div><div className="annotation"><span>Thảo ghi chú</span> — bắt đầu từ điều bạn có thể làm hôm nay.</div></div>
        <div className="ritual-art"><img src={storage.ritual} alt="Thảo chuẩn bị một cốc trà trong ánh sáng sớm" /><span className="vertical-label">A SMALL RITUAL FOR A FULL DAY</span></div>
      </section>

      <section id="collection" className="collection-section section-pad">
        <div className="collection-header"><div><div className="mascot-note collection-note"><span className="css-mascot mini"><i className="mascot-hat" /><b /><em /></span><span>Thảo đã chọn sẵn<br /><strong>bảy tính cách trà</strong></span></div><div className="section-kicker">BỘ SƯU TẬP <span>04</span></div><h2>Chọn một nghi thức<br /><em>cho hôm nay.</em></h2></div><p>Ảnh sản phẩm thật được dùng làm điểm neo tin cậy. Hãy bắt đầu từ cảm giác bạn muốn tạo ra trong một ngày bình thường.</p></div>
        <div className="collection-feature"><div className="feature-image"><img src={active.image} alt={active.name} /></div><div className={`feature-copy tone-${active.tone}`}><span className="feature-index">0{activeProduct + 1} / 07</span><h3>{active.name}</h3><p className="feature-sub">{active.sub}</p><p>{active.mood}</p><button className="button button-cream" onClick={() => scrollTo("collection")}>Xem sản phẩm <ArrowRight size={16} /></button><div className="feature-dots">{products.map((product, i) => <button key={product.name} className={i === activeProduct ? "dot active" : "dot"} onClick={() => setActiveProduct(i)} aria-label={`Xem ${product.name}`} />)}</div></div></div>
        <div className="product-rail">{products.map((product, i) => <button key={product.name} className={i === activeProduct ? "product-thumb is-active" : "product-thumb"} onClick={() => setActiveProduct(i)}><img src={product.image} alt="" /><span>{product.name}</span><small>{product.sub}</small></button>)}</div>
      </section>

      <section className="trust-section section-pad"><div className="trust-card"><div><div className="section-kicker">MÓN QUÀ DỄ GỬI <span>05</span></div><h2>Một hộp trà để nói:<br /><em>“Mình nhớ bạn.”</em></h2><p>Combo PPHeCa là lựa chọn cho những dịp không cần nói dài. Một bộ sưu tập đủ vị, gói trong cảm giác chăm sóc dễ trao đi.</p><button className="button button-primary" onClick={() => scrollTo("collection")}>Xem combo <ArrowRight size={17} /></button></div><img src={storage.combo} alt="Combo sản phẩm PPHeCa" /></div></section>

      <section className="closing-section"><div className="closing-art"><img src={storage.shelf} alt="Thảo bên kệ sản phẩm PPHeCa" /></div><div className="closing-copy"><div className="section-kicker">CỬA XƯỞNG ĐANG MỞ <span>06</span></div><h2>Chọn một túi trà.<br />Mở một khoảng thở.</h2><p>Thảo hẹn bạn ở Xưởng Thảo Mộc — nơi những điều nhỏ được làm thật chỉn chu.</p><button className="button button-cream" onClick={() => scrollTo("collection")}>Bước vào xưởng <ArrowRight size={17} /></button><div className="legal-note">Hình mascot và visual minh họa dùng cho storytelling. Sản phẩm và thông tin trên landing page cần đối chiếu với bao bì, hồ sơ công bố và hướng dẫn sử dụng chính thức trước khi đăng bán.</div></div></section>

      <footer className="site-footer"><div className="footer-brand"><span className="brand-mark"><Leaf size={18} /></span><div><strong>PPHeCa</strong><small>XƯỞNG THẢO MỘC · VIỆT NAM</small></div></div><p>Những nghi thức trà dịu lành cho nhịp sống thật.</p><span>© 2026 PPHeCa VietNam</span></footer>
      <button className="floating-cta" onClick={() => scrollTo("collection")}><span>Chọn trà</span><ArrowRight size={16} /></button>
    </main>
  );
}
