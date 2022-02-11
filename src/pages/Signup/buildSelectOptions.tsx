import { Option } from '../../components';
import { DAYS, MONTHS } from '../../constants';
import { isLeapYear } from '../../utils';

export const buildMonthOptions = () => {
  let options = [];
  options.push(
    <Option key='null-month-key' disabled={true} value={undefined} />
  );
  for (let i = 0; i < 12; i++) {
    options.push(
      <Option key={MONTHS[i]} disabled={false} value={i} children={MONTHS[i]} />
    );
  }
  return options;
};

export const buildYearOptions = () => {
  let options = [];
  options.push(
    <Option key='null-month-key' disabled={true} value={undefined} />
  );

  for (let i = 1902; i <= new Date().getFullYear(); i++) {
    options.push(<Option key={i} disabled={false} value={i} children={i} />);
  }

  return options;
};

export const buildDayOptions = (month: number, year: number) => {
  let options = [];
  options.push(<Option key='null-day-key' disabled={true} value={undefined} />);
  if (!month) {
    for (let i = 1; i < 32; i++) {
      options.push(<Option key={i} disabled={false} value={i} children={i} />);
    }
  }
  if (month) {
    if (!year) {
      for (let i = 1; i <= DAYS[+month]; i++) {
        options.push(
          <Option key={i} disabled={false} value={i} children={i} />
        );
      }
    }
    if (year) {
      const isLeap = isLeapYear(+year);
      if (isLeap && +month === 1) {
        for (let i = 1; i <= 29; i++) {
          options.push(
            <Option key={i} disabled={false} value={i} children={i} />
          );
        }
      } else if (!isLeap && +month === 1) {
        for (let i = 1; i <= 28; i++) {
          options.push(
            <Option key={i} disabled={false} value={i} children={i} />
          );
        }
      } else {
        for (let i = 1; i <= DAYS[+month]; i++) {
          options.push(
            <Option key={i} disabled={false} value={i} children={i} />
          );
        }
      }
    }
  }
  return options;
};
