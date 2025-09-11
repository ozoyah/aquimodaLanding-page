// // Smooth scrolling to booking section
// function scrollToBooking() {
//   document.getElementById("booking").scrollIntoView({
//     behavior: "smooth",
//   });
// }

// // Form handling and validation
// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.getElementById("appointmentForm");
//   const modal = document.getElementById("successModal");
//   const closeModal = document.querySelector(".close-modal");

//   // Form submission
//   form.addEventListener("submit", function (e) {
//     e.preventDefault();

//     const formData = new FormData(form);
//     const data = Object.fromEntries(formData);

//     if (validateForm(data)) {
//       fetch(form.action, {
//         method: "POST",
//         body: formData,
//         headers: {
//           Accept: "application/json",
//         },
//       })
//         .then((response) => {
//           if (response.ok) {
//             modal.style.display = "block";
//             form.reset();
//           } else {
//             alert("There was a problem submitting your form.");
//           }
//         })
//         .catch(() => {
//           alert("There was a problem submitting your form.");
//         });
//     }
//   });

//   // Close modal
//   closeModal.addEventListener("click", function () {
//     modal.style.display = "none";
//   });

//   // Close modal when clicking outside
//   window.addEventListener("click", function (e) {
//     if (e.target === modal) {
//       modal.style.display = "none";
//     }
//   });

//   // Form validation
//   function validateForm(data) {
//     const requiredFields = ["fullName", "phone", "datetime", "service"];

//     for (let field of requiredFields) {
//       if (!data[field] || data[field].trim() === "") {
//         alert(
//           `Please fill in the ${field
//             .replace(/([A-Z])/g, " $1")
//             .toLowerCase()} field.`
//         );
//         return false;
//       }
//     }

//     // Phone number validation
//     const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,}$/;
//     if (!phoneRegex.test(data.phone)) {
//       alert("Please enter a valid phone number.");
//       return false;
//     }

//     return true;
//   }

//   // Enhanced form interactions
//   const inputs = document.querySelectorAll("input, select");

//   inputs.forEach((input) => {
//     input.addEventListener("focus", function () {
//       this.parentElement.classList.add("focused");
//     });

//     input.addEventListener("blur", function () {
//       this.parentElement.classList.remove("focused");
//     });
//   });

//   // Service card interactions
//   const serviceCards = document.querySelectorAll(".service-card");

//   serviceCards.forEach((card) => {
//     card.addEventListener("click", function () {
//       const service = this.dataset.service;
//       const serviceSelect = document.getElementById("service");
//       serviceSelect.value = service;

//       // Smooth scroll to booking form
//       scrollToBooking();

//       // Focus on form
//       setTimeout(() => {
//         document.getElementById("fullName").focus();
//       }, 800);
//     });
//   });

//   // Parallax effect for hero section
//   //   window.addEventListener("scroll", function () {
//   //     const scrolled = window.pageYOffset;
//   //     const hero = document.querySelector(".hero");
//   //     const rate = scrolled * -0.5;

//   //     if (hero) {
//   //       hero.style.transform = `translateY(${rate}px)`;
//   //     }
//   //   });

//   // Intersection Observer for animations
//   const observerOptions = {
//     threshold: 0.1,
//     rootMargin: "0px 0px -50px 0px",
//   };

//   const observer = new IntersectionObserver(function (entries) {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.style.opacity = "1";
//         entry.target.style.transform = "translateY(0)";
//       }
//     });
//   }, observerOptions);

//   // Observe sections for scroll animations
//   const sections = document.querySelectorAll(
//     ".booking-section, .services-section"
//   );
//   sections.forEach((section) => {
//     section.style.opacity = "0";
//     section.style.transform = "translateY(30px)";
//     section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
//     observer.observe(section);
//   });

//   // Date/time input enhancement
//   const datetimeInput = document.getElementById("datetime");
//   datetimeInput.addEventListener("focus", function () {
//     this.type = "datetime-local";
//   });

//   datetimeInput.addEventListener("blur", function () {
//     if (!this.value) {
//       this.type = "text";
//     }
//   });

//   // Loading animation for buttons
//   const buttons = document.querySelectorAll("button");
//   buttons.forEach((button) => {
//     button.addEventListener("click", function () {
//       if (this.type === "submit") {
//         this.style.opacity = "0.8";
//         setTimeout(() => {
//           this.style.opacity = "1";
//         }, 300);
//       }
//     });
//   });
// });

// // Preload images for better performance
// function preloadImages() {
//   const imageUrls = [
//     "https://images.pexels.com/photos/1755385/pexels-photo-1755385.jpeg?auto=compress&cs=tinysrgb&w=600",
//     "https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=600",
//     "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=600",
//   ];

//   imageUrls.forEach((url) => {
//     const img = new Image();
//     img.src = url;
//   });
// }

// // Initialize preloading when page loads
// window.addEventListener("load", preloadImages);

// // Add smooth hover effects
// document.addEventListener("mouseover", function (e) {
//   if (e.target.classList.contains("service-card")) {
//     e.target.style.transition = "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)";
//   }
// });
