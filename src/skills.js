const SKILLS = [
    {
        "title": "Abstract Data Structures",
        "topics": [
            { "name": "Linked Lists", "level": ["*", "*", "*"] },
            { "name": "Stacks", "level": ["*", "*", "*"] },
            { "name": "Queues", "level": ["*", "*", "*"] },
            { "name": "Graphs", "level": ["*"] },
            { "name": "Trees", "level": ["*"] }
        ]
    },
    {
        "title": "Algorithms",
        "topics": [
            { "name": "Bubble Sort", "level": ["*", "*"] },
            { "name": "Merge Sort", "level": ["*", "*"] },
            { "name": "Insertion Sort", "level": ["*", "*"] },
            { "name": "Dijkstra's", "level": ["*"] },
            { "name": "A*", "level": ["*"] },
            { "name": "BigO", "level": ["*", "*"] }

        ]
    },
    {
        "title": "Soft Skills",
        "topics": [
            { "name": "Presentations", "level": ["*", "*", "*"] },
            { "name": "Public Speaking", "level": ["*", "*", "*"] },
            { "name": "Communication", "level": ["*", "*", "*"] },
            { "name": "Teamwork", "level": ["*", "*", "*"] }
        ]
    },
    {
        "title": "Web Development",
        "topics": [
            { "name": "HTML", "level": ["*", "*", "*"] },
            { "name": "CSS", "level": ["*", "*", "*"] },
            { "name": "JavaScript", "level": ["*"] },
            { "name": "jQuery", "level": ["*"] },
            { "name": "Bootstrap", "level": ["*", "*", "*"] },
            { "name": "Accessibility Standards", "level": ["*", "*"] },
            { "name": "Vercel", "level": ["*", "*"] }
        ]
    },
    {
        "title": "Programming",
        "topics": [
            { "name": "Python", "level": ["*", "*", "*"] },
            { "name": "Vanilla JS", "level": ["*", "*", "*"] },
            { "name": "Object Oriented", "level": ["*"] },
            { "name": "Procedural", "level": ["*", "*"] }
        ]
    },
    {
        "title": "Version Control",
        "topics": [
            { "name": "Git", "level": ["*"] },
            { "name": "Github", "level": ["*"] }
        ]
    },
    {
        "title": "Teaching & Curriculum",
        "topics": [
            { "name": "Project Based", "level": ["*", "*", "*"] },
            { "name": "Inquiry Based", "level": ["*", "*", "*"] },
            { "name": "Flipped Classroom", "level": ["*", "*", "*"] },
            { "name": "Lecturing", "level": ["*", "*", "*"] },
            { "name": "Direct Instruction", "level": ["*", "*", "*"] },
            { "name": "Cooperative Learning", "level": ["*", "*", "*"] },
            { "name": "Assessment", "level": ["*", "*", "*"] },
            { "name": "E-Learning", "level": ["*", "*", "*"] },
            { "name": "Curriculum Development", "level": ["*", "*", "*"] }
        ]
    },
    {
        "title": "Situational Leadership",
        "topics": [
            { "name": "Coaching", "level": ["*", "*", "*"] },
            { "name": "Transformational", "level": ["*", "*", "*"] },
            { "name": "Autocratic", "level": ["*", "*", "*"] },
            { "name": "Democratic", "level": ["*", "*", "*"] },
            { "name": "Laissez-faire", "level": ["*", "*", "*"] },
            { "name": "Distributed", "level": ["*", "*", "*"] }
        ]
    },
    {
        "title": "Web Design",
        "topics": [
            { "name": "Design Principles", "level": ["*"] },
            { "name": "UX / UI Design", "level": ["*", "*"] },
            { "name": "Photoshop", "level": ["*", "*"] },
            { "name": "Figma", "level": ["*"] },
            { "name": "Balsamic", "level": ["*", "*"] }
        ]
    },
    {
        "title": "Databases",
        "topics": [
            { "name": "Relational DB Design", "level": ["*", "*"] },
            { "name": "MySQL", "level": ["*"] },
            { "name": "SQL", "level": ["*", "*"] },
            { "name": "NoSQL Databases", "level": ["*"] },
            { "name": "Firebase", "level": ["*"] }
        ]
    },
    {
        "title": "Backend",
        "topics": [
            { "name": "NodeJS", "level": ["*"] },
            { "name": "Express", "level": ["*"] }
        ]
    },
    {
        "title": "Operating Systems",
        "topics": [
            { "name": "Mac OS", "level": ["*", "*", "*"] },
            { "name": "Windows", "level": ["*", "*", "*"] },
            { "name": "Linux", "level": ["*", "*"] },
            { "name": "Command Line", "level": ["*", "*"] },
            { "name": "Terminal", "level": ["*", "*"] }
        ]
    },
    {
        "title": "Video", "topics": 
        [
            { "name": "Video Editing", "level": ["*", "*"] },
            { "name": "YouTube Videos", "level": ["*"] }
        ]
    },
    {
        "title": "Photography",
        "topics": [
            { "name": "Photoshop", "level": ["*", "*"] },
            { "name": "Lightroom", "level": ["*", "*"] },
            { "name": "Photography DSLR", "level": ["*", "*"] },
            { "name": "Instagram", "level": ["*", "*", "*"] }
        ]
    },
    {
        "title": "Other Interests",
        "topics": [
            { "name": "Running", "level": ["*", "*", "*"] },
            { "name": "Marathon Running", "level": ["*", "*", "*"] },
            { "name": "Football", "level": ["*", "*", "*"] },
            { "name": "Golf", "level": ["*", "*"] },
            { "name": "Travelling", "level": ["*", "*", "*"] },
            { "name": "Walking", "level": ["*", "*", "*"] }
        ]
    }
]

