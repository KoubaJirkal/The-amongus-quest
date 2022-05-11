function lol (x: number) {
    if (x == 1) {
        k = 1
        sprites.destroyAllSpritesOfKind(SpriteKind.Player)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        scene.setBackgroundColor(6)
        game.showLongText("Zelený amongus je velmi slabý.", DialogLayout.Bottom)
        game.showLongText("Dokáže bodat jen přímo.", DialogLayout.Bottom)
        game.showLongText("Ale pozor jeho nůž je velmi ostrý !!", DialogLayout.Bottom)
        info.setLife(3),
        info.setScore(0)
letadlo1 = sprites.create(assets.image`myImage`, SpriteKind.Player)
        letadlo1.setBounceOnWall(true)
        controller.moveSprite(letadlo1)
        enemy12 = sprites.create(assets.image`enemy1`, SpriteKind.Enemy)
        enemy12.setPosition(number2, 15)
        controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
            if (info.score() < 10) {
                projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . f f 1 . . . . . .
        . . . . . . . f 1 1 . . . . . .
        . . . . . . . f 1 1 . . . . . .
        . . . . . . . f f 1 . . . . . .
        . . . . . . . f f 1 . . . . . .
        . . . . . . . f f 1 . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
         `, letadlo1, 0, -100)
                projectile.setPosition(letadlo1.x, letadlo1.y + -11)
            }
        })
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Projectile, function (projectile2: Sprite, projectile: Sprite) {
            projectile2.destroy()
            projectile.destroy()
        })
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (projectile2: Sprite, letadlo1: Sprite) {
            projectile2.destroy()
            info.changeLifeBy(-1)
            animation.runImageAnimation(letadlo1, assets.animation`letadlo2`, 500, true)
            pause(5000)
            animation.stopAnimation(animation.AnimationTypes.All, letadlo1)
        })
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (projectile: Sprite, enemy1: Sprite) {
            
            if (k == 1) {
                number2 = randint(15, 155)
                sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
                sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
                enemy1.startEffect(effects.fire, 300)
                enemy1 = sprites.create(assets.image`enemy1`, SpriteKind.Enemy)
                enemy1.setPosition(number2, 15)
                info.changeScoreBy(1)
                info.score()
                if (info.score() == 10) {
                    game.showLongText("Dobrá práce úspěšně jsi vyřadil Zeleného ze hry.", DialogLayout.Bottom)
                    game.showLongText("Čas postoupit k Modrému.", DialogLayout.Bottom)
                    startgame(10)
                }
            }
            
        })
idk = true
        while (idk) {
            projectile2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . f . . . . . . . 
                . . . . . . . . f . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . . 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, enemy12, 0, 100)
            projectile2.setPosition(number2, 25)
            pause(1000)
            if (info.score() > 9) {
                idk = false
            }
        }
    }
    // 2
    if (x == 2) {
        k = 2
        sprites.destroyAllSpritesOfKind(SpriteKind.Player)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        scene.setBackgroundColor(6)
        game.showLongText("Modrý amongus je docela slabý.", DialogLayout.Bottom)
        game.showLongText("Dokáže ovšem podat i do stran.", DialogLayout.Bottom)
        game.showLongText("To z něho dělá opravdovou výzvu pro neskušené crewmaty.", DialogLayout.Bottom)
        info.setLife(3),
            info.setScore(0)
letadlo12 = sprites.create(assets.image`myImage`, SpriteKind.Player)
        letadlo12.setBounceOnWall(true)
        controller.moveSprite(letadlo12)
        enemy22 = sprites.create(assets.image`enemy2`, SpriteKind.Enemy)
        enemy22.setPosition(number2, 15)
        controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
            if (info.score() < 10) {
                projectile3 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . f f 1 . . . . . .
        . . . . . . . f 1 1 . . . . . .
        . . . . . . . f 1 1 . . . . . .
        . . . . . . . f f 1 . . . . . .
        . . . . . . . f f 1 . . . . . .
        . . . . . . . f f 1 . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
         `, letadlo12, 0, -100)
                projectile3.setPosition(letadlo12.x, letadlo12.y + -11)
            }
        })
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Projectile, function (projectile2: Sprite, projectile: Sprite) {
            projectile2.destroy()
            projectile.destroy()
        })
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (projectile2: Sprite, letadlo1: Sprite) {
            projectile2.destroy()
            info.changeLifeBy(-1)
        })
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (projectile: Sprite, enemy2: Sprite) {
            
            if (k == 2) {
                number2 = randint(15, 155)
                sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
                sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
                enemy2.startEffect(effects.fire, 300)
                enemy2 = sprites.create(assets.image`enemy2`, SpriteKind.Enemy)
                enemy2.setPosition(number2, 15)
                info.changeScoreBy(1)
                info.score()
                if (info.score() == 10) {
                    game.showLongText("Skvěle modrý je ze hry.", DialogLayout.Bottom)
                    game.showLongText("Nyní je na řadě Červený.", DialogLayout.Bottom)
                    startgame(20)
                }
            }
            
        })
