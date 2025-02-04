import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  TiSocialGithub,
  TiSocialLinkedin,
  TiSocialTwitter,
} from 'react-icons/ti';

const SocialWrapper = styled.div`
  display: flex;
  flex-flow: wrap;
  margin-top: 20px;

  svg {
    &:hover {
      color: #000 !important;
    }
  }
`;

const Social = ({ gitHub, twitter, linkedIn  }) => {
  return (
  <SocialWrapper>
    { gitHub &&
    <a data-testid="github" href={`https://github.com/${gitHub}`}>
      <TiSocialGithub color="green" size="36px" />
    </a>
    }
    { linkedIn &&
    <a data-testid="linkedin" href={`https://linkedin.com/${linkedIn}`}>
      <TiSocialLinkedin color="green" size="36px" />
    </a>
    }
    { twitter &&
    <a data-testid="twitter" href={`https://twitter.com/${twitter}`}>
      <TiSocialTwitter color="green" size="36px" />
    </a>
    }
  </SocialWrapper>
  );
};

Social.propTypes = {
  gitHub: PropTypes.string,
  twitter: PropTypes.string,
  linkedIn: PropTypes.string,
};

export default Social;
