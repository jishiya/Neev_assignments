import java.util.ArrayList;
import processing.core.PApplet;

class SketchBalls{
    private PApplet sketch;
    public int width;
    public int height;
    public int diameter_value;
    public static int no_of_balls =4;
    int no_of_partitions = no_of_balls+1;
    public SketchBalls(PApplet sketch, int diameter_value){
        this.width=0;
        this.diameter_value = diameter_value;
        this.sketch = sketch;
    }

    //method to calculate the y coordinate for the balls
    public void calculateHeight(int speed){
        height = BallsChallenge.height_box*speed/no_of_partitions;
    }

    //method to calculate the x coordinate for the balls
    public void calculateWidth(int speed){
        width = width+speed;
    }
    // method to draw the balls
    public void sketchCircle(){
        sketch.ellipse(width,height,diameter_value,diameter_value);
    }
}


public class BallsChallenge extends PApplet{

    public static final int height_box = 480;
    public static final int width_box = 640;

    //Array to hold the balls, in this exercise 4
    private ArrayList<SketchBalls> balls = new ArrayList<>();


    public static void main(String args[]){
        PApplet.main("BallsChallenge",args);
    }

    @Override
    public void settings() {
        super.settings();
        size(width_box,height_box);
        for (int i=1;i<=SketchBalls.no_of_balls;i++)
            balls.add(new SketchBalls(this,10));
    }

    @Override
    public void setup() {
    }

    @Override
    public void draw() {
        int i=1;
        for(SketchBalls b:balls){
            b.calculateHeight(i);
            b.sketchCircle();
            b.calculateWidth(i);
            i++;

        }
    }
}
