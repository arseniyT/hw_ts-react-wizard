import React from 'react';

const StepNavigation = (props) => {
  const { brand, model, transmission, fuel, step } = props.state;

  const isBtnNavDisabled = isBackBtn => {
    if (isBackBtn) {
      return step === 0;
    } 

    return (step === 0 && brand === '') ||
    (step === 1 && model === '') || 
    (step === 2 && transmission === '') || 
    (step === 3 && fuel === '') || 
    (step === 4 && brand !== '' && model !== '' && transmission !== '' && fuel !== '');
  }

  return (
    <div className="controls">
      {
        <button className="btn-nav" 
                onClick = { props.onPrevStepNavigationHandler }
                disabled = { isBtnNavDisabled(true) }>
          Back
        </button> 
      }
      {
        <button className="btn-nav" 
                onClick = { props.onNextStepNavigationHandler } 
                disabled = { isBtnNavDisabled(false) }>
          Next
        </button> 
      }
    </div>
  )
}

export default StepNavigation;