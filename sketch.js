let turn;
let money;
let lv;
let lv_uped;
let workCount;
let freeCount;
let albaCount;
let name;
let scene;
let font;
let clicks;
let tutorial;
let img_s1;
let img_s2;
let img_s2_1;
let img_s2_c1;
let img_s2_c2;
let img_s2_c3;
let img_s2_c4;
let img_s2_c5;
let img_s21;
let img_s21_11;
let img_s21_12;
let img_s21_13;
let img_s21_2;
let img_s22;
let img_s23;
let img_s23_11;
let img_s23_12;
let img_s23_13;
let img_s23_14;
let img_s3;
let img_s3_1;
let img_s3_c1;
let img_s3_c2;
let img_s3_c3;
let img_s3_c4;
let img_s3_c5;
let img_s31;
let img_s31_11;
let img_s31_12;
let img_s31_2;
let img_s31_3;
let img_s32;
let img_s322;
let img_s33;
let img_s41;
let img_s42;
let img_end_b;
let img_end_1;
let img_end_2;
let img_end_3;
let img_end_31;
let img_end_32;
let img_b1;
let img_b2;
let img_b3;
let img_b4;
let img_b5;
let img_b6;
let img_b1d;
let img_b2d;
let img_b3d;
let img_b4d;
let img_b5d;
let img_b6d;
let img_b321;
let img_b322;
let img_b323;
let img_b324;
let img_status;
let img_fadeout;
let img_fadeout_x;
let img_downkey;
let img_upkey;
let img_leftkey;
let img_rightkey;
let icon_star;
let icon_seven;
let icon_heart;
let icon_dollar;
let icon_fruit;
let icon_day;
let icon_night;
let button1;
let button2;
let button3;
let button321; //주식사기
let button322; //주식팔기
let button323; //코인사기
let button324; //코인팔기
let button325; //종료
let button326;
let fadeout;
let scenetime;
let dial1;
let dial2;
let dial3;
let dial4;
let dial5;
let str_m;
let nextturn;
let daymoney;
let nightmoney;
let nextlv;
let behav;
let playinggame;
let combo;
let score;
let timeleft;
let arrows;
let freeStarted;
let freetime;
let icons;
let lottorank;
let lottoalphas;
let lottoclicks;
let islottoed;
let stockprice;
let coinprice;
let stockamount;
let coinamount;
let stockchange;
let stockexpect;
let coinchange;
let coinexpect;
let sellbuyamount;
let redtime;
let offset;
let circle_color;
let text_color;
let s22_str1;
let oscil;
let img_c;
let song1;
let song2;
let song3;
let song4;
let music;
let music2;


function preload() {
  font = loadFont("assets/neodgm.ttf");
  img_s1 = loadImage("assets/튜토리얼.png");
  img_s2 = loadImage("assets/오전.png");
  img_s2_1 = loadImage("assets/오전사람.png");
  img_s2_c1 = loadImage("assets/오전달력1.png");
  img_s2_c2 = loadImage("assets/오전달력2.png");
  img_s2_c3 = loadImage("assets/오전달력3.png");
  img_s2_c4 = loadImage("assets/오전달력4.png");
  img_s2_c5 = loadImage("assets/오전달력5.png");
  img_b1 = loadImage("assets/근무.png");
  img_b2 = loadImage("assets/프리.png");
  img_b3 = loadImage("assets/알바.png");
  img_b4 = loadImage("assets/로또.png");
  img_b5 = loadImage("assets/주식.png");
  img_b6 = loadImage("assets/계발.png");
  img_b1d = loadImage("assets/근무d.png");
  img_b2d = loadImage("assets/프리d.png");
  img_b3d = loadImage("assets/알바d.png");
  img_b4d = loadImage("assets/로또d.png");
  img_b5d = loadImage("assets/주식d.png");
  img_b6d = loadImage("assets/계발d.png");
  img_b321 = loadImage("assets/사기.png");
  img_b322 = loadImage("assets/팔기.png");
  img_b323 = loadImage("assets/사기.png");
  img_b324 = loadImage("assets/팔기.png");
  img_s21 = loadImage("assets/근무중.png");
  img_s21_11 = loadImage("assets/근무중사람1.png");
  img_s21_12 = loadImage("assets/근무중사람2.png");
  img_s21_13 = loadImage("assets/근무중사람3.png");
  img_s21_2 = loadImage("assets/근무중책상.png");
  img_s22 = loadImage("assets/프리중.png");
  img_s23 = loadImage("assets/알바중.png");
  img_s23_11 = loadImage("assets/알바중사람1.png");
  img_s23_12 = loadImage("assets/알바중사람2.png");
  img_s23_13 = loadImage("assets/알바중사람3.png");
  img_s23_14 = loadImage("assets/알바중책상.png");
  img_s3 = loadImage("assets/오후.png");
  img_s3_1 = loadImage("assets/오후사람.png");
  img_s3_c1 = loadImage("assets/오후달력1.png");
  img_s3_c2 = loadImage("assets/오후달력2.png");
  img_s3_c3 = loadImage("assets/오후달력3.png");
  img_s3_c4 = loadImage("assets/오후달력4.png");
  img_s3_c5 = loadImage("assets/오후달력5.png");
  img_s31 = loadImage("assets/로또중.png");
  img_s31_11 = loadImage("assets/로또중문양1.png");
  img_s31_12 = loadImage("assets/로또중문양2.png");
  img_s31_2 = loadImage("assets/로또중상금.png");
  img_s31_3 = loadImage("assets/로또중동전.png");
  img_s32 = loadImage("assets/주식중.png");
  img_s322 = loadImage("assets/주식창.png");
  img_s33 = loadImage("assets/계발중.png");
  img_s41 = loadImage("assets/성공.png");
  img_s42 = loadImage("assets/실패.png");  
  img_end_b = loadImage("assets/엔딩대화창.png");
  img_end_1 = loadImage("assets/엔딩1.png");
  img_end_2 = loadImage("assets/엔딩2.png");
  img_end_3 = loadImage("assets/엔딩3.png");
  img_end_31 = loadImage("assets/성공한사람.png");
  img_end_32 = loadImage("assets/실패한사람.png");
  img_status = loadImage("assets/상태.png");
  img_fadeout = loadImage("assets/암전.png");
  icon_dollar = loadImage("assets/달러.png");
  icon_fruit = loadImage("assets/딸기.png");
  icon_heart = loadImage("assets/하트.png");
  icon_seven = loadImage("assets/세븐.png");
  icon_star = loadImage("assets/별.png");
  icon_day = loadImage("assets/낮.png");
  icon_night = loadImage("assets/밤.png");
  img_upkey = loadImage("assets/up.png");
  img_downkey = loadImage("assets/down.png");
  img_leftkey = loadImage("assets/left.png");
  img_rightkey = loadImage("assets/right.png");
  song1 = loadSound("assets/브금1.mp3");
  song2 = loadSound("assets/브금2.mp3");
  song3 = loadSound("assets/브금3.mp3");
  song4 = loadSound("assets/브금4.mp3");

}

