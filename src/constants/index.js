import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
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


export const HERO_CONTENT = `I am an enthusiastic full stack developer with a talent for building resilient and scalable web applications. I have sharpened my abilities in front-end frameworks like React and Next.js, along with back-end technologies including Node.js, MySQL, PostgreSQL, MongoDB, Python, and Java. My aim is to use my expertise to develop cutting-edge solutions that fuel business growth and provide outstanding user experiences.`;

export const ABOUT_TEXT = `I have a strong background in programming, specializing in React.js, Python, and SQL, which enables me to create innovative and efficient solutions. My skills extend to graphic design with a focus on UX/UI, allowing me to build user-friendly and visually appealing applications. Beyond coding, I have a deep passion for football, where I play as a central midfielder. Music is another creative outlet for me, as I enjoy playing the guitar and experimenting with different melodies. Cooking, particularly baking bread, is a hobby that I find both relaxing and rewarding, as I love trying out new recipes. I admire Gordon Ramsay for his culinary expertise and aspire to develop my skills further. While these interests are fulfilling, coding remains my true passion, driving me to continuously learn and push the boundaries of my creativity and technical abilities..`;

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
        role: "CooKing",
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
        description: "The online library management system project aims to streamline library operations, improve the user experience, and enhance access to library resources. It automates tasks such as book cataloging, tracking, and borrowing while offering user-friendly interfaces for staff and patrons. The system increases operational efficiency, improves accessibility, and provides a centralized platform for managing library resources.",
        technologies: ["Firebasse", "CSS", "React", "Node.js", "MongoDB","Express"],
    },
    {
        title: "Chat App",
        image: chat,
        description: "Building chat app using react js and firestore, which allow users can login to web and chat together.",
        technologies: ["React", "antd","Firebase"],
    },
    {
        title: "DNS",
        image: dns,
        description: "A simple dns tool to retrieve the domain name of all website in the world",
        technologies: ["Java","Google port"],
    },
    {
        title: "Body Indexes Monitoring",
        image: body,
        description: "Using python and sql, make a smartwatch simulate the body indexes by random number and send to sql then login to web to see the number.",
        technologies: ["HTML", "CSS", "Python","Postgres"],
    },
    {
        title: "Bank Management System",
        image: bank,
        description: "Using Workbench for Sql and java, to create bank managment system to managae user which can deposit withdrawal in bank.",
        technologies: ["Java", "Oop", "Workbench"],
    },
    {
        title: "Hospital Managment System",
        image: hospital,
        description: "Based on sql and python tkinter, make an patient information managment system.",
        technologies: ["Python", "Tkinter","Workbench"],
    },
    {
        title: "Internet Speed Detection",
        image: internet,
        description: "Using python with speedtest libary and apply algorithms to calculate the speed of internet.",
        technologies: ["Python"],
    },
    {
        title: "Bill Managment System",
        image: bill,
        description: "building bill managament system which can manage the sum of profit(coffee,restaurant,..)",
        technologies: ["Python","Workbench"],
    },
    {
        title: "Bmi Calculator",
        image: bmi,
        description: "Mini project with python to calculate healt number which can show the healt situation of client",
        technologies: ["Python"],
    },
    {
        title: "Steganography",
        image: steganography,
        description: "Making an applicaiton to hidden message to image, using 3 algorhtm are least sinificant bit, pixel value differencing, matrix embedded.",
        technologies: ["Python","Least Significant Bit","Pixel Value Differencing","Matrix Embbeded"],
    },
];

export const CONTACT = {
    address: "64 Le Thanh Nghi, Quy Nhon, Binh Dinh, Viet Nam ",
    phoneNo: "+84 905 657 088 ",
    email: "10421047@student.vgu.edu.vn.com",
};
