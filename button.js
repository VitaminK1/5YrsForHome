class Button {
    constructor(x,y,w,h) {
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
    }
    over() {
        let x2 = this.x+this.w;
        let y2 = this.y+this.h;
        if (this.x < mouseX &&
            mouseX < x2 &&
            this.y < mouseY &&
            mouseY < y2) {
                return true && (fadeout == 0);
            } else {
                return false;
            }
    }
}