function setup() {
  createCanvas(960, 540);
  rectMode(CORNER);
  turn = 1;
  money = 1500000;
  offset = -50;
  lv = 1;
  lv_uped = 0;
  workCount = 0;
  freeCount = 0;
  albaCount = 0;
  scene = 1;
  clicks = 0;
  textFont(font);
  tutorial = false;
  button1 = new Button(width/4-50,510-25,100,50);
  button2 = new Button(width*2/4-50,510-25,100,50);
  button3 = new Button(width*3/4-50,510-25,100,50);
  button321 = new Button(540+offset,151,60,40);
  button322 = new Button(540+offset,206,60,40);
  button323 = new Button(540+offset,281,60,40);
  button324 = new Button(540+offset,336,60,40);
  button325 = new Button(771,74,50,50); //종료
  button326 = new Button(410+offset,243,100,40); //매매
  fadeout = 0;
  img_fadeout_x = 1200;
  scenetime = 0;
  dial1 = "졸업 후 첫해가 시작됐다.";
  dial2 = "어떻게 하면 돈을 잘 벌 수 있을까?";
  dial3 = "";
  dial4 = "";
  dial5 = "";
  nextturn = 0;
  daymoney = 0;
  nightmoney = 0;
  nextlv = false;
  behav = "";
  playinggame = false;
  combo = 0;
  score = 0;
  timeleft = 20;
  arrows = [];
  for (let i=0;i<5;i++) {
    arrows[i] = int(random(0,4));
  }
  freeStarted = false;
  freetime = 0;
  lottorank = int(random(1,5));
  lottoalphas = [];
  for (let i=0;i<3;i++) {
    lottoalphas[i] = 255;
  }
  lottoclicks = 0;
  islottoed = false;
  stockprice = 756000;
  coinprice = 43900;
  stockamount = 0;
  coinamount = 0;
  stockchange = 0; //%
  coinchange = 0; //%
  sellbuyamount = 1;
  let expected = (2*int(random(1,3))-3);
  stockexpect = int(random(71,86))*expected;
  coinexpect = int(random(71,86))*-expected;
  redtime = false;
  circle_color=[255,255,255,255];
  text_color=[255,255,255,255];
  s22_str1 = '';
  oscil = 0;
  img_c = [];
  img_c[0] = img_s2_c1;
  img_c[1] = img_s2_c2;
  img_c[2] = img_s2_c3;
  img_c[3] = img_s2_c4;
  img_c[4] = img_s2_c5;
  img_c[5] = img_s3_c1;
  img_c[6] = img_s3_c2;
  img_c[7] = img_s3_c3;
  img_c[8] = img_s3_c4;
  img_c[9] = img_s3_c5;
  music = true;
  music2 = true;
}