//     {
//         "title": "Algorithms",
//         "topics": [
//             { "name": "Bubble Sort", "level": 3 },
//             { "name": "Merge Sort", "level": 3 },
//             { "name": "Insertion Sort", "level": 3 },
//             { "name": "Dijkstra's", "level": 1 },
//             { "name": "A*", "level": 1 }
//         ]
//     },
//     {
//         "title": "Abstract Data Structures",
//         "topics": [
//             { "name": "Linked Lists", "level": 3 },
//             { "name": "Stacks", "level": 3 },
//             { "name": "Queues", "level": 3 },
//             { "name": "Graphs", "level": 1 },
//             { "name": "Trees", "level": 1 }
//         ]
//     },
//     {
//         "title": "Soft topics",
//         "topics": [
//             { "name": "Presentations", "level": 3 },
//             { "name": "Public Speaking", "level": 3 },
//             { "name": "Communication", "level": 3 },
//             { "name": "Teamwork", "level": 3 }
//         ]
//     },
//     {
//         "title": "Web Development",
//         "topics": [
//             { "name": "HTML", "level": 3 },
//             { "name": "CSS", "level": 3 },
//             { "name": "JavaScript", "level": 1 },
//             { "name": "jQuery", "level": 1 },
//             { "name": "Bootstrap", "level": 3 },
//             { "name": "Accessibility Standards", "level": 2 },
//             { "name": "Vercel", "level": 2 }
//         ]
//     },
//     {
//         "title": "Programming",
//         "topics": [
//             { "name": "Python", "level": 3 },
//             { "name": "Vanilla JS", "level": 3 },
//             { "name": "Object Oriented", "level": 1 },
//             { "name": "Procedural", "level": 2 }
//         ]
//     },
//     {
//         "title": "Version Control",
//         "topics": [
//             { "name": "Git", "level": 1 },
//             { "name": "Github", "level": 1 }
//         ]
//     },
//     {
//         "title": "Teaching and Curriculum",
//         "topics": [
//             { "name": "Project Based", "level": 3 },
//             { "name": "Inquiry Based", "level": 3 },
//             { "name": "Flipped Classroom", "level": 3 },
//             { "name": "Lecturing", "level": 3 },
//             { "name": "Direct Instruction", "level": 3 },
//             { "name": "Cooperative Learning", "level": 3 },
//             { "name": "Assessment", "level": 3 },
//             { "name": "E-Learning", "level": 3 },
//             { "name": "Curriculum Development", "level": 3 }
//         ]
//     },
//     {
//         "title": "Situational Leadership",
//         "topics": [
//             { "name": "Coaching", "level": 3 },
//             { "name": "Transformational", "level": 3 },
//             { "name": "Autocratic", "level": 3 },
//             { "name": "Democratic", "level": 3 },
//             { "name": "Laissez-faire", "level": 3 }, 
//             { "name": "Distributed", "level": 3 }
//         ]
//     },
//     {
//         "title": "Web Design",
//         "topics": [
//             { "name": "Design Principles", "level": 1 },
//             { "name": "UX / UI Design", "level": 2 },
//             { "name": "Photoshop", "level": 2 },
//             { "name": "Figma", "level": 1 },
//             { "name": "Balsamic", "level": 2 }
//         ]
//     },
//     {
//         "title": "Databases",
//         "topics": [
//             { "name": "Relational DB Design", "level": 2 },
//             { "name": "MySQL", "level": 1 },
//             { "name": "PostGres", "level": 1 },
//             { "name": "SQL", "level": 2 },
//             { "name": "NoSQL Databases", "level": 1 },
//             { "name": "Firebase", "level": 1 }
//         ]
//     },
//     {
//         "title": "Backend",
//         "topics": [
//             { "name": "NodeJS", "level": 0 },
//             { "name": "Express", "level": 0 }
//         ]
//     },
//     {
//         "title": "Operating Systems",
//         "topics": [
//             { "name": "Mac OS", "level": 3 },
//             { "name": "Windows", "level": 3 },
//             { "name": "Linux", "level": 2 },
//             { "name": "Command Line", "level": 2 },
//             { "name": "Terminal", "level": 2 }
//         ]
//     },
//     {
//         "title": "Video",
//         "topics": [
//             { "name": "Video Editing", "level": 2 },
//             { "name": "Final Cut Pro", "level": 0 },
//             { "name": "Cam Studio", "level": 3 },
//             { "name": "YouTube Videos", "level": 2 }
//         ]
//     },
//     {
//         "title": "Photography",
//         "topics": [
//             { "name": "Photoshop", "level": 2 },
//             { "name": "Lightroom", "level": 2 },
//             { "name": "Photography DSLR", "level": 2 },
//             { "name": "Instagram", "level": 3 }
//         ]
//     },
//     {
//         "title": "Other Interests",
//         "topics": [
//             { "name": "Running", "level": 3 },
//             { "name": "Marathon Running", "level": 3 },
//             { "name": "Football", "level": 3 },
//             { "name": "Golf", "level": 2 },
//             { "name": "Travelling", "level": 3 },
//             { "name": "Walking", "level": 3 }
//         ]
//     }
// ]

