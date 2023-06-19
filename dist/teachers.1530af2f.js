const stars = document.querySelectorAll(".star-rating .fa");
stars.forEach(function(star) {
    star.addEventListener("click", function() {
        const rating = this.getAttribute("data-rating");
        document.querySelector("#rating").value = rating;
        stars.forEach(function(s) {
            s.classList.remove("selected");
            if (s.getAttribute("data-rating") <= rating) {
                s.classList.add("fa-star");
                s.classList.remove("fa-star-o");
            } else {
                s.classList.add("fa-star-o");
                s.classList.remove("fa-star");
            }
        });
        this.classList.add("selected");
    });
});

//# sourceMappingURL=teachers.1530af2f.js.map
