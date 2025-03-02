/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "var(--black)",
        gray: {
          90: "var(--gray-90)",
          80: "var(--gray-80)",
          70: "var(--gray-70)",
          60: "var(--gray-60)",
          50: "var(--gray-50)",
          40: "var(--gray-40)",
          30: "var(--gray-30)",
          20: "var(--gray-20)",
          10: "var(--gray-10)",
        },
        white: "var(--white)",

        main: {
          50: "var(--main-50)",
          40: "var(--main-40)",
          30: "var(--main-30)",
          20: "var(--main-20)",
          10: "var(--main-10)",
        },
        "main-hard": {
          10: "var(--main-hard-10)",
          20: "var(--main-hard-20)",
          40: "var(--main-hard-40)",
          50: "var(--main-hard-50)",
        },
        "main-red": "var(--main-red)",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "'Fira Sans'",
          "'Droid Sans'",
          "'Helvetica Neue'",
          "sans-serif",
        ],
        mono: [
          "source-code-pro",
          "Menlo",
          "Monaco",
          "Consolas",
          "'Courier New'",
          "monospace",
        ],
        pretendard: ["Pretendard-Regular", "sans-serif"], // 폰트 등록
      },
    },
  },
  plugins: [],
};
