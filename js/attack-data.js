'use strict'
export function createHeroAttackData(heroName) {
    return {        
        "head-to-head": {
            expectedDamage: 20, 
            messageVariants: [
                {
                    success: `${heroName} провёл мощный удар лбом в нос противника`,
                    attackCameToDefence: `${heroName} попытался провести мощный удар лбом в нос противника, но налетел на блок`
                }
            ]},
        "head-to-chest": {
            expectedDamage: 10,
            messageVariants: [
                {
                    success: `${heroName} провёл мощный удар теменем в грудину противника`,
                    attackCameToDefence: `${heroName} попытался влепить челюстью во вражью грудь, но был послан`
                }
            ],
        },
        "head-to-belly": {
            expectedDamage: 8,
            messageVariants: [
                {
                    success: `${heroName} провёл мощный удар глазом в пуп врага`,
                    attackCameToDefence: `${heroName} попытался врезать глазом под дых врага, но сыграл в вакуум`
                }
            ],
        },
        "head-to-eggs": {
            expectedDamage: 30,
            messageVariants: [
                {
                    success: `${heroName} вцепился зубами в яйца противника`,
                    attackCameToDefence: `При попытке ударить тыковкой по яйцам ${heroName} сломал ухо о вражий член`
                }
            ],
        },
        "head-to-legs": {
            expectedDamage: 5,
            messageVariants: [
                {
                    success: `${heroName} подсёк врага своей башкой`,
                    attackCameToDefence: `${heroName} хотел подсечь противника головой, но воткнулся в землю`
                }
            ],            
        },

        "fist-to-head": {
            expectedDamage: 30,
            messageVariants: [
                {
                    success: `${heroName} героически вставил врагу кулак в глаз`,
                    attackCameToDefence: `${heroName} попытался всунуть врагу кулак в глаз, но застрял в ноздре`
                }
            ],     
        },
        "fist-to-chest": {
            expectedDamage: 20,
            messageVariants: [
                {
                    success: `${heroName} вонзил противнику палец в сердце`,
                    attackCameToDefence: `${heroName} сломал ногу, пытаясь ударить врага кулаком в грудь`
                }
            ],   
        },
        "fist-to-belly": {
            expectedDamage: 25,
            messageVariants: [
                {
                    success: `${heroName} провёл разбивающий удар кулаком в желудок`,
                    attackCameToDefence: `Пытаясь врезать кулаком по кишечнику врага, ${heroName} потерпел жизненный крах`
                }
            ],
        },
        "fist-to-eggs": {
            expectedDamage: 35,
            messageVariants: [
                {
                    success: `${heroName} выполнил финт левой по яйцам`,
                    attackCameToDefence: `${heroName} сломал кулак о яйца врага`
                }
            ],
        },
        "fist-to-legs": {
            expectedDamage: 10,
            messageVariants: [
                {
                    success: `${heroName} сделал проникающий тычок кулаком в пятку`,
                    attackCameToDefence: `При попытке вонзить палец в стопу врага ${heroName} ударил лицом в грязь`
                }
            ],
        },

        "foot-to-head": {
            expectedDamage: 40,
            messageVariants: [
                {
                    success: `${heroName} без изысков вломил ботинком в челюсть врага`,
                    attackCameToDefence: `${heroName} хотел заехать врагу стопой в ухо, но пронзил облака`
                }
            ],
        },
        "foot-to-chest": {
            expectedDamage: 30,
            messageVariants: [
                {
                    success: `${heroName} нанёс сокрушительный удар ботинком в лёгкое`,
                    attackCameToDefence: `Нога ${heroName} застряла в сердечном клапане противника`
                }
            ],            
        },
        "foot-to-belly": {
            expectedDamage: 35,
            messageVariants: [
                {
                    success: `${heroName} пробил ботинком кишечник врага`,
                    attackCameToDefence: `${heroName} потерял ботинок в попытке пнуть врага по селезёнке`
                }
            ], 
        },
        "foot-to-eggs": {
            expectedDamage: 40,
            messageVariants: [
                {
                    success: `После пинка ${heroName} папины яйца стекли в сапоги`,
                    attackCameToDefence: `Враг заблокировал ногу ${heroName} своим пенисом`
                }
            ],             
        },
        "foot-to-legs": {
            expectedDamage: 20,
            messageVariants: [
                {
                    success: `${heroName} удачно провёл подсечку`,
                    attackCameToDefence: `${heroName} был раздавлен стопой врага при попытке сделать подножку`
                }
            ],   
        },
    };
}


