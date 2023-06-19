AFRAME.registerComponent("tour", {
    init: function () {
        this.placesContainer = this.el;
        this.createCards();
    },
    createPoster: function(item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
            primitive: "plane",
            width: 20,
            height: 28
        });

        entityEl.setAttribute("position", {x: 0, y: 5, z: 0.1});
        entityEl.setAttribute("material", {src: item.url})
    },
    handleMouseEvents: function () {
       this.el.addEventListener("mouseenter", () => {
        const id = this.el.getAttribute("id");
        const postersId = [
            "superman",
            "spiderman",
            "captain-aero",
            "outer-space",
        ];
        if (postersId.includes(id)) {
            const postersContainer = document.querySelector("#posters-container");
            postersContainer.setAttribute("cursor-listner", {
                selectedItemId: id,
            });
            this.el.setAttribute("material", {color: "#1565c0"});
        }
       }); 
    },
    init: function () {
        this.handleMouseEnterEvents();
        this.handleMouseLeaveEvents();
    },
})