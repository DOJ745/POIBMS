function scene:enter( event )

end

function scene:exit( event )

end

function scene:destroy( event )

end

scene:addEventListener( "create", scene )
scene:addEventListener( "enter", scene )
scene:addEventListener( "exit", scene )
scene:addEventListener( "destroy", scene )

return scene