function draw() {
  switch (scene) {
    case 1:

      background(0);
      fill(255);
      noStroke();
      textSize(30);
      textAlign(CENTER);
      let str1 = "나는 졸업을 앞둔 정보문화학과 대학생."
      let str2 = "졸업과 동시에, 학교 기숙사에서 쫓겨나게 되었다."
      let str3 = "이제 더이상 물러날 곳이 없다."
      if (clicks > 0) {
        str1 = "얼른 서울에서 내가 살 집을 마련해야 한다."
        str2 = "집을 사기 위해서 최소 3억을 벌어야 한다."
        str3 = "우선 고시원에 들어가서, 딱 5년 동안만 열심히 일해보자."
      }
      if (clicks == 2){
        scene = 2;
        clicks = 0;
      }
      text(str1,width/2,height/2-30);
      text(str2,width/2,height/2+10);
      text(str3, width/2, height/2+50);
      textSize(20);
      text("> NEXT",width/2,height/2+100);
      break;

    case 2:
      if (nextturn > 0){
        if (islottoed == true && icons[0]==icons[1]){
          switch (lottorank) {
            case 1:
              nightmoney += 5000000000;
              break;
            case 2:
              nightmoney += 50000000;
              break;
            case 3:
              nightmoney += 500000;
              break;
            case 4:
              nightmoney += 50000;
              break;
          }

        }
        let stockluck = int(random(1,101));
        let stockup;
        if (stockluck <= abs(stockexpect)) {
          if (stockexpect > 0) {
            stockup = 1;
          }
          if (stockexpect < 0) {
            stockup = -1;
          }
        } else {
          if (stockexpect > 0) {
            stockup = -1;
          }
          if (stockexpect < 0) {
            stockup = 1;
          }
        }
        let coinluck = int(random(1,101));
        let coinup;
        if (coinluck <= abs(coinexpect)) {
          if (coinexpect > 0){
            coinup = 1;
          }
          if (coinexpect < 0){
            coinup = -1;
          }
        } else {
          if (coinexpect > 0){
            coinup = -1;
          }
          if (coinexpect < 0){
            coinup = 1;
          }
        }
        stockchange = int(random(10,31))*stockup;
        coinchange = int(random(30,61))*coinup;
        let expected = (2*int(random(1,3))-3);
        stockexpect = int(random(60,85))*expected;
        coinexpect = int(random(60,85))*-expected;
        stockprice = int((1+stockchange/100)*stockprice);
        coinprice = int((1+coinchange/100)*coinprice);

        daymoney += score;
        score = 0;
        turn++;
        money += int(daymoney*(1+(lv-1)/100));
        money += nightmoney;
        let displaymoney = int(daymoney*(1+(lv-1)/100))+nightmoney;
        daymoney = 0;
        nightmoney = 0;
        dial3 = '작년 수익은 '+ nfc(displaymoney)+'원이다.';
        nextturn = 0;
        if (nextlv == true) {
          nextlv = false;
          lv_uped = int(random(5,10));
          lv += lv_uped;
        }
        
      }
      if (turn > 4) {
        dial4 = '벌써 5년이 지났다... 과연?';
      } else if (turn > 3) {
        dial4 = '끝까지 열심히 해보자!';
      } else if (turn > 2) {
        dial4 = '할 수 있 다! ^o^';
      } else if (turn > 1) {
        dial4 = '돈 버는 일은 꽤 힘드네 :/';
      } else {
        dial4 = '시작이 반이다...';
      }
      background(0);
      imageMode(CORNER);
      image(img_s2,0,0);
      imageMode(CENTER);
      image(img_s2_1,560,360);
      imageMode(CORNER);
      image(img_c[turn-1],650,60);


      if (tutorial == true && fadeout == 0){
        rectMode(CORNER);
        strokeWeight(1);
        stroke(200);
        fill(100,200);
        rect(5,360,450,110,15);
        rect(605,270,320,50,5);

        fill(255);
        noStroke();
        textSize(20);
        textAlign(CORNER);
        text(dial1,20,390);
        text(dial2,20,420);
        text(dial3,20,450);
        text(dial4,620,300);
        if (music) {
          song1.loop();
          song2.stop();
          music = !music;
        }
      }
      imageMode(CENTER);
      if (button1.over() || fadeout == 21) {
        image(img_b1d,width/4,510);
        dial5 = "처음 2년의 수습 기간 동안은 연봉 3600만원, 이후에는 연봉 5200만원을 다음 해에 수령합니다.";
      } else {
        image(img_b1,width/4,510);
      }
      if (button2.over() || fadeout == 22){
        image(img_b2d,width*2/4,510);  
        dial5 = "미니게임을 진행합니다. 게임 실적에 따라 다음 해에 수령하는 연봉이 달라집니다.";
      } else {
        image(img_b2,width*2/4,510);
      }
      if (button3.over() || fadeout == 23){
        image(img_b3d,width*3/4,510);
        dial5 = "수습 기간 없이, 연봉 4360만원을 다음 해에 수령합니다.";       
      } else {
        image(img_b3,width*3/4,510);
      }

      if ((button1.over() || button2.over() || button3.over()) && tutorial == true) {
        rectMode(CORNER);
        strokeWeight(3);
        stroke(255);
        fill(0);
        rect(0,410,960,60,15);
        textAlign(CENTER); 
        fill(255);
        strokeWeight(0);
        text(dial5,480,445);

      }

      imageMode(CORNER);
      image(img_status,20,20);

      fill(0);
      noStroke();
      textSize(20);
      textAlign(CENTER);
      text(turn,53,55);
      text(5,76,81);
      textAlign(RIGHT);
      textSize(25);
      text(lv-1,200,88);
      textAlign(LEFT);
      textSize(20);
      fill(255);
      str_m = nfc(money)+'/3억('+int(money/3000000)+'%)';
      text(str_m,135,53);
      fill(0);

      if (tutorial == false) {
        imageMode(CORNER);
        image(img_s1,0,0);
        textAlign(CENTER);
        textSize(20);
        fill(255);
        text('> Click to Continue', 800,250);
      }

      if (clicks > 0) {
        tutorial = true;
      }


      break;

    case 21:
      scenetime++;
      background(0);
      imageMode(CORNER);
      image(img_s21,0,0);

      imageMode(CENTER);
      if (frameCount % 60 < 20){
        image(img_s21_11,500,280);
      } else if (frameCount % 60 < 40){
        image(img_s21_13,500,280);
      } else {
        image(img_s21_12,500,280);
      }
      image(img_s21_2,380,333);
      imageMode(CORNER);
      break;

    case 22:
      
      if (!music) {
        song1.pause();
        song4.loop();
        music = !music;
      }
    
      scenetime++;
      background(0);
      
      noStroke();
      rectMode(CORNER);
      fill(255);
      rect(-10,-10,width+20,height-50);

      push();
      translate(oscil,0);
      imageMode(CORNER);
      image(img_s22,0,0);

      if (redtime) {
        rectMode(CORNER);
        fill(230,180,180);
        noStroke();
        rect(127.5,118,697.5,310);
      }

      noStroke();
      fill(114,138,255);
      rect(127,68,698,50);

      fill(255);
      noStroke();
      textSize(20);
      textAlign(CORNER);
      text('제한시간동안 원에 있는 화살표대로 최대한 많이 입력하세요.txt',137,98);

      fill(0);
      noStroke();
      textSize(30);
      textAlign(CENTER);
      if (timeleft < 6 && timeleft > 0 && freetime % 50 == 0) {
        redtime = !redtime;
      }
      fill(0);
      text(timeleft,width/2,172);
      fill(0);
      if (timeleft > 0) {
        if (circle_color[0] > 200 && circle_color[1] < 100 && circle_color[3] > 30){
          fill(255,0,0);
          text('Combo Break!',260,380);
        } else {
          text(combo + ' combo!',260,380);
        }
        text(nfc(score) +' 원',width/2,380);
      }

      fill(text_color);
      noStroke();
      textSize(30);
      textAlign(CENTER);
      text(s22_str1,260,172);

      rectMode(CORNER);
      strokeWeight(2);
      stroke(0);
      fill(120);
      rect(124,210,704,120);

      strokeWeight(3);
      stroke(0);
      fill(circle_color);
      circle(250,height/2,150);

      imageMode(CENTER);
      for (let i=0;i<5;i++) {
        push();
        let x = 200+100*(i+1);
        if (i == 0) {
          x -= 50;
        }
        translate(x,height/2);
        switch (arrows[i]) {
          case 0:
            image(img_upkey,0,0);
            break;
          case 1:
            image(img_downkey,0,0);
            break;
          case 2:
            image(img_leftkey,0,0);
            break;
          case 3:
            image(img_rightkey,0,0);
            break;
          default:
            break;
        }
        pop();
      }

      if (freeStarted == true) {
        freetime++;
        if (freetime % 60 == 30 && timeleft > 0) {
          timeleft--;
        }
      }
      if (timeleft <1) {
        playinggame = false;
        freeStarted = false;
        freetime = 0;
        redtime = false;
        circle_color[0] = 255;
        circle_color[1] = 255;
        oscil = 0;
        fill(0);
        noStroke();
        textSize(30);
        textAlign(CENTER);
        text(nfc(score) + '원 획득!  > Click to Continue <',width/2,390);
      }

      circle_color[3] -= 6;
      text_color[3] -= 6;
      pop();
      break;

    case 23:

      scenetime++;
      background(0);
      imageMode(CORNER);
      image(img_s23, 0, 0);

      if (frameCount % 60 < 20) {
        image(img_s23_11, 515, 200);
      } else if (frameCount % 60 < 40) {
        image(img_s23_12, 515, 200);
      } else {
        image(img_s23_13, 515, 200);
      }
      
      image(img_s23_14, 0, 0);
      
      break;

    case 3:
      if (music) {
        song1.loop();
        song2.stop();
        song4.stop();
        music = !music;
      }
      timeleft = 20;
      combo = 0;
      background(0);
      imageMode(CORNER);
      image(img_s3,0,0);

      imageMode(CENTER);
      image(img_s3_1,560,390);

      imageMode(CORNER);
      image(img_status,20,20);

      imageMode(CORNER);
      image(img_c[turn+4],650,60);
      imageMode(CENTER);

      fill(0);
      noStroke();
      textSize(20);
      textAlign(CENTER);
      text(turn,53,55);
      text(5,76,81);
      textAlign(RIGHT);
      textSize(25);
      text(lv-1,200,88);
      textAlign(LEFT);
      textSize(20);
      fill(255);
      str_m = nfc(money)+'/3억('+int(money/3000000)+'%)';
      text(str_m,135,53);

      if (button1.over() || fadeout == 31) {
        image(img_b4d,width/4,510);
        dial5 = "스피또 로또 한장을 긁어봅니다. 당첨되면, 로또에 적혀있는 금액을 다음 해에 수령합니다.";
      } else {
        image(img_b4,width/4,510);
      }
      if (button2.over() || fadeout == 32){
        image(img_b5d,width*2/4,510);  
        dial5 = "주식 혹은 코인을 거래하는 사이트에 접속합니다. 해가 시작될 때마다 가격이 변동됩니다.";
      } else {
        image(img_b5,width*2/4,510);
      }
      if (button3.over() || fadeout == 33){
        image(img_b6d,width*3/4,510);
        dial5 = "랜덤으로 인센티브가 상승합니다. 인센티브 1% 당 오전에 얻는 수익이 1% 증가합니다.";       
      } else {
        image(img_b6,width*3/4,510);
      }

      if ((button1.over() || button2.over() || button3.over()) && tutorial == true) {
        rectMode(CORNER);
        strokeWeight(3);
        stroke(255);
        fill(0);
        rect(0,410,960,60,15);
        textAlign(CENTER); 
        fill(255);
        strokeWeight(0);
        text(dial5,480,445);

      }

      fill(0);
      break;

    case 31:
      let msg = '두 모양이 일치하면 우측 칸에 적힌 상금을 얻습니다!';
      islottoed = true;
      scenetime++;
      background(0);
      imageMode(CORNER);
      image(img_s31,0,0);

      imageMode(CENTER);
      for (let i=0;i<2;i++) {
        push();
        let x = 230+180*i;
        translate(x,255);
        switch (icons[i]) {
          case 0:
            image(icon_fruit,0,0,40,40);
            break;
          case 1:
            image(icon_star,0,0,40,40);
            break;
          case 2:
            image(icon_dollar,0,0,40,40);
            break;
          case 3:
            image(icon_seven,0,0,40,40);
            break;
          case 4:
            image(icon_heart,0,0,40,40);
            break;
          default:
            break;
        }
        pop();
      }
      
      fill(0);
      noStroke();
      textSize(30);
      textAlign(CENTER);
      text(lottorank+'등!',653,245);
      
      push();
      textSize(20);
      translate(650,268);
      switch (lottorank) {
        case 1:
          text('(50억)',0,0);
          break;
        case 2:
          text('(5000만)',0,0);
          break;
        case 3:
          text('(50만)',0,0);
          break;
        case 4:
          text('(5만)',0,0);
          break;
        default:
          break;
      }
      pop();

      rectMode(CENTER);
      noStroke();
      fill(173,194,216,lottoalphas[0]);
      circle(230,255,90);
      fill(173,194,216,lottoalphas[1]);
      circle(410,255,90);
      fill(173,194,216,lottoalphas[2]);
      rect(650,250,270,90); 

      if (lottoclicks > 0) {
        lottoalphas[0] -= 4;
      }
      if (lottoclicks > 1 && lottoalphas[0] < 10) {
        lottoalphas[1] -= 4;
      }
      if (lottoclicks > 2 && lottoalphas[1] < 10) {
        lottoalphas[2] -= 4;
      }
      if (lottoalphas[2] < -30){
        fill(0);
        noStroke();
        textSize(15);
        textAlign(CENTER);
        if (icons[0] == icons[1]){
          msg = lottorank+ '등 당첨!';
        } else {
          msg = '꽝...';
        }
        playinggame = false;
      }
      rectMode(CORNER);
      imageMode(CORNER);
      fill(0);
      noStroke();
      textSize(25);
      textAlign(CENTER);
      text(msg,width/2,340);
      text('클릭하면 결과가 공개됩니다.',480,180);
      imageMode(CENTER);
      image(img_s31_3,mouseX+10,mouseY-3,30,30);
      break;

    case 32:
      if (!music) {
        song1.pause();
        song2.loop();
        music = !music;
      }
      scenetime++;
      background(0);
      imageMode(CORNER);
      image(img_s32,0,0);
      image(img_s322,132,73,690,350);

      rectMode(CORNER);
      strokeWeight(2);
      stroke(0);
      fill(255);
      rect(172,143,350+offset,110);
      rect(172,273,350+offset,110);
      rect(168,139,100,50);
      rect(168,269,100,50);
      rect(300,90,270,44); //소지금액

      if (button326.over()) {
        fill(100);
      }
      
      rect(410+offset,243,100,40); // 매매배율 상자

      noStroke();
      textAlign(CENTER);
      fill(0);
      if (button326.over()) {
        fill(255);
      }
      textSize(25);
      text('x'+sellbuyamount,460+offset,270);

      rectMode(CORNER); //매수매도 상자
      strokeWeight(2);
      fill(240,10,10);
      stroke(0);
      if (button321.over()) {
        stroke(255);
      }
      rect(540+offset,151,60,40);

      stroke(0);
      if (button323.over()) {
        stroke(255);
      }
      rect(540+offset,281,60,40);
      
      fill(10,10,240);
      stroke(0);
      if (button322.over()) {
        stroke(255);
      }
      rect(540+offset,206,60,40);
      
      stroke(0);
      if (button324.over()) {
        stroke(255);
      }
      rect(540+offset,336,60,40);

      noStroke();
      textSize(20);
      textAlign(CENTER);
      fill(255);
      if (button321.over()){
        fill(0);
      }
      text('매수',520,175);

      fill(255);
      if (button323.over()){
        fill(0);
      }
      text('매수',520,305);
      
      fill(255);
      if (button322.over()){
        fill(0);
      }
      text('매도',520,230);
      
      fill(255);
      if (button324.over()){
        fill(0);
      }
      text('매도',520,360);

      fill(0);
      textSize(30);
      text('전문가',660,160);
      textSize(25);
      text(' 분석',735,165);

      strokeWeight(4);
      stroke(0);
      fill(0);
      line(568,145,570,385);
      strokeWeight(2);
      line(590,175,790,175);
      
      rectMode(CORNER);
      strokeWeight(2);
      stroke(0);
      fill(225,15,15); 
      
      if (button325.over()){
        stroke(255);
      }
      rect(771,74,50,50); //종료버튼

      fill(0);
      noStroke();
      textSize(20);
      textAlign(CENTER);
      text('생선전자',218,169);
      text('볼트코인',218,299);
      textSize(40);
      text(stockprice,400+offset,233);
      text(coinprice,400+offset,363);
      if (button325.over()) {
        fill(255);
      }
      text('X',797,112);
      fill(255);
      textSize(20);
      if (turn > 4) {
        text('*주의* 마지막 날에는 모든 주식의 판매를 권장합니다. (소지금 취급 x)',width/2,height-25);
      } else {
        text('중앙의 \'x1\'이 적힌 네모칸을 누르면 한번에 사고 팔 수 있는 개수를 조정할 수 있습니다.',width/2,height-25);       
      }
  
      fill(0);
      noStroke();
      textSize(25);
      textAlign(CORNER);
      text('x '+stockamount,187,240);
      text('x '+coinamount,187,370);
      text('소지금:'+nfc(money) +'원', 310,120);

      if (stockchange >= 0) {
        text('+ '+stockchange+' %',430+offset,178);
      } else {
        text('- '+abs(stockchange)+' %',430+offset,178);        
      }
      if (coinchange >= 0) {
        text('+ '+coinchange+' %',430+offset,308);
      } else {
        text('- '+abs(coinchange)+' %',430+offset,308);        
      }

      let s32_str21;      
      let s32_str41;

      imageMode(CENTER);
      if (stockexpect < 0) {
        image(img_downkey,720,265,50,50);
        s32_str21 = '하락';
      } else {
        image(img_upkey,720,265,50,50);
        s32_str21 = '상승';
      }
      if (coinexpect < 0) {
        image(img_downkey,720,355,50,50);
        s32_str41 = '하락';       
      } else {
        image(img_upkey,720,355,50,50);
        s32_str41 = '상승';
      }
      let s32_str1 = '*  머래 버핏, '+abs(stockexpect)+'% 확률로';
      let s32_str2 = '생선전자 주가 '+ s32_str21+' 분석';
      let s32_str3 = '*  멜론 머스크, '+abs(coinexpect)+'% 확률로';
      let s32_str4 = '볼트코인 가격 '+ s32_str41+' 예언';

      fill(0);
      noStroke();
      textSize(16);
      textAlign(LEFT);
      text(s32_str1,590,210);
      text(s32_str2,590,235);
      text(s32_str3,590,305);
      text(s32_str4,590,330);
      
      fill(0);
      noStroke();
      textSize(25);
      textAlign(LEFT);
      text(abs(stockexpect)+'%',655,273);
      text(abs(coinexpect)+'%',655,363);
      break;

    case 33:
      scenetime++;
      background(0);
      imageMode(CORNER);
      image(img_s33,0,0);
      break;

    case 4:
      song1.stop();
      song2.stop();
      song4.stop();
      if (music2) {
        song3.loop();
        music2 = !music2;
      }


      scenetime++;
      background(0);
      imageMode(CORNER);
      image(img_end_1,0,0);
      image(img_end_b,10,410);
      textAlign(CENTER);
      textSize(20);
      fill(255);
      noStroke();
      text('계획한 5년이 지났군. 내가 노력한 성과를 확인할 시간이다...\n이제 집값을 보러 부동산에 가보자.\n> Click to Continue',width/2,460);
      imageMode(CORNER);
      image(img_status,20,20);

      fill(0);
      noStroke();
      textSize(20);
      textAlign(CENTER);
      text('END',64,68);
      textSize(20);
      text(nfc(money),width/2-5,190);
      textAlign(RIGHT);
      textSize(25);
      text(lv-1,200,88);
      textAlign(LEFT);
      textSize(20);
      fill(255);
      str_m = nfc(money)+'/3억('+int(money/3000000)+'%)';
      text(str_m,135,53);
      fill(0);
      break;

    case 5:
      scenetime++;
      background(0);
      imageMode(CORNER);
      image(img_end_2,0,0);
      image(img_end_b,10,410);
      textAlign(CENTER);
      textSize(20);
      fill(255);
      noStroke();
      text('내가 가지고 있는 돈은 '+nfc(money)+'원...',width/2,455);
      let y = 483;
      if (money>=4800000000) {
        text('이게 꿈인가? 내가 한강뷰에서 살 수 있다니...\n> Click to Continue',width/2,y);
      } else if (money>=1000000000) {
        text('아파트라니... 이것이 돈의 힘?\n> Click to Continue',width/2,y);
      } else if (money>=500000000) {
        text('좋은 투름 구해서 친구들이랑 홈파티 각이다\n> Click to Continue',width/2,y);
      } else if (money>=300000000) {
        text('나 자신 정말 고생했다... 월세 탈출이다!\n> Click to Continue',width/2,y);
      } else {
        text('딱 5년만 더 일하면 되지 않을까? 집값이 많이 올랐구나...ㅠㅠ\n> Click to Continue',width/2,y);
      }
      break;

    case 6:
      scenetime++;
      background(0);
      imageMode(CORNER);
      image(img_end_3,0,0);


      imageMode(CORNER);
      image(img_status,20,20);

      fill(0);
      noStroke();
      textSize(20);
      textAlign(CENTER);
      text('END',64,68);
      textAlign(RIGHT);
      textSize(25);
      text(lv-1,200,88);
      textAlign(LEFT);
      textSize(20);
      fill(255);
      str_m = nfc(money)+'/3억('+int(money/3000000)+'%)';
      text(str_m,135,53);
      fill(0);

      imageMode(CENTER);
      if (money >= 300000000) {
        image(img_end_31,width/2+20,170,150,150);
      } else {
        image(img_end_32,width/2+20,170,150,150);
      }
      textAlign(CENTER);
      textSize(18);
      fill(0);
      noStroke();
      text('나는 지난 5년간 회사에서 '+workCount+'년 근무했고,\n프리랜서로 '+freeCount+'년을 지냈고,\n카페에서 알바를 ' +albaCount+'년 했네.',width/2+20,260);
      textSize(16);
      let numArray = [workCount,freeCount,albaCount];
      let end_msg = '';
      if (money < 300000000){
        if (max(numArray)>4) {
          end_msg = '하던 일을 계속 하는 것도 좋지만, 다양한 경험을 해보며\n내 흥미가 뭔지 찾아야겠어. 다른 분야에도 도전해보자.';
        } else if (max(numArray)<3) {
          end_msg = '5년 동안 다양한 경험을 했다! 그 중 나와 가장 잘 맞는 일은\n무엇이었는지 생각해보고, 앞으로는 거기에 집중하자.';
        } else {
          end_msg = '내가 좋아하는 일이 무엇인지 찾았으니,\n앞으로 그 일에 매진하다보면 집을 살 수 있을거야.';
        }
      } else {
        end_msg = '집을 구했으니 이제 다른 목표를 잡아야겠어.\n오늘 저녁은 치킨이다!';
      }
      text(end_msg,width/2+20,340);
      text('* Thanks for Playing *',width/2+20,385);

      noStroke();
      fill(255);
      textSize(20);
      text('다시 플레이하고 싶으시면 새로고침을 눌러주세요!',width/2,height-25);
      
      textAlign(RIGHT);
      noStroke();
      fill(100);
      textSize(12);
      text('- BGM 출처\n샛별 - A Toy Town, Level Up, Candy Crush\nhttps://youtu.be/05c8JjYjXe0',width-8,16);
      break;

    default:
      break;
  }

  imageMode(CORNER);
  image(img_fadeout,img_fadeout_x,0);
  if (fadeout > 0){
    img_fadeout_x -= 20;
  }
  if (img_fadeout_x == 0 ) {
    scene = fadeout;
  }
  if (img_fadeout_x < -1500) {
    fadeout = 0;
    img_fadeout_x = 1200;
  }
}

