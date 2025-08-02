
// -----Toggle Feature between donation btn and subscribe btn
document.getElementById("subscribe-btn").addEventListener("click", function(){
    const subscribeSection = document.getElementById("subscribe-detail-section");
    subscribeSection.classList.remove("hidden")
    // hide on-time-donation-btn
    const hideDonationSection = document.getElementById("details-section")
    hideDonationSection.classList.add("hidden");

})
document.getElementById("one-time-donation").addEventListener("click", function(){
    const detailsSection = document.getElementById("details-section");
    detailsSection.classList.remove("hidden");

    // hide subscribe section
    const hideSubscribeSection = document.getElementById("subscribe-detail-section");
    hideSubscribeSection.classList.add("hidden");
})
// ------------------------


// toggle feature between bank details btns---
    
    // btns here---
    const sonaliBtn = document.getElementById("sonali-btn");
    const rupaliBtn = document.getElementById("rupali-btn");
    const islamiBtn = document.getElementById("islami-btn");
    const janataBtn = document.getElementById("janata-btn");


    //details here
    const sonaliDetails = document.getElementById("sonali-details");
    const rupaliDetails = document.getElementById("rupali-details")
    const IslamiDetails = document.getElementById("islami-details");
    const janataDetails = document.getElementById("janata-details");

document.getElementById("rupali-btn").addEventListener("click", function(){
    rupaliDetails.classList.remove("hidden");
    // active btn
    activateButton(rupaliBtn);
    //remove btns
    removeActiveButton(sonaliBtn);
    removeActiveButton(islamiBtn);
    removeActiveButton(janataBtn);

    // hide all another details
    sonaliDetails.classList.add("hidden");
    IslamiDetails.classList.add("hidden");
    janataDetails.classList.add("hidden");
})


document.getElementById("sonali-btn").addEventListener("click", function(){
    sonaliDetails.classList.remove("hidden");
    // active btns
    activateButton(sonaliBtn);
    // hide btns
    removeActiveButton(rupaliBtn);
    removeActiveButton(islamiBtn);
    removeActiveButton(janataBtn);

    // hide another details
    rupaliDetails.classList.add("hidden");
    janataDetails.classList.add("hidden");
    IslamiDetails.classList.add("hidden");
})

document.getElementById("islami-btn").addEventListener("click", function(){
    IslamiDetails.classList.remove("hidden");
    // active btns
    activateButton(islamiBtn);
    // hide btns
    removeActiveButton(rupaliBtn);
    removeActiveButton(sonaliBtn);
    removeActiveButton(janataBtn);

    // hide another details
    sonaliDetails.classList.add("hidden");
    rupaliDetails.classList.add("hidden");
    janataDetails.classList.add("hidden");
})

document.getElementById("janata-btn").addEventListener("click", function(){
    janataDetails.classList.remove("hidden");
    // active btn
    activateButton(janataBtn);
    // hide btns
    removeActiveButton(sonaliBtn);
    removeActiveButton(rupaliBtn);
    removeActiveButton(islamiBtn);


    // hide another details
    IslamiDetails.classList.add("hidden");
    sonaliDetails.classList.add("hidden");
    rupaliDetails.classList.add("hidden");

})

// toggle buttons for bank details ends here