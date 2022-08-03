import React from "react";

const questions = [
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187256961642576/1002309520904704009/unknown.png',
      answerOpc: [
        { answerText: 'apparel', isCorrect: false },
        { answerText: 'calendar', isCorrect: false },
        { answerText: 'astronaut', isCorrect: true },
        { answerText: 'rotten', isCorrect: false },
      ],
      repost: 'astronaut',
    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187256961642576/1002309679453569215/unknown.png',
      answerOpc: [
        { answerText: 'crate', isCorrect: false },
        { answerText: 'frightened', isCorrect: false },
        { answerText: 'fear', isCorrect: false },
        { answerText: 'Architect', isCorrect: true },
      ],
      repost: 'Architect',
    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187256961642576/1002310010669367296/unknown.png',
      answerOpc: [
        { answerText: 'Pilot', isCorrect: true },
        { answerText: 'bent', isCorrect: false },
        { answerText: 'quickest', isCorrect: false },
        { answerText: 'towering', isCorrect: false },
      ],
      repost: 'Pilot',
    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187256961642576/1002310132115443732/unknown.png',
      answerOpc: [
        { answerText: 'onerous', isCorrect: false },
        { answerText: 'invent', isCorrect: false },
        { answerText: 'Carpenter', isCorrect: true },
        { answerText: 'weight', isCorrect: false },
      ],
      repost: 'Carpenter',
    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187256961642576/1002310508315148314/unknown.png',
      answerOpc: [
        { answerText: 'cool', isCorrect: false },
        { answerText: 'angle', isCorrect: false },
        { answerText: 'Nurse', isCorrect: true },
        { answerText: 'onerous', isCorrect: false },
      ],
      repost: 'Nurse',

    },
    {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187256961642576/1002311240758083614/unknown.png',
        answerOpc: [
          { answerText: 'cherries', isCorrect: false },
          { answerText: 'gaudy', isCorrect: false },
          { answerText: 'Firefighter', isCorrect: true },
          { answerText: 'porter', isCorrect: false },
        ],
        repost: 'Firefighter',
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187256961642576/1002313391035130046/unknown.png',
        answerOpc: [
          { answerText: 'degree', isCorrect: false },
          { answerText: 'Pedro', isCorrect: false },
          { answerText: 'polish', isCorrect: false },
          { answerText: 'police', isCorrect: true },
        ],
        repost: 'police',
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187256961642576/1002314039352897626/unknown.png',
        answerOpc: [
          { answerText: 'plumber', isCorrect: true },
          { answerText: 'pigs', isCorrect: false },
          { answerText: 'flap', isCorrect: false },
          { answerText: 'sugar', isCorrect: false },
        ],
        repost: 'plumber',
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187256961642576/1002313715401625660/unknown.png',
        answerOpc: [
          { answerText: 'horn', isCorrect: false },
          { answerText: 'mass', isCorrect: false },
          { answerText: 'mailman', isCorrect: true },
          { answerText: 'spade', isCorrect: false },
        ],
        repost: 'mailman',
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187256961642576/1002314267254603916/unknown.png',
        answerOpc: [
          { answerText: 'strange', isCorrect: false },
          { answerText: 'curly', isCorrect: false },
          { answerText: 'single', isCorrect: true },
          { answerText: 'careful', isCorrect: false },
        ],
        repost: 'single', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187256961642576/1002314587988836534/unknown.png',
        answerOpc: [
          { answerText: 'mailbox', isCorrect: false },
          { answerText: 'meat', isCorrect: false },
          { answerText: 'hair', isCorrect: true },
          { answerText: 'heat', isCorrect: false },
        ],
        repost: 'hair',
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187256961642576/1002314769233092658/unknown.png',
        answerOpc: [
          { answerText: 'glass', isCorrect: false },
          { answerText: 'downtown', isCorrect: false },
          { answerText: 'telling', isCorrect: false },
          { answerText: 'brain', isCorrect: true },
        ],
        repost: 'brain',
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187256961642576/1002315175342383244/unknown.png',
        answerOpc: [
          { answerText: 'bone', isCorrect: true },
          { answerText: 'squeak', isCorrect: false },
          { answerText: 'flow', isCorrect: false },
          { answerText: 'muscle', isCorrect: false },
        ],
        repost: 'bone',
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187256961642576/1002334885450629170/unknown.png',
        answerOpc: [
          { answerText: 'church', isCorrect: false },
          { answerText: 'itchy', isCorrect: false },
          { answerText: 'nose', isCorrect: true },
          { answerText: 'swim', isCorrect: false },
        ],
        repost: 'nose',
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/799491543765352511/986043422601273354/unknown.png',
        answerOpc: [
          { answerText: '01', isCorrect: false },
          { answerText: '02', isCorrect: false },
          { answerText: '03', isCorrect: true },
          { answerText: '04', isCorrect: false },
        ],
        repost: '03', tr: 'cachorro'
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187256961642576/1002334885450629170/unknown.png',
        answerOpc: [
          { answerText: 'church', isCorrect: false },
          { answerText: 'itchy', isCorrect: false },
          { answerText: 'nose', isCorrect: true },
          { answerText: 'swim', isCorrect: false },
        ],
        repost: 'nose',
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187256961642576/1002334993516871870/unknown.png',
        answerOpc: [
          { answerText: 'rescue', isCorrect: false },
          { answerText: 'butter', isCorrect: false },
          { answerText: 'moustache', isCorrect: true },
          { answerText: 'swim', isCorrect: false },
        ],
        repost: 'moustache',
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187256961642576/1002335089847455784/unknown.png',
        answerOpc: [
          { answerText: 'heat', isCorrect: false },
          { answerText: 'rock', isCorrect: false },
          { answerText: 'finger', isCorrect: true },
          { answerText: 'swim', isCorrect: false },
        ],
        repost: 'finger',
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187256961642576/1002335773409943592/unknown.png',
        answerOpc: [
          { answerText: 'heat', isCorrect: false },
          { answerText: 'debonair', isCorrect: false },
          { answerText: 'finger', isCorrect: false },
          { answerText: 'direful', isCorrect: true },
        ],
        repost: 'Blackberry',
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187256961642576/1002336298264166481/unknown.png',
        answerOpc: [
          { answerText: 'Pineapple', isCorrect: true },
          { answerText: 'tasteless', isCorrect: false },
          { answerText: 'laughable', isCorrect: false },
          { answerText: 'spectacular', isCorrect: false },
        ],
        repost: 'Pineapple',
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187256961642576/1002336523464736938/unknown.png',
        answerOpc: [
          { answerText: 'malicious', isCorrect: false },
          { answerText: 'rock', isCorrect: false },
          { answerText: 'Nuts', isCorrect: true },
          { answerText: 'scarce', isCorrect: false },
        ],
        repost: 'Nuts',
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187256961642576/1002337417069604956/unknown.png',
        answerOpc: [
          { answerText: 'squash', isCorrect: false },
          { answerText: 'grease', isCorrect: false },
          { answerText: 'Fish', isCorrect: false },
          { answerText: 'Onion', isCorrect: true },
        ],
        repost: 'Onion',
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187256961642576/1002337775938441298/unknown.png',
        answerOpc: [
          { answerText: 'heat', isCorrect: true },
          { answerText: 'rake', isCorrect: false },
          { answerText: 'knotty', isCorrect: false },
          { answerText: 'swim', isCorrect: false },
        ],
        repost: 'Armadillo',
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187256961642576/1002338584839340072/unknown.png',
        answerOpc: [
          { answerText: 'heat', isCorrect: false },
          { answerText: 'Whale', isCorrect: true },
          { answerText: 'delay', isCorrect: false },
          { answerText: 'wild', isCorrect: false },
        ],
        repost: 'Whale',
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187256961642576/1002338909440725133/unknown.png',
        answerOpc: [
          { answerText: 'blush', isCorrect: false },
          { answerText: 'whirl', isCorrect: false },
          { answerText: 'clap', isCorrect: false },
          { answerText: 'hen', isCorrect: true },
        ],
        repost: 'hen',
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187256961642576/1002340531281608755/unknown.png',
        answerOpc: [
          { answerText: 'blush', isCorrect: false },
          { answerText: 'Ship', isCorrect: false },
          { answerText: 'false', isCorrect: false },
          { answerText: 'fork-lift', isCorrect: true },
        ],
        repost: 'fork-lift',
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187256961642576/1002340647061172344/unknown.png',
        answerOpc: [
          { answerText: 'tram', isCorrect: true },
          { answerText: 'rate', isCorrect: false },
          { answerText: 'walk', isCorrect: false },
          { answerText: 'hen', isCorrect: false },
        ],
        repost: 'tram',
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187256961642576/1002340803261251656/unknown.png',
        answerOpc: [
          { answerText: 'coast', isCorrect: false },
          { answerText: 'Carriage', isCorrect: true },
          { answerText: 'testy', isCorrect: false },
          { answerText: 'hen', isCorrect: false },
        ],
        repost: 'Carriage',
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187256961642576/1002341013349728396/unknown.png',
        answerOpc: [
          { answerText: 'coast', isCorrect: false },
          { answerText: 'whirl', isCorrect: false },
          { answerText: 'clap', isCorrect: false },
          { answerText: 'lettuce', isCorrect: true },
        ],
        repost: 'lettuce',
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187256961642576/1002341508944498748/unknown.png',
        answerOpc: [
          { answerText: 'blush', isCorrect: false },
          { answerText: 'clap', isCorrect: false },
          { answerText: 'backpack', isCorrect: true },
          { answerText: 'hen', isCorrect: false },
        ],
        repost: 'backpack',
      },


  ];

  export default questions;