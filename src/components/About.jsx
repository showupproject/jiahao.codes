/* eslint-disable react/no-danger */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { GitHub, Keybase, LinkedIn, Twitter } from './icons';
import { siteSocial } from '../proptypes';

const SocialLinks = styled.div`
  text-align: right;
`;

const SocialLink = styled.a`
  display: inline-block;
  background-image: none;

  &:hover {
    background-image: none;
  }
`;

export default function About({
  title,
  html,
  social: { githubUrl, keybaseUrl, linkedInUrl, twitterUrl },
}) {
  return (
    <div>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <SocialLinks>
        <SocialLink
          href={githubUrl}
          title="My GitHub Profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub enlargeOnMobile />
        </SocialLink>
        <SocialLink
          href={keybaseUrl}
          title="My Keybase Profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Keybase enlargeOnMobile />
        </SocialLink>
        <SocialLink
          href={twitterUrl}
          title="My Twitter Profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter enlargeOnMobile />
        </SocialLink>
        <SocialLink
          href={linkedInUrl}
          title="My LinkedIn Profile"
          target="_blank"
          rel="noopener noreferrer"
          enlargeOnMobile
        >
          <LinkedIn />
        </SocialLink>
      </SocialLinks>
    </div>
  );
}

About.propTypes = {
  html: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  social: siteSocial.isRequired,
};
