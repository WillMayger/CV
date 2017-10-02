import React, { Component } from 'react';
import smoothscroll from 'smoothscroll-polyfill';

import { personal } from '../personal.js'; //personal info like phone number.
import { skills } from '../skills.js'; //personal info like phone number.
import { text } from '../cvtext.js'; //personal info like phone number.

import { DetailRegion } from './regions/DetailRegion';
import { NavRegion } from './regions/NavRegion';
import { SkillsRegion } from './regions/SkillsRegion';
import { ContentRegion } from './regions/ContentRegion';
import { HistoryRegion } from './regions/HistoryRegion';
import { ReferenceRegion } from './regions/ReferenceRegion';
import { DownloadRegion } from './regions/DownloadRegion';

export class CV extends Component {
  constructor() {
    super();

    //setting up smooth scrolling
    window.__forceSmoothScrollPolyfill__ = true;
    smoothscroll.polyfill();

    this.state = {
      text,
      skills,
      tooSmall: {small: false, width: 1366},
      personal: [
        {type: 'name', value: personal.name},
        {type: 'phone', value: personal.phone},
        {type: 'email', value: personal.email},
      ],
      regions: [
        'Skills',
        'Profile',
        'Objective',
        'Education',
        'Career History',
        'References',
        'Downloads'
      ],
      references: [
        {
          name: 'Adam Jackson',
          email: 'adam@adamjackson.org.uk',
          phone: 'No Number',
          position: 'Director: Research, Innovation and Incubation at Canopy Cloud (Atos)'
        },
        {
          name: 'Romain Barissat',
          email: 'romain@barissat.com',
          phone: 'No Number',
          position: 'Technology and Innovation leader at Canopy Cloud (Atos)'
        },
        {
          name: 'Georgi Barzev',
          email: 'georgi.barzev@atos.net',
          phone: 'No Number',
          position: 'Canopy Cloud Engineering'
        },
        {
          name: 'Robbie Avni',
          email: 'robster113@gmail.com',
          phone: 'No Number',
          position: 'Trainee Firefighter at London Fire Brigade (Used to be at Canopy Cloud)'
        }
      ],
      downloads: [
        {
          img: 'docimg.png',
          name: 'cv.docx',
          link: '/docs/cv.docx'
        },
        {
          img: 'pdfimg.png',
          name: 'cv.pdf',
          link: '/docs/cv.pdf'
        }
      ],
      history: [
        {
          title: 'A Levels',
          time: {from: '03/09/2012', to: '01/07/2014'},
          text: 'In my a levels, my main subject was Photography where we also worked on graphics design. This was heavly based on complex Photoshop graphics and image editing. This is what originally led me to think about websites.',
          skills: [
            {
              name: 'Photoshop',
              icon: 'photoshop.jpg'
            }
          ]
        },
        {
          title: 'Self Taught',
          time: {from: '03/09/2012', to: '01/07/2014'},
          text: 'During my A Levels, at home, in my own time I looked to the internet to start learning about development using C# to build a fitness aplication. After I had completed this I moved onto learning Java / Android to create an android application for the fitness application I had made with C#.',
          skills: [
            {
              name: 'C#',
              icon: 'csharp.jpg'
            },
            {
              name: 'Java',
              icon: 'java.jpg'
            }
          ]
        },
        {
          title: 'Atos & QA Apprentiship',
          time: {from: '01/07/2014', to: '01/07/2015'},
          text: `I applied and successfully got an Apprentiship at QA and then a Apprentiship Job at Atos to go with the training. At the Apprenticeship we learnt about C#, HTML, CSS and ASP.NET which I passed and now have a City and guilds Software and Web Development Qualification. During my time at Atos, however, from day one I started learning about, and putting to use, JS, Node.Js, CSS, HTML, Jquery and Git. I made many internal applications that helped different departments handle certain things such as an application to help the finance department deal with invoices so there was no room for error, which meant losts of testing. During this time we used many different technologys because we chose the best for each individual task that needed to be done. (most listed above)`,
          skills: [
            {
            name: 'Node.js',
            icon: 'nodejs.png'
          },
          {
            name: 'HTML',
            icon: 'html5.jpg'
          },
          {
            name: 'CSS.js',
            icon: 'css3.jpg'
          },
          {
            name: 'Jquery',
            icon: 'jquery.jpg'
          },
          {
            name: 'Git',
            icon: 'git.jpg'
          },
          {
            name: 'AWS',
            icon: 'aws.jpg'
          },
          {
            name: 'Heroku',
            icon: 'heroku.jpg'
          },
          {
            name: 'Cloud Foundry',
            icon: 'cloudfoundry.jpg'
          },
          {
            name: 'Python',
            icon: 'python.jpg'
          },
          {
            name: 'Django',
            icon: 'django.jpg'
          },
          {
            name: 'Postgresql',
            icon: 'postgres.jpg'
          },
          {
            name: 'Flask',
            icon: 'flask.jpg'
          },
          {
            name: 'C#',
            icon: 'csharp.jpg'
          },
          {
            name: 'ASP.NET',
            icon: 'aspnet.jpg'
          },
          {
            name: 'MySQL',
            icon: 'mysql.jpg'
          },
          
        ]
      },
      {
        title: 'Atos',
        time: {from: '01/07/2015', to: '01/07/2016'},
        text: `This year in Atos we moved into a closed environment with a team of 1 Senior, 1 Mid, and 2 Juniors where we utilized Node.JS, Express.JS, and Cloud Foundry as the main tech stack to develop a GUI website for Cloudfoundry users. We were making use of the Agile methodology Extreme Programming with Pair Programming and TDD. This continued for another year before we finished and then I took the next step in my career.`,
        skills: [
          {
            name: 'Node.js',
            icon: 'nodejs.png'
          },
          {
            name: 'Express.js',
            icon: 'expressjs.png'
          },
          {
            name: 'MongoDB',
            icon: 'mongo.jpg'
          },
          {
            name: 'React.js',
            icon: 'reactjs.png'
          },
          {
            name: 'HTML',
            icon: 'html5.jpg'
          },
          {
            name: 'CSS.js',
            icon: 'css3.jpg'
          },
          {
            name: 'Less',
            icon: 'less.jpg'
          },
          {
            name: 'Jquery',
            icon: 'jquery.jpg'
          },
          {
            name: 'Git',
            icon: 'git.jpg'
          },
          {
            name: 'Cloud Foundry',
            icon: 'cloudfoundry.jpg'
          },
          {
            name: 'AWS',
            icon: 'aws.jpg'
          },
          {
            name: 'Chai',
            icon: 'chai.jpg'
          },
          {
            name: 'Bootstrap',
            icon: 'bootstrap.jpg'
          },
        ]
      },
      {
        title: 'Gforces',
        time: {from: '01/08/2016', to: 'Present Date'},
        text: ` I Joined Gforces Web Management where everything is mostly focused on pixel perfect responsive websites that match designs to the pixel. We make tools in Node.js with various frameworks such as mithril.js to help us speed up the process of making and deploying websites. A couple of examples of sites I have done here are: [ http://www.gcmotors.co.uk/]( http://www.gcmotors.co.uk/),  [http://www.hwm.co.uk/](http://www.hwm.co.uk/).`,
        skills: [
          {
            name: 'Node.js',
            icon: 'nodejs.png'
          },
          {
            name: 'ES6',
            icon: 'es6.jpg'
          },
          {
            name: 'HTML',
            icon: 'html5.jpg'
          },
          {
            name: 'CSS.js',
            icon: 'css3.jpg'
          },
          {
            name: 'Less',
            icon: 'less.jpg'
          },
          {
            name: 'Jquery',
            icon: 'jquery.jpg'
          },
          {
            name: 'AWS',
            icon: 'aws.jpg'
          },
          {
            name: 'Bootstrap',
            icon: 'bootstrap.jpg'
          },
          {
            name: 'Photoshop',
            icon: 'photoshop.jpg'
          }
        ]
      },
      {
        title: 'Personal & Private Projects',
        time: {from: '01/07/2014', to: 'Present Date'},
        text: `I started making personal, and private projects / websites for me and others about half way through my apprentiship when I felt that I had really started to get a grasp of all the basics. Since then I have been implementing more and more complex systems as well as technologys to keep learning. Some of which are listed above with the icons!  
        My latest one would be this very C.V, which has been created in Node.Js with React.JS. a few others:  
        
I am also working on a Budgeting App using Express.js, MongoDB, Oauth2, and Node.js for the Rest API. React.Js and Node.Js for the View Layer.
        
- [theweblancer.co.uk](http://theweblancer.co.uk) (Old and needs updating)
- [maygerfitness.co.uk](http://maygerfitness.co.uk)
        
        
        `,
        skills: [
          {
            name: 'Node.js',
            icon: 'nodejs.png'
          },
          {
            name: 'React.js',
            icon: 'reactjs.png'
          },
          {
            name: 'Express.js',
            icon: 'expressjs.png'
          },
          {
            name: 'Git',
            icon: 'git.jpg'
          },
          {
            name: 'CSS',
            icon: 'css3.jpg'
          },
          {
            name: 'HTML',
            icon: 'html5.jpg'
          },
          {
            name: 'Jquery',
            icon: 'jquery.jpg'
          },
          {
            name: 'Less',
            icon: 'less.jpg'
          },
          {
            name: 'scss',
            icon: 'sass.svg.jpg'
          },
          {
            name: 'ES6',
            icon: 'es6.jpg'
          },
          {
            name: 'Angular',
            icon: 'angular.svg.jpg'
          },
          {
            name: 'MongoDB',
            icon: 'mongo.jpg'
          },
          {
            name: 'AWS',
            icon: 'aws.jpg'
          },
          {
            name: 'Heroku',
            icon: 'heroku.jpg'
          },
          {
            name: 'Postgresql',
            icon: 'postgres.jpg'
          },
          {
            name: 'Python',
            icon: 'python.jpg'
          },
          {
            name: 'Django',
            icon: 'django.jpg'
          },
          {
            name: 'Flask',
            icon: 'flask.jpg'
          },
          {
            name: 'Photoshop',
            icon: 'photoshop.jpg'
          },
          {
            name: 'Bootstrap',
            icon: 'bootstrap.jpg'
          },
          {
            name: 'C#',
            icon: 'csharp.jpg'
          }
        ]
      }
    ]
  }

    this.windowResize = this.windowResize.bind(this);
  }

