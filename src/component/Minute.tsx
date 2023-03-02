import React, { FC } from 'react';
import { text } from '../style';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { TfiReload } from 'react-icons/tfi';
import { MdOutlineAdd } from "react-icons/md"

type Topic = {
  id: number;
  topics: string;
};

type Result = {
  title: string;
  summary: {
    title: string;
    body: string;
  };
  purpose: {
    title: string;
    body: string;
  };
  actionItems: {
    title: string;
    body: string;
  };
  nextSteps : {
    title: string; 
    body: string;
  };
  decisionMade: {
    title: string;
    body: string;
  };
  keyTopics: {
    title: string;
    topics: Topic[];
  };
};

type NoteProps = {
  title: string;
  body: string;
};
  

const Minute = () => {
  return (
    <div>Minute</div>
  )
}

export default Minute;