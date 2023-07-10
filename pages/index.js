import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>먼스터 샌드</title>
        <meta
          name="description"
          content="먼스터샌드는 고객의 '주문 즉시 조리, 합니다. 깨끗하고, 건강한 토스트를 만들겠습니다."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <Video />
      <SectionTitle
        pretitle="MUSTER 특별함"
        title="먼스터샌드를 먹어야 하는 이유">
        모든 음식 주문 시 먼스터 샌드만의 특별한 우아함과 깔끔함을 함께 드립니다.
      </SectionTitle>
      <Benefits data={benefitOne} />
      {/* <Benefits imgPos="right" data={benefitTwo} /> */}
      {/* <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle> */}
      
      {/* <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle> */}
      {/* <Testimonials /> */}
      <SectionTitle pretitle="FAQ" title="자주 묻는 질문">
        한국 프랜차이즈 1위! 먼스터샌드는 매장수 및 분포지역 기준, Quick Service Restaurant(QSR) 부분 No.1 프랜차이즈입니다.
      </SectionTitle>
      <Faq />
      {/* <Cta /> */}
      <Footer />
      {/* <PopupWidget /> */}
    </>
  );
}

export default Home;