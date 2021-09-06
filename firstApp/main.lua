local tapCount = 0

local background = display.newImageRect( "/images/background.jpg", 360, 570 )
background.x = display.contentCenterX
background.y = display.contentCenterY

local tapText = display.newText( tapCount, display.contentCenterX, 20, native.systemFont, 40 )
tapText:setFillColor( 0, 0, 0 )

local platform = display.newImageRect( "/images/platform.png", 300, 50 )
platform.x = display.contentCenterX
platform.y = display.contentHeight-25

local balloon = display.newImageRect( "/images/balloon.png", 112, 112 )
balloon.x = display.contentCenterX
balloon.y = display.contentCenterY
balloon.alpha = 0.9

-- Physics

local physics = require( "physics" )
physics.start()

physics.addBody( platform, "static" )
physics.addBody( balloon, "dynamic", { radius=55, bounce=0.35 } )

local function pushBalloon()
    balloon:applyLinearImpulse( 0, -0.75, balloon.x, balloon.y )
    tapCount = tapCount + 1
    tapText.text = tapCount
end

balloon:addEventListener( "tap", pushBalloon )