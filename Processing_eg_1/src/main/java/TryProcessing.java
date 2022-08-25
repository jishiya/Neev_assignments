import processing.core.PApplet;


public class TryProcessing extends PApplet {

    public static final int width = 640;
    public static final int height = 480;
    public static final int diameter = 10;

    int w=0,x=0,y =0,z=0;


    public static void main(String args[]){
        PApplet.main("TryProcessing", args);
    }

    @Override
    public void settings() {
        super.settings();


        size(width, height);
    }

    @Override
    public void setup() {

    }

    @Override
    public void draw() {

        drawCircle();
    }

    private void drawCircle() {
        ellipse(w, height/5, diameter, diameter);
        w++;
        ellipse(x, 2*height/5, diameter, diameter);
        x=x+2;
        ellipse(y, 3*height/5, diameter, diameter);
        y=y+3;
        ellipse(z, 4*height/5, diameter, diameter);
        z=z+4;

    }

}
