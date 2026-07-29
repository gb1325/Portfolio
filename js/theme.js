(()=>{
  const key='goutam-theme';
  const setTheme=theme=>{
    document.documentElement.dataset.theme=theme;
    localStorage.setItem(key,theme);
    const button=document.querySelector('.theme');
    if(button) button.textContent=theme==='dark'?'☀':'☾';
  };
  setTheme(localStorage.getItem(key)||'light');
  document.addEventListener('DOMContentLoaded',()=>document.querySelector('.theme')?.addEventListener('click',()=>setTheme(document.documentElement.dataset.theme==='dark'?'light':'dark')));
})();
