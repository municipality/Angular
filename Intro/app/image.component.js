((app) => {
    app.imageComponent = ng.core
    .Component({
        selector : "my-image",
        template : "<img src='images/{{image_name}}' style='width:{{width}}px;height:{{height}}px'>"
    })
    .Class({
        constructor() {
            this.image_name = image_name;
            this.width = width;
            this.height = height;
        }
    });
})();
