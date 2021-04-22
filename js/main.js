'use strict';
{
  // CPの値を生成し桁ごとに配列にする
  let ans100 = Math.floor(1 + Math.random() * 9);
  let ans10 = Math.floor(Math.random() * 10);
  let ans1 = Math.floor(Math.random() * 10);
  let cpNum = [ans100, ans10, ans1];
  
  // ３つの数値が全て異なる場合のみOK
  function checkCpNums() {
    if (cpNum[0] === cpNum[1] || cpNum[0] === cpNum[2] || cpNum[1] === cpNum[2]) {
      location.reload();
    }
  }
  
  // ３つの数値が全て異なる場合のみOK
  function checkUserNums() {
    
    // 入力値を桁ごとに分解して配列として取得する
    const exp = document.getElementById('exp');
    const exp100 = Math.floor(exp.value / 100);
    const exp10 = Math.floor((exp.value - exp100 * 100) / 10);
    const exp1 = Math.floor(exp.value - exp100 * 100 - exp10 * 10);
    const expNum = [exp100, exp10, exp1];
    
    if (expNum[0] === expNum[1] || expNum[0] === expNum[2] || expNum[1] === expNum[2]) {
      return void
      alert('３桁の重複しない数字を半角入力してください。'),
      location.reload();
    }
    
    // 要素ごとに、ローラー作戦で照合する
    // 順番と値が合致すればeat+1,順番は違うが値が合致すればbite+1
    let n = 0; // cpの配列番号
    let i = 0; // expの配列番号
    let ec = 0; // EatCount
    let bc = 0; // BiteCount
    
    while (n < 3) {
      while (i < 3) {
        if (cpNum[n] === expNum[i]) { // 同じ数字があるかどうか
          if (n === i) { // 桁数が合っているかどうか
            ec++;
          } else {
            bc++;
          }
        }
        i++;
      }
      i = 0;
      n++;
    }
    
    // ヒントを表示
    // 全てEatしたらテキストとボタンを追加
    // クリックしたらページをリロードする
    const text = document.getElementById('text');
    
    if (ec === 3) {
      text.textContent = `${ec} EAT! Congratulations!`;
      
      const Btn = document.createElement('button');
      Btn.textContent = 'もう一度挑戦する';
      document.querySelector('body').appendChild(Btn);
      Btn.addEventListener('click', () => {
        location.reload();
      });
    } else {
      text.textContent = `EAT : ${ec} and BITE : ${bc}`;
      exp.value = "";
      exp.focus();
    }
    exp.focus();
  }
  
  // ページ読み込み時に発火する
  checkCpNums();
  console.log(`cpNum = ${cpNum[0]}${cpNum[1]}${cpNum[2]}`);
  
  let x = 0;
  
  // clickイベントで発火する
  document.querySelector('button').addEventListener('click', () => {
    // 10回外したら終了
    if (x > 8) {
      alert(`正解は${cpNum[0]}${cpNum[1]}${cpNum[2]}でした。`);
      location.reload();
    } else {
      checkUserNums();
      x++;
      console.log(10 - x);
    }
  });
}