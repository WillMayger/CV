import React, { Component } from 'react';
import smoothscroll from 'smoothscroll-polyfill';

// import data
import personal from '../plugindata/personal'; // personal info like phone number.
import skills from '../plugindata/skills'; // skills icons & names
import text from '../plugindata/text'; // content area text
import history from '../plugindata/history'; // content area text
import references from '../plugindata/references'; // content area text
import downloads from '../plugindata/downloads'; // content area text

// import components
import DetailRegion from './regions/DetailRegion';
import NavRegion from './regions/NavRegion';
import SkillsRegion from './regions/SkillsRegion';
import ContentRegion from './regions/ContentRegion';
import HistoryRegion from './regions/HistoryRegion';
import ReferenceRegion from './regions/ReferenceRegion';
import DownloadRegion from './regions/DownloadRegion';
import Responsive from './Responsive';

export default class CV extends Component {
  constructor() {
    super();
    const contentRegions = () => text.map(item => item.region);
    const allRegions = (array) => {
      let regions = [];
      if (array !== undefined) regions = array;
      return [
        'Skills',
        ...regions,
        'Career History',
        'References',
        'Downloads',
      ];
    };

    this.state = {
      responsiveWidth: 1366,
      regions: allRegions(),
      nav: allRegions(contentRegions()),
    };

    this.windowResize = this.windowResize.bind(this);
  }

  componentDidMount() {
    this.windowResize();
    window.addEventListener('resize', this.windowResize);
    window.__forceSmoothScrollPolyfill__ = true;
    smoothscroll.polyfill();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.windowResize);
  }

  windowResize() {
    const responsiveWidth = parseInt(document.getElementsByTagName('body')[0].clientWidth, 10);
    this.setState({ responsiveWidth });
  }

  render() {
    // if (this.state.responsiveWidth <= 1366) {
    //   return (
    //     <Responsive width={this.state.responsiveWidth} />
    //   );
    // }

    const regionToAnchorPoint = (regionValue) => {
      let region = regionValue;
      region = region.toString().split(' ').join('').toLowerCase();
      return region;
    };


    const content = text.map((item, index) => {
      const color = index % 2 ? '#fff' : '#323333';
      return (
        <ContentRegion
          key={`content-region ${item.region}`}
          convert={regionToAnchorPoint}
          background={color}
          {...item}
        />
      );
    });

    return (
      <div className="wrap">
        <DetailRegion personal={personal} />
        <NavRegion
          regions={this.state.nav}
          convert={regionToAnchorPoint}
        />
        <SkillsRegion
          region={this.state.regions[0]}
          convert={regionToAnchorPoint}
          skills={skills}
        />
        {content}
        <HistoryRegion
          region={this.state.regions[1]}
          convert={regionToAnchorPoint}
          history={history}
        />
        <ReferenceRegion
          region={this.state.regions[2]}
          convert={regionToAnchorPoint}
          references={references}
        />
        <DownloadRegion
          region={this.state.regions[3]}
          convert={regionToAnchorPoint}
          downloads={downloads}
        />
      </div>
    );
  }
}
