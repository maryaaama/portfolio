import React, { useState } from "react";
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const MyProject = ({ id, name, href, imageSrc, description }) => {
  const { t } = useTranslation("common");
  const descriptionKey = typeof description === 'string'
    ? description
    : description?.key || '';
  return (
    <div className="flex flex-col h-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <div className="relative w-full h-56">
          <Image
            src={imageSrc}
            alt={id}
            fill
            className="object-cover rounded-t-lg"
            sizes="(max-width: 640px) 100vw, 454px"
            priority
          />
        </div>
      </a>
      <div className="flex flex-col flex-1 p-5">
        <a href={href} target="_blank" rel="noopener noreferrer">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify flex-1">
          {t(descriptionKey)}
        </p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-auto"
        >
          {t("View project")}
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};
export default MyProject;