document.addEventListener('DOMContentLoaded',()=>{
  document.title=document.title.replaceAll('Gautam','Goutam');
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
  const textNodes=[];
  while(walker.nextNode()) textNodes.push(walker.currentNode);
  textNodes.forEach(node=>node.nodeValue=node.nodeValue.replaceAll('Gautam','Goutam'));
  document.querySelectorAll('a,button').forEach(element=>{
    if(element.textContent.trim().toLowerCase().includes('download résumé')) element.remove();
  });

  const nav=document.querySelector('.links');
  const menu=document.querySelector('.menu');
  menu?.addEventListener('click',()=>nav.classList.toggle('open'));

  const top=document.querySelector('.top');
  const progress=document.querySelector('.progress');
  addEventListener('scroll',()=>{
    const height=document.documentElement.scrollHeight-innerHeight;
    progress.style.width=(scrollY/height*100)+'%';
    top.classList.toggle('show',scrollY>500);
  });
  top?.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));

  document.querySelectorAll('[data-filter]').forEach(button=>button.onclick=()=>{
    document.querySelectorAll('[data-filter]').forEach(item=>item.classList.remove('on'));
    button.classList.add('on');
    document.querySelectorAll('[data-cat]').forEach(card=>card.classList.toggle('hide',button.dataset.filter!=='all'&&card.dataset.cat!==button.dataset.filter));
  });

  document.querySelectorAll('[data-modal]').forEach(button=>button.onclick=()=>{
    document.querySelector('.modal').classList.add('show');
    document.querySelector('.modalbox h2').textContent=button.dataset.modal;
  });
  document.querySelectorAll('.modal,.close').forEach(element=>element.onclick=event=>{
    if(event.target===element||element.classList.contains('close')) document.querySelector('.modal').classList.remove('show');
  });
});