function mouseClicked() {
  if (scene == 1) {
    clicks++;
  }
  if (scene ==2) {
    clicks++;
  }
  if (scenetime > 120) {
      switch (scene) {
        case 21:
          fadeout = 3;
          break;
        case 22:
          if (playinggame == false) {
            fadeout = 3;
          }
          break;
        case 23:
          fadeout = 3;
          break;
;
        case 31:
          if (playinggame == false) {
            if (turn > 4) {
              ending();
            } else {
              fadeout = 2;             
            }

            nextturn = 1;
          }
          if (scenetime > 180) {
            lottoclicks++;
          }
          break;
        case 32:
          if (playinggame == false){
            if (turn > 4) {
              ending();
            } else {
              fadeout = 2;             
            }
            nextturn = 1;
          }
          break;
        case 33:
          if (turn > 4) {
            ending();
          } else {
            fadeout = 2;             
          }
          nextturn = 1;
          break;
        case 4:
          fadeout = 5;
          break;
        case 5:
          fadeout =6;
          break;
        default:
          break;
      }
  }
}

function mousePressed() {
  if (scene == 2 && tutorial == true) {
    if (button1.over()) {
      fadeout = 21;
      workCount++;
      daymoney += 36000000;
      if (workCount > 2)  {
        daymoney += 16000000;
      }
      dial1 = '작년 동안 회사에 근무했다.';
    } else if (button2.over()) {
      fadeout = 22;
      freeCount++;
      playinggame = true;
      dial1 = '작년 동안 프리랜서 일을 했다.';
    } else if (button3.over()) {
      fadeout = 23;
      albaCount++;
      daymoney += 43600000;
      dial1 = '작년 동안 알바를 했다.';
    }
  } 
  if (scene == 3) {
    if (button1.over()) {
      fadeout = 31;
      playinggame = true;
      dial2 = '오후에는 로또에 투자했다.';
      icons = [];
      for (let i=0;i<2;i++) {
        icons[i] = int(random(0,5));
      }
      let luck = int(random(1,11));
      if (0 <luck && luck < 5) {
        lottorank = 4;
      } else if (luck < 8) {
        lottorank = 3;
      } else if (luck < 10) {
        lottorank = 2;
      } else {
        lottorank = 1;
      }
      for (let i=0;i<3;i++) {
        lottoalphas[i] = 255;
      }
      lottoclicks = 0;
    } else if (button2.over()) {
      fadeout = 32;
      playinggame = true;
      dial2 = '오후에는 주식투자에 힘썼다.';
    } else if (button3.over()) {
      fadeout = 33;
      dial2 = '오후에는 열심히 공부해서 인센티브를 올렸다.';
      nextlv = true;
    }
  }
  if (scene == 32) {
    if (button321.over()) {
      stockbuy();
    }
    if (button322.over()) {
      stocksell();
    }
    if (button323.over()) {
      coinbuy();
    }
    if (button324.over()) {
      coinsell();
    }
    if (button325.over()) {
      playinggame = false;
    }
    if (button326.over()) {
      if (sellbuyamount < 5000){
        sellbuyamount *= 10;
      } else {
        sellbuyamount = 1;
      }

    }
  }
}

