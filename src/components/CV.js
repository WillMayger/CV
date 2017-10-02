import React, { Component } from 'react';
import smoothscroll from 'smoothscroll-polyfill';

import { personal } from '../personal.js'; //personal info like phone number.
import { skills } from '../skills.js'; //personal info like phone number.
import { text } from '../cvtext.js'; //personal info like phone number.

import { DetailRegion } from './regions/DetailRegion';
import { NavRegion } from './regions/NavRegion';
import { SkillsRegion } from './regions/SkillsRegion';
import { ContentRegion } from './regions/ContentRegion';
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
        'Development',
        'Career History',
        'Education',
        'References',
        'Downloads'
      ],
      references: [
        {
          name: 'Adam Jackson',
          email: 'adam.jackson@atos.co.uk',
          phone: '07928827503',
          position: 'Head of innovation & incubation at Atos'
        },
        {
          name: 'test',
          email: 'test',
          phone: 'test',
          position: 'test'
        },
        {
          name: 'test',
          email: 'test',
          phone: 'test',
          position: 'test'
        },
        {
          name: 'test',
          email: 'test',
          phone: 'test',
          position: 'test'
        },
        {
          name: 'test',
          email: 'test',
          phone: 'test',
          position: 'test'
        },
        {
          name: 'test',
          email: 'test',
          phone: 'test',
          position: 'test'
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
        <ReferenceRegion
          region={this.state.regions[6]}
          convert={this.regionToAnchorPoint}
          references={this.state.references}
        />
        <DownloadRegion
          convert={this.regionToAnchorPoint}
          region={this.state.regions[7]}
          downloads={this.state.downloads}
        />
        </div>
    );
  }
}
