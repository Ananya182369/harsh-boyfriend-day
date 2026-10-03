function toggleMenu(){document.getElementById('navLinks')?.classList.toggle('open')}

const letters={
letter1:`<p>Dear Baby,</p><p>There are so many ordinary moments where I randomly think of you, and somehow they don't feel quite so ordinary anymore.</p><p>I hope you know how much your presence means to me, even from far away.</p><p class="signature">Love,<br>your Baby ♡<br><br>I love you, Harsh. ♡</p>`,
letter2:`<p>Hey Baby,</p><p>If you're reading this because you miss me, imagine me sitting next to you for a second. No distance, no screens, just us.</p><p>We'll make up for all the hugs we're missing someday.</p><p class="signature">Until then — I'm here. ♡<br><br>I love you, Harsh. ♡</p>`,
letter3:`<p>Happy Boyfriend Day, Baby!</p><p>I wanted to give you something that was actually made for you, so I made this tiny corner of the internet. Every page is a little reminder of us.</p><p>Thank you for being my person through the calls, texts, distance and everything in between.</p><p class="signature">Your Baby ♡<br><br>I love you, Harsh. ♡</p>`
};

function openLetter(id){const modal=document.getElementById('letterModal');if(!modal)return;document.getElementById('letterText').innerHTML=letters[id];modal.classList.remove('hidden')}
function closeLetter(e){if(e && e.target && !e.target.classList.contains('modal'))return;document.getElementById('letterModal')?.classList.add('hidden')}

const surprises={
miss:`<h2>For when you miss me ♡</h2><p>Look at your phone. There is probably a message from me waiting for you. And if there isn't… go annoy me yourself. 😭♡</p><p class="signature">I love you, Harsh. ♡</p>`,
sad:`<h2>Emergency smile delivery ☺</h2><p>You are officially required to smile right now. Yes, I'm making the rules. Consider this a tiny hug through the screen.</p><p class="signature">I love you, Harsh. ♡</p>`,
happy:`<h2>Tell me everything! ✦</h2><p>Whatever happened, I want to hear the whole story. The exciting parts, the silly parts, all of it.</p><p class="signature">I love you, Harsh. ♡</p>`,
future:`<h2>Someday ♡</h2><p>One day this won't be a long-distance scrapbook. It'll just be a scrapbook of the places we went, the food we tried and all the ridiculous things we did together.</p><p class="signature">I love you, Harsh. ♡</p>`,
};
function showSurprise(id){const box=document.getElementById('surprise');if(!box)return;box.innerHTML=surprises[id];box.classList.remove('hidden');box.scrollIntoView({behavior:'smooth',block:'center'})}

function finalReveal(){const box=document.getElementById('finalMessage');box.classList.remove('hidden');box.scrollIntoView({behavior:'smooth',block:'center'});for(let i=0;i<22;i++){setTimeout(()=>{const h=document.createElement('div');h.className='heart';h.textContent=['♡','♥','✦'][Math.floor(Math.random()*3)];h.style.left=(10+Math.random()*80)+'vw';h.style.top=(65+Math.random()*20)+'vh';h.style.animationDuration=(1.8+Math.random()*1.5)+'s';document.body.appendChild(h);setTimeout(()=>h.remove(),3500)},i*90)}}


function sayNo(){
  const page=document.getElementById('questionPage');
  if(!page)return;

  page.innerHTML=`
    <div class="how-dare paper">
      <div class="angry-emojis">😤 😠 😾</div>
      <p class="eyebrow">EXCUSE ME?!</p>
      <h1>HOW DARE YOU 😤</h1>
      <p>That was obviously the wrong answer.</p>
      <p>Try again, Baby. ♡</p>
      <button class="button" onclick="location.href='forever.html'">DO AGAIN ♡</button>
    </div>`;
}
function sayYes(){
  const page=document.getElementById('questionPage');
  if(!page)return;
  page.innerHTML=`
    <div class="yes-result paper">
      <div class="happy-emojis">🥹 ♡ 🫶</div>
      <p class="eyebrow">correct answer detected</p>
      <h1>YAYYY, Baby ♡</h1>
      <p>Okay, now you officially have to live with me forever. 😌</p>
      <p>Thank you for choosing <b>us</b>.</p>
      <p class="signature">— your Baby ♡</p>
      <a class="button" href="special.html">Back to our special page →</a>
    </div>`;
  for(let i=0;i<18;i++){
    setTimeout(()=>{const h=document.createElement('div');h.className='heart';h.textContent=['♡','♥','✦'][Math.floor(Math.random()*3)];h.style.left=(10+Math.random()*80)+'vw';h.style.top=(65+Math.random()*20)+'vh';document.body.appendChild(h);setTimeout(()=>h.remove(),3200)},i*80);
  }
}
function toggleMusic(){
  const music = document.getElementById('backgroundMusic');
  const button = document.querySelector('.music-button');

  if(!music) return;

  if(music.paused){
    music.play();
    button.textContent = '♫ Pause our little song';
  }else{
    music.pause();
    button.textContent = '♫ Play our little song';
  }
}