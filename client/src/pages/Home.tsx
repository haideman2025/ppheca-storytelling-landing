/* PPHeCa — Xưởng Thảo Mộc Đương Đại. The supplied GPT visual system creates one guided journey: real Miss PPHeCa leads, chibi notes annotate, official packshots retain product trust. */
import { useEffect, useMemo, useRef, useState } from "react";
import { MascotChat } from "@/components/MascotChat";
import { ArrowDown, ArrowRight, Menu, Sparkles, Volume2, VolumeX, X } from "lucide-react";

const storage = {
  // PPHeCa Xưởng Thảo Mộc: lifestyle images are narrative chapters; official packshots remain the product proof.
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
  storyHands: "/manus-storage/Adult_hands_arranging_herbal_tea_202608171647_0d947b3d.jpeg",
  workshopHands: "/manus-storage/herbal_workshop_process_60e97b46.jpeg",
  ingredientStill: "/manus-storage/herbal_ingredients_still_life_4296a5f3.jpeg",
  teaAtDesk: "/manus-storage/Tea_cup_on_desk_202608171647_e08009c0.jpeg",
  teaAtNight: "/manus-storage/Amber_cup_of_herbal_tea_202608171647_54d438dc.jpeg",
  productScene: "/manus-storage/product_staging_story_e71787ab.jpeg",
  giftScene: "/manus-storage/Arranging_herbal_tea_gift_202608171648_ed07829d.jpeg",
  closingScene: "/manus-storage/Hands_placing_herbal_tea_pouch_202608171644_71903694.jpeg",
  tvc: "/manus-storage/ppheca-tvc-vsl-web_6fd62621.mp4",
  tvcPoster: "/manus-storage/ppheca-tvc-poster_6f0a7f56.jpg",
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
  { id: "founder", number: "01", label: "Nhà sáng lập" },
  { id: "story", number: "02", label: "Vì sao" },
  { id: "workshop", number: "03", label: "7 vị & phối" },
  { id: "ritual", number: "04", label: "Khoảnh khắc" },
  { id: "collection", number: "05", label: "Chọn hộp" },
];

function TvcSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [soundOn, setSoundOn] = useState(false);
  const [needsPlay, setNeedsPlay] = useState(false);
  const [soundBlocked, setSoundBlocked] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let cancelled = false;
    const attemptAutoplay = () => {
      video.muted = true;
      video.play().then(() => {
        if (!cancelled) setNeedsPlay(false);
      }).catch(() => {
        if (!cancelled) setNeedsPlay(true);
      });
    };
    if (video.readyState >= 2) attemptAutoplay();
    else video.addEventListener("canplay", attemptAutoplay, { once: true });
    return () => {
      cancelled = true;
      video.removeEventListener("canplay", attemptAutoplay);
    };
  }, []);

  const playVideo = async (withSound: boolean) => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !withSound;
    video.volume = 1;
    setNeedsPlay(false);
    setSoundBlocked(false);
    setSoundOn(withSound);
    try {
      await video.play();
    } catch {
      video.muted = true;
      setSoundOn(false);
      if (withSound) {
        setSoundBlocked(true);
        setNeedsPlay(false);
      } else {
        setNeedsPlay(true);
      }
    }
  };

  const toggleSound = async () => {
    const video = videoRef.current;
    if (!video) return;
    if (soundOn) {
      video.muted = true;
      setSoundOn(false);
      return;
    }
    await playVideo(true);
  };

  return (
    <section className="tvc-section" aria-labelledby="tvc-title">
      <video ref={videoRef} className="tvc-video" autoPlay muted loop playsInline controls={soundBlocked || needsPlay} preload="metadata" poster={storage.tvcPoster} aria-label="TVC PPHeCa kể câu chuyện về những nghi thức trà thảo mộc" onError={() => setNeedsPlay(true)}>
        <source src={storage.tvc} type="video/mp4" />
      </video>
      <div className="tvc-scrim" />
      <div className="tvc-content" data-reveal>
        <p className="eyebrow tvc-eyebrow"><span className="eyebrow-line" /> PPHECA · MỘT KHOẢNH KHẮC ĐƯỢC CHĂM</p>
        <h2 id="tvc-title">Bảy vị thảo mộc.<br /><em>Một nhịp chăm.</em></h2>
        <p>Hãy để câu chuyện của PPHeCa đi cùng bạn trong vài phút. Video tự phát ở chế độ im lặng để không làm gián đoạn trải nghiệm; chạm nút âm thanh để nghe trọn vẹn phần kể chuyện.</p>
        {needsPlay ? (
          <button className="tvc-sound-button" type="button" onClick={() => void playVideo(false)} aria-label="Phát TVC PPHeCa">
            <Volume2 size={17} /><span>Phát TVC</span>
          </button>
        ) : (
          <button className="tvc-sound-button" type="button" onClick={() => void toggleSound()} aria-pressed={soundOn} aria-label={soundOn ? "Tắt âm thanh TVC" : soundBlocked ? "Mở điều khiển để bật âm thanh TVC" : "Bật âm thanh TVC"}>
            {soundOn ? <Volume2 size={17} /> : <VolumeX size={17} />}
            <span>{soundOn ? "Đang phát âm thanh" : soundBlocked ? "Dùng điều khiển video để nghe" : "Bật âm thanh TVC"}</span>
          </button>
        )}
        <p className="tvc-status" role="status" aria-live="polite">{needsPlay ? "Trình duyệt đang chờ thao tác của bạn để phát video." : soundOn ? "Âm thanh đang bật." : soundBlocked ? "Trình duyệt chặn autoplay có âm thanh; dùng điều khiển video để bật tiếng." : "Video nền đang phát im lặng."}</p>
      </div>
      <span className="tvc-duration">PPHECA TVC · 01:30</span>
    </section>
  );
}

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
          <button onClick={() => scrollTo("founder")}>Câu chuyện nhà sáng lập</button>
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
          <p className="eyebrow"><span className="eyebrow-line" /> PPHECA · PI–PI–HÊ–CA</p>
          <h1>Một cái tên<br />được bắt đầu<br /><em>từ sự chăm.</em></h1>
          <p className="hero-lead">Từ câu chuyện của nhà sáng lập, PPHeCa được gọi theo bốn lớp nghĩa: Products và Prosperity, Health và Care. Một thương hiệu Việt bắt đầu bằng sản phẩm tử tế, để sự chăm sóc hôm nay đi cùng sức khỏe bền vững và thịnh vượng mai sau.</p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={() => scrollTo("collection")}>Tìm vị hợp hôm nay <ArrowRight size={17} /></button>
            <button className="text-link" onClick={() => scrollTo("workshop")}>Vào Xưởng Thảo Mộc <ArrowDown size={16} /></button>
          </div>
          <div className="hero-note"><span className="note-dot" /> Phát âm: Pi – Pi – Hê – Ca · câu chuyện bắt đầu từ nhà sáng lập.</div>
        </div>
        <div className="hero-art" aria-label="Miss PPHeCa chào bạn ở Xưởng Thảo Mộc" data-reveal>
          <img className="hero-mascot-portrait" src={storage.mascot} alt="Miss PPHeCa, mascot chính thức của thương hiệu" fetchPriority="high" />
          <img className="hero-guide" src={storage.chibiWelcome} alt="Thảo, mascot đại diện PPHeCa" loading="eager" />
          <MascotNote image={storage.chibiWelcome} title="Thảo chào bạn" detail="cùng PPHeCa vào xưởng" />
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-stamp"><Sparkles size={15} /><span>quiet<br />herbal<br />ritual</span></div>
          <div className="hero-caption"><span>01 / 07</span><span>PPHeCa bắt đầu từ bảy vị quen và một khoảng nghỉ thật.</span></div>
        </div>
      </section>

      <TvcSection />

      <section id="founder" className="founder-section section-pad">
        <div className="founder-grid" data-reveal>
          <div className="founder-mark"><span>PPHeCa</span><small>PI · PI · HÊ · CA</small><i>Products<br />Prosperity<br />Health<br />Care</i></div>
          <div className="founder-copy"><div className="section-kicker">CÂU CHUYỆN NHÀ SÁNG LẬP <span>01 · ORIGIN</span></div><h2>Một cái tên mang theo lời hứa <em>chăm sóc.</em></h2><p>Nhà sáng lập đặt tên PPHeCa từ những điều muốn gửi gắm vào thương hiệu: <strong>P</strong> của Products — những sản phẩm được làm ra có trách nhiệm; <strong>P</strong> của Prosperity — mong muốn sức khỏe và sự thịnh vượng được nuôi bền vững; <strong>He</strong> của Health; và <strong>Ca</strong> của Care.</p><p>Vì thế, PPHeCa không chỉ bán một túi trà. PPHeCa kể câu chuyện về cách một doanh nghiệp Việt có thể bắt đầu từ sự quan tâm rất cụ thể: chọn nguyên liệu, phối vị, đóng gói và đưa đến tay bạn một nghi thức chăm sóc dễ bước vào đời sống.</p><div className="founder-name-story"><span>PP</span><strong>Products · Prosperity</strong><span>He</span><strong>Health</strong><span>Ca</span><strong>Care</strong></div><button className="text-link olive" onClick={() => scrollTo("story")}>Đi tiếp vào Big Why của PPHeCa <ArrowRight size={15} /></button></div>
        </div>
      </section>

      <section id="story" className="story-section section-pad">
          <div className="section-kicker">VÌ SAO PPHECA BẮT ĐẦU <span>02 · WHY</span></div>
        <div className="story-grid" data-reveal>
          <div className="story-title"><h2>Ai cũng cần một chỗ để</h2><span className="scribble">thở chậm lại.</span><figure className="story-scene"><img src={storage.storyHands} alt="Bàn tay chuẩn bị trà thảo mộc trong ánh sáng ấm" loading="lazy" /><figcaption>NHỮNG ĐIỀU NHỎ, ĐƯỢC LÀM CHẬM RÃI</figcaption></figure></div>
          <div className="story-body"><MascotNote image={storage.chibiWelcome} title="Thảo dẫn chuyện" detail="vì sao PPHeCa bắt đầu" /><p>PPHeCa không được tạo ra để bạn phải sống khác đi chỉ sau một cốc trà. Thương hiệu bắt đầu từ một niềm tin giản dị: giữa những ngày bận rộn, mỗi người đều cần một tín hiệu nhỏ rằng mình cũng đáng được chăm sóc.</p><p>Có thể là rót nước cho mẹ. Có thể là nhắn một người bạn: “Về nhà pha trà đi, rồi kể mình nghe.” PPHeCa tin đó là cách quan tâm không cần nói thật to.</p><div className="golden-bridge"><span>VÌ SAO</span><strong>Một khoảng nghỉ ấm áp cho những ngày thật.</strong><span>THẾ NÀO</span><strong>Nhìn kỹ, phối vừa và gói sẵn bảy vị thảo mộc.</strong><span>ĐIỀU GÌ</span><strong>Những hộp trà để bạn chọn theo nhịp sống của mình.</strong></div><button className="text-link olive" onClick={() => scrollTo("workshop")}>Khám phá cách PPHeCa phối vị <ArrowRight size={15} /></button></div>
        </div>
      </section>

      <section id="workshop" className="workshop-section">
        <figure className="workshop-image" data-reveal>
          <img src={storage.workshopHands} alt="Bàn tay đang chọn và phối các vị thảo mộc trong xưởng PPHeCa" loading="lazy" />
          <figcaption className="image-label">MỖI VỊ ĐƯỢC NHÌN KỸ TRƯỚC KHI PHỐI CÙNG NHAU</figcaption>
          <div className="workshop-inset"><img src={storage.ingredientStill} alt="Các vị thảo mộc được chuẩn bị trong đồ gốm" loading="lazy" /><span>07 VỊ · MÙI, SẮC VÀ ĐỘ QUEN THUỘC</span></div>
        </figure>
        <div className="workshop-copy" data-reveal>
          <MascotNote image={storage.chibiWorkshop} title="Thảo nhắc nhẹ" detail="nhìn thấy mới tin" dark />
          <div className="section-kicker">PPHECA LÀM THẾ NÀO <span>03 · HOW</span></div>
          <h2>PPHeCa bắt đầu từ bảy vị, rồi mới nghĩ đến một cốc trà.</h2>
          <p>Trong xưởng, PPHeCa không gọi đây là những “thành phần thần kỳ”. Đó là bảy người bạn: mỗi vị có mùi, sắc và cá tính riêng; cùng đi vào một công thức để cốc trà thơm, cân bằng và dễ uống.</p>
          <p>PPHeCa nhìn từng vị trước, đặt chúng cạnh nhau sau. Khi mùi hương đủ dịu và cảm giác uống đủ gần gũi cho một ngày bình thường, chúng mới được gói vào túi trà — để một khoảng nghỉ nhỏ trở thành nếp chăm sóc bản thân dễ duy trì.</p>
          <div className="step-list">{steps.map((step) => <div className="step-item" key={step.no}><span className="step-no">{step.no}</span><div><strong>{step.label}</strong><p>{step.text}</p></div></div>)}</div>
        </div>
      </section>

      <section id="ritual" className="ritual-section section-pad">
        <div className="ritual-copy" data-reveal>
          <MascotNote image={storage.chibiRitual} title="Thảo nhắc khẽ" detail="pha chậm một chút" />
          <div className="section-kicker">MỘT KHOẢNG NGHỈ NHỎ <span>04</span></div>
          <h2>Không cần thêm thời gian. Chỉ giữ lại ba phút thôi.</h2>
          <p>PPHeCa gợi ý một khoảng nghỉ rất đơn giản: đặt điện thoại xuống, cho túi trà vào cốc và đợi nước nóng ôm lấy mùi thơm. Một thói quen nhỏ có thể bắt đầu mà không cần cầu kỳ, cũng không cần chờ đến khi mọi thứ đã xong xuôi.</p>
          <div className="pull-quote">“Mình ngửi trước một chút nhé. Rồi hãy uống.”</div>
          <div className="annotation"><span>Thảo ghi chú</span> — hôm nay, bạn có thể bắt đầu từ một điều nhỏ.</div>
        </div>
        <figure className="ritual-art" data-reveal>
          <img src={storage.teaAtDesk} alt="Một cốc trà thảo mộc PPHeCa trên bàn làm việc cạnh trang sổ mở" loading="lazy" />
          <figcaption className="vertical-label">A SMALL RITUAL FOR A FULL DAY</figcaption>
          <div className="ritual-recipe-card"><span>03 BƯỚC CHO MỘT KHOẢNG NGHỈ</span><img src={storage.ritual} alt="Ba bước pha trà PPHeCa" loading="lazy" /></div>
        </figure>
      </section>

      <section id="collection" className="collection-section section-pad">
        <div className="collection-header" data-reveal>
          <div>
            <MascotNote image={storage.chibiCollection} title="Thảo gợi ý" detail="bảy nghi thức ở đây" />
            <div className="section-kicker">ĐÂY LÀ HỘP TRÀ <span>05 · WHAT</span></div>
            <h2>Hôm nay, bạn muốn<br /><em>chọn nghi thức nào?</em></h2>
          </div>
          <div className="collection-intro"><p>Đây là ảnh thật của từng hộp trà PPHeCa. Chọn vị hợp với nhịp hôm nay, rồi chọn quy cách 05 hoặc 15 gói; phần còn lại là để một cốc nước nóng làm giúp mình.</p><div className="choice-guide"><span><b>01</b> Chọn vị theo nhịp ngày</span><span><b>02</b> Chọn 05 hoặc 15 gói</span><span><b>03</b> Kiểm tra ưu đãi tại gian hàng</span></div></div>
        </div>
        <figure className="collection-scene" data-reveal><img src={storage.productScene} alt="Không gian bày trà thảo mộc PPHeCa với cốc trà và nguyên liệu" loading="lazy" /><figcaption>HÌNH MINH HỌA KHOẢNH KHẮC SỬ DỤNG · HÌNH HỘP TRÀ THẬT Ở BÊN DƯỚI</figcaption></figure>
        <div className="collection-feature" data-reveal>
          <div className="feature-image"><img src={active.image} alt={active.name} loading="lazy" /></div>
          <div className={`feature-copy tone-${active.tone}`}><span className="feature-index">NGHI THỨC 0{activeProduct + 1}</span><h3>{active.name}</h3><p className="feature-sub">{active.sub}</p><p className="feature-ritual">{active.ritual}</p><p>{active.mood}</p>{active.note && <small className="product-legal-note">{active.note}</small>}<div className="price-grid" aria-label="Quy cách và giá bán"><div className="price-option"><span>05 gói</span><strong>54.400đ</strong><small>CTKM: mua 1 tặng 5</small></div><div className="price-option featured"><span>15 gói</span><strong>159.200đ</strong><small>Tặng thêm 5 gói</small></div></div><p className="price-caption">Giá và ưu đãi theo thông tin PPHeCa cung cấp; kiểm tra lại tại gian hàng trước khi thanh toán.</p><div className="feature-proof"><span><i /> ẢNH HỘP TRÀ THẬT</span><span>packshot PPHeCa theo bao bì</span></div><a className="button button-cream" href={shopUrl} target="_blank" rel="noreferrer">Chọn quy cách này <ArrowRight size={16} /></a></div>
        </div>
        <p className="ritual-rail-caption">BẢY NGHI THỨC NHỎ · CHỌN THEO NHỊP CỦA HÔM NAY, KHÔNG CẦN CHỌN VỘI.</p>
        <div className="product-rail" data-reveal>{products.map((product, index) => <button key={product.name} className={index === activeProduct ? "product-thumb is-active" : "product-thumb"} onClick={() => setActiveProduct(index)}><span className="product-choice-no">0{index + 1}</span><img src={product.image} alt="" loading="lazy" /><span>{product.name}</span><small>{product.ritual}</small><b>Từ 54.400đ</b></button>)}</div>
      </section>

      <section className="trust-section section-pad">
        <div className="trust-card" data-reveal><div><MascotNote image={storage.chibiCollection} title="Thảo cùng PPHeCa" detail="gói một lời hỏi thăm" /><div className="section-kicker">NẾU BẠN MUỐN GỬI AI ĐÓ <span>05</span></div><h2>PPHeCa gói giúp bạn<br /><em>một lời hỏi thăm.</em></h2><p>Có những dịp chẳng biết nói gì cho vừa. Vậy thì gửi một hộp trà cũng được. Người nhận có thể pha lúc nào họ cần, và biết rằng bạn vẫn đang nghĩ đến họ.</p><a className="button button-primary" href={shopUrl} target="_blank" rel="noreferrer">Xem bộ trà quà tặng <ArrowRight size={17} /></a></div><figure className="trust-card-media"><img src={storage.giftScene} alt="Một hộp quà trà thảo mộc PPHeCa được chuẩn bị bằng ruy băng xanh olive" loading="lazy" /><figcaption>GÓI MỘT LỜI HỎI THĂM</figcaption></figure></div>
      </section>

      <section className="closing-section">
        <div className="closing-art" data-reveal><img src={storage.closingScene} alt="Bàn tay đặt túi trà thảo mộc cạnh cốc trà trong ánh nắng" loading="lazy" /><span className="closing-art-label">MỘT KHOẢNG NGHỈ, ĐƯỢC ĐẶT SẴN</span></div>
        <div className="closing-copy" data-reveal><MascotNote image={storage.chibiRitual} title="Thảo nhắc giúp PPHeCa" detail="một cốc trà, một nhịp thở" dark /><div className="section-kicker">PPHECA LUÔN Ở ĐÂY <span>07</span></div><h2>Chọn một hộp trà<br />cho khoảng nghỉ<br />của bạn.</h2><p>Khi cần một khoảng nghỉ, hãy quay lại Xưởng Thảo Mộc. PPHeCa luôn sẵn sàng kể bạn nghe về từng vị trà, thật chậm rãi.</p><button className="button button-cream" onClick={() => scrollTo("collection")}>Chọn một nghi thức <ArrowRight size={17} /></button><div className="legal-note">Hình mascot và visual minh họa dùng cho storytelling. Sản phẩm và thông tin trên landing page cần đối chiếu với bao bì, hồ sơ công bố và hướng dẫn sử dụng chính thức trước khi đăng bán.</div></div>
      </section>

      <footer className="site-footer"><div className="footer-brand"><TeaMark /><div><strong>PPHeCa</strong><small>XƯỞNG THẢO MỘC · VIỆT NAM</small></div></div><p>Những cốc trà nhỏ cho những ngày thật.</p><span>© 2026 PPHeCa VietNam</span></footer>
      <MascotChat />
    </main>
  );
}
