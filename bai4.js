class Rectangle {
    x;
    y;
    width;
    height;
    color;
    constructor(x, y, width,height,color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    render(){
        let canvas = document.getElementById("myCanvas");
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y,this.width,this.height);
        ctx.stroke()
        ctx.closePath();
    }

}