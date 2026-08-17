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
  { name: "Trà Mộc Nhan", sub: "Đông Trùng · 7 vị", mood: "Nếu bạn muốn buổi chiều mềm lại một chút, tôi mời bạn bắt đầu từ hộp này.", image: "/manus-storage/ppheca_cover_final_01_moc_nhan_dong_trung_7_vi_fa8bbc28.png", tone: "rose" },
  { name: "Trà Dưỡng Cốt", sub: "7 vị thảo mộc", mood: "Tôi để vị này cho những ngày bạn muốn giữ một nếp chăm sóc thật đều.", image: "/manus-storage/ppheca_cover_final_02_duong_cot_7_vi_158b95b0.png", tone: "clay", note: "Sản phẩm không phải là thuốc." },
  { name: "Trà An Giấc", sub: "7 vị · Lạc Tiên", mood: "Cuối ngày rồi, mình pha một cốc ấm và cất bớt những ồn ào nhé.", image: "/manus-storage/ppheca_cover_final_07_an_giac_7_vi_9865e51f.png", tone: "lavender", note: "Sản phẩm không phải là thuốc." },
  { name: "Trà HaMoKhang", sub: "7 vị phối hợp", mood: "Hộp này dành cho lúc bạn chỉ cần một vị trà dễ mến, dễ pha, dễ nhớ.", image: "/manus-storage/ppheca_cover_refresh_04_hamokhang_c831093d.png", tone: "apricot" },
  { name: "Trà Thanh Can", sub: "Đông Trùng · 7 vị", mood: "Tôi giữ sẵn cho những ngày lịch kín, khi một phút chậm cũng đã rất quý.", image: "/manus-storage/ppheca_cover_refresh_05_thanh_can_62d2a3c5.png", tone: "blue" },
  { name: "HealthTeaRest", sub: "Lạc Tiên Sâm Nam", mood: "Nếu hôm nay có nhiều điều chưa nói, mình cứ ngồi yên với một cốc trà trước đã.", image: "/manus-storage/ppheca_cover_final_06_lac_tien_sam_nam_86ca2847.png", tone: "night" },
  { name: "HEALTHTEALIV", sub: "Canh Châu · trà túi lọc", mood: "Tôi mời bạn bắt đầu bằng điều đơn giản nhất: biết rõ điều gì đang ở trong cốc trà.", image: "/manus-storage/ppheca_cover_refresh_03_canh_chau_6de19000.png", tone: "sage" },
];

const steps = [
  { no: "01", label: "Nhìn kỹ", text: "Tôi muốn bạn nhìn thấy từng vị trước khi chúng đi vào túi trà." },
  { no: "02", label: "Đặt cạnh nhau", text: "Tôi thử để chúng đi cùng nhau, sao cho mỗi ngụm trà dễ bước vào ngày của bạn." },
  { no: "03", label: "Mời bạn dùng", text: "Rồi mình pha một túi trà, ngồi xuống, và không cần vội vàng thêm gì nữa." },
];

