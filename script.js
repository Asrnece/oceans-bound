/* ============================================================
   OceansBound — Minimal JavaScript
   Navbar scroll effect, hamburger toggle, grid fade on scroll
   ============================================================ */

(function () {
    'use strict';

    // ========== TRANSLATIONS ==========
    const translations = {
        tr: {
            // Navigation
            'nav.home': 'Anasayfa',
            'nav.about': 'Hakkımızda',
            'nav.services': 'Hizmetler',
            'nav.whyus': 'Neden Biz?',
            'nav.contact': 'İletişim',
            
            // Hero Section
            'hero.title': 'Siz Denize Odaklanın',
            'hero.subtitle': 'Geriye Kalanı Biz Halledelim',
            'hero.discover': 'Keşfet',
            
            // About Summary
            'about.label': 'Hakkımızda',
            'about.title': 'Denizcilik Operasyonlarında<br>Güvenilir Ortağınız',
            'about.desc': 'OceansBound olarak, liman yönetiminden gemi operasyonlarına kadar geniş bir yelpazede hizmet sunuyoruz. Denizcilik sektöründeki derin tecrübemiz ve uzman kadromuzla, operasyonlarınızı sorunsuz ve verimli bir şekilde yönetiyoruz.',
            'about.link': 'Daha Fazla Bilgi →',
            'about.stat1': 'Yıllık Deneyim',
            'about.stat2': 'Tamamlanan Operasyon',
            'about.stat3': 'Liman Ağı',
            
            // Services Summary
            'services.label': 'Hizmetlerimiz',
            'services.title': 'Uçtan Uca Denizcilik<br>Operasyon Yönetimi',
            'services.card1.title': 'Profesyonel<br>Acentelik',
            'services.card1.desc': 'Liman işlemlerinin titizlikle yönetimi. Prosedürler, belgeler ve koordinasyon bizde.',
            'services.card2.title': 'Doküman<br>Takibi',
            'services.card2.desc': 'Kritik belgelerin güncel tutulması, yenilenmesi ve ilgili makamlara iletilmesi.',
            'services.card3.title': 'Ekipman<br>Yönetimi',
            'services.card3.desc': 'Bakım takvimi, tedarik süreci ve lojistik koordinasyonunun eksiksiz takibi.',
            'services.card4.title': 'Personel<br>Takibi',
            'services.card4.desc': 'Sertifika takibi, vize işlemleri, transfer organizasyonu ve idari süreçler.',
            'services.card5.title': 'Lojistik<br>Koordinasyon',
            'services.card5.desc': 'Teslimat, parça transferi ve ikmal operasyonlarında uçtan uca yönetim.',
            'services.link': 'Tüm Hizmetlerimiz →',
            
            // Why Us
            'whyus.label': 'Neden Biz',
            'whyus.title': 'Farkımızı Hissedeceksiniz',
            'whyus.item1.title': 'Konum Bağımsız Hizmet',
            'whyus.item1.desc': 'Dünyanın neresinde olursanız olun, aynı kalite ve hızda destek alırsınız.',
            'whyus.item2.title': 'Çözüm Odaklı Yaklaşım',
            'whyus.item2.desc': 'Ekibimiz beklenmedik durumlarda sakin, hızlı ve etkili biçimde aksiyon alır.',
            'whyus.item3.title': 'Titiz Takip Sistemi',
            'whyus.item3.desc': 'Hiçbir belge, hiçbir ekipman, hiçbir son tarih gözden kaçmaz.',
            'whyus.item4.title': 'Şeffaf İletişim',
            'whyus.item4.desc': 'Her adımda sizi bilgilendiririz. Ne yaptığımızı ve ne zaman tamamlandığını her zaman bilirsiniz.',
            'whyus.item5.title': 'Seyrin Her Aşamasında',
            'whyus.item5.desc': 'Seyir öncesi hazırlıktan, seyir sonrası işlemlere kadar kesintisiz yanınızdayız.',
            'whyus.link': 'Detaylı Bilgi →',
            
            // Philosophy / CTA
            'philosophy.title': 'Felsefemiz',
            'philosophy.text': 'Yat sahipleri ve kaptanları için en değerli şey zamandır. Biz, o değerli zamanın liman prosedürleriyle, idari süreçlerle değil — açık denizde, güneşin altında geçirilmesi gerektiğine inanıyoruz.',
            'philosophy.cta': 'Süreci Planlayalım',
            
            // Footer
            'footer.desc': 'Denizcilik sektöründeki derin tecrübemizle,<br>operasyonlarınızı sorunsuz yönetiyoruz.',
            'footer.quicklinks': 'Hızlı Erişim',
            'footer.copyright': 'Copyright©2026. Tüm Hakları Saklıdır.',
            
            // About Page
            'about.page.title': 'Geleceğin Denizcilik<br><span class="hero__headline-accent">Operasyonları</span>',
            'about.page.desc': 'Denizcilik sektöründeki derin tecrübemiz ve uzman kadromuzla, operasyonlarınızı sorunsuz ve verimli bir şekilde yönetiyoruz.',
            'about.story.title': 'Denizde Doğan<br>Bir Tutku',
            'about.story.desc1': 'OceansBound, denizcilik operasyonlarının karmaşıklığını ve kaptanların omuzlarındaki idari yükü hafifletmek amacıyla kuruldu. Yıllarca süren denizcilik ve liman yönetimi tecrübemiz, bize bir gerçeği gösterdi: Denizin gerçek ruhunu yaşamak için, karadaki detayların kusursuz bir şekilde yönetilmesi gerekir.',
            'about.story.desc2': 'Amacımız, uluslararası denizcilik standartlarına uygun, şeffaf ve güvenilir bir acentelik hizmeti sunmak. Müşterilerimizin ihtiyaçlarına özel çözümler üreterek, seyir keyfini maksimuma çıkarıyoruz.',
            'about.philosophy.label': 'Felsefemiz',
            'about.philosophy.title': 'Siz Denize Odaklanın,<br>Geri Kalanını Bize Bırakın',
            'about.philosophy.text': 'Yat sahipleri ve kaptanları için en değerli şey zamandır. Biz, o değerli zamanın liman prosedürleriyle, idari süreçlerle değil — açık denizde, güneşin altında geçirilmesi gerektiğine inanıyoruz.',
            'about.values.title': 'Değerlerimiz',
            'about.value1.title': 'Güvenilirlik',
            'about.value1.desc': 'Söz verdiğimizi yaparız. Her zaman.',
            'about.value2.title': 'Şeffaflık',
            'about.value2.desc': 'Her adımda sizi bilgilendiririz.',
            'about.value3.title': 'Uzmanlık',
            'about.value3.desc': 'Denizcilik sektörünün dinamiklerini biliyoruz.',
            'about.cta.title': 'Birlikte Çalışalım',
            'about.cta.desc': 'Operasyonlarınızı nasıl kolaylaştırabileceğimizi konuşalım.',
            'about.cta.button': 'İletişime Geçin',
            
            // Services Page
            'services.page.title': 'Kapsamlı Denizcilik<br><span class="hero__headline-accent">Hizmetlerimiz</span>',
            'services.page.desc': 'Liman prosedürlerinden operasyonel koordinasyona, tüm sorumluluğu üstleniyoruz.',
            'services.detail1.title': 'Profesyonel Acentelik',
            'services.detail1.desc': 'Liman giriş-çıkış işlemleri, gümrük prosedürleri, resmi makamlarla koordinasyon ve tüm yasal gerekliliklerin eksiksiz takibi.',
            'services.detail2.title': 'Doküman Yönetimi',
            'services.detail2.desc': 'Gemi sertifikaları, personel belgeleri, sigorta poliçeleri ve tüm kritik evrakların güncel tutulması ve yenilenmesi.',
            'services.detail3.title': 'Ekipman & Bakım',
            'services.detail3.desc': 'Periyodik bakım takvimi, yedek parça tedariki, teknik servis koordinasyonu ve lojistik süreçlerin yönetimi.',
            'services.detail4.title': 'Personel Koordinasyonu',
            'services.detail4.desc': 'Mürettebat sertifika takibi, vize işlemleri, seyahat organizasyonu ve idari süreçlerin yönetimi.',
            'services.detail5.title': 'Lojistik Destek',
            'services.detail5.desc': 'Yakıt ikmali, su temini, kumanya organizasyonu ve acil tedarik süreçlerinin koordinasyonu.',
            'services.detail6.title': '7/24 Destek',
            'services.detail6.desc': 'Günün her saatinde ulaşılabilir ekibimizle, acil durumlarda anında müdahale.',
            
            // Why Us Page
            'whyus.page.title': 'Neden<br><span class="hero__headline-accent">OceansBound?</span>',
            'whyus.page.desc': 'Denizcilik operasyonlarınızda farkı hissedin.',
            
            // Contact Page
            'contact.page.title': 'Bizimle<br><span class="hero__headline-accent">İletişime Geçin</span>',
            'contact.page.desc': 'Sorularınız için bize ulaşın, size en kısa sürede dönüş yapalım.',
            'contact.form.name': 'Adınız Soyadınız',
            'contact.form.email': 'E-posta Adresiniz',
            'contact.form.phone': 'Telefon Numaranız',
            'contact.form.subject': 'Konu',
            'contact.form.message': 'Mesajınız',
            'contact.form.submit': 'Gönder',
            'contact.info.title': 'İletişim Bilgileri',
            'contact.info.address': 'Adres',
            'contact.info.email': 'E-posta',
            'contact.info.phone': 'Telefon',
            
            // About Page Extended
            'about.page.header': 'Geleceğin Denizcilik',
            'about.page.headerAccent': 'Operasyonları',
            'about.page.intro': 'Denizcilik sektöründeki derin tecrübemiz ve uzman kadromuzla, operasyonlarınızı sorunsuz ve verimli bir şekilde yönetiyoruz.',
            'about.story.heading': 'Denizde Doğan<br>Bir Tutku',
            'about.story.p1': 'OceansBound, denizcilik operasyonlarının karmaşıklığını ve kaptanların omuzlarındaki idari yükü hafifletmek amacıyla kuruldu. Yıllarca süren denizcilik ve liman yönetimi tecrübemiz, bize bir gerçeği gösterdi: Denizin gerçek ruhunu yaşamak için, karadaki detayların kusursuz bir şekilde yönetilmesi gerekir.',
            'about.story.p2': 'Amacımız, uluslararası denizcilik standartlarına uygun, şeffaf ve güvenilir bir acentelik hizmeti sunmak. Müşterilerimizin ihtiyaçlarına özel çözümler üreterek, seyir keyfini maksimuma çıkarıyoruz.',
            'about.phil.label': 'Felsefemiz',
            'about.phil.title': 'Siz Denize Odaklanın,<br>Geri Kalanını Bize Bırakın',
            'about.phil.p1': 'Yat sahipleri ve kaptanları için en değerli şey zamandır. Biz, o değerli zamanın liman prosedürleriyle, idari süreçlerle değil — açık denizde, güneşin altında geçirilmesi gerektiğine inanıyoruz.',
            'about.phil.p2': 'Siz rotanızı belirleyin, biz arkanızdaki rüzgar, limandaki güvenli iskeleniz olalım. Tüm resmi işlemlerden lojistik desteklere kadar her detayı üstlenerek, size sadece ufuk çizgisine odaklanma özgürlüğünü sunuyoruz.',
            'about.val.label': 'Değerlerimiz',
            'about.val.heading': 'Bizi Biz Yapan İlkeler',
            'about.val1.title': 'Güven & Şeffaflık',
            'about.val1.desc': 'Tüm süreçlerde şeffaflık ve dürüstlük temel ilkemizdir. Müşterilerimizle uzun soluklu, güvene dayalı ilişkiler kurarız.',
            'about.val2.title': 'Zaman Yönetimi',
            'about.val2.desc': 'Denizcilikte zaman en kritik faktördür. İşlemleri en kısa sürede, kusursuz bir şekilde tamamlamak için var gücümüzle çalışırız.',
            'about.val3.title': 'Mükemmeliyetçilik',
            'about.val3.desc': 'Sıradanla yetinmeyiz. En iyi hizmet kalitesini sunmak için sürekli gelişime, detaylara ve yeniliğe odaklanırız.',
            'about.cta.heading': 'Rotanızı Birlikte Çizelim',
            'about.cta.text': 'Denizcilik operasyonlarınızda profesyonel destek almak ve zamanınızı denizin keyfini çıkarmaya ayırmak için bizimle iletişime geçin.',
            'about.cta.btn': 'İletişime Geçelim',
            
            // Services Page Extended
            'svc.page.header': 'Operasyonel',
            'svc.page.headerAccent': 'Çözümlerimiz',
            'svc.page.intro': 'Yatınızın kusursuz bir operasyon geçirmesi için tüm sorumluluğu üstleniyoruz. Siz sadece rotanızı belirleyin, gerisini uzman ekibimize bırakın.',
            'svc.s1.title': 'Profesyonel<br>Acentelik',
            'svc.s1.desc': 'Liman işlemlerinizin başından sonuna kadar titizlikle yönetimi. Tüm resmi prosedürler, izinler, liman evrakları ve yerel otoriteler arası koordinasyon tamamen bizim kontrolümüzde.',
            'svc.s2.title': 'Doküman<br>Takibi',
            'svc.s2.desc': 'Teknenize ait kritik belgelerin güncel tutulması, yenilenmesi ve gerektiğinde ilgili makamlara iletilmesi. Gecikmelere ve cezai işlemlere asla mahal vermeyen kusursuz takip sistemi.',
            'svc.s3.title': 'Ekipman<br>Yönetimi',
            'svc.s3.desc': 'Kritik ekipmanlarınızın bakım takvimi, tedarik süreci ve yedek parça lojistiği eksiksiz şekilde takip edilir. Her seferinde seyre hazır ve güvende hissetmeniz sağlanır.',
            'svc.s4.title': 'Personel<br>Takibi',
            'svc.s4.desc': 'Mürettebatınızın sertifika ve belgelerinin takibi, vize gereksinimleri, havaalanından tekneye transfer organizasyonları ve tüm detaylı idari süreçler sorunsuz halledilir.',
            'svc.s5.title': 'Lojistik<br>Koordinasyon',
            'svc.s5.desc': 'Teknenize yapılacak teslimatlarda, kumanya ikmalinde, kritik parça transferlerinde ve operasyon gerektiren diğer noktalarda uçtan uca uzman lojistik yönetimi.',
            'svc.s6.title': '7/24 Kesintisiz<br>Teknik Destek',
            'svc.s6.desc': 'Seyriniz sırasında yaşanabilecek her türlü teknik arızada veya acil durumda, günün her saati müdahale edebilecek özel iletişim hattı ve anında kriz çözümü.',
            'svc.proc.label': 'Nasıl Çalışırız?',
            'svc.proc.title': 'Kusursuz İşleyiş, Sıfır Gecikme',
            'svc.proc.s1.title': 'Talep & Analiz',
            'svc.proc.s1.desc': 'İhtiyaçlarınızı dinler, eksikleri ve yapılması gereken idari işlemleri tespit ederiz.',
            'svc.proc.s2.title': 'Planlama',
            'svc.proc.s2.desc': 'Zaman çizergesini oluşturup, liman ve resmi dairelerdeki randevuları organize ederiz.',
            'svc.proc.s3.title': 'Yürütme',
            'svc.proc.s3.desc': 'Uzman ekibimiz sahaya iner. İkmal, dokümantasyon ve personel lojistiği tamamlanır.',
            'svc.proc.s4.title': 'Kesintisiz Seyir',
            'svc.proc.s4.desc': 'Her şey hazır olduğunda raporumuzu sunarız. Size sadece demir almak kalır.',
            'svc.faq.label': 'S.S.S',
            'svc.faq.title': 'Sıkça Sorulan Sorular',
            'svc.faq.q1': 'Acentelik hizmetiniz hangi bölgeleri kapsıyor?',
            'svc.faq.a1': 'Operasyonlarımız global düzeyde uzman bir ağ tarafından desteklenmektedir. Özellikle popüler yat rotaları, Akdeniz ve Ege dilleri başta olmak üzere dünyanın her noktasında destek sunabiliyoruz.',
            'svc.faq.q2': 'Doküman yenileme işlemlerini sadece limandayken mi yapıyorsunuz?',
            'svc.faq.a2': 'Hayır, dokümanlarınız bulut altyapımızda takip edilir. Süresi dolmaya yaklaşan belgeler için önceden aksiyon alır ve tekneniz denizdeyken bile bürokratik süreci sizin adınıza yürütürüz.',
            'svc.faq.q3': 'Acil yedek parça ihtiyacında lojistik desteğiniz var mı?',
            'svc.faq.a3': 'Kesinlikle. Geniş lojistik ağımız ve hızlı teslimat partnerlerimiz sayesinde, arızalanan parçanın yerine yenisinin dünyanın neresinden olursa olsun temin edilip teknenize ulaştırılmasını sağlıyoruz.',
            'svc.cta.title': 'Tüm Operasyonu Bize Bırakın',
            'svc.cta.text': 'Detaylı hizmet paketlerimiz ve teknenize özel sunduğumuz yönetim planları için hemen iletişime geçin.',
            'svc.cta.btn': 'İletişime Geçelim',
            
            // Why Us Page Extended
            'why.page.header': 'Sınırları Aşan<br><span class="hero__headline-accent">Hizmet Anlayışı</span>',
            'why.page.headerAccent': 'Hizmet Anlayışı',
            'why.page.intro': 'Denizcilik sektöründeki karmaşıklığı ortadan kaldırıyor, operasyonlarınızı pürüzsüz ve şeffaf bir deneyime dönüştürüyoruz.',
            'why.b1.title': '01. Konum Bağımsız Hizmet',
            'why.b1.desc': 'Dünyanın neresinde olursanız olun, aynı kalite ve hızda destek alırsınız. Çok uluslu liman prosedürlerini uzaktan koordine etme konusundaki benzersiz deneyimimiz, rotanız neresi olursa olsun bizi yanınızda kılar.',
            'why.b2.title': '02. Çözüm Odaklı',
            'why.b2.desc': 'Sorunları büyümeden çözeriz. Uzman ekibimiz beklenmedik durumlarda sakin ve etkili aksiyon alır.',
            'why.b3.title': '03. Titiz Takip',
            'why.b3.desc': 'Hiçbir belge, ekipman veya son tarih gözden kaçmaz. Sistematik altyapımız sizi bir adım önde tutar.',
            'why.b4.title': '04. Şeffaf İletişim',
            'why.b4.desc': 'Her adımda bilgilendirilirsiniz. Ne yaptığımızı, neden yaptığımızı ve ne zaman tamamlanacağını bilirsiniz.',
            'why.b5.title': '05. Seyrin Her Aşamasında Kesintisiz Destek',
            'why.b5.desc': 'Sadece liman giriş-çıkışlarında değil; seyir öncesi detaylı hazırlıktan, deniz üstündeki acil koordinasyona ve varış sonrası kapanış işlemlerine kadar rotanızın tamamında sizinleyiz.',
            'why.cmp.label': 'Farkımız',
            'why.cmp.title': 'Neden Geleneksel Acentelik Değil?',
            'why.cmp.feat': 'Özellik',
            'why.cmp.feature': 'Özellik',
            'why.cmp.std': 'Geleneksel Ajanslar',
            'why.cmp.standard': 'Geleneksel Ajanslar',
            'why.cmp.ob': 'OceansBound',
            'why.cmp.r1.feat': 'Operasyon Saatleri',
            'why.cmp.r1.feature': 'Operasyon Saatleri',
            'why.cmp.r1.std': 'Sınırlı mesai saatleri',
            'why.cmp.r1.standard': 'Sınırlı mesai saatleri',
            'why.cmp.r1.ob': '7/24 Kesintisiz Lojistik Destek',
            'why.cmp.r2.feat': 'Doküman Yönetimi',
            'why.cmp.r2.feature': 'Doküman Yönetimi',
            'why.cmp.r2.std': 'Fiziksel klasörler, yavaş süreçler',
            'why.cmp.r2.standard': 'Fiziksel klasörler, yavaş süreçler',
            'why.cmp.r2.ob': 'Dijital arşiv ve proaktif yenileme',
            'why.cmp.r3.feat': 'Kriz Yaklaşımı',
            'why.cmp.r3.feature': 'Kriz Yaklaşımı',
            'why.cmp.r3.std': 'Kriz anında reaktif çözüm arama',
            'why.cmp.r3.standard': 'Kriz anında reaktif çözüm arama',
            'why.cmp.r3.ob': 'Krizi önceden öngören planlı strateji',
            'why.cmp.r4.feat': 'Fiyatlandırma',
            'why.cmp.r4.feature': 'Fiyatlandırma',
            'why.cmp.r4.std': 'Sürpriz komisyonlar ve ek masraflar',
            'why.cmp.r4.standard': 'Sürpriz komisyonlar ve ek masraflar',
            'why.cmp.r4.ob': '%100 Şeffaf bütçe garantisi',
            'why.cta.title': 'Farkı Bizzat Yaşayın',
            'why.cta.text': 'OceansBound ile operasyonlarınızı stresten arındırın. İlk adım için bizimle iletişime geçin, rotanızı profesyonellerle güvenceye alalım.',
            'why.cta.btn': 'İletişime Geçin',
            
            // Contact Page Extended
            'cnt.page.header': 'Rotanızı Bize<br><span class="hero__headline-accent">Bildirin</span>',
            'cnt.page.headerAccent': 'Bildirin',
            'cnt.page.intro': 'Tüm operasyonel detayları OceansBound uzmanlığına devredin. İster genel bir bilgi talebi, ister acil destek için bizimle anında iletişime geçebilirsiniz.',
            'cnt.card1.title': '7/24 Acil Hat',
            'cnt.card1.desc': 'Kriz anında direkt ulaşın',
            'cnt.card2.title': 'E-Posta',
            'cnt.card2.desc': 'Dokümanlar ve Planlama',
            'cnt.card3.title': 'Merkez Ofis',
            'cnt.card3.desc': 'Operasyon Merkezi',
            'cnt.card3.value': 'Denizciler Cad. No:1, İstanbul',
            'cnt.card4.title': 'Global Ağ',
            'cnt.card4.desc': 'Tüm Limanlar',
            'cnt.card4.value': 'Dünya Çapında Hizmet',
            'cnt.form.title': 'Mesaj Gönderin',
            'cnt.form.desc': 'Size en kısa sürede geri dönüş yapmak için iletişim bilgilerinizi bizimle paylaşın.',
            'cnt.form.name': 'Adınız Soyadınız / Tekne Adı',
            'cnt.form.nameLabel': 'Adınız Soyadınız / Tekne Adı',
            'cnt.form.namePh': 'Örn: Kaptan Ahmet Yılmaz / S/Y Poseidon',
            'cnt.form.namePlaceholder': 'Örn: Kaptan Ahmet Yılmaz / S/Y Poseidon',
            'cnt.form.email': 'E-Posta Adresi',
            'cnt.form.emailLabel': 'E-Posta Adresi',
            'cnt.form.emailPh': 'ornek@posta.com',
            'cnt.form.emailPlaceholder': 'ornek@posta.com',
            'cnt.form.msg': 'Mesajınız / Talebiniz',
            'cnt.form.msgLabel': 'Mesajınız / Talebiniz',
            'cnt.form.msgPh': 'Acentelik, Lojistik, Doküman Yenileme...',
            'cnt.form.msgPlaceholder': 'Acentelik, Lojistik, Doküman Yenileme...',
            'cnt.form.btn': 'Gönder ve Rotayı Başlat',
            'cnt.global.title': 'Siz Demir Alın,<br>Gerisi Bizde.',
            'cnt.global.text': 'Operasyonların lokasyonu neresi olursa olsun profesyonel ekibimiz her kıtada, her limanda standartlara uygun ve eksiksiz bir şekilde yanınızdadır.<br><br><strong>OceansBound, kıtaları aşan operasyon güvenliğinizdir.</strong>',
            'cnt.global.strong': 'OceansBound, kıtaları aşan operasyon güvenliğinizdir.'
        },
        en: {
            // Navigation
            'nav.home': 'Home',
            'nav.about': 'About Us',
            'nav.services': 'Services',
            'nav.whyus': 'Why Us?',
            'nav.contact': 'Contact',
            
            // Hero Section
            'hero.title': 'Focus on the Sea',
            'hero.subtitle': 'We Handle the Rest',
            'hero.discover': 'Discover',
            
            // About Summary
            'about.label': 'About Us',
            'about.title': 'Your Trusted Partner<br>in Maritime Operations',
            'about.desc': 'At OceansBound, we provide comprehensive services ranging from port management to vessel operations. With our deep expertise in the maritime industry and our expert team, we manage your operations seamlessly and efficiently.',
            'about.link': 'Learn More →',
            'about.stat1': 'Years of Experience',
            'about.stat2': 'Completed Operations',
            'about.stat3': 'Port Network',
            
            // Services Summary
            'services.label': 'Our Services',
            'services.title': 'End-to-End Maritime<br>Operations Management',
            'services.card1.title': 'Professional<br>Agency',
            'services.card1.desc': 'Meticulous management of port operations. Procedures, documentation, and coordination handled by us.',
            'services.card2.title': 'Document<br>Tracking',
            'services.card2.desc': 'Keeping critical documents up-to-date, renewing them, and submitting to relevant authorities.',
            'services.card3.title': 'Equipment<br>Management',
            'services.card3.desc': 'Complete tracking of maintenance schedules, procurement processes, and logistics coordination.',
            'services.card4.title': 'Personnel<br>Tracking',
            'services.card4.desc': 'Certificate tracking, visa procedures, transfer organization, and administrative processes.',
            'services.card5.title': 'Logistics<br>Coordination',
            'services.card5.desc': 'End-to-end management of deliveries, parts transfers, and supply operations.',
            'services.link': 'All Services →',
            
            // Why Us
            'whyus.label': 'Why Us',
            'whyus.title': 'Experience the Difference',
            'whyus.item1.title': 'Location Independent Service',
            'whyus.item1.desc': 'Wherever you are in the world, you receive the same quality and speed of support.',
            'whyus.item2.title': 'Solution-Oriented Approach',
            'whyus.item2.desc': 'Our team takes calm, fast, and effective action in unexpected situations.',
            'whyus.item3.title': 'Meticulous Tracking System',
            'whyus.item3.desc': 'No document, no equipment, no deadline goes unnoticed.',
            'whyus.item4.title': 'Transparent Communication',
            'whyus.item4.desc': 'We keep you informed at every step. You always know what we\'re doing and when it\'s completed.',
            'whyus.item5.title': 'At Every Stage of the Voyage',
            'whyus.item5.desc': 'From pre-voyage preparations to post-voyage procedures, we\'re by your side without interruption.',
            'whyus.link': 'Detailed Info →',
            
            // Philosophy / CTA
            'philosophy.title': 'Our Philosophy',
            'philosophy.text': 'For yacht owners and captains, the most valuable thing is time. We believe that this precious time should be spent on the open sea, under the sun — not dealing with port procedures and administrative processes.',
            'philosophy.cta': 'Let\'s Plan Together',
            
            // Footer
            'footer.desc': 'With our deep expertise in the maritime sector,<br>we manage your operations seamlessly.',
            'footer.quicklinks': 'Quick Links',
            'footer.copyright': 'Copyright©2026. All Rights Reserved.',
            
            // About Page
            'about.page.title': 'Future of Maritime<br><span class="hero__headline-accent">Operations</span>',
            'about.page.desc': 'With our deep experience in the maritime sector and our expert team, we manage your operations seamlessly and efficiently.',
            'about.story.title': 'A Passion<br>Born at Sea',
            'about.story.desc1': 'OceansBound was founded to alleviate the complexity of maritime operations and the administrative burden on captains\' shoulders. Years of experience in maritime and port management showed us one truth: to live the true spirit of the sea, onshore details must be managed flawlessly.',
            'about.story.desc2': 'Our goal is to provide transparent and reliable agency services in compliance with international maritime standards. By producing solutions tailored to our customers\' needs, we maximize the joy of sailing.',
            'about.philosophy.label': 'Our Philosophy',
            'about.philosophy.title': 'Focus on the Sea,<br>Leave the Rest to Us',
            'about.philosophy.text': 'For yacht owners and captains, the most valuable thing is time. We believe that this precious time should be spent on the open sea, under the sun — not dealing with port procedures and administrative processes.',
            'about.values.title': 'Our Values',
            'about.value1.title': 'Reliability',
            'about.value1.desc': 'We do what we promise. Always.',
            'about.value2.title': 'Transparency',
            'about.value2.desc': 'We keep you informed at every step.',
            'about.value3.title': 'Expertise',
            'about.value3.desc': 'We know the dynamics of the maritime sector.',
            'about.cta.title': 'Let\'s Work Together',
            'about.cta.desc': 'Let\'s discuss how we can simplify your operations.',
            'about.cta.button': 'Contact Us',
            
            // Services Page
            'services.page.title': 'Comprehensive Maritime<br><span class="hero__headline-accent">Services</span>',
            'services.page.desc': 'From port procedures to operational coordination, we take full responsibility.',
            'services.detail1.title': 'Professional Agency',
            'services.detail1.desc': 'Port entry-exit procedures, customs procedures, coordination with official authorities, and complete tracking of all legal requirements.',
            'services.detail2.title': 'Document Management',
            'services.detail2.desc': 'Keeping ship certificates, personnel documents, insurance policies, and all critical documents up-to-date and renewed.',
            'services.detail3.title': 'Equipment & Maintenance',
            'services.detail3.desc': 'Periodic maintenance schedules, spare parts procurement, technical service coordination, and logistics process management.',
            'services.detail4.title': 'Personnel Coordination',
            'services.detail4.desc': 'Crew certificate tracking, visa procedures, travel organization, and administrative process management.',
            'services.detail5.title': 'Logistics Support',
            'services.detail5.desc': 'Fuel supply, water supply, provisions organization, and coordination of emergency supply processes.',
            'services.detail6.title': '24/7 Support',
            'services.detail6.desc': 'With our team available around the clock, immediate response in emergency situations.',
            
            // Why Us Page
            'whyus.page.title': 'Why<br><span class="hero__headline-accent">OceansBound?</span>',
            'whyus.page.desc': 'Experience the difference in your maritime operations.',
            
            // Contact Page
            'contact.page.title': 'Get in<br><span class="hero__headline-accent">Touch with Us</span>',
            'contact.page.desc': 'Reach out to us with your questions, and we\'ll get back to you as soon as possible.',
            'contact.form.name': 'Your Full Name',
            'contact.form.email': 'Your Email Address',
            'contact.form.phone': 'Your Phone Number',
            'contact.form.subject': 'Subject',
            'contact.form.message': 'Your Message',
            'contact.form.submit': 'Send',
            'contact.info.title': 'Contact Information',
            'contact.info.address': 'Address',
            'contact.info.email': 'Email',
            'contact.info.phone': 'Phone',
            
            // About Page Extended
            'about.page.header': 'Future of Maritime',
            'about.page.headerAccent': 'Operations',
            'about.page.intro': 'With our deep experience in the maritime sector and our expert team, we manage your operations seamlessly and efficiently.',
            'about.story.heading': 'A Passion<br>Born at Sea',
            'about.story.p1': 'OceansBound was founded to alleviate the complexity of maritime operations and the administrative burden on captains\' shoulders. Years of experience in maritime and port management showed us one truth: to live the true spirit of the sea, onshore details must be managed flawlessly.',
            'about.story.p2': 'Our goal is to provide transparent and reliable agency services in compliance with international maritime standards. By producing solutions tailored to our customers\' needs, we maximize the joy of sailing.',
            'about.phil.label': 'Our Philosophy',
            'about.phil.title': 'Focus on the Sea,<br>Leave the Rest to Us',
            'about.phil.p1': 'For yacht owners and captains, the most valuable thing is time. We believe that this precious time should be spent on the open sea, under the sun — not dealing with port procedures and administrative processes.',
            'about.phil.p2': 'You set your course, and we\'ll be the wind at your back, your safe harbor at port. Taking care of everything from official procedures to logistics support, we give you the freedom to focus only on the horizon.',
            'about.val.label': 'Our Values',
            'about.val.heading': 'The Principles That Define Us',
            'about.val1.title': 'Trust & Transparency',
            'about.val1.desc': 'Transparency and honesty are our fundamental principles in all processes. We build long-term, trust-based relationships with our customers.',
            'about.val2.title': 'Time Management',
            'about.val2.desc': 'In maritime, time is the most critical factor. We work with all our might to complete transactions in the shortest time, flawlessly.',
            'about.val3.title': 'Perfectionism',
            'about.val3.desc': 'We don\'t settle for ordinary. We focus on continuous improvement, details, and innovation to provide the best service quality.',
            'about.cta.heading': 'Let\'s Chart Your Course Together',
            'about.cta.text': 'Contact us to get professional support in your maritime operations and spend your time enjoying the sea.',
            'about.cta.btn': 'Get in Touch',
            
            // Services Page Extended
            'svc.page.header': 'Operational',
            'svc.page.headerAccent': 'Solutions',
            'svc.page.intro': 'We take full responsibility for your yacht to have a flawless operation. You just set your route, leave the rest to our expert team.',
            'svc.s1.title': 'Professional<br>Agency',
            'svc.s1.desc': 'Meticulous management of your port operations from start to finish. All official procedures, permits, port documents, and coordination between local authorities are entirely under our control.',
            'svc.s2.title': 'Document<br>Tracking',
            'svc.s2.desc': 'Keeping critical documents of your boat up-to-date, renewing them, and submitting them to relevant authorities when needed. A flawless tracking system that never allows delays and penalties.',
            'svc.s3.title': 'Equipment<br>Management',
            'svc.s3.desc': 'Your critical equipment\'s maintenance schedule, procurement process, and spare parts logistics are tracked completely. You feel ready and safe for every voyage.',
            'svc.s4.title': 'Personnel<br>Tracking',
            'svc.s4.desc': 'Tracking your crew\'s certificates and documents, visa requirements, airport-to-boat transfer organizations, and all detailed administrative processes are handled smoothly.',
            'svc.s5.title': 'Logistics<br>Coordination',
            'svc.s5.desc': 'End-to-end expert logistics management for deliveries to your boat, provisions supply, critical parts transfers, and other operational points.',
            'svc.s6.title': '24/7 Continuous<br>Technical Support',
            'svc.s6.desc': 'A special communication line and instant crisis resolution that can intervene at any hour of the day for any technical failure or emergency that may occur during your voyage.',
            'svc.proc.label': 'How We Work?',
            'svc.proc.title': 'Flawless Operation, Zero Delay',
            'svc.proc.s1.title': 'Request & Analysis',
            'svc.proc.s1.desc': 'We listen to your needs, identify deficiencies and administrative tasks that need to be done.',
            'svc.proc.s2.title': 'Planning',
            'svc.proc.s2.desc': 'We create the timeline and organize appointments at ports and official offices.',
            'svc.proc.s3.title': 'Execution',
            'svc.proc.s3.desc': 'Our expert team goes to the field. Supplies, documentation, and personnel logistics are completed.',
            'svc.proc.s4.title': 'Seamless Voyage',
            'svc.proc.s4.desc': 'When everything is ready, we present our report. All that\'s left for you is to weigh anchor.',
            'svc.faq.label': 'FAQ',
            'svc.faq.title': 'Frequently Asked Questions',
            'svc.faq.q1': 'Which regions does your agency service cover?',
            'svc.faq.a1': 'Our operations are supported by an expert network at a global level. We can provide support anywhere in the world, especially popular yacht routes, and the Mediterranean and Aegean regions.',
            'svc.faq.q2': 'Do you only do document renewal when docked?',
            'svc.faq.a2': 'No, your documents are tracked in our cloud infrastructure. We take action in advance for documents approaching expiration and run the bureaucratic process on your behalf even while your boat is at sea.',
            'svc.faq.q3': 'Do you have logistics support for emergency spare parts needs?',
            'svc.faq.a3': 'Absolutely. Thanks to our extensive logistics network and fast delivery partners, we ensure that a replacement for the failed part is procured and delivered to your boat from anywhere in the world.',
            'svc.cta.title': 'Leave All Operations to Us',
            'svc.cta.text': 'Contact us now for detailed service packages and customized management plans for your boat.',
            'svc.cta.btn': 'Get in Touch',
            
            // Why Us Page Extended
            'why.page.header': 'Transcending Boundaries<br><span class="hero__headline-accent">Service Philosophy</span>',
            'why.page.headerAccent': 'Service Philosophy',
            'why.page.intro': 'We eliminate the complexity in the maritime sector, transforming your operations into a smooth and transparent experience.',
            'why.b1.title': '01. Location Independent Service',
            'why.b1.desc': 'Wherever you are in the world, you receive the same quality and speed of support. Our unique experience in remotely coordinating multinational port procedures makes us by your side no matter where your route is.',
            'why.b2.title': '02. Solution-Oriented',
            'why.b2.desc': 'We solve problems before they grow. Our expert team takes calm and effective action in unexpected situations.',
            'why.b3.title': '03. Meticulous Tracking',
            'why.b3.desc': 'No document, equipment, or deadline goes unnoticed. Our systematic infrastructure keeps you one step ahead.',
            'why.b4.title': '04. Transparent Communication',
            'why.b4.desc': 'You are informed at every step. You know what we\'re doing, why we\'re doing it, and when it will be completed.',
            'why.b5.title': '05. Continuous Support at Every Stage of the Voyage',
            'why.b5.desc': 'Not just at port entry and exit; from detailed pre-voyage preparation to emergency coordination at sea and post-arrival closing procedures, we\'re with you throughout your entire route.',
            'why.cmp.label': 'Our Difference',
            'why.cmp.title': 'Why Not Traditional Agency?',
            'why.cmp.feat': 'Feature',
            'why.cmp.feature': 'Feature',
            'why.cmp.std': 'Traditional Agencies',
            'why.cmp.standard': 'Traditional Agencies',
            'why.cmp.ob': 'OceansBound',
            'why.cmp.r1.feat': 'Operation Hours',
            'why.cmp.r1.feature': 'Operation Hours',
            'why.cmp.r1.std': 'Limited business hours',
            'why.cmp.r1.standard': 'Limited business hours',
            'why.cmp.r1.ob': '24/7 Continuous Logistics Support',
            'why.cmp.r2.feat': 'Document Management',
            'why.cmp.r2.feature': 'Document Management',
            'why.cmp.r2.std': 'Physical folders, slow processes',
            'why.cmp.r2.standard': 'Physical folders, slow processes',
            'why.cmp.r2.ob': 'Digital archive and proactive renewal',
            'why.cmp.r3.feat': 'Crisis Approach',
            'why.cmp.r3.feature': 'Crisis Approach',
            'why.cmp.r3.std': 'Reactive solution search during crisis',
            'why.cmp.r3.standard': 'Reactive solution search during crisis',
            'why.cmp.r3.ob': 'Planned strategy anticipating crisis',
            'why.cmp.r4.feat': 'Pricing',
            'why.cmp.r4.feature': 'Pricing',
            'why.cmp.r4.std': 'Surprise commissions and extra costs',
            'why.cmp.r4.standard': 'Surprise commissions and extra costs',
            'why.cmp.r4.ob': '100% Transparent budget guarantee',
            'why.cta.title': 'Experience the Difference Yourself',
            'why.cta.text': 'Free your operations from stress with OceansBound. Contact us for the first step, let\'s secure your route with professionals.',
            'why.cta.btn': 'Contact Us',
            
            // Contact Page Extended
            'cnt.page.header': 'Tell Us<br><span class="hero__headline-accent">Your Route</span>',
            'cnt.page.headerAccent': 'Your Route',
            'cnt.page.intro': 'Delegate all operational details to OceansBound expertise. Whether it\'s a general information request or urgent support, you can contact us instantly.',
            'cnt.card1.title': '24/7 Emergency Line',
            'cnt.card1.desc': 'Direct access in crisis',
            'cnt.card2.title': 'Email',
            'cnt.card2.desc': 'Documents and Planning',
            'cnt.card3.title': 'Headquarters',
            'cnt.card3.desc': 'Operations Center',
            'cnt.card3.value': 'Denizciler Cad. No:1, Istanbul',
            'cnt.card4.title': 'Global Network',
            'cnt.card4.desc': 'All Ports',
            'cnt.card4.value': 'Worldwide Service',
            'cnt.form.title': 'Send a Message',
            'cnt.form.desc': 'Share your contact information with us so we can get back to you as soon as possible.',
            'cnt.form.name': 'Your Name / Boat Name',
            'cnt.form.nameLabel': 'Your Name / Boat Name',
            'cnt.form.namePh': 'Ex: Captain John Smith / S/Y Poseidon',
            'cnt.form.namePlaceholder': 'Ex: Captain John Smith / S/Y Poseidon',
            'cnt.form.email': 'Email Address',
            'cnt.form.emailLabel': 'Email Address',
            'cnt.form.emailPh': 'example@mail.com',
            'cnt.form.emailPlaceholder': 'example@mail.com',
            'cnt.form.msg': 'Your Message / Request',
            'cnt.form.msgLabel': 'Your Message / Request',
            'cnt.form.msgPh': 'Agency, Logistics, Document Renewal...',
            'cnt.form.msgPlaceholder': 'Agency, Logistics, Document Renewal...',
            'cnt.form.btn': 'Send and Start the Route',
            'cnt.global.title': 'You Weigh Anchor,<br>We Handle the Rest.',
            'cnt.global.text': 'No matter where the operations are located, our professional team is by your side completely and in compliance with standards on every continent, at every port.<br><br><strong>OceansBound is your operational security across continents.</strong>',
            'cnt.global.strong': 'OceansBound is your operational security across continents.'
        }
    };

    // ========== LANGUAGE SYSTEM ==========
    let currentLang = localStorage.getItem('oceansBound_lang') || 'tr';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('oceansBound_lang', lang);
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(function(el) {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        
        // Update all elements with data-i18n-html attribute (for innerHTML)
        document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
            const key = el.getAttribute('data-i18n-html');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        
        // Update all elements with data-i18n-placeholder attribute
        document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang] && translations[lang][key]) {
                el.setAttribute('placeholder', translations[lang][key]);
            }
        });
        
        // Update language toggle buttons
        document.querySelectorAll('.navbar__lang-option').forEach(function(btn) {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('navbar__lang-option--active');
            } else {
                btn.classList.remove('navbar__lang-option--active');
            }
        });
    }

    // Initialize language on page load
    function initLanguage() {
        setLanguage(currentLang);
        
        // Language toggle click handler
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            langToggle.addEventListener('click', function(e) {
                const target = e.target.closest('.navbar__lang-option');
                if (target) {
                    const lang = target.getAttribute('data-lang');
                    if (lang && lang !== currentLang) {
                        setLanguage(lang);
                    }
                }
            });
        }
    }

    // Run language init when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLanguage);
    } else {
        initLanguage();
    }

    const navbar = document.getElementById('navbar');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    const scrollIndicator = document.querySelector('.hero__scroll-indicator');

    // Depth atmosphere elements
    const oceanRays = document.getElementById('oceanRays');
    const particlesContainer = document.getElementById('particlesContainer');

    // ---- Navbar: frosted glass on scroll ----
    let ticking = false;

    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(function () {
                const scrollY = window.scrollY;

                // Toggle scrolled class
                if (scrollY > 40) {
                    navbar.classList.add('navbar--scrolled');
                } else {
                    navbar.classList.remove('navbar--scrolled');
                }

                // ---- Ocean Depth Effects ----
                const maxScroll = document.body.scrollHeight - window.innerHeight;
                const scrollProgress = Math.min(Math.max(scrollY / maxScroll, 0), 1);

                // 1. Fade out rays (visible 0% - 40% scroll)
                if (oceanRays) {
                    const raysOpacity = Math.max(1 - (scrollProgress * 2.5), 0);
                    oceanRays.style.opacity = raysOpacity;
                }

                // 2. Enable particles (visible earlier on scroll)
                if (particlesContainer) {
                    if (scrollProgress > 0.1 && particlesContainer.children.length === 0) {
                        createParticles(15);
                    } else if (scrollProgress <= 0.1 && particlesContainer.children.length > 0) {
                        particlesContainer.innerHTML = ''; // Remove when near surface
                    }
                }



                ticking = false;
            });
            ticking = true;
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    // ---- Hamburger menu toggle ----
    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', function () {
            const isOpen = navMenu.classList.toggle('navbar__nav--open');
            hamburgerBtn.classList.toggle('navbar__hamburger--open', isOpen);
            hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
        });

        // Close menu on link click
        navMenu.querySelectorAll('.navbar__link').forEach(function (link) {
            link.addEventListener('click', function () {
                navMenu.classList.remove('navbar__nav--open');
                hamburgerBtn.classList.remove('navbar__hamburger--open');
                hamburgerBtn.setAttribute('aria-expanded', 'false');
            });
        });

        // Close menu on outside click
        document.addEventListener('click', function (e) {
            if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
                navMenu.classList.remove('navbar__nav--open');
                hamburgerBtn.classList.remove('navbar__hamburger--open');
                hamburgerBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // ---- Scroll indicator: smooth scroll to intro ----
    if (scrollIndicator) {
        scrollIndicator.style.cursor = 'pointer';
        scrollIndicator.addEventListener('click', function () {
            const target = document.getElementById('about-summary');
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    // ---- Timeline: scroll reveal ----
    var revealItems = document.querySelectorAll('[data-reveal]');

    if (revealItems.length && 'IntersectionObserver' in window) {
        var revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    // Stagger based on item index
                    var index = Array.prototype.indexOf.call(revealItems, entry.target);
                    setTimeout(function () {
                        entry.target.classList.add('is-visible');
                    }, index * 150);
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        revealItems.forEach(function (item) {
            revealObserver.observe(item);
        });
    } else {
        // Fallback: show all items immediately
        revealItems.forEach(function (item) {
            item.classList.add('is-visible');
        });
    }

    // ---- Particle Generator ----
    function createParticles(count) {
        if (!particlesContainer) return;

        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';

            // Randomize properties
            const left = Math.random() * 100;
            const size = Math.random() * 3 + 2; // 2px - 5px
            const duration = Math.random() * 20 + 10; // 10s - 30s
            // Create much shorter delay so particles appear quickly
            const delay = Math.random() * 2; // 0s - 2s
            const drift = (Math.random() - 0.5) * 100; // -50px to 50px
            const opacity = Math.random() * 0.4 + 0.1; // 0.1 - 0.5

            particle.style.left = `${left}%`;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.animationDelay = `${delay}s`;
            particle.style.setProperty('--duration', `${duration}s`);
            particle.style.setProperty('--drift', `${drift}px`);
            particle.style.setProperty('--max-opacity', opacity);

            particlesContainer.appendChild(particle);
        }
    }
})();
