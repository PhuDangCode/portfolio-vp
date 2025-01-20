import chatbot from "../assets/projects/chatbot.jpg";
import guitar from "../assets/projects/guitar.jpg";
import football from "../assets/projects/football.jpg";
import cook from "../assets/projects/cook.jpg";
import code from "../assets/projects/code.jpg";
import library from "../assets/projects/library.jpg"
import body from "../assets/projects/body.jpg"
import dns from "../assets/projects/dns.jpg"
import bmi from "../assets/projects/bmi.jpg"
import hospital from "../assets/projects/hospital.jpg"
import internet from "../assets/projects/internet.jpg"
import steganography from "../assets/projects/steganography.jpg"
import bill from "../assets/projects/bill.jpg"
import bank from "../assets/projects/bank.jpg"
import chat from "../assets/projects/chat.jpg"
import vfc from "../assets/projects/logo.png"
import attendance from "../assets/projects/attendance.png"
import currency from "../assets/projects/currency.jpg"
import wordle from "../assets/projects/wordle.jpg"



export const HERO_CONTENT = `I am an enthusiastic full stack developer with a talent for building resilient and scalable web applications. I have sharpened my abilities in front-end frameworks like React and Next.js, along with back-end technologies including Node.js, MySQL, PostgreSQL, MongoDB, Python, and Java. My aim is to use my expertise to develop cutting-edge solutions that fuel business growth and provide outstanding user experiences.`;

export const ABOUT_TEXT = `I have a strong background in programming with expertise in technologies such as React.js, Python, Kotlin, Java, Node.js, HTML, CSS, SQL, NoSQL, MongoDB, Firebase, Google Cloud, API development, and Docker. My skills in UX/UI design enable me to create user-friendly and visually appealing applications, combining functionality with aesthetics. Beyond coding, I am passionate about football, where I play as a central midfielder, and music, as I enjoy playing the guitar and exploring melodies. I also find relaxation in cooking, particularly baking bread and experimenting with new recipes, inspired by Gordon Ramsay’s culinary expertise. While these hobbies bring me joy, my true passion lies in coding, which drives me to continuously learn, innovate, and push my technical and creative boundaries.`;

export const EXPERIENCES = [{
        image: guitar,
        role: "Guitar",
        company: "Making Music",
        description: `I have a passion for music and enjoy playing the guitar. I can sing and play many songs, which is also how I entertain myself in my free time. Making music is another hobby of mine. Although I'm not yet proficient, it sometimes helps me relax when I come up with melodies and lyrics for my songs.`,
    },
    {
        image: football,
        role: "Soccer",
        company: "Futsal",
        description: `I've been playing football since I was 7 years old and still play to this day. I can play futsal, 7-a-side, and 11-a-side football. I really enjoy taking a break with my friends for a game of football every afternoon. My usual position is central midfielder, similar to my idol, Mesut Özil. Playing football has helped me develop my ability to anticipate, focus, and handle situations, which has greatly supported me in my work.`,
    },
    {
        image: cook,
        role: "Cooking",
        company: "Baking",
        description: `Cooking is also a significant part of my life. I always enjoy trying out new recipes, even though my cooking skills aren't the best. In the culinary world, I greatly admire Gordon Ramsay. I also have a particular fondness for bread, especially donuts, and I can make various types of bread. I feel that cooking helps me practice patience, precision, and other valuable life skills.`,
    },
    {
        image: code,
        role: "Coding",
        company: "Design",
        description: `Of course, I really love coding and have a deep passion for it. The feeling of completing a project is an incredibly exciting experience for me. I constantly explore and experiment with new things, even though sometimes they don't succeed or go smoothly. However, those experiences are part of my life. I also have a keen interest in design and am learning a lot in this area to improve my skill`,
    },
];

