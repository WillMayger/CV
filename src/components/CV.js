import React, { Component } from 'react';

import { personal } from '../personal.js'; //personal info like phone number.
import { skills } from '../skills.js'; //personal info like phone number.
import { text } from '../cvtext.js'; //personal info like phone number.

import { DetailRegion } from './regions/DetailRegion';
import { NavRegion } from './regions/NavRegion';
import { SkillsRegion } from './regions/SkillsRegion';
import { ContentRegion } from './regions/ContentRegion';
import { DownloadRegion } from './regions/DownloadRegion';

export class CV extends Component {
  constructor() {
    super();
    this.state = {
      text,
      skills,
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
        'Downloads'
      ],
      cDoc: '',
      doc: '',
      cPdf: '',
      pdf: ''
    }
  }

  regionToAnchorPoint(regionValue) {
    let region = regionValue;
    region = region.toString().split(' ').join('').toLowerCase();
    return region;
  }

  render() {
    return (
      <div className="wrap">
        <DetailRegion personal={this.state.personal} />
        <NavRegion
          convert={this.regionToAnchorPoint}
          regions={this.state.regions}
        />
        <SkillsRegion
          region={this.state.regions[0]}
          convert={this.regionToAnchorPoint}
          skills={this.state.skills}
        />
        <ContentRegion
          convert={this.regionToAnchorPoint}
          background={'#323333'}
          region={this.state.regions[1]}
          text={this.state.text[0]}
        />
        <ContentRegion
          convert={this.regionToAnchorPoint}
          background={'#fff'}
          region={this.state.regions[2]}
          text={this.state.text[1]}
        />
        <ContentRegion
          convert={this.regionToAnchorPoint}
          background={'#323333'}
          region={this.state.regions[3]}
          text={this.state.text[2]}
        />
        <DownloadRegion
          convert={this.regionToAnchorPoint}
          region={this.state.regions[4]}
          cDoc={this.state.cDoc}
          doc={this.state.doc}
          pdf={this.state.pdf}
          cPdf={this.state.cPdf}
        />
      </div>
    );
  }
}
