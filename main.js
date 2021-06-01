function setup()
{
    c1=createCanvas(650,500);
    c1=center();
    v1=createCapture();
}
function draw()
{
    image(v1,0,0,650,500);
    circle(30,30,20);
    ellipse(50,46,55,55);
    rect(30,20,55,55)
}
function take_snapshot()
{
    save("snapshot.png")
}