function keyPressed() {
  if (scene == 22 && timeleft > 0) {
    if (keyCode == LEFT_ARROW) {
      if (arrows[0] == 2) {
        success();
      } else {
        fail();
      }
    }
    else if (keyCode == RIGHT_ARROW) {
      if (arrows[0] == 3) {
        success();
      } else {
        fail();
      }
    }
    else if (keyCode == UP_ARROW) {
      if (arrows[0] == 0) {
        success();
      } else {
        fail();
      }
    }
    else if (keyCode == DOWN_ARROW) {
      if (arrows[0] == 1) {
        success();
      } else {
        fail();
      }
    }
  }
}

function success() {
  score += 400000 + 25000*combo;
  arrows.splice(0,1);
  arrows.push(int(random(0,4)));
  freeStarted = true;
  combo++;
  circle_color = [0,255,0,255];
  text_color = [0,255,0,255];
  s22_str1 = '+ ' + (400000+20000*(combo-1));
  oscil = 0;
}

function fail() {
  if (score > 0) {
    score -= 100000;
  }
  combo = 0;
  circle_color = [255,0,0,255];
  text_color = [255,0,0,255];
  s22_str1 = '- 100000';
}

function stockbuy() {
  if (money >= sellbuyamount * stockprice) {
    money -= sellbuyamount * stockprice;
    stockamount += sellbuyamount;
  }
}

