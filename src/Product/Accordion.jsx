import React, { Component } from 'react';
import styled from 'styled-components';
import triangle from '../Assets/triangle.svg';

const Wrapper = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const Button = styled.button`
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0;
  width: 100%;
  border: none;
  background: none;
  cursor: pointer;
`;

const Title = styled.h2`
  padding: 0;
  margin: 0;
  position: relative;
  display: inline-block;
  text-align: left;
  width: 100%;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1.25rem;
  color: #171717;
  &:after {
    position: absolute;
    top: 5px;
    right: 0;
    height: 10px;
    width: 10px;
    content: "";
    background: url(${triangle}) no-repeat;
    transform: rotate(${props => (props.isOpened ? '180deg' : '0deg')});
  }
`;

const Content = styled.div`
  display: ${props => (props.isOpened ? 'block' : 'none')};
`;

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: this.props.isOpened
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isOpened: !prevState.isOpened
    }));
  }

  render() {
    return (
      <Wrapper>
        <Button onClick={this.handleClick}>
          <Title isOpened={this.state.isOpened}>
            {this.props.name}
          </Title>
        </Button>
        <Content isOpened={this.state.isOpened}>
          {this.props.children}
        </Content>
      </Wrapper>
    );
  }
}

export default Accordion;
