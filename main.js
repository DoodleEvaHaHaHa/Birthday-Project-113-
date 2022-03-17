function preload()
{
}
function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(300, 300);
    video = createCapture(VIDEO);
    video.hide()

    tint_color="";
}
function draw()
{
    image(0, 0, 640, 480);
    tint(tint_color);
}
function take_snapshot()
{
    save('Birthday Party Pics');
}
function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}