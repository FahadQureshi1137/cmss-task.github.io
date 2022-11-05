// OWl Carousel
$(document).ready(function () {
    var carousel = $(".owl-demo");
    carousel.owlCarousel({
        navigation: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        items: 3,
        nav: true,
        dots: false,
        mouseDrag: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 3
            },
            769: {
                items: 6
            }
        }
    });
});

// DATA TABLE
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

var data = "";
readTextFile("data.json", function (text) {
    var data = JSON.parse(text);
    data.forEach((item, index) => {
        $("#fetcher").append("<tr><td><img class='img-fluid rounded-circle' width='50' src='" + item['img'] + "' alt=''></td><td>" + item['name'] + "</td><td>" + item['dept'] + "</td><td>" + item['emailId'] + "</td><td>" + item['designation'] + "</td><td>" + item['phone'] + "</td></tr>")
        console.log(index, item)
    })
});