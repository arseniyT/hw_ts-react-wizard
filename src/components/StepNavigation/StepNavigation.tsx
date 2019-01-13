import React from 'react';

interface IStepNavigation {
  brand: string;
  model: string;
  transmission: string;
  fuel: string;
  step: number;
  onPrevStepNavigationHandler: () => void;
  onNextStepNavigationHandler: () => void;
}

const StepNavigation = (props: IStepNavigation) => {
  const { 
    brand, 
    model, 
    transmission, 
    fuel, 
    step,
    onPrevStepNavigationHandler,
    onNextStepNavigationHandler
  } = props;

  const isBtnNavDisabled = (isBackBtn: boolean) => {
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
                onClick = { onPrevStepNavigationHandler }
                disabled = { isBtnNavDisabled(true) }>
          Back
        </button> 
      }
      {
        <button className="btn-nav" 
                onClick = { onNextStepNavigationHandler } 
                disabled = { isBtnNavDisabled(false) }>
          Next
        </button> 
      }
    </div>
  )
}

export default StepNavigation;