
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