import React, { Component } from 'react';
import Step from '../Step';
import StepNavigation from '../StepNavigation';
import { titles } from '../../data';

interface IState {
  brand: string;
  model: string;
  transmission: string;
  fuel: string;
  step: number;
}

class Wizard extends Component<{}, IState> {
  public state = {
    brand: '',
    model: '',
    transmission: '',
    fuel: '',
    step: 0,
  }

  chooseBrand = (e: any) => {
    this.setState({ brand: e.target.value });
  }

  chooseModel = (e: any) => {
    this.setState({ model: e.target.value });
  }

  chooseTransmission = (e: any) => {
    this.setState({ transmission: e.target.value });
  }

  chooseFuel = (e: any) => {
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
    const { step, brand, model, transmission, fuel } = this.state;

    return (
      <div className="wrapper">
        <div className="wizard">
          { titles.map((item, index) => step === titles.indexOf(item) &&
              <Step
                key = { index }
                brand = { brand }
                model = { model }
                transmission = { transmission }
                fuel = { fuel }
                step = { step }
                onChooseBrand = { this.chooseBrand }
                onChooseModel = { this.chooseModel }
                onChooseTransmission = { this.chooseTransmission }
                onChooseFuel = { this.chooseFuel }
              />
            )
          }
          <StepNavigation
            brand = { brand }
            model = { model }
            transmission = { transmission }
            fuel = { fuel }
            step = { step }
            onPrevStepNavigationHandler = { this.prevStepNavigationHandler }
            onNextStepNavigationHandler = { this.nextStepNavigationHandler }
          />
        </div>
      </div>
    );
  }
}

export default Wizard;