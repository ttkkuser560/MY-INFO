// নিজের তথ্য ও লিংকগুলো এখানে পরিবর্তন করো
const profile = {
  name: "Your Name",
  role: "Content Creator & Designer",
  bio: "Welcome to my official social links page.",
  information: "Hello! This is my personal website. Connect with me through my social links.",
  links: {
    youtube: "https://youtube.com/@yourusername",
    facebook: "https://facebook.com/yourusername",
    instagram: "https://instagram.com/yourusername",
    whatsapp: "https://wa.me/8801XXXXXXXXX",
    telegram: "https://t.me/yourusername",
    email: "mailto:you@example.com"
  }
};

document.getElementById("profileName").textContent = profile.name;
document.getElementById("profileRole").textContent = profile.role;
document.getElementById("profileBio").textContent = profile.bio;
document.getElementById("footerName").textContent = profile.name;
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("modalInfo").textContent = profile.information;

document.querySelectorAll("[data-link]").forEach(item => {
  const key = item.dataset.link;
  const url = profile.links[key];
  if (url) item.href = url;
  if (key === "email") item.addEventListener("click", event => {
    if (!url || url === "#") event.preventDefault();
  });
});

const modal = document.getElementById("infoModal");
document.getElementById("infoButton").addEventListener("click", () => {
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
});
function closeInfo() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}
document.getElementById("closeModal").addEventListener("click", closeInfo);
modal.addEventListener("click", event => {
  if (event.target === modal) closeInfo();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeInfo();
});