module.exports = SKILLS;


/*

    Algorithms
Bubble Sort (++)
Merge sort (++)
Insertion sort (++)
Dijkstras
A*

Abstract Data Structures
Linked Lists (+++)
Stacks (+++)
Queues (+++)
Graphs (+)
Trees (+)

Soft topics
Presentations (+++)
Public Speaking (+++)
Communication (+++)
Teamwork (+++)

Web Development
HTML (+++)
CSS (+++)
JavaScript (+)
jQuery (+)
Bootstrap (+++)
Accessibility Standards (++)
Vercel(++)

Programming
Python (++)
Vanilla JS (++)
Object Oriented (+)
Procedural (++)

Version Control
Git (+)
Github(+)

Teaching and Curriculum
Project Based (+++)
Inquiry Based (+++)
Flipped Classroom (+++)
Lecturing (+++)
Direct Instruction (+++)
Cooperative Learning (+++)
Assessment (+++)
E-Learning (+++)
Curriculum Development (+++)


Situational Leadership
Coaching (+++)
Transformational (+++)
Autocratic (+++)
Democratic (+++)
Laissez-faire (+++)
Distributed (+++)

Web Design
Design Principles (+)
UX / UI Design (++)
Photoshop (++)
Figma (+)
Balsamic (++)

Databases
Relational DB Design (++)
MySQL (+)
PostGres (+)
SQL (++)
NoSQL Databases (+)
Firebase (+)

Backend
NodeJS
Express

Operating Systems
Mac OS (+++)
Windows (+++)
Linux (++)
Command Line (++)
Terminal (++)

Video
Video Editing(++)
Final Cut Pro
Cam Studio (+++)
YouTube Videos (++)

Photography
Photoshop(++)
Lightroom (++)
Photography DSLR (++)
Instagram (+++)


Other Interests
Running (+++)
Marathon Running (+++)
Football (+++)
Golf (++)
Travelling (+++)
Walking (+++)

*/