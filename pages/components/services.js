import React from 'react';
import { useTranslation } from 'next-i18next';

function Services() {
  const { t } = useTranslation("common");

  const services = [
    {
      title: "WordPress_Site_Installation",
      price: "Price_From_4Million",
      description: "Install_WordPress_Description",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
    },
    {
      title: "Professional_WordPress_Design",
      price: "Price_From_7Million",
      description: "Custom_WordPress_Description",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: "UI_Implementation",
      price: "Price_From_10Million",
      description: "UI_Coding_Description",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Frontend_Development",
      price: "Price_From_20Million",
      description: "Frontend_Development_Description",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="flex justify-center w-11/12 lg:w-2/3 mx-auto mb-10">
      <div className="w-full">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white rtl:font-IRANRounded">
            {t("My Services")}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start rtl:space-x-reverse"
            >
              {/* آیکون */}
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-[#eca348] text-white mb-4 sm:mb-0 sm:ltr:mr-6 sm:rtl:ml-6">
                {service.icon}
              </div>

              {/* متن‌ها */}
              <div className="text-center sm:ltr:text-left sm:rtl:text-right flex-1">
                <h3 className="mb-2 text-xl sm:text-2xl font-bold tracking-normal break-words text-gray-900 dark:text-white rtl:font-IRANRounded">
                  {t(service.title)}
                </h3>
                {/*<span className="inline-block text-[#286eb4] dark:text-[#52a5ff] font-semibold text-lg sm:text-xl mb-2">
                  {t(service.price)}
                </span>*/}
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed break-words whitespace-normal text-justify sm:rtl:text-right sm:ltr:text-left">
                  {t(service.description)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
