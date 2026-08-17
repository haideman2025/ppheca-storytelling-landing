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

const products = [
  { name: "Trà Mộc Nhan", sub: "Đông Trùng · 7 vị", mood: "Một ngụm trà cho khoảng nghỉ mềm hơn.", image: "/manus-storage/ppheca_cover_final_01_moc_nhan_dong_trung_7_vi_fa8bbc28.png", tone: "rose" },
  { name: "Trà Dưỡng Cốt", sub: "7 vị thảo mộc", mood: "Một lựa chọn chăm sóc mỗi ngày.", image: "/manus-storage/ppheca_cover_final_02_duong_cot_7_vi_158b95b0.png", tone: "clay", note: "Sản phẩm không phải là thuốc." },
  { name: "Trà An Giấc", sub: "7 vị · Lạc Tiên", mood: "Khép ngày bằng một nghi thức dịu.", image: "/manus-storage/ppheca_cover_final_07_an_giac_7_vi_9865e51f.png", tone: "lavender", note: "Sản phẩm không phải là thuốc." },
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

const chapters = [
  { id: "top", number: "01", label: "Mở cửa xưởng" },
  { id: "workshop", number: "02", label: "Bảy vị" },
  { id: "ritual", number: "03", label: "Ba bước" },
  { id: "collection", number: "04", label: "Chọn trà" },
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
  const [activeChapter, setActiveChapter] = useState("top");
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
          <button onClick={() => scrollTo("story")}>Câu chuyện</button>
          <button onClick={() => scrollTo("workshop")}>Xưởng thảo mộc</button>
          <button onClick={() => scrollTo("collection")}>Bộ sưu tập</button>
          <button className="nav-cta" onClick={() => scrollTo("collection")}>Chọn một nghi thức <ArrowRight size={15} /></button>
        </nav>
        <button className="menu-trigger" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? "Đóng menu" : "Mở menu"}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow"><span className="eyebrow-line" /> XƯỞNG THẢO MỘC · TỪ VIỆT NAM</p>
          <h1>Một túi trà.<br /><em>Bảy vị.</em><br />Một khoảng thở.</h1>
          <p className="hero-lead">PPHeCa tạo ra những nghi thức trà thảo mộc nhỏ, để việc chăm sóc bản thân và gia đình có thể bắt đầu từ một điều thật giản dị.</p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={() => scrollTo("collection")}>Xem từng vị <ArrowRight size={17} /></button>
            <button className="text-link" onClick={() => scrollTo("workshop")}>Theo Thảo vào xưởng <ArrowDown size={16} /></button>
          </div>
          <div className="hero-note"><span className="note-dot" /> Không hứa quá mức. Chỉ làm trà chỉn chu hơn mỗi ngày.</div>
        </div>
        <div className="hero-art" aria-label="Miss PPHeCa chào bạn ở Xưởng Thảo Mộc" data-reveal>
          <img className="hero-scene" src={storage.scene} alt="Không gian Xưởng Thảo Mộc PPHeCa" fetchPriority="high" />
          <span className="hero-scene-wash" />
          <img className="hero-mascot-portrait" src={storage.mascot} alt="Miss PPHeCa, mascot chính thức của thương hiệu" fetchPriority="high" />
          <MascotNote image={storage.chibiWelcome} title="Thảo mở cửa xưởng" detail="mời bạn vào xem" />
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-stamp"><Sparkles size={15} /><span>quiet<br />herbal<br />ritual</span></div>
          <div className="hero-caption"><span>01 / 07</span><span>Miss PPHeCa · chủ xưởng kể chuyện</span></div>
        </div>
      </section>

      <section id="story" className="story-section section-pad">
        <div className="section-kicker">CÂU CHUYỆN THƯƠNG HIỆU <span>01</span></div>
        <div className="story-grid" data-reveal>
          <div className="story-title"><h2>Chăm sóc không cần ồn ào.</h2><span className="scribble">chỉ cần đúng lúc.</span></div>
          <div className="story-body"><p>Trong những ngày bận rộn, có những cách quan tâm rất nhỏ: rót một cốc nước ấm, nhắc nhau nghỉ một chút, hay gửi cho ai đó một hộp trà vừa đủ dễ dùng.</p><p>PPHeCa bắt đầu từ niềm tin ấy. Chúng tôi gọi nơi tạo ra những công thức của mình là <strong>Xưởng Thảo Mộc</strong> — một không gian nơi nguyên liệu được nhìn thấy, câu chuyện được kể rõ, và mỗi túi trà có một lý do để xuất hiện.</p><button className="text-link olive" onClick={() => scrollTo("workshop")}>Đi sâu hơn vào câu chuyện <ArrowRight size={15} /></button></div>
        </div>
      </section>

      <section id="workshop" className="workshop-section">
        <figure className="workshop-image" data-reveal>
          <img src={storage.ingredients} alt="Infographic bảy thành phần thảo mộc của PPHeCa" loading="lazy" />
          <figcaption className="image-label">THE 07 INGREDIENT CHARACTERS</figcaption>
        </figure>
        <div className="workshop-copy" data-reveal>
          <MascotNote image={storage.chibiWorkshop} title="Thảo ghi chú" detail="nhìn thấy mới tin" dark />
          <div className="section-kicker">BÊN TRONG XƯỞNG <span>02</span></div>
          <h2>Mỗi vị trà đều có một tính cách.</h2>
          <p>Thảo là gương mặt dẫn chuyện của PPHeCa, mang vẻ mộc mạc từ nhân vật trên bao bì. Cô ấy mời bạn đi một vòng, để thấy những thành phần đã làm nên câu chuyện của từng hộp trà.</p>
          <p>Không có lời hứa thay bạn quyết định. Chỉ có thông tin rõ ràng, nguyên liệu được đặt tên và một lựa chọn phù hợp với nhịp sống của bạn.</p>
          <div className="step-list">{steps.map((step) => <div className="step-item" key={step.no}><span className="step-no">{step.no}</span><div><strong>{step.label}</strong><p>{step.text}</p></div></div>)}</div>
        </div>
      </section>

      <section id="ritual" className="ritual-section section-pad">
        <div className="ritual-copy" data-reveal>
          <MascotNote image={storage.chibiRitual} title="Thảo ghi chú" detail="pha chậm một chút" />
          <div className="section-kicker">MỘT KHOẢNG NGHỈ <span>03</span></div>
          <h2>Đôi khi, điều tốt nhất trong ngày là một nhịp chậm.</h2>
          <p>Không cần biến việc uống trà thành một nghi thức cầu kỳ. Chỉ cần một chiếc cốc, nước nóng, và vài phút không bị kéo đi bởi những thông báo tiếp theo.</p>
          <div className="pull-quote">“Pha chậm một chút. Ngửi trước một chút. Rồi hãy uống.”</div>
          <div className="annotation"><span>Thảo ghi chú</span> — bắt đầu từ điều bạn có thể làm hôm nay.</div>
        </div>
        <figure className="ritual-art" data-reveal>
          <img src={storage.ritual} alt="Infographic ba bước cho một khoảng nghỉ cùng trà PPHeCa" loading="lazy" />
          <figcaption className="vertical-label">A SMALL RITUAL FOR A FULL DAY</figcaption>
        </figure>
      </section>

      <section id="collection" className="collection-section section-pad">
        <div className="collection-header" data-reveal>
          <div>
            <MascotNote image={storage.chibiCollection} title="Thảo đã chọn sẵn" detail="bảy tính cách trà" />
            <div className="section-kicker">BỘ SƯU TẬP <span>04</span></div>
            <h2>Chọn một nghi thức<br /><em>cho hôm nay.</em></h2>
          </div>
          <p>Ảnh sản phẩm thật là điểm neo tin cậy. Hãy bắt đầu từ cảm giác bạn muốn tạo ra trong một ngày bình thường.</p>
        </div>
        <div className="collection-feature" data-reveal>
          <div className="feature-image"><img src={active.image} alt={active.name} loading="lazy" /></div>
          <div className={`feature-copy tone-${active.tone}`}><span className="feature-index">HỒ SƠ XƯỞNG / 0{activeProduct + 1}</span><h3>{active.name}</h3><p className="feature-sub">{active.sub}</p><p>{active.mood}</p>{active.note && <small className="product-legal-note">{active.note}</small>}<div className="feature-proof"><span><i /> PACKSHOT THẬT</span><span>đối chiếu theo bao bì</span></div><button className="button button-cream" onClick={() => scrollTo("collection")}>Xem sản phẩm <ArrowRight size={16} /></button></div>
        </div>
        <div className="product-rail" data-reveal>{products.map((product, index) => <button key={product.name} className={index === activeProduct ? "product-thumb is-active" : "product-thumb"} onClick={() => setActiveProduct(index)}><img src={product.image} alt="" loading="lazy" /><span>{product.name}</span><small>{product.sub}</small></button>)}</div>
      </section>

      <section className="trust-section section-pad">
        <div className="trust-card" data-reveal><div><div className="section-kicker">MÓN QUÀ DỄ GỬI <span>05</span></div><h2>Một hộp trà để nói:<br /><em>“Mình nhớ bạn.”</em></h2><p>Combo PPHeCa là lựa chọn cho những dịp không cần nói dài. Một bộ sưu tập đủ vị, gói trong cảm giác chăm sóc dễ trao đi.</p><button className="button button-primary" onClick={() => scrollTo("collection")}>Xem combo <ArrowRight size={17} /></button></div><img src={storage.combo} alt="Visual combo sản phẩm PPHeCa" loading="lazy" /></div>
      </section>

      <section className="closing-section">
        <div className="closing-art" data-reveal><img src={storage.shelf} alt="Sản phẩm trà An Giấc PPHeCa với bao bì thực tế" loading="lazy" /></div>
        <div className="closing-copy" data-reveal><div className="section-kicker">CỬA XƯỞNG ĐANG MỞ <span>06</span></div><h2>Chọn một túi trà.<br />Mở một khoảng thở.</h2><p>Thảo hẹn bạn ở Xưởng Thảo Mộc — nơi những điều nhỏ được làm thật chỉn chu.</p><button className="button button-cream" onClick={() => scrollTo("collection")}>Bước vào xưởng <ArrowRight size={17} /></button><div className="legal-note">Hình mascot và visual minh họa dùng cho storytelling. Sản phẩm và thông tin trên landing page cần đối chiếu với bao bì, hồ sơ công bố và hướng dẫn sử dụng chính thức trước khi đăng bán.</div></div>
      </section>

      <footer className="site-footer"><div className="footer-brand"><TeaMark /><div><strong>PPHeCa</strong><small>XƯỞNG THẢO MỘC · VIỆT NAM</small></div></div><p>Những nghi thức trà dịu lành cho nhịp sống thật.</p><span>© 2026 PPHeCa VietNam</span></footer>
      <button className="floating-cta" onClick={() => scrollTo("collection")}><span>Chọn trà</span><ArrowRight size={16} /></button>
    </main>
  );
}