export function createEnemyAttackData(enemyName) {
    return {        
        "head-to-head": {
            expectedDamage: 20, 
            messageVariants: [
                {
                    success: `${enemyName} провёл мощный удар лбом в нос противника`,
                    attackCameToDefence: `${enemyName} попытался провести мощный удар лбом в нос противника, но налетел на блок`
                }
            ]},
        "head-to-chest": {
            expectedDamage: 10,
            messageVariants: [
                {
                    success: `${enemyName} провёл мощный удар теменем в грудину противника`,
                    attackCameToDefence: `${enemyName} попытался влепить челюстью во вражью грудь, но был послан`
                }
            ],
        },
        "head-to-belly": {
            expectedDamage: 8,
            messageVariants: [
                {
                    success: `${enemyName} провёл мощный удар глазом в пуп врага`,
                    attackCameToDefence: `${enemyName} попытался врезать глазом под дых врага, но сыграл в вакуум`
                }
            ],
        },
        "head-to-eggs": {
            expectedDamage: 30,
            messageVariants: [
                {
                    success: `${enemyName} вцепился зубами в яйца противника`,
                    attackCameToDefence: `При попытке ударить тыковкой по яйцам ${enemyName} сломал ухо о вражий член`
                }
            ],
        },
        "head-to-legs": {
            expectedDamage: 5,
            messageVariants: [
                {
                    success: `${enemyName} подсёк врага своей башкой`,
                    attackCameToDefence: `${enemyName} хотел подсечь противника головой, но воткнулся в землю`
                }
            ],            
        },

        "fist-to-head": {
            expectedDamage: 30,
            messageVariants: [
                {
                    success: `${enemyName} героически вставил врагу кулак в глаз`,
                    attackCameToDefence: `${enemyName} попытался всунуть врагу кулак в глаз, но застрял в ноздре`
                }
            ],     
        },
        "fist-to-chest": {
            expectedDamage: 20,
            messageVariants: [
                {
                    success: `${enemyName} вонзил противнику палец в сердце`,
                    attackCameToDefence: `${enemyName} сломал ногу, пытаясь ударить врага кулаком в грудь`
                }
            ],   
        },
        "fist-to-belly": {
            expectedDamage: 25,
            messageVariants: [
                {
                    success: `${enemyName} провёл разбивающий удар кулаком в желудок`,
                    attackCameToDefence: `Пытаясь врезать кулаком по кишечнику врага, ${enemyName} потерпел жизненный крах`
                }
            ],
        },
        "fist-to-eggs": {
            expectedDamage: 35,
            messageVariants: [
                {
                    success: `${enemyName} выполнил финт левой по яйцам`,
                    attackCameToDefence: `${enemyName} сломал кулак о яйца врага`
                }
            ],
        },
        "fist-to-legs": {
            expectedDamage: 10,
            messageVariants: [
                {
                    success: `${enemyName} сделал проникающий тычок кулаком в пятку`,
                    attackCameToDefence: `При попытке вонзить палец в стопу врага ${enemyName} ударил лицом в грязь`
                }
            ],
        },

        "foot-to-head": {
            expectedDamage: 40,
            messageVariants: [
                {
                    success: `${enemyName} без изысков вломил ботинком в челюсть врага`,
                    attackCameToDefence: `${enemyName} хотел заехать врагу стопой в ухо, но пронзил облака`
                }
            ],
        },
        "foot-to-chest": {
            expectedDamage: 30,
            messageVariants: [
                {
                    success: `${enemyName} нанёс сокрушительный удар ботинком в лёгкое`,
                    attackCameToDefence: `Нога ${enemyName} застряла в сердечном клапане противника`
                }
            ],            
        },
        "foot-to-belly": {
            expectedDamage: 35,
            messageVariants: [
                {
                    success: `${enemyName} пробил ботинком кишечник врага`,
                    attackCameToDefence: `${enemyName} потерял ботинок в попытке пнуть врага по селезёнке`
                }
            ], 
        },
        "foot-to-eggs": {
            expectedDamage: 40,
            messageVariants: [
                {
                    success: `После пинка ${enemyName} папины яйца стекли в сапоги`,
                    attackCameToDefence: `Враг заблокировал ногу ${enemyName} своим пенисом`
                }
            ],             
        },
        "foot-to-legs": {
            expectedDamage: 20,
            messageVariants: [
                {
                    success: `${enemyName} удачно провёл подсечку`,
                    attackCameToDefence: `${enemyName} был раздавлен стопой врага при попытке сделать подножку`
                }
            ],   
        },
    };
}