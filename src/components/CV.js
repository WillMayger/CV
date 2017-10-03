import React, { Component } from 'react';
import smoothscroll from 'smoothscroll-polyfill';

//import data
import { personal } from '../plugindata/personal.js'; //personal info like phone number.
import { skills } from '../plugindata/skills.js'; //skills icons & names
import { text } from '../plugindata/text.js'; //content area text
import { history } from '../plugindata/history.js'; //content area text
import { references } from '../plugindata/references.js'; //content area text
import { downloads } from '../plugindata/downloads.js'; //content area text

//import components
import { DetailRegion } from './regions/DetailRegion';
import { NavRegion } from './regions/NavRegion';
import { SkillsRegion } from './regions/SkillsRegion';
import { ContentRegion } from './regions/ContentRegion';
import { HistoryRegion } from './regions/HistoryRegion';
import { ReferenceRegion } from './regions/ReferenceRegion';
import { DownloadRegion } from './regions/DownloadRegion';
import { Responsive } from './Responsive';

export class CV extends Component {
  constructor() {
    super();

    const contentRegions = () => {
      return text.map((item, index) => {
        return item.region;
      });
    };

    const allRegions = (array) => {
      let regions = []
      if (array != undefined) regions = array;
      return [
        'Skills',
        ...regions,
        'Career History',
        'References',
        'Downloads'
      ];
    };

    this.state = {
      responsiveWidth: 1366,
      regions: allRegions(),
      nav: allRegions(contentRegions())
  };

    this.windowResize = this.windowResize.bind(this);
  }

  componentDidMount() {
    this.windowResize();
    window.addEventListener("resize", this.windowResize);
    window.__forceSmoothScrollPolyfill__ = true;
    smoothscroll.polyfill();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.windowResize);
  }

  windowResize(e) {
    const responsiveWidth = parseInt(document.getElementsByTagName('body')[0].clientWidth, 10);
    this.setState({responsiveWidth});
  }

  regionToAnchorPoint(regionValue) {
    let region = regionValue;
    region = region.toString().split(' ').join('').toLowerCase();
    return region;
  }

  render() {
    if (this.state.responsiveWidth <= 1366) {
      return (
        <Responsive width={this.state.responsiveWidth} />
      );
    }

    const content = text.map((item, index) => {
      const color = index % 2 ? '#323333' : '#fff'; //if index is odd
      return (
        <ContentRegion
        key={index + color}
        convert={this.regionToAnchorPoint}
        background={color}
        {...item}
        />
      );
    });

    return (
      <div className="wrap">
        <DetailRegion personal={personal} />
        <NavRegion
          convert={this.regionToAnchorPoint}
          regions={this.state.nav}
        />
        <SkillsRegion
          convert={this.regionToAnchorPoint}
          region={this.state.regions[0]}
          skills={skills}
        />
        {content}
        <HistoryRegion
          convert={this.regionToAnchorPoint}
          region={this.state.regions[1]}
          history={history}
        />
        <ReferenceRegion
          convert={this.regionToAnchorPoint}
          region={this.state.regions[2]}
          references={references}
        />
        <DownloadRegion
          convert={this.regionToAnchorPoint}
          region={this.state.regions[3]}
          downloads={downloads}
        />
      </div>
    );
  }
}
