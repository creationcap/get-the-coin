def on_countdown_end():
    game.over(True)
info.on_countdown_end(on_countdown_end)

def on_on_overlap(sprite, otherSprite):
    music.ba_ding.play()
    coin.set_position(randint(0, 160), randint(0, 120))
    info.change_score_by(1)
sprites.on_overlap(SpriteKind.player, SpriteKind.projectile, on_on_overlap)

coin: Sprite = None
game.splash("Move the player around, and try to get as much coins as fast as the countdown ends!")
scene.set_background_image(assets.image("""
    Sky
"""))
user = sprites.create(assets.image("""
    User
"""), SpriteKind.player)
user.set_position(randint(0, 160), randint(0, 120))
controller.move_sprite(user, 150, 150)
user.set_stay_in_screen(True)
coin = sprites.create(assets.image("""
    Coin
"""), SpriteKind.projectile)
coin.set_stay_in_screen(True)
animation.run_image_animation(coin, assets.animation("""
    Animated Coin
"""), 100, True)
info.set_score(0)
info.start_countdown(10)