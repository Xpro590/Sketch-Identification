function setUp()
{
    document.getElementById(canvas).innerHTML = "myCanvas" ;
    canvas = createCanvas(300,300) ;
    canvas.center() ;
    canvas.background("white") ;
}

function clearCanvas()
{
    background("white") ;
}