  regionToAnchorPoint(regionValue) {
    let region = regionValue;
    region = region.toString().split(' ').join('').toLowerCase();
    return region;
  }

  windowResize(e) {
    const tooSmall = {
      small: false,
      width: parseInt(document.getElementsByTagName('body')[0].clientWidth, 10)
     };
    if( tooSmall.width < 1366) {
      tooSmall.small = true;
    }
    this.setState({tooSmall});
  }

  componentDidMount() {
    this.windowResize();
    window.addEventListener("resize", this.windowResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.windowResize);
  }


  render() {
    const content = this.state.text.map((item, index) => {
      if (index === 0) return null;
      const color = index % 2 ? '#323333' : '#fff'; //if index is odd
      return (
        <ContentRegion
          key={index + color}
          convert={this.regionToAnchorPoint}
          background={color}
          region={this.state.regions[index]}
          text={this.state.text[index]}
        />
      );
    });

    if (this.state.tooSmall.small) {
      return (
        <div className="too-small">
        <span>This page is designed to be like a document and is therefore not responsive.
         Please use a device with a screen size of 1366px or more (most laptops and desktops).
         Thank you for your understanding.<p></p>
         Your current screen width is: {this.state.tooSmall.width}px</span>
        </div>
      );
    }

    return (
      <div className="wrap">
        <DetailRegion personal={this.state.personal} />
        <NavRegion
          convert={this.regionToAnchorPoint}
          regions={this.state.regions}
        />
        <SkillsRegion
          region={this.state.regions[0]}
          text={this.state.text[0]}
          convert={this.regionToAnchorPoint}
          skills={this.state.skills}
        />
        {content}
        <HistoryRegion
          region={this.state.regions[4]}
          convert={this.regionToAnchorPoint}
          history={this.state.history}
        />
        <ReferenceRegion
          region={this.state.regions[5]}
          convert={this.regionToAnchorPoint}
          references={this.state.references}
        />
        <DownloadRegion
          convert={this.regionToAnchorPoint}
          region={this.state.regions[6]}
          downloads={this.state.downloads}
        />
        </div>
    );
  }
}
