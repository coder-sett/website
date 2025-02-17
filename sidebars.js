/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  webSidebar: [
    { type: 'doc', id: 'community/quick-start', label: 'Quick Start', },
    // { type: 'doc', id: 'docs/user-guide/README', label: 'User Guide', },

    {
      type: 'category',
      collapsed: false,
      label: 'Ecosystem Evaluation System',
      link: {
        type: 'generated-index',
        description: 'Ecosystem is used to describe the health status of open source community standing from ecology context. We create three top level dimensions: Productivity, Robustness and Niche Creation.',
        slug: '/dimensions-define',
        keywords: ['Metrics Models Dimensions', 'Productivity', 'Robustness', 'Niche-Creation',],
        image: '/img/docusaurus.png',
      },
      items: [
        {
          type: 'category',
          collapsed: false,
          label: 'Productivity',
          link: {
            type: 'generated-index',
            description: 'The efficiency with which an ecosystem or project converts inputs into output.',
            // slug: '/metrics-models/productivity',
            keywords: [],
            image: '/img/docusaurus.png',
          },
          items: [
            { type: 'doc', label: 'Overview', id: 'docs/metrics-models/productivity/README' },
            { type: 'doc', id: 'docs/metrics-models/productivity/collaboration-development-index' },
            { type: 'doc', id: 'docs/metrics-models/productivity/community-service-and-support' },
            { type: 'doc', id: 'docs/metrics-models/productivity/code/code-compliance-guarantee' },
            { type: 'doc', id: 'docs/metrics-models/productivity/code/code-security-guarantee' },
            { type: 'doc', id: 'docs/metrics-models/productivity/content' },
          ],
        },

        {
          type: 'category',
          collapsed: false,
          label: 'Robustness',
          link: {
            type: 'generated-index',
            description: 'The capability of an ecosystem or project to face and survive disruptions.',
            slug: '/metrics-models/robustness',
            keywords: [],
            image: '/img/docusaurus.png',
          },
          items: [
            { type: 'doc', label: 'Overview', id: 'docs/metrics-models/robustness/README' },
            { type: 'doc', id: 'docs/metrics-models/robustness/activity' },
            { type: 'doc', id: 'docs/metrics-models/robustness/developer/developer-convertion' },
            { type: 'doc', id: 'docs/metrics-models/robustness/developer/developer-retention' },
            { type: 'doc', id: 'docs/metrics-models/robustness/organization/innner-connectedness' },
            { type: 'doc', id: 'docs/metrics-models/robustness/organization/organization-collaboration-relationships' },
            { type: 'doc', id: 'docs/metrics-models/robustness/organization/outbound-connectedness' },
          ],
        },

        {
          type: 'category',
          collapsed: false,
          label: 'Niche Creation',
          link: {
            type: 'generated-index',
            description: 'The capacity to create and recognize meaningful diversity and thereby new capabilities.',
            slug: '/metrics-models/niche-creation',
            keywords: [],
            image: '/img/docusaurus.png',
          },
          items: [
            { type: 'doc', label: 'Overview', id: 'docs/metrics-models/niche-creation/README' },
            { type: 'doc', id: 'docs/metrics-models/niche-creation/ecological-diversity/developer-attraction' },
            { type: 'doc', id: 'docs/metrics-models/niche-creation/ecological-diversity/organization-activity' },
            { type: 'doc', id: 'docs/metrics-models/niche-creation/technological-advancement' },
          ],
        },
      ],
    },

    {
      type: 'category',
      collapsed: false,
      label: 'Community',
      link: {
        type: 'generated-index',
        description: 'Join the OSS-Compass Community',
        slug: '/community',
        keywords: [],
        image: '/img/docusaurus.png',
      },
      items: [
        { type: 'link', label: 'GitHub', href: 'https://github.com/oss-compass' },
        { type: 'link', label: 'Gitee', href: 'https://gitee.com/oss-compass' },
        { type: 'doc', label: 'Weekly Meeting', id: 'community/community/metting' },
        { type: 'doc', label: 'Event Materials', id: 'community/community/event-materials' },
        { type: 'doc', label: 'Slack', id: 'community/community/slack' },
        { type: 'doc', label: 'WeChat', id: 'community/community/wechat' },
      ],
    },

    { type: 'doc', label: 'Participating Contribution', id: 'community/CONTRIBUTING' },

    {
      type: 'category',
      collapsed: false,
      label: 'Legal',
      link: {
        type: 'generated-index',
        slug: '/legal',
        keywords: [],
        image: '/img/docusaurus.png',
      },
      items: [
        { type: 'doc', label: 'Terms', id: 'community/legal/terms-of-use' },
        { type: 'doc', label: 'Privacy', id: 'community/legal/privacy-policy' },
      ],
    },

  ],
};

module.exports = sidebars;