idk2 = true
        while (idk2) {
            i = Math.floor(Math.random() * 160) + 1
            y = Math.floor(Math.random() * 2 + 1)
            if (y > 1) {
                i = i - 2 * i
            }
            projectile22 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . f . . . . . . . 
                . . . . . . . . f . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . 2 1 . . . . . . . 
                . . . . . . . . 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, enemy22, i, 100)
            projectile22.setPosition(number2, 25)
            pause(1000)
            if (info.score() > 9) {
                idk2 = false
            }
        }
    }
    if (x == 3) {
        k = 3
        sprites.destroyAllSpritesOfKind(SpriteKind.Player)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        scene.setBackgroundColor(6)
        game.showLongText("Červený amongus je docela silný.", DialogLayout.Bottom)
        game.showLongText("Dokáže bodat jen přímo ale zároveň se dokáže i ventovat.", DialogLayout.Bottom)
        game.showLongText("Jeho nože jsou ostré a nesou na sobě krev spousty crewmatu.", DialogLayout.Bottom)
        info.setLife(3),
            info.setScore(0)
letadlo13 = sprites.create(assets.image`myImage`, SpriteKind.Player)
        letadlo13.setBounceOnWall(true)
        controller.moveSprite(letadlo13)
        enemy23 = sprites.create(assets.image`enemy3`, SpriteKind.Enemy)
        enemy23.setPosition(number2, 15)
        controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
            if (info.score() < 10) {
                projectile4 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . f f 1 . . . . . .
        . . . . . . . f 1 1 . . . . . .
        . . . . . . . f 1 1 . . . . . .
        . . . . . . . f f 1 . . . . . .
        . . . . . . . f f 1 . . . . . .
        . . . . . . . f f 1 . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
         `, letadlo13, 0, -100)
                projectile4.setPosition(letadlo13.x, letadlo13.y + -11)
            }
        })
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Projectile, function (projectile2: Sprite, projectile: Sprite) {
            projectile2.destroy()
            projectile.destroy()
        })
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (projectile2: Sprite, letadlo1: Sprite) {
            projectile2.destroy()
            info.changeLifeBy(-1)
        })
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (projectile: Sprite, enemy2: Sprite) {

            if (k == 3) {
                number2 = randint(15, 155)
                sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
                sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
                enemy2.startEffect(effects.fire, 300)
                enemy2 = sprites.create(assets.image`enemy3`, SpriteKind.Enemy)
                enemy2.setPosition(number2, 15)
                info.changeScoreBy(1)
                info.score()
                if (info.score() == 10) {
                    game.showLongText("Nádherná práce.", DialogLayout.Bottom)
                    game.showLongText("Nyní už zbývá jen jediný ČERNÝ AMONGUS.", DialogLayout.Bottom)
                    startgame(30)
                }
            }

        })
let number3
idk3 = true
        while (idk3) {
            number3 = Math.floor(Math.random() * 140) + 15
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            enemy23 = sprites.create(assets.image`enemy3`, SpriteKind.Enemy)
            enemy23.setPosition(number3, 15)
            projectile23 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . f . . . . . . . 
                . . . . . . . . f . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, enemy23, 0, 100)
            projectile23.setPosition(enemy23.x, 25)
            pause(1000)
            if (info.score() > 9) {
                idk3 = false
            }
        }
    }
    if (x == 4) {
        k = 4
        sprites.destroyAllSpritesOfKind(SpriteKind.Player)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        scene.setBackgroundColor(6)
        game.showLongText("Legendární Černý amongus nevíce podezřelý", DialogLayout.Bottom)
        game.showLongText("Dokáže bodat i do stran navíc je velmi statný ve ventovaní", DialogLayout.Bottom)
        game.showLongText("Černý amongus je opravdová vízva i pro nejlepší crewmaty", DialogLayout.Bottom)
        info.setLife(3),
            info.setScore(0)
letadlo14 = sprites.create(assets.image`myImage`, SpriteKind.Player)
        letadlo14.setBounceOnWall(true)
        controller.moveSprite(letadlo14)
        enemy24 = sprites.create(assets.image`enemy4`, SpriteKind.Enemy)
        enemy24.setPosition(number2, 15)
        controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
            if (info.score() < 10) {
                projectile5 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . f f 1 . . . . . .
        . . . . . . . f 1 1 . . . . . .
        . . . . . . . f 1 1 . . . . . .
        . . . . . . . f f 1 . . . . . .
        . . . . . . . f f 1 . . . . . .
        . . . . . . . f f 1 . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
         `, letadlo14, 0, -100)
                projectile5.setPosition(letadlo14.x, letadlo14.y + -11)
            }
        })
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Projectile, function (projectile2: Sprite, projectile: Sprite) {
            projectile2.destroy()
            projectile.destroy()
        })
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (projectile2: Sprite, letadlo1: Sprite) {
            projectile2.destroy()
            info.changeLifeBy(-1)
        })
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (projectile: Sprite, enemy2: Sprite) {

            if (k == 4) {
                number2 = randint(15, 155)
                sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
                sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
                enemy2.startEffect(effects.fire, 300)
                enemy2 = sprites.create(assets.image`enemy4`, SpriteKind.Enemy)
                enemy2.setPosition(number2, 15)
                info.changeScoreBy(1)
                info.score()
                if (info.score() == 10) {
                    game.showLongText("Cože.....", DialogLayout.Bottom)
                    game.showLongText("Neuvěřitelné!!", DialogLayout.Bottom)
                    game.showLongText("Zvládl si porazit všechny amonguse.", DialogLayout.Bottom)
                    game.showLongText("Jsi pravý CREWMATE.", DialogLayout.Bottom)
                    game.showLongText("Odedneška jsi hlavním hrdinou a nejsilnějším CREWMATEM", DialogLayout.Bottom)
                    startgame(40)
                    game.over(true)
                }
            }

        })
