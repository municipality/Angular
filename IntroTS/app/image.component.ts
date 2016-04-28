import {Component} from 'angular2/core';
//Create app component
@Component({
    selector : 'my-image', //how the HTML identifies the component
    template : `<h2>Image component</h2>
                <div id='image_container'>
                    <img id='image_image' src='../images/{{image_src}}'
                    style='width:{{width}}px; height:{{height}}px;'>
                    <div id='image_description'>{{image_description}}</div>
                </div>`

})

//export class with initialized variables for above template
export class AppImage {
    image_src = "sample.jpg";
    image_description = "This is the image description.";
    width = 400;
    height = 400;

    /*
    image_src : string;
    width : number;
    height : number;
    // Types : boolean, number, string
    // let list : number[] = [1,2,3]; //array
    // let x : [string, number] = ["s", 10]; //tuple
    //
    // enum Color {red, green, blue}; //similar to a dictionary where values are mapped to numbers
    // let c : Color = Color.red; //c = 0;

    // let list : any = [1, true, "hey"];

    constructor () {
        this.image_src = "sample.jpg";
        this.width = 400;
        this.height = 400;
    }

    */
};
