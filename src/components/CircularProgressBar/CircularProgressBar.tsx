import React from 'react';

type CircularProgressProps = {
  width: string;
  progressValue: number;
  centerCircleColor: string;
  ringWaitProgressColor: string;
  ringProgressColor: string;
  errorColor: string;
  maxProgressValue: number;
};

const CircularProgressBar = ({
  width,
  progressValue,
  centerCircleColor,
  ringWaitProgressColor,
  ringProgressColor,
  errorColor,
  maxProgressValue,
}: CircularProgressProps) => {
  // degre progress
  const degProgress = 360 / maxProgressValue;

  return (
    <div
      className={`circular-progress relative bg-transparent rounded-full grid place-items-center before:content-[""] before:absolute before:h-5/6 before:w-5/6 before:bg-[rgb(0,0,0)]  before:rounded-full p-1`}
      style={{
        height: `${width}px`,
        width: `${width}px`,
        background:
          progressValue <= maxProgressValue
            ? ` conic-gradient(${ringProgressColor} ${
                progressValue * degProgress
              }deg, ${ringWaitProgressColor} ${progressValue * degProgress}deg)`
            : `${errorColor}`,
      }}
    >
      <div className='value relative'>
        {maxProgressValue - progressValue > 0 ? (
          <span className={`text-[#6E767D] text-xs`}>{progressValue}</span>
        ) : (
          <span className={`text-[rgb(255,0,0)] text-xs`}>
            {maxProgressValue - progressValue}
          </span>
        )}
      </div>
    </div>
  );
};

export default CircularProgressBar;