idk4 = true
        let number32
while (idk4) {
            j = Math.floor(Math.random() * 160) + 1
            y2 = Math.floor(Math.random() * 2 + 1)
            if (y2 > 1) {
                j = j - 2 * j
            }
            number32 = Math.floor(Math.random() * 140) + 15
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            enemy24 = sprites.create(assets.image`enemy4`, SpriteKind.Enemy)
            enemy24.setPosition(number32, 15)
            projectile24 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . f . . . . . . . 
                . . . . . . . . f . . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, enemy24, j, 100)
            projectile24.setPosition(enemy24.x, 25)
            pause(500)
            if (info.score() > 9) {
                idk4 = false
            }
        }
    }
}
function startgame (i: number) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    letadlo = sprites.create(assets.image`myImage`, SpriteKind.Player)
    letadlo.setPosition(80, 100)
    letadlo.setBounceOnWall(true)
    scene.setBackgroundImage(assets.image`moon1`)
    controller.moveSprite(letadlo)
    // Set difficulty
    enemy1 = sprites.create(assets.image`enemy1`, SpriteKind.Enemy)
    enemy1.setPosition(25, 60)
    enemy2 = sprites.create(assets.image`enemy2`, SpriteKind.Enemy)
    enemy2.setPosition(60, 60)
    enemy3 = sprites.create(assets.image`enemy3`, SpriteKind.Enemy)
    enemy3.setPosition(95, 60)
    enemy4 = sprites.create(assets.image`enemy4`, SpriteKind.Enemy)
    enemy4.setPosition(130, 60)
    // Player difficulty
    while (true) {
        if (letadlo.overlapsWith(enemy1)) {
            game.showLongText("Zelený amongus... Hmmm", DialogLayout.Bottom)
            game.showLongText("Vypadá docela nevině", DialogLayout.Bottom)
            game.showLongText("Ale pozor", DialogLayout.Bottom)
            game.showLongText("Není to krev na jeho noži !!!!", DialogLayout.Bottom)
            lol(1)
        }
        if (letadlo.overlapsWith(enemy2) && i >= 10) {
            game.showLongText("Hele není tohle Modrý amongus", DialogLayout.Bottom)
            game.showLongText("Slyšel jsem že je občas docela podezřelý.", DialogLayout.Bottom)
            game.showLongText("Radši si dávej pozor.", DialogLayout.Bottom)
            game.showLongText("Myslím že schovává něco za zády!!", DialogLayout.Bottom)
            lol(2)
        }
        if (letadlo.overlapsWith(enemy3) && i >= 20) {
            game.showLongText("Koukej Červený amongus", DialogLayout.Bottom)
            game.showLongText("Je prý docela podezřelý.", DialogLayout.Bottom)
            game.showLongText("Je potřeba si dávat poz....", DialogLayout.Bottom)
            game.showLongText("POZOR ZA TEBOU !!!!!", DialogLayout.Bottom)
            lol(3)
        }
        if (letadlo.overlapsWith(enemy4) && i >= 30) {
            game.showLongText("Legendární Černý amongus.", DialogLayout.Bottom)
            game.showLongText("Nejvíce podezřelý.", DialogLayout.Bottom)
            game.showLongText("Už jen jeho přítomnost je děsivá.", DialogLayout.Bottom)
            game.showLongText("Jakmile vstoupíš už není cesty zpět.", DialogLayout.Bottom)
            lol(4)
        }
        pause(1000)
    }
}
let enemy4: Sprite = null
let enemy3: Sprite = null
let enemy2: Sprite = null
let enemy1: Sprite = null
let letadlo: Sprite = null
let projectile24: Sprite = null
let y2 = 0
let j = 0
let idk4 = false
let enemy24: Sprite = null
let letadlo14: Sprite = null
let projectile23: Sprite = null
let idk3 = false
let enemy23: Sprite = null
let letadlo13: Sprite = null
let projectile22: Sprite = null
let y = 0
let i = 0
let idk2 = false
let enemy22: Sprite = null
let letadlo12: Sprite = null
let projectile2: Sprite = null
let idk = false
let enemy12: Sprite = null
let letadlo1: Sprite = null
let number2 = 0
let projectile5: Sprite = null
let projectile4: Sprite = null
let projectile3: Sprite = null
let projectile: Sprite = null
number2 = 80
let k: number;
startgame(0)
