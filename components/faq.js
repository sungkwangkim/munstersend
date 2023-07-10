import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-yellow-400`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "먼스터샌드 가맹점 오픈에 필요한 투자 금액은 어느 정도 인가요?",
    answer: "최소 전용 면적 00평 기준, 약 00원 ~ 00원이 예상됩니다. (추가공사, 별도비용, 임대료, 부가세 제외)   자세한 예상비용은 홈페이지 '가맹점 → 써브웨이 프랜차이즈'에서 확인하실 수 있습니다. 000-0000-0000로 연락바랍니다.",
  },
  {
    question: "먼스터샌드 가맹점주가 되기 위한 조건이 있나요?",
    answer: "제품의 퀄리티, 매장 운영, 고객 서비스에 있어 브랜드의 가치를 실현하기 위해 운영 매누얼 및 본사의 규정과 지침을 이행하고 준수 할 수 있는 분, 고객 서비스 마인드를 갖춘 분과 가맹계약을 체결합니다. 각 지사의 가맹 개발자는 계약 체결 전, 심도 깊은 상담, 성향 테스트를 통해 이부분은 검증합니다.",
  },
];

export default Faq;