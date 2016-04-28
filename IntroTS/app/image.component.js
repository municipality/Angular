System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppImage;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            //Create app component
            AppImage = (function () {
                function AppImage() {
                    this.image_src = "sample.jpg";
                    this.image_description = "This is the image description.";
                    this.width = 400;
                    this.height = 400;
                }
                AppImage = __decorate([
                    core_1.Component({
                        selector: 'my-image',
                        template: "<h2>Image component</h2>\n                <div id='image_container'>\n                    <img id='image_image' src='../images/{{image_src}}'\n                    style='width:{{width}}px; height:{{height}}px;'>\n                    <div id='image_description'>{{image_description}}</div>\n                </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppImage);
                return AppImage;
            }());
            exports_1("AppImage", AppImage);
            ;
        }
    }
});
//# sourceMappingURL=image.component.js.map