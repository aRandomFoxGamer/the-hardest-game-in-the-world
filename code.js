var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["677a9616-182b-4cea-b4b6-893b6845cf14","8545afd3-e17c-43f9-9c4d-d695462cf50d","a87e9ff9-ef06-4926-8bd5-4e7612468078"],"propsByKey":{"677a9616-182b-4cea-b4b6-893b6845cf14":{"name":"player","sourceUrl":null,"frameSize":{"x":92,"y":77},"frameCount":3,"looping":true,"frameDelay":12,"version":"MhUybKY9s38V1rL14.QsZb1EvDpkBcyP","loadedFromSource":true,"saved":true,"sourceSize":{"x":184,"y":154},"rootRelativePath":"assets/677a9616-182b-4cea-b4b6-893b6845cf14.png"},"8545afd3-e17c-43f9-9c4d-d695462cf50d":{"name":"down","sourceUrl":null,"frameSize":{"x":92,"y":77},"frameCount":5,"looping":true,"frameDelay":12,"version":"QoR07f3cpoxhRA_.RDD269CIz.ARrlsG","loadedFromSource":true,"saved":true,"sourceSize":{"x":184,"y":231},"rootRelativePath":"assets/8545afd3-e17c-43f9-9c4d-d695462cf50d.png"},"a87e9ff9-ef06-4926-8bd5-4e7612468078":{"name":"up","sourceUrl":null,"frameSize":{"x":92,"y":77},"frameCount":4,"looping":true,"frameDelay":12,"version":"i8rx4Zt44nQXwqiyMuElU6eUj3bJkBIu","loadedFromSource":true,"saved":true,"sourceSize":{"x":184,"y":154},"rootRelativePath":"assets/a87e9ff9-ef06-4926-8bd5-4e7612468078.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var gamestate = "serve";
var deaths = 0;
var victory = 0;
var player = createSprite(200, 370, 50, 50);
player.setAnimation("player");
player.scale = 0.48;
var tryme = createSprite(200, 25, 100, 50);
tryme.shapeColor = rgb(200, 230, 100);

var dot1 = createSprite(200, 100, 20, 20);
dot1.shapeColor = "white";
var dot2 = createSprite(370, 190, 20, 20);
dot2.shapeColor = "white";
var dot3 = createSprite(20, 280, 20, 20);
dot3.shapeColor = "white";


dot1.velocityX = -10;
dot2.velocityX = -10;
dot3.velocityX = 10;
function draw() {
  background("black");
  if (gamestate == "serve") {
    fill("yellow");
    text("press ENTER/SPACE to play", 120, 150, 200, 200);
    if (keyDown("enter")||keyDown("space")) {
      gamestate = "play";
    }
  }
  if (gamestate == "play") {
    if (keyDown("up") || keyDown("w")) {
      player.y = player.y - 10;
      player.setAnimation("up");
    } else {
      player.setAnimation("player");
    }
    if (keyDown("down") || keyDown("s")) {
      player.y = player.y + 10;
      player.setAnimation("down");
    } else {
      player.setAnimation("player");
    }
    if (player.isTouching(tryme)) {
      player.x = 200;
      player.y = 370;
      victory = victory + 1;
    }
    if (player.isTouching(dot1) ) {
      player.x = 200;
      player.y = 370;
      deaths = deaths + 1;
    }
    if (player.isTouching(dot2) ) {
      player.x = 200;
      player.y = 370;
      deaths = deaths + 1;
    }
    if (player.isTouching(dot3) ) {
      player.x = 200;
      player.y = 370;
      deaths = deaths + 1;
    }
  }
  textSize(20);
  text("victory: " + victory, 5, 20);
  fill("red");
  text("deaths: " + deaths, 5, 45);
  createEdgeSprites();
  dot1.bounceOff(edges);
  dot2.bounceOff(edges);
  dot3.bounceOff(edges);
  player.collide(bottomEdge);
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
