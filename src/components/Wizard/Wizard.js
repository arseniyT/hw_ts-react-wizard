import React, { Component } from 'react';
import Step from '../Step';
import StepNavigation from '../StepNavigation';
import { titles } from '../../data';

class Wizard extends Component {
  state = {
    brand: '',
    model: '',
    transmission: '',
    fuel: '',
    step: 0,
  }

  chooseBrand = e => {
    this.setState({ brand: e.target.value });
  }

  chooseModel = e => {
    this.setState({ model: e.target.value });
  }

  chooseTransmission = e => {
    this.setState({ transmission: e.target.value });
  }

  chooseFuel = e => {
    this.setState({ fuel: e.target.value });
  }

  prevStepNavigationHandler = () => {
    if (this.state.step === 1) {
      this.setState({ model : '' });
    }

    this.setState({ step: this.state.step - 1 });
  }

  nextStepNavigationHandler = () => {
    this.setState({ step: this.state.step + 1 });
  }

  render() {
    const { step } = this.state;

    return (
      <div className="wrapper">
        <div className="wizard">
          { titles.map((item, index) => step === titles.indexOf(item) &&
              <Step
                key = { index }
                item = { item }
                state = { this.state }
                onChooseBrand = { this.chooseBrand }
                onChooseModel = { this.chooseModel }
                onChooseTransmission = { this.chooseTransmission }
                onChooseFuel = { this.chooseFuel }
              />
            )
          }
          <StepNavigation
            state = { this.state }
            onPrevStepNavigationHandler = { this.prevStepNavigationHandler }
            onNextStepNavigationHandler = { this.nextStepNavigationHandler }
          />
        </div>
      </div>
    );
  }
}

export default Wizard;