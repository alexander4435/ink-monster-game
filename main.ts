controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart.throwDart()
    music.play(music.createSoundEffect(WaveShape.Triangle, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level4`)
    tiles.placeOnRandomTile(mySprite2, assets.tile`myTile1`)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    mySprite2.startEffect(effects.fire)
    sprites.destroy(mySprite2)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(false)
})
let myDart: Dart = null
let mySprite2: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
let you = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(you)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f . . . . . . . . . 
    . . f f f f f f f . . . . . . . 
    . . f 1 1 1 1 1 f . . . . . . . 
    . f f 1 1 f 1 1 f f . . . . . . 
    . f f 1 1 1 1 1 f f . . . . . . 
    . . f f f f f f f . . . . . . . 
    f . . f f f f f . f f f . . . . 
    f f f f f f f f f f f f . . f . 
    . . . f f f f f f . . f f f . . 
    . f f f f f f f f . . . . . . . 
    f . . . f f f f f f . . . . . . 
    . . f . f f . . . f . . . . . . 
    . . f . f f . . f f . . . . . . 
    . . f f f . . . f . . . . . . . 
    `, SpriteKind.Enemy)
mySprite2.follow(Render.getRenderSpriteInstance())
tiles.placeOnRandomTile(mySprite2, assets.tile`myTile0`)
myDart = darts.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . 2 2 2 2 . . . 
    . . . . . . . 2 2 1 1 1 1 2 . . 
    . . . . 2 2 3 3 1 1 1 1 1 1 . . 
    . . 3 3 3 3 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 3 3 2 2 3 1 1 1 1 1 1 1 . . 
    . . . . . . 2 2 3 1 1 1 1 2 . . 
    . . . . . . . . . 2 2 2 2 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
