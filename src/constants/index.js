import { TwoPassDoubleSide } from "three";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    ubase,
    airbnb,
    biz,
    KNU,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    todolist,
    threejs,

} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    // {
    //     title: "Backend Developer",
    //     icon: backend,
    // },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    // {
    //     name: "Redux Toolkit",
    //     icon: redux,
    // },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    // {
    //     name: "Three JS",
    //     icon: threejs,
    // },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    // {
    //     name: "docker",
    //     icon: docker,
    // },
];

const experiences = [
    {
        title: "Weverse Company- CSR Agent",
        company_name: "UBASE, Seoul, South Korea",
        icon: ubase,
        iconBg: "#E6DEDD",
        date: "Jun 2020 - Present",
        points: [
            "Operational monitoring and fault management.",
            "Weverse Company service management.",
            "Weverse Shop App support.",
            "Creation of the platform Chatbot and Chatbot Support.",
            "Educating and assisting the users while using the platform.",
            "Collecting daily data from the platform."
        ],
    },
    {
        title: "Airbnb - Trust and Safety Claims manager(SME)",
        company_name: "UBASE, Seoul, South Korea",
        icon: airbnb,
        iconBg: "#383E56",
        date: "Dec 2018 - Jun 2020",
        points: [
            "Investigating complex situations and potential fraud.",
            "Identify market trends and product vulnerabilities.",
            "Create data‐backed recommendations to respond to trends and to reduce vulnerabilities.",
            "Educating users on how to maintain security and safety while using the platform responsibly.",
            "SME / Couching and developing existing employees.",
            "Contacting users via phone and email when is necessary."

        ],
    },
    {
        title: "Android developer ( Part- Time)",
        company_name: "Biz Tech Company, Seoul , South Korea",
        icon: biz,
        iconBg: "#E6DEDD",
        date: "Apr 2018- May 2018",
        points: [
            "Collaboration with other team members. (Company projects)",
            "UI development for native mobile applications (Android)."

        ],
    },
    {
        title: "Assitant Personnel Officer",
        company_name: "Kangwon National University (International Department), Samcheok , South Korea",
        icon: KNU,
        iconBg: "#383E56",
        date: "Sep 2015 - Jan 2017",
        points: [
            "Computer Support",
            "Administrative Support staff in the International Office.",
            "Input and maintain computer and manual records, including student personal record system.",

        ],
    },

];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Yenduy proved me wrong.",
        name: "Katherine P.",
        designation: "CFO",
        company: "Intel Co",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
        testimonial:
            "The end result exceeded my expectations, and I have received numerous compliments from my customers on the website's design and usability.",
        name: "Josue Alderete",
        designation: "CEO",
        company: "Rent Now",
        image: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
        testimonial:
            "After Yenduy optimized our website, our traffic increased by 50%. We can't thank him enough!",
        name: "Lu Bai",
        designation: "CTO",
        company: "Caribbean Tourism",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [

    {
        name: "Coming soon",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, ipsam asperiores. Earum consequatur tempora illo, repellendus vero ab, libero autem assumenda animi error recusandae quaerat molestiae necessitatibus aspernatur minus quae?",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Coming soon",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, ipsam asperiores. Earum consequatur tempora illo, repellendus vero ab, libero autem assumenda animi error recusandae quaerat molestiae necessitatibus aspernatur minus quae?",

        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Coming soon",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, ipsam asperiores. Earum consequatur tempora illo, repellendus vero ab, libero autem assumenda animi error recusandae quaerat molestiae necessitatibus aspernatur minus quae?",

        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
    {
        name: "TODO-List",
        description:
            "A todo list web app in HTML, CSS and JavaScript with the ability to display, create, edit and delete tasks.",
        tags: [
            {
                name: "HTML5",
                color: "blue-text-gradient",
            },
            {
                name: "CSS6",
                color: "green-text-gradient",
            },
            {
                name: "JavaScript",
                color: "pink-text-gradient",
            },
        ],
        image: todolist,
        source_code_link: "https://yenkobe.github.io/TODO-List/",
    },
];

export { services, technologies, experiences, testimonials, projects };
