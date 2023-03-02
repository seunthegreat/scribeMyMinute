import dateUtils from "../utils/dateUtils";

export interface InfoProps {
  info: {
  headline: string;
  body: string;
  }
}

export interface AppProps {
  currentMonthAndYear: string;
  owner: string; 
}

export const contents: InfoProps = {
  info: {
    headline: 'ScribeMyMinute',
    body: `Fill in simple details and get a professional minute in less than a minute. Now you can save time, 
      streamline your workflow, and get more out of your meetings. Say goodbye to tedious manual minutes and 
      hello to effortless, productive meetings.`
  }
};

export const appConstants: AppProps = {
  currentMonthAndYear : dateUtils.getCurrentMonthAndYear(),
  owner : "Seun Abilawon"
}