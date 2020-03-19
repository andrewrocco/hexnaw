import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex } from 'reflexbox/styled-components';

import { Heading, Text, Paragraph } from 'ui/typography';
import { Toggle } from 'components/form';
import { colors, spacing } from 'ui/base';

import * as Styled from './Report.styles';

const toolbarInnerProps = {
  flexDirection: ['column', 'row'],
  px: [0, 4],
};

const toolbarSectionProps = {
  alignItems: 'bottom',
  justifyContent: ['center', 'flex-start'],
  px: [4, 0],
  py: 4,
};

export class ReportToolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHelpVisible: false,
    };
    this.toggleHelpWindow = this.toggleHelpWindow.bind(this);
  }

  toggleHelpWindow() {
    this.setState(state => ({
      isHelpVisible: !state.isHelpVisible,
    }));
  }

  render() {
    const { isShowingPassing, nawCount, togglePassingColors, yeahCount } = this.props;
    const { isHelpVisible } = this.state;

    return (
      <Styled.ToolbarWrap>
        <Styled.ToolbarInner {...toolbarInnerProps}>
          <Styled.ToolbarSection {...toolbarSectionProps}>
            <Styled.ToolbarNumber color={colors.blue}>
              <em>{yeahCount}</em>
              Yeah
            </Styled.ToolbarNumber>
            <Box ml={4} />
            <Styled.ToolbarNumber color={colors.violet}>
              <em>{nawCount}</em>
              Naw
            </Styled.ToolbarNumber>
          </Styled.ToolbarSection>
          <Styled.ToolbarSection {...toolbarSectionProps} px={4}>
            <Toggle
              active={isShowingPassing}
              label="Only highlight passing colors"
              onChange={togglePassingColors}
            />
          </Styled.ToolbarSection>
          <Styled.ToolbarSection {...toolbarSectionProps} px={0} py={0}>
            <Styled.ToolbarHelpButton onClick={this.toggleHelpWindow}>
              <Text color="violet">Help</Text>
            </Styled.ToolbarHelpButton>
          </Styled.ToolbarSection>
        </Styled.ToolbarInner>
        <Styled.ToolbarAside isOpen={isHelpVisible}>
          <Styled.ToolbarAsideInner p={4}>
            <Flex flexDirection={['column', 'row']}>
              <Box width={[1, 1, 1 / 3]} pr={[0, 5]} mb={[5, 0]}>
                <Heading level={3} size="xsmall" style={{ marginBottom: spacing.small }}>Contrast Ratio</Heading>
                <Paragraph size={['xsmall']}>The contrast ratio is the difference in luminance between the two colors.</Paragraph>
              </Box>
              <Box width={[1, 1, 1 / 3]} pr={[0, 5]} mb={[5, 0]}>
                <Heading level={3} size="xsmall" style={{ marginBottom: spacing.small }}>Large Text</Heading>
                <Paragraph size={['xsmall']}>Large text is defined as 18.5px bold text or larger, or 24px regular text or larger.</Paragraph>
              </Box>
              <Box width={[1, 1, 1 / 3]} mb={[5, 0]}>
                <Heading level={3} size="xsmall" style={{ marginBottom: spacing.small }}>Small Text</Heading>
                <Paragraph size={['xsmall']}>Small text is defined as 18.4px bold text or smaller, or 23px regular text or smaller.</Paragraph>
              </Box>
            </Flex>
          </Styled.ToolbarAsideInner>
          <Styled.ToolbarAsideInner p={4}>
            <Flex flexDirection="row">
              <Box width={[1, 3 / 4]} mb={[5, 0]}>
                <Heading level={3} size="xsmall" style={{ marginBottom: spacing.small }}>Reading Test Results</Heading>
                <Paragraph size={['xsmall']}>This table shows the best possible score of every combination related to <a href="https://www.w3.org/TR/WCAG20/#visual-audio-contrast">WCAG 2.1 guidelines</a>. If &quot;AAA&quot; is shown as a result, this means that the color combination also passes &quot;AA&quot;.</Paragraph>
                <Paragraph size={['xsmall']}>&quot;Naw&quot; means that the combination does not meet the minimum contrast requirements for &quot;AA&quot; and therefore fails.</Paragraph>
              </Box>
            </Flex>
          </Styled.ToolbarAsideInner>
        </Styled.ToolbarAside>
      </Styled.ToolbarWrap>
    );
  }
}

ReportToolbar.propTypes = {
  isShowingPassing: PropTypes.bool,
  nawCount: PropTypes.number,
  togglePassingColors: PropTypes.func,
  yeahCount: PropTypes.number,
};

ReportToolbar.defaultProps = {
  nawCount: 0,
  yeahCount: 0,
};
