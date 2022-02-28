info.onCountdownEnd(function on_countdown_end() {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function on_on_overlap(sprite: Sprite, otherSprite: Sprite) {
    music.baDing.play()
    coin.setPosition(randint(0, 160), randint(0, 120))
    info.changeScoreBy(1)
})
let coin : Sprite = null
game.splash("Move the player around, and try to get as much coins as fast as the countdown ends!")
scene.setBackgroundImage(assets.image`
    Sky
`)
let user = sprites.create(assets.image`
    User
`, SpriteKind.Player)
user.setPosition(randint(0, 160), randint(0, 120))
controller.moveSprite(user, 150, 150)
user.setStayInScreen(true)
coin = sprites.create(assets.image`
    Coin
`, SpriteKind.Projectile)
coin.setStayInScreen(true)
animation.runImageAnimation(coin, assets.animation`
    Animated Coin
`, 100, true)
info.setScore(0)
info.startCountdown(10)
