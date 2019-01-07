import React from 'react';
import { titles, auto, transmissionTypes, fuelTypes } from '../../data';

const Step = (props) => {
  const { brand, model, transmission, fuel, step } = props.state;

  const showCarBrandStep = () => {
    return (
      <React.Fragment>
        { auto.map((item, index) =>
            <button
              key = { index }
              className = { brand === item.brand ? 'option selected' : 'option' }
              value = { item.brand }
              onClick = { props.onChooseBrand }
            >
              { item.brand }
            </button>
          ) 
        }
      </React.Fragment>
    )
  }

  const showCarModelStep = () => {
    return auto.map((item, index) => {
      if (brand === item.brand) {
        return (
          <React.Fragment key={ index }>
            { auto[index].models.map((modelItem, index) =>
                <button
                  key = { index }
                  className = { model === modelItem ? 'option selected' : 'option' }
                  value = { modelItem }
                  onClick = { props.onChooseModel }
                >
                  { modelItem }
                </button>
              ) 
            }
          </React.Fragment>
        )
      }

      return null;
    })
  }

  const showTransmissionStep = () => {
    return (
      <React.Fragment>
        { transmissionTypes.map((transmissionItem, index) =>
            <button
              key = { index }
              className = { transmission === transmissionItem ? 'option selected' : 'option' }
              value = { transmissionItem }
              onClick = { props.onChooseTransmission }
            >
              { transmissionItem }
            </button>
          ) 
        }
      </React.Fragment>
    )
  }

  const showFuelStep = () => {
    return (
      <React.Fragment>
        { fuelTypes.map((fuelItem, index) =>
            <button
              key = { index }
              className = { fuel === fuelItem ? 'option selected' : 'option' }
              value = { fuelItem }
              onClick = { props.onChooseFuel }
            >
              { fuelItem }
            </button>
          ) 
        }
      </React.Fragment>
    )
  }

  const showResult = () => {
    return (
      <div className="result">
        <p><span>Brand: </span>{ brand }</p>
        <p><span>Model: </span>{ model }</p>
        <p><span>Transmission type: </span>{ transmission }</p>
        <p><span>Fuel type: </span>{ fuel }</p>
      </div>
    )
  }

  return (
    <div className="options">
      <h4 className="title">{ titles[step] }</h4>
      { step === 0 && showCarBrandStep() }
      { step === 1 && showCarModelStep() }
      { step === 2 && showTransmissionStep() }
      { step === 3 && showFuelStep() }
      { step === 4 && showResult() }
    </div>
  )
}

export default Step;