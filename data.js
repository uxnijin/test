// data.js - Centralized portfolio data for Nijin's website
const portfolioData = {
    bio: {
        name: "uxnijin",
        description: "Hey, I’m Nijin <br> <br>I design products that just work—stuff you’d want in your hands. This spot’s my world: my projects, my daydreams, everything I’m about. <br><br> I’m the one you call when you want something fresh and solid. What do you say—wanna chat?"
    },
    experience: {
        work: [
            { title: "UI UX Designer at Qmark Technolabs (Kochi)", duration: "Apr 2024 - Oct 2024" },
            { title: "UI UX Designer at RITS (Calicut)", duration: "Sep 2023 - Apr 2024" },
            { title: "Design Intern at Tinkerhub Organization (Kochi)", duration: "Sep 2023 - Jun 2024" }
        ],
        education: [
            { title: "BSc Computer Science", duration: "Mar 2021 - Mar 2024" },
            { title: "Higher Secondary", duration: "Mar 2019 - Mar 2021" }
        ]
    },
    about: {
        featuredImage: "assets/about.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis nulla quis enim vestibulum, sed cursus erat commodo. Praesent porta imperdiet tincidunt. Morbi lacinia, elit a fermentum molestie, mauris ante dictum leo, ac dignissim velit enim sed nisi. Nunc pretium dui sed malesuada posuere. Proin molestie in sapien vitae sodales.<br><br>Nulla et lacinia nisi. Vivamus ultrices a turpis et auctor. Duis mattis vulputate volutpat. Nullam interdum eu magna nec eleifend.",
        qmark: {
            title: "",
            content: ""
        }
    },
    works: [
        {
            id: "work0",
            title: "3D Editor interface (Vision OS Style)",
            image: "assets/workthumb-1.png",
            content: {
                featuredImage: "assets/workthumb-1.png",
                blocks: [
                    { text: "This project involved creating UI patterns tailored for AI engineers, focusing on usability and efficiency.", images: ["assets/work1-img1.jpg", "assets/work1-img2.jpg"] },
                    { text: "We iterated on these designs to ensure they met the needs of a fast-paced development team.", images: ["assets/work1-img3.jpg"] }
                ]
            }
        },
        {
            id: "work1",
            title: "Designing for AI Engineers: UI patterns you need to know",
            image: "assets/work1.jpg",
            content: {
                featuredImage: "assets/work1-featured.jpg",
                blocks: [
                    { text: "This project involved creating UI patterns tailored for AI engineers, focusing on usability and efficiency.", images: ["assets/work1-img1.jpg", "assets/work1-img2.jpg"] },
                    { text: "We iterated on these designs to ensure they met the needs of a fast-paced development team.", images: ["assets/work1-img3.jpg"] }
                ]
            }
        }
    ],
    contactEmail: "mailto:uxnijin@gmail.com",
    socialLinks: [
        { name: "Instagram", url: "https://www.instagram.com/uxnijin/", iconLight: "assets/instagram.svg", iconDark: "assets/instagram-dark.svg" },
        { name: "Medium", url: "https://medium.com/@nijinmuhammed", iconLight: "assets/medium.svg", iconDark: "assets/medium-dark.svg" },
        { name: "Threads", url: "https://www.threads.net/@uxnijin", iconLight: "assets/threads.svg", iconDark: "assets/threads-dark.svg" },
        { name: "X", url: "https://x.com/MuhammedNijin", iconLight: "assets/x.svg", iconDark: "assets/x-dark.svg" },
        { name: "Gumroad", url: "https://uxnijin.gumroad.com/?_gl=1*btxr5y*_ga*MTg0MzQyOTE4LjE3NDA5OTc4Mzc.*_ga_6LJN6D94N6*MTc0MTA5Nzg0Mi42LjEuMTc0MTA5NzkwNi4wLjAuMA..", iconLight: "assets/gumroad.svg", iconDark: "assets/gumroad-dark.svg" }
    ]
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = portfolioData;
}