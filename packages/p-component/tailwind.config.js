module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      DEFAULT: [
        'Lato',
        'Noto Sans JP',
        '游ゴシック Medium',
        '游ゴシック体',
        'Yu Gothic Medium',
        'YuGothic',
        'ヒラギノ角ゴ ProN',
        'Hiragino Kaku Gothic ProN',
        'メイリオ',
        'Meiryo',
        'ＭＳ Ｐゴシック',
        'MS PGothic',
        'san-serif',
      ],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
