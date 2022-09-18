import './styles/index.less'
import setTheme from './utils/theme'
const btn = document.querySelector('#theme-btn')

btn.addEventListener('click', () => {
  const theme = localStorage.getItem('theme') || 'default'
  setTheme(theme === 'default' ? 'dark' : 'default')
})