export const PROJECTS = [{
        title: "Mythos Library",
        image: library,
        link: "https://github.com/PhuDangCode/PhuCodeLibrary",
        description: "The online library management system project aims to streamline library operations, improve the user experience, and enhance access to library resources. It automates tasks such as book cataloging, tracking, and borrowing while offering user-friendly interfaces for staff and patrons. The system increases operational efficiency, improves accessibility, and provides a centralized platform for managing library resources.",
        technologies: ["Firebase", "CSS", "React", "Node.js", "MongoDB", "Express"],
    },
    {
        title: "Chat App",
        image: chat,
        link: "https://github.com/PhuDangCode/PhuCodeChat",
        description: "Building chat app using react js and firestore, which allow users can login to web and chat together.",
        technologies: ["React", "Firebase"],
    },
    {
        title: "DNS",
        image: dns,
        link: "https://github.com/PhuDangCode/PhuCodeDns",
        description: "A simple dns tool to retrieve the domain name of all website in the world",
        technologies: ["Java"],
    },
    {
        title: "Body Indexes Monitoring",
        image: body,
        link: "https://github.com/PhuDangCode/PhuCodeBodyIndexesMonitoring",
        description: "Using python and sql, make a smartwatch simulate the body indexes by random number and send to sql then login to web to see the number.",
        technologies: ["HTML", "CSS", "Python", "Postgres"],
    },
    {
        title: "Bank Management System",
        image: bank,
        link: "https://github.com/PhuDangCode/PhuCodeBank",
        description: "Using Workbench for Sql and java, to create bank managment system to managae user which can deposit withdrawal in bank.",
        technologies: ["Java", "Oop", "Workbench"],
    },
    {
        title: "Hospital Managment System",
        image: hospital,
        link: "https://github.com/PhuDangCode/PhuCodeHospital",
        description: "Based on sql and python tkinter, make an patient information managment system.",
        technologies: ["Python", "Workbench"],
    },
    {
        title: "Internet Speed Detection",
        image: internet,
        link: "https://github.com/PhuDangCode/PhuCodeInternet",
        description: "Using python with speedtest libary and apply algorithms to calculate the speed of internet.",
        technologies: ["Python"],
    },
    {
        title: "Bill Managment System",
        image: bill,
        link: "https://github.com/PhuDangCode/PhuCodeBill",
        description: "building bill managament system which can manage the sum of profit(coffee,restaurant,..)",
        technologies: ["Python", "Workbench"],
    },
    {
        title: "Bmi Calculator",
        image: bmi,
        link: "https://github.com/PhuDangCode/PhuCodeBMCalculator",
        description: "Mini project with python to calculate healt number which can show the healt situation of client",
        technologies: ["Python"],
    },
    {
        title: "Steganography",
        image: steganography,
        link: "https://github.com/PhuDangCode/PhuCodeSteganography",
        description: "Making an applicaiton to hidden message to image, using 3 algorhtm are least sinificant bit, pixel value differencing, matrix embedded.",
        technologies: ["Python"],
    },
    {
        title: "VFC Website",
        image: vfc,
        link: "https://github.com/PhuDangCode/PhuCodeVFC",
        description: "Using reactjs, tailwind, postgres to build a website for football club of University. The website has the information of members in coreteam, the number of matches, also the news and video about the club",
        technologies: ["React", "Tailwind", "Postgres"],
    },
    {
        title: "Chatbot",
        image: chatbot,
        link: "https://github.com/PhuDangCode/PhuCodeChatbot",
        description: "Building chatbot using python and flask, which allow users can login to web and chat together.",
        technologies: ["Python", "Chainlit", "Google OAuth", "OpenAI"],
    },
    {
        title: "Smart Attendance System",
        image: attendance,
        link: "https://github.com/DoDucToan2811/attendance-system",
        description: "Developed a smart attendance system incorporating face detection, recognition, and liveness detection. Attendance updates are automatically recorded in Google Sheets using Python, Raspberry Pi, and Google Cloud APIs (Google Sheets API, Google Drive API).",
        technologies: ["Python", "Raspberry Pi", "Google Cloud"],
    },
    {
        title: "Currency Converter",
        image: currency,
        link: "https://github.com/PhuDangCode/PhuCodeTymeX",
        description: "Built a feature-rich currency converter application that allows users to convert currencies, view rate trends between two selected currencies, and see currency rankings based on USD. Developed using the ExchangeRate API with Kotlin and Java.",
        technologies: ["Kotlin", "Java"],
    },
    {
        title: "Wordle Game",
        image: wordle,
        link: "https://github.com/PhuDangCode/PuzzleGame",
        description: "Created an interactive Wordle game using Python for backend logic and a modern user interface with HTML, Tailwind CSS, and API integration for dynamic gameplay.",
        technologies: ["Python", "HTML", "API"],
    },


];

export const CONTACT = {
    address: "Samsora Riverside Appartment , B21.09 ,Binh Thắng 2 ward , Dĩ An  City , Binh Duong Province ",
    phoneNo: "+84 905 657 088 ",
    email: "10421047@student.vgu.edu.vn.com",
};
