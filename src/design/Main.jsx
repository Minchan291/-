import React from 'react';
import { Link } from 'react-router-dom';
import { createRoot } from 'react-dom/client';


const Main = () => (
  <>
    <section className="w-full py-12 bg-yellow-100 dark:bg-gray-800">
      <header className="flex justify-between items-center px-4 py-2">
        <div className="flex items-center space-x-4">
          <svg
            className="h-8 w-8 text-gray-800 dark:text-gray-100"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          </svg>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">집밥 한선생</h1>
        </div>
        <nav className="space-x-4">
          <Link
            className="text-gray-800 hover:text-yellow-500 dark:text-gray-100 dark:hover:text-yellow-300"
            to="/menu"
          >
            랜덤음식추천
          </Link>
          <Link
            className="text-gray-800 hover:text-yellow-500 dark:text-gray-100 dark:hover:text-yellow-300"
            to="/about"
          >
            오늘의 메뉴
          </Link>
          <Link
            className="text-gray-800 hover:text-yellow-500 dark:text-gray-100 dark:hover:text-yellow-300"
            to="/contact"
          >
            
          </Link>
          <Link
            className="text-gray-800 hover:text-yellow-500 dark:text-gray-100 dark:hover:text-yellow-300"
            to="/reservation"
          >
            내가 좋아하는 메뉴
          </Link>
        </nav>
      </header>
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100">오늘의 레시피</h2>
        <p className="text-gray-700 dark:text-gray-400">한국인이 좋아하는 메뉴의 레시피를 소개해요</p>
        <Link
          className="inline-flex mt-4 bg-yellow-500 hover:bg-yellow-600 px-6 py-2 text-white font-bold rounded-md"
          to="/order"
        >
          내가 좋아하는 메뉴는?
        </Link>
      </div>
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
          <img
            alt="slide 1"
            className="rounded-lg"
            height="300"
            src="img/images1.jpg"
            style={{
              aspectRatio: "500/300",
              objectFit: "cover",
            }}
            width="500"
          />
          <img
            alt="slide 2"
            className="rounded-lg"
            height="300"
            src="img/images2.jpg"
            style={{
              aspectRatio: "500/300",
              objectFit: "cover",
            }}
            width="500"
          />
          <img
            alt="slide 3"
            className="rounded-lg"
            height="300"
            src="img/images3.jpg"
            style={{
              aspectRatio: "500/300",
              objectFit: "cover",
            }}
            width="500"
          />
               <img
            alt="slide 3"
            className="rounded-lg"
            height="300"
            src="img/images4.jpg"
            style={{
              aspectRatio: "500/300",
              objectFit: "cover",
            }}
            width="500"
          />
        </div>
      </div>
    </section>
    <main className="space-y-8 py-8 bg-yellow-50 dark:bg-gray-900">
      <section className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">랜덤음식추천</h2>
        <p className="text-gray-700 dark:text-gray-400">뭐 먹을지 고민될때?</p>
      </section>
      <section className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">오늘의 메뉴</h2>
        <p className="text-gray-700 dark:text-gray-400">오늘 먹은 음식과 다른게 땡긴다면?</p>
      </section>
      <section className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">내가 좋아하는 메뉴</h2>
        <p className="text-gray-700 dark:text-gray-400">좋아할만한 음식을 추천해드려요!</p>
      </section>
      <section className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">어떤걸 추천해줄까?</h2>
        <p className="text-gray-700 dark:text-gray-400">색다른 음식이 떙기는 오늘!</p>
      </section>
    </main>
    <footer className="w-full py-4 bg-yellow-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6 text-center">
        <p className="text-gray-800 dark:text-gray-100">© 2023 집밥 한선생. All rights reserved.</p>
      </div>
    </footer>
  </>
);

export default Main;
