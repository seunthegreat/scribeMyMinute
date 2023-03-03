import dateUtils from "../utils/dateUtils";
import { MinuteProps } from "../component/Minute";

export interface InfoProps {
  info: {
  headline: string;
  body: string;
  }
}

export interface AppProps extends MinuteProps {
  currentMonthAndYear: string;
  owner: string; 
  mock: {
    minuteResult:  MinuteProps['result'];
  };
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
  currentMonthAndYear: dateUtils.getCurrentMonthAndYear(),
  owner: "Seun Abilawon",
  mock: {
    minuteResult: {
      title: "Delivery of Copies for FT9ja Landing Page",
      summary: {
        title: "Summary",
        body: `Delivery of Copies for FT9ja Landing Page
          Date and Time: 14 February 2023, 10:00 AM
          Attendees: Ayo (Product Manager for ATAfrica), Shalom (Content Creator), Seun (Software Developer)`
      },
      purpose: {
        title: "Purpose",
        body: "To determine where and when the copies for the FT9ja landing page should be delivered."
      },
      actionItems: {
        title: "Action Items",
        body: `Seun and Shalom to deliver copies to Ayo within one week
          Ayo to review and finalize the terms and conditions within two weeks
          All attendees to communicate progress via email by the end of each week`,
      },
      nextSteps: {
        title: "Next Step",
        body: `Ayo to schedule a follow-up meeting in two weeks to review progress and make necessary adjustments
          The meeting was productive, with the attendees discussing the main topics of creating effective headlines for the 
          Hero section, working on copies for other sections, writing terms and conditions, and defining "How it works" section. 
          It was agreed that Seun and Shalom would create separate copies for the main landing page and "How it Works" section, 
          as well as the script for the video on "How it Works". Ayo's task is to work on the terms and conditions 
          for the website.`
      },
      decisionMade: {
        title: "Decision Made",
        body: `Seun and Shalom to work on separate copies for the main landing page and "How it Works" section, as well as the script for the video on 
          "How it Works" Ayo to work on the terms and conditions for the website`,
      },
      keyTopics: {
        title: "Key Topics",
        topics: [
          { id: 1, topics: 'Creating an effective headline for the Hero Section' },
          { id: 2, topics: 'Working on copies for the other sections' },
          { id: 3, topics: 'Writing the terms and conditions' },
          { id: 4, topics: 'Defining "How it works" section' }
        ]
      }
    }
  },
  result: {
    title: "",
    summary: {
      title: "",
      body: ""
    },
    purpose: {
      title: "",
      body: ""
    },
    keyTopics: {
      title: "",
      topics: []
    },
    decisionMade: {
      title: "",
      body: ""
    },
    actionItems: {
      title: "",
      body: ""
    },
    nextSteps: {
      title: "",
      body: ""
    }
  }
}