const chapters = [
  { id: "top", number: "01", label: "Gặp Thảo" },
  { id: "workshop", number: "02", label: "Nhìn từng vị" },
  { id: "ritual", number: "03", label: "Pha cùng Thảo" },
  { id: "collection", number: "04", label: "Chọn hộp trà" },
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
          <button onClick={() => scrollTo("story")}>Thảo kể bạn nghe</button>
          <button onClick={() => scrollTo("workshop")}>Vào xưởng cùng Thảo</button>
          <button onClick={() => scrollTo("collection")}>Chọn hộp trà</button>
          <button className="nav-cta" onClick={() => scrollTo("collection")}>Tìm vị hợp hôm nay <ArrowRight size={15} /></button>
        </nav>
        <button className="menu-trigger" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? "Đóng menu" : "Mở menu"}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow"><span className="eyebrow-line" /> TÔI LÀ THẢO · MỜI BẠN VÀO XƯỞNG</p>
          <h1>Mình pha một<br /><em>cốc trà ấm</em><br />nhé?</h1>
          <p className="hero-lead">Có những hôm mình chẳng cần điều gì lớn lao. Một cốc nước nóng, một túi trà thơm, rồi ngồi lại với chính mình vài phút là đủ. Tôi là Thảo, và tôi để sẵn những điều nhỏ ấy ở đây.</p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={() => scrollTo("collection")}>Tìm vị hợp hôm nay <ArrowRight size={17} /></button>
            <button className="text-link" onClick={() => scrollTo("workshop")}>Vào xưởng với tôi <ArrowDown size={16} /></button>
          </div>
          <div className="hero-note"><span className="note-dot" /> Ở đây, bạn không cần chọn thật nhanh.</div>
        </div>
        <div className="hero-art" aria-label="Miss PPHeCa chào bạn ở Xưởng Thảo Mộc" data-reveal>
          <img className="hero-scene" src={storage.scene} alt="Không gian Xưởng Thảo Mộc PPHeCa" fetchPriority="high" />
          <span className="hero-scene-wash" />
          <img className="hero-mascot-portrait" src={storage.mascot} alt="Miss PPHeCa, mascot chính thức của thương hiệu" fetchPriority="high" />
          <MascotNote image={storage.chibiWelcome} title="Tôi mở cửa xưởng" detail="mời bạn vào xem" />
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-stamp"><Sparkles size={15} /><span>quiet<br />herbal<br />ritual</span></div>
          <div className="hero-caption"><span>01 / 07</span><span>Tôi là Thảo. Hôm nay, mình bắt đầu từ bảy vị quen.</span></div>
        </div>
      </section>

      <section id="story" className="story-section section-pad">
        <div className="section-kicker">THẢO KỂ BẠN NGHE <span>01</span></div>
        <div className="story-grid" data-reveal>
          <div className="story-title"><h2>Có những ngày mình chỉ cần được nhắc:</h2><span className="scribble">nghỉ một chút thôi.</span></div>
          <div className="story-body"><p>Tôi hay nghĩ, quan tâm đâu nhất thiết phải nói thật to. Có khi chỉ là rót cho mẹ một cốc nước ấm. Có khi là nhắn người bạn đang mệt rằng: “Về nhà pha trà đi, rồi kể mình nghe.”</p><p>Vì thế tôi gọi nơi này là <strong>Xưởng Thảo Mộc</strong>. Ở đây, tôi kể bạn nghe từng vị đang có trong hộp trà, để bạn chọn theo nhịp sống của mình — chứ không phải theo một lời hứa vội vàng.</p><button className="text-link olive" onClick={() => scrollTo("workshop")}>Đi một vòng cùng tôi <ArrowRight size={15} /></button></div>
        </div>
      </section>

      <section id="workshop" className="workshop-section">
        <figure className="workshop-image" data-reveal>
          <img src={storage.ingredients} alt="Infographic bảy thành phần thảo mộc của PPHeCa" loading="lazy" />
          <figcaption className="image-label">THE 07 INGREDIENT CHARACTERS</figcaption>
        </figure>
        <div className="workshop-copy" data-reveal>
          <MascotNote image={storage.chibiWorkshop} title="Tôi hay nói" detail="nhìn thấy mới tin" dark />
          <div className="section-kicker">TRONG XƯỞNG CỦA TÔI <span>02</span></div>
          <h2>Trước khi vào hộp trà, tôi muốn bạn gặp bảy người bạn của tôi.</h2>
          <p>Mỗi bạn mang một màu, một mùi, một câu chuyện riêng. Tôi để họ đi cạnh nhau, không phải để làm mọi thứ phức tạp hơn, mà để cốc trà của bạn có thêm một điều đáng nhớ.</p>
          <p>Bạn cứ xem kỹ nhé. Tên của từng thành phần đều ở đây. Còn chọn vị nào, tôi để bạn chọn theo điều mình đang cần trong một ngày rất bình thường.</p>
          <div className="step-list">{steps.map((step) => <div className="step-item" key={step.no}><span className="step-no">{step.no}</span><div><strong>{step.label}</strong><p>{step.text}</p></div></div>)}</div>
        </div>
      </section>

      <section id="ritual" className="ritual-section section-pad">
        <div className="ritual-copy" data-reveal>
          <MascotNote image={storage.chibiRitual} title="Tôi nhắc khẽ" detail="pha chậm một chút" />
          <div className="section-kicker">MỘT LÚC CHO MÌNH <span>03</span></div>
          <h2>Tôi không bắt bạn có thêm thời gian. Chỉ giữ lại ba phút thôi.</h2>
          <p>Đặt điện thoại xuống một lát. Cho túi trà vào cốc. Đợi nước nóng ôm lấy mùi thơm. Vậy là mình đã có một khoảng nghỉ rồi — chẳng cần làm nó thật cầu kỳ.</p>
          <div className="pull-quote">“Mình ngửi trước một chút nhé. Rồi hãy uống.”</div>
          <div className="annotation"><span>Thảo ghi chú</span> — hôm nay, bạn bắt đầu từ điều nhỏ nào cũng được.</div>
        </div>
        <figure className="ritual-art" data-reveal>
          <img src={storage.ritual} alt="Infographic ba bước cho một khoảng nghỉ cùng trà PPHeCa" loading="lazy" />
          <figcaption className="vertical-label">A SMALL RITUAL FOR A FULL DAY</figcaption>
        </figure>
      </section>

      <section id="collection" className="collection-section section-pad">
        <div className="collection-header" data-reveal>
          <div>
            <MascotNote image={storage.chibiCollection} title="Tôi để sẵn" detail="bảy hộp trà ở đây" />
            <div className="section-kicker">ĐẾN LƯỢT BẠN CHỌN <span>04</span></div>
            <h2>Hôm nay, bạn muốn<br /><em>tôi pha vị nào?</em></h2>
          </div>
          <p>Tôi để ảnh thật của từng hộp bên dưới. Bạn không cần biết hết mọi thứ về trà — chỉ cần chọn một vị khiến hôm nay của mình dễ chịu hơn một chút.</p>
        </div>
        <div className="collection-feature" data-reveal>
          <div className="feature-image"><img src={active.image} alt={active.name} loading="lazy" /></div>
          <div className={`feature-copy tone-${active.tone}`}><span className="feature-index">HỘP TRÀ THỨ 0{activeProduct + 1}</span><h3>{active.name}</h3><p className="feature-sub">{active.sub}</p><p>{active.mood}</p>{active.note && <small className="product-legal-note">{active.note}</small>}<div className="feature-proof"><span><i /> ẢNH HỘP TRÀ THẬT</span><span>tôi để đúng theo bao bì</span></div><button className="button button-cream" onClick={() => scrollTo("collection")}>Xem hộp trà này <ArrowRight size={16} /></button></div>
        </div>
        <div className="product-rail" data-reveal>{products.map((product, index) => <button key={product.name} className={index === activeProduct ? "product-thumb is-active" : "product-thumb"} onClick={() => setActiveProduct(index)}><img src={product.image} alt="" loading="lazy" /><span>{product.name}</span><small>{product.sub}</small></button>)}</div>
      </section>

      <section className="trust-section section-pad">
        <div className="trust-card" data-reveal><div><div className="section-kicker">NẾU BẠN MUỐN GỬI AI ĐÓ <span>05</span></div><h2>Tôi gói giúp bạn<br /><em>một lời hỏi thăm.</em></h2><p>Có những dịp chẳng biết nói gì cho vừa. Vậy thì gửi một hộp trà cũng được. Người nhận có thể pha lúc nào họ cần, và biết rằng bạn vẫn đang nghĩ đến họ.</p><button className="button button-primary" onClick={() => scrollTo("collection")}>Xem bộ trà tôi gói <ArrowRight size={17} /></button></div><img src={storage.combo} alt="Visual combo sản phẩm PPHeCa" loading="lazy" /></div>
      </section>

      <section className="closing-section">
        <div className="closing-art" data-reveal><img src={storage.shelf} alt="Sản phẩm trà An Giấc PPHeCa với bao bì thực tế" loading="lazy" /></div>
        <div className="closing-copy" data-reveal><div className="section-kicker">TÔI VẪN Ở ĐÂY <span>06</span></div><h2>Tôi để ấm nước rồi.<br />Bạn chọn hộp trà nhé?</h2><p>Khi nào cần một khoảng nghỉ, cứ quay lại xưởng. Tôi vẫn kể bạn nghe về từng vị trà, thật chậm rãi.</p><button className="button button-cream" onClick={() => scrollTo("collection")}>Chọn cùng tôi <ArrowRight size={17} /></button><div className="legal-note">Hình mascot và visual minh họa dùng cho storytelling. Sản phẩm và thông tin trên landing page cần đối chiếu với bao bì, hồ sơ công bố và hướng dẫn sử dụng chính thức trước khi đăng bán.</div></div>
      </section>

      <footer className="site-footer"><div className="footer-brand"><TeaMark /><div><strong>PPHeCa</strong><small>XƯỞNG THẢO MỘC · VIỆT NAM</small></div></div><p>Những cốc trà nhỏ cho những ngày thật.</p><span>© 2026 PPHeCa VietNam</span></footer>
      <button className="floating-cta" onClick={() => scrollTo("collection")}><span>Chọn cùng Thảo</span><ArrowRight size={16} /></button>
    </main>
  );
}
