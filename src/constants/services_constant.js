export function servicesObject() {
    return [
        {
            id: 1,
            title: "DevOps",
            description: " Build multi-node Swarm clusters and deploying H/A containers.",
            innerInformation: {
                imgSrc: "",
                experties: 
                [
                "Edit web code on your machine while it's served up in a container",
                "Lock down your apps in private networks that only expose necessary ports",
                "Create a 3-node Swarm cluster in the cloud",
                "Use Virtual IP's for built-in load balancing in your cluster",
                "Optimize your Dockerfiles for faster building and tiny deploys",
                "Build/Publish your own custom images based on GitHub commits",
                "Create your own image registry",
                "Use Swarm Secrets to encrypt your environment configs, even on disk",
                "Deploy container updates in a rolling update always-up design",
                "Create the config eutopia of a single YAML file for local dev, CI testing, and prod cluster deploys"
                ]
            }
        },
        {
            id: 2,
            title: "Development",
            description: "Develop and deploy scalable and efficient apps/websites",
            innerInformation: {
                imgSrc: "",
                experties: 
                [
                    "Build scalable android apps using clean architecture.",
                    "Make real-time apps and web-services.",
                    "Build websites and web-apps on react.js and redux for state management",
                    "Build databases using mongodb",
                    "Build a backend server using node",
                    ]
            }
        },
        {
            id: 3,
            title: "A.I.",
            description: "Make a virtual Self Driving Car. Make an AI to beat games",
            innerInformation: {
                imgSrc: "",
                experties: 
                [
                    "Regression: Simple Linear Regression, Multiple Linear Regression, Polynomial Regression, SVR, Decision Tree Regression, Random Forest Regressio ",
                    "Clustering: K-Means, Hierarchical Clustering",
                    "Make a virtual Self Driving Car",
                    "Make an AI to beat games",
                    "Optimize AI for the maximum potential and scalability",
                    "Work with OpenAI Gym",
                    ]
            }
        }
    ]
}

export function masonryObject() {
    return [
        {
            id: 1,
            title: 'We Paint',
            src: '../images/wePaint.png',
            link: 'https://wepaint.herokuapp.com/',
            backgroundGrad: ['white', 'black'],
            category: "node.js, socket.io, react.js, redux, webkit, express",
            description: "WePaint is a canvas app where you could collaborate with your friends and build sketches. \n The app works in real-time so your friends can build on top of your content in real-time"
      },
        {
            id: 2,
            title: 'Marriager',
            src: '../images/marriager.png',
            link: 'https://www.marriager.com/',
            backgroundGrad: ['white', 'orange'],
            category: "jquery, vanilla javascript, php",
            description: "A marriage related aggregator that works on vanilla javascript and php. Feature-full and rich in diversity, marriager provides a great combination of utility and options for anyone looking for vendor. It also provides vendors with the opportunitys and tools to explore their most effective userbase."
      },
        {
            id: 3,
            title: 'Diamantina',
            src: '../images/diamantina.png',
            link: 'http://www.diamantina.in/',
            backgroundGrad: ['white', '#DAA520'],
            category: "wordpress",
            description: "Diamantina is a store that sells jewelry and other precious stons. This is a portfolio app"
      },
        {
            id: 4,
            title: 'DevDesk',
            src: '../images/devDesk.png',
            link: '#',
            backgroundGrad: ['white', '#14425b'],
            category: "node.js, socket.io, react.js, redux, webkit, express",
            description: "A showcase of all the latest apps; web and platform oriented, that I have build."
      },
        {
            id: 5,
            title: 'My Old Portfolio',
            src: '../images/oldPortfolio.png',
            link: 'http://theblackaristocrat.esy.es/',
            backgroundGrad: ['white', '#00bf70'],
            category: "pug.js(jade.js), grunt, sass",
            description: "My first full single page site. This includes a bunch of my early work building small web apps on codepen."
      },
        {
            id: 6,
            title: 'Find The Frog',
            src: '../images/findTheFrog.png',
            link: '#',
            backgroundGrad: ['white', 'purple'],
            category: "Android, retrofit, butterknife, MVP",
            description: "An app to get you out of the bed and explore your surrounding area. Find the frog is a Location Based Game that requires you to setup frog and capture them in a weeks time. Not doing so would lose you points. WORKING ON FINAL TOUCHES!!!"
      },
      ]
}