// 1. Book my show

function enterBookMyShow() {
    return new Promise((resolve) => {
        console.log("Enter my BookMyShow app...");
        alert("Enter my BookMyShow app...");
        setTimeout(() => resolve("App opened successfully"), 1000);
    });
}

function selectDate() {
    return new Promise((resolve) => {
        console.log("Select the date...");
        alert("Select the date...")
        setTimeout(() => resolve("Date selected"), 1000);
    });
}

function selectTheatre() {
    return new Promise((resolve) => {
        console.log("Select the theatre...");
        alert("Select the theatre...")
        setTimeout(() => resolve("Theatre selected"), 1000);
    });
}

function selectMovie() {
    return new Promise((resolve) => {
        console.log("Selecting movie...");
        alert("Select the movie...")
        setTimeout(() => resolve("Movie selected"), 1000);
    });
}

function selectSeat() {
    return new Promise((resolve) => {
        console.log("Selecting seat...");
        alert("Select the seat...")
        setTimeout(() => resolve("Seat selected"), 1000);
    });
}

function goToPhonePe() {
    return new Promise((resolve) => {
        console.log("Redirecting to PhonePe...");
        alert("Redirecting to PhonePe...")
        setTimeout(() => resolve("PhonePe opened"), 1000);
    });
}

function makePayment() {
    return new Promise((resolve) => {
        console.log("Processing payment...");
        alert("Processing payment...")
        setTimeout(() => resolve("Payment successful!!! Booking confirmed."), 2000);
    });
}

enterBookMyShow()
    .then((result) => {
        console.log(result);
        return selectDate();
    })
    .then((result) => {
        console.log(result);
        return selectTheatre();
    })
    .then((result) => {
        console.log(result);
        return selectMovie();
    })
    .then((result) => {
        console.log(result);
        return selectSeat();
    })
    .then((result) => {
        console.log(result);
        return goToPhonePe();
    })
    .then((result) => {
        console.log(result);
        return makePayment();
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error("Error:", error);
    })
    .finally(() => {
        console.log("Booking process completed.");
    });


// 2.uber booking

function bookUber() {
    return new Promise((resolve) => {
        console.log("Uber booking initiated...");
        alert("Uber booking initiated...")
        setTimeout(() => resolve("Uber booked successfully!"), 1000);
    });
}

function riderComing() {
    return new Promise((resolve) => {
        console.log("Rider is on the way...");
        alert("Rider is on the way...")
        setTimeout(() => resolve("Rider has reached the pickup point"), 2000);
    });
}

function pickUp() {
    return new Promise((resolve) => {
        console.log("Rider has picked you up...");
        alert("Rider has picked you up...")
        setTimeout(() => resolve("15-minute journey started"), 1000);
    });
}

function journey() {
    return new Promise((resolve) => {
        console.log("Journey in progress...");
        alert("Journey in progress...")
        setTimeout(() => resolve("You have arrived at your destination"), 1500);
    });
}

bookUber()
    .then((result) => {
        console.log(result);
        return riderComing();
    })
    .then((result) => {
        console.log(result);
        return pickUp();
    })
    .then((result) => {
        console.log(result);
        return journey();
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error("Error:", error); 
    })
    .finally(() => {
        console.log("Uber ride process completed.");
    });
