/* eslint-disable react/state-in-constructor */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from './shared/Form';
import Label from './shared/Label';
import Input from './shared/Input';
import Button from './shared/Button';
import { saveBudget } from '../AC';

const labelStyles = `
  margin-bottom: 16px;  
`;

class BudgetForm extends Component {
  state = {
    budget: 0,
  };

  handleChange = e => {
    this.setState({
      budget: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { saveBudget } = this.props;
    const { budget } = this.state;
    saveBudget(budget);
    this.setState({ budget: 0 });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter your total budget
          <Input
            type="number"
            value={this.state.budget}
            onChange={this.handleChange}
          />
        </Label>

        <Button label="Save" type="submit" />
      </Form>
    );
  }
}

BudgetForm.propTypes = {
  saveBudget: PropTypes.func.isRequired,
};

export default connect(
  ({ budgetState }) => ({
    budgetState,
  }),
  { saveBudget },
)(BudgetForm);
