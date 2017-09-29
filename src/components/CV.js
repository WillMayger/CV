import React, { Component } from 'react';
import { personal } from '../personal.js'; //personal info like phone number.
import { skills as importedSkills } from '../skills.js'; //personal info like phone number.

import { DetailRegion } from './regions/DetailRegion';
import { NavRegion } from './regions/NavRegion';
import { SkillsRegion } from './regions/SkillsRegion';

export class CV extends Component {
  constructor() {
    super();
    this.state = {
      personal: [
        {type: 'name', value: personal.name},
        {type: 'phone', value: personal.phone},
        {type: 'email', value: personal.email},
      ],
      regions: ['Skills', 'Summary', '', '...', 'Downloads'],
      skills: importedSkills
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
      </div>
    );
  }
}