function stocksell() {
  if (stockamount >= sellbuyamount) {
    money += sellbuyamount*stockprice;
    stockamount -= sellbuyamount;
  }
}

function coinbuy() {
  if (money >= sellbuyamount * coinprice) {
    money -= sellbuyamount * coinprice;
    coinamount += sellbuyamount;
  }
}

function coinsell() {
  if (coinamount >= sellbuyamount) {
    money += sellbuyamount*coinprice;
    coinamount -= sellbuyamount;
  }
}

function ending() {
  if (nextturn > 0){
    if (islottoed == true && icons[0]==icons[1]){
      switch (lottorank) {
        case 1:
          nightmoney += 5000000000;
          break;
        case 2:
          nightmoney += 50000000;
          break;
        case 3:
          nightmoney += 500000;
          break;
        case 4:
          nightmoney += 50000;
          break;
      }

    }
    let stockluck = int(random(1,101));
    let stockup;
    if (stockluck <= abs(stockexpect)) {
      if (stockexpect > 0) {
        stockup = 1;
      }
      if (stockexpect < 0) {
        stockup = -1;
      }
    } else {
      if (stockexpect > 0) {
        stockup = -1;
      }
      if (stockexpect < 0) {
        stockup = 1;
      }
    }
    let coinluck = int(random(1,101));
    let coinup;
    if (coinluck <= abs(coinexpect)) {
      if (coinexpect > 0){
        coinup = 1;
      }
      if (coinexpect < 0){
        coinup = -1;
      }
    } else {
      if (coinexpect > 0){
        coinup = -1;
      }
      if (coinexpect < 0){
        coinup = 1;
      }
    }
    stockchange = int(random(10,31))*stockup;
    coinchange = int(random(30,61))*coinup;
    let expected = (2*int(random(1,3))-3);
    stockexpect = int(random(60,85))*expected;
    coinexpect = int(random(60,85))*-expected;
    stockprice = int((1+stockchange/100)*stockprice);
    coinprice = int((1+coinchange/100)*coinprice);

    daymoney += score;
    score = 0;
    turn++;
    dial4 = '올해도 열심히 해보자!'
    money += int(daymoney*(1+(lv-1)/100));
    money += nightmoney;
    let displaymoney = int(daymoney*(1+(lv-1)/100))+nightmoney;
    daymoney = 0;
    nightmoney = 0;
    dial3 = '작년 수익은 '+ displaymoney+'원이다.';
    nextturn = 0;
    if (nextlv == true) {
      nextlv = false;
      lv += int(random(3,6));
    }
    
  }
  fadeout = 4;
}


