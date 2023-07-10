import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-two.jpg";
import benefitTwoImg from "../public/img/benefit-two.jpg";

const benefitOne = {
  title: "프리미엄 토스트",
  desc: "간편한데 속은 든든! 탄수화물은 줄이고 단백질은 더한 프리미엄 토스트 샌드위치도 우아하고 깔끔하게 먹을 수 있다니!",
  image: benefitOneImg,
  bullets: [
    {
      title: "속이 편한",
      desc: "밀가루와 자극적인 음식의 소화가 어려우신 분들도 속 편-하게 드실 수 있는 먼스터샌드!",
      icon: <FaceSmileIcon />,
    },
    {
      title: "빵은  줄이고, 계란으로 단백질은 듬뿍",
      desc: "먼스터샌드 한끼면 속이 편안~~~ 든든함은 덤",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "안전한 먹거리",
      desc: "철저한 위생 및 청결 관리에 더욱 신경 쓰고 있습니다.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "프리미엄 토스트",
  desc: "간편한데 속은 든든! 탄수화물은 줄이고 단백질은 더한 프리미엄 토스트 샌드위치도 우아하고 깔끔하게 먹을 수 있다니!",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
