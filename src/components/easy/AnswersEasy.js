import React from "react";

const questions = [
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001550433594130482/unknown.png',
      answerOpc: [
        { answerText: 'apparel', isCorrect: false },
        { answerText: 'eggs', isCorrect: true },
        { answerText: 'secret', isCorrect: false },
        { answerText: 'smell', isCorrect: false },
      ],
      repost: 'eggs',tr: 'OVOS'
    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001550222171844680/unknown.png',
      answerOpc: [
        { answerText: 'afraid', isCorrect: false },
        { answerText: 'groan', isCorrect: false },
        { answerText: 'careless', isCorrect: false },
        { answerText: 'Seagull', isCorrect: true },
      ],
      repost: 'Seagull',
    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001550580948418611/unknown.png',
      answerOpc: [
        { answerText: 'Cookie', isCorrect: true },
        { answerText: 'kittens', isCorrect: false },
        { answerText: 'lock', isCorrect: false },
        { answerText: 'books', isCorrect: false },
      ],
      repost: 'Cookie',
    },
    {
      questionsImg: 'https://media.discordapp.net/attachments/968187235130290226/1001550718131515504/unknown.png?width=1125&height=536',
      answerOpc: [
        { answerText: 'decisive', isCorrect: false },
        { answerText: 'juicy', isCorrect: false },
        { answerText: 'Beach', isCorrect: true },
        { answerText: 'digestion', isCorrect: false },
      ],
      repost: 'Beach',
    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001550869399093378/unknown.png',
      answerOpc: [
        { answerText: 'heady', isCorrect: false },
        { answerText: 'hurry', isCorrect: false },
        { answerText: 'Hello', isCorrect: true },
        { answerText: 'battle', isCorrect: false },
      ],
      repost: 'Hello',

    },
    {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001554294140579891/unknown.png',
        answerOpc: [
          { answerText: 'bedroom', isCorrect: false },
          { answerText: 'clap', isCorrect: false },
          { answerText: 'tea', isCorrect: true },
          { answerText: 'tease', isCorrect: false },
        ],
        repost: 'tea',
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001554469076619305/unknown.png',
        answerOpc: [
          { answerText: 'wise', isCorrect: false },
          { answerText: 'window', isCorrect: false },
          { answerText: 'wild', isCorrect: false },
          { answerText: 'water', isCorrect: true },
        ],
        repost: 'water',
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001554557391872212/unknown.png',
        answerOpc: [
          { answerText: 'good morning', isCorrect: true },
          { answerText: 'good muscle', isCorrect: false },
          { answerText: 'good mornyng', isCorrect: false },
          { answerText: 'good meat', isCorrect: false },
        ],
        repost: 'good morning',
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001554965266960474/unknown.png',
        answerOpc: [
          { answerText: 'good egg', isCorrect: false },
          { answerText: 'good exchange', isCorrect: false },
          { answerText: 'good evening', isCorrect: true },
          { answerText: 'good eatable', isCorrect: false },
        ],
        repost: 'good evening',
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001554732336304259/unknown.png',
        answerOpc: [
          { answerText: 'Good inquisitive', isCorrect: false },
          { answerText: 'Good noiseless', isCorrect: false },
          { answerText: 'Good afternoon', isCorrect: true },
          { answerText: 'Good apparel', isCorrect: false },
        ],
        repost: 'Good afternoon', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001555086641741924/unknown.png',
        answerOpc: [
          { answerText: 'testy', isCorrect: false },
          { answerText: 'tacit', isCorrect: false },
          { answerText: 'thanks', isCorrect: true },
          { answerText: 'tender', isCorrect: false },
        ],
        repost: 'thanks',
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001555864391532554/unknown.png',
        answerOpc: [
          { answerText: 'button', isCorrect: false },
          { answerText: 'bay', isCorrect: false },
          { answerText: 'bya', isCorrect: false },
          { answerText: 'bye', isCorrect: true },
        ],
        repost: 'bye',
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001556214188093490/unknown.png',
        answerOpc: [
          { answerText: 'school', isCorrect: true },
          { answerText: 'sunl', isCorrect: false },
          { answerText: 'share', isCorrect: false },
          { answerText: 'scarecrow', isCorrect: false },
        ],
        repost: 'school',
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001556453825458266/unknown.png',
        answerOpc: [
          { answerText: 'type', isCorrect: false },
          { answerText: 'tease', isCorrect: false },
          { answerText: 'teacher', isCorrect: true },
          { answerText: 'toothsome', isCorrect: false },
        ],
        repost: 'teacher',
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001557228945408060/unknown.png',
        answerOpc: [
          { answerText: 'evasive', isCorrect: false },
          { answerText: 'plain', isCorrect: false },
          { answerText: 'apple', isCorrect: true },
          { answerText: 'apparel', isCorrect: false },
        ],
        repost: 'apple', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001557362009706597/unknown.png',
        answerOpc: [
          { answerText: 'change', isCorrect: false },
          { answerText: 'Orange', isCorrect: true },
          { answerText: 'apple', isCorrect: false },
          { answerText: 'obedient', isCorrect: false },
        ],
        repost: 'Orange', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001557656294674604/unknown.png',
        answerOpc: [
          { answerText: 'Train', isCorrect: true },
          { answerText: 'tart', isCorrect: false },
          { answerText: 'tooth', isCorrect: false },
          { answerText: 'tidy', isCorrect: false },
        ],
        repost: 'Train', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001557807474159686/unknown.png',
        answerOpc: [
          { answerText: 'bounce', isCorrect: false },
          { answerText: 'disagree', isCorrect: false },
          { answerText: 'deserted', isCorrect: false },
          { answerText: 'daughter', isCorrect: true },
        ],
        repost: 'daughter', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001557930539241502/unknown.png',
        answerOpc: [
          { answerText: 'bounce', isCorrect: false },
          { answerText: 'disagree', isCorrect: false },
          { answerText: 'Son', isCorrect: true },
          { answerText: 'daughter', isCorrect: false },
        ],
        repost: 'Son', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001558046260068432/unknown.png',
        answerOpc: [
          { answerText: 'bounce', isCorrect: false },
          { answerText: 'Dad', isCorrect: true },
          { answerText: 'Son', isCorrect: false },
          { answerText: 'daughter', isCorrect: false },
        ],
        repost: 'Dad', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001558187608129616/unknown.png',
        answerOpc: [
          { answerText: 'mother', isCorrect: true },
          { answerText: 'disagree', isCorrect: false },
          { answerText: 'Son', isCorrect: false },
          { answerText: 'daughter', isCorrect: false },
        ],
        repost: 'mother', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001558829680570398/unknown.png',
        answerOpc: [
          { answerText: 'Milk', isCorrect: true },
          { answerText: 'minister', isCorrect: false },
          { answerText: 'Son', isCorrect: false },
          { answerText: 'malicious', isCorrect: false },
        ],
        repost: 'Milk', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001558947704078366/unknown.png',
        answerOpc: [
          { answerText: 'shois', isCorrect: false },
          { answerText: 'squash', isCorrect: false },
          { answerText: 'shoes', isCorrect: true },
          { answerText: 'squeak', isCorrect: false },
        ],
        repost: 'shoes', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001559176868274186/unknown.png',
        answerOpc: [
          { answerText: 'shois', isCorrect: false },
          { answerText: 'squash', isCorrect: false },
          { answerText: 'shoes', isCorrect: false },
          { answerText: 'Movies', isCorrect: true },
        ],
        repost: 'Movies', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001559368174686249/unknown.png',
        answerOpc: [
          { answerText: 'shois', isCorrect: false },
          { answerText: 'Cold', isCorrect: true },
          { answerText: 'hollow', isCorrect: false },
          { answerText: 'Movies', isCorrect: false },
        ],
        repost: 'Cold', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001559476505157672/unknown.png',
        answerOpc: [
          { answerText: 'wanting', isCorrect: false },
          { answerText: 'Cold', isCorrect: false },
          { answerText: 'warm', isCorrect: true },
          { answerText: 'weight', isCorrect: false },
        ],
        repost: 'warm', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001559595208147066/unknown.png',
        answerOpc: [
          { answerText: 'one', isCorrect: true },
          { answerText: 'Cold', isCorrect: false },
          { answerText: 'occur', isCorrect: false },
          { answerText: 'jail', isCorrect: false },
        ],
        repost: 'one', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001559595208147066/unknown.png',
        answerOpc: [
          { answerText: 'one', isCorrect: false },
          { answerText: 'three ', isCorrect: false },
          { answerText: 'four ', isCorrect: false },
          { answerText: 'two', isCorrect: true },
        ],
        repost: 'two', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001559788360044614/unknown.png',
        answerOpc: [
          { answerText: 'one', isCorrect: false },
          { answerText: 'three ', isCorrect: true },
          { answerText: 'four ', isCorrect: false },
          { answerText: 'two', isCorrect: false },
        ],
        repost: 'two', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001560023094280202/unknown.png',
        answerOpc: [
          { answerText: 'one', isCorrect: false },
          { answerText: 'three ', isCorrect: false },
          { answerText: 'four ', isCorrect: true },
          { answerText: 'two', isCorrect: false },
        ],
        repost: 'four', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001560088194060438/unknown.png',
        answerOpc: [
          { answerText: 'one', isCorrect: false },
          { answerText: 'Five ', isCorrect: true },
          { answerText: 'four ', isCorrect: false },
          { answerText: 'two', isCorrect: false },
        ],
        repost: 'Five', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001560234935992382/unknown.png',
        answerOpc: [
          { answerText: 'one', isCorrect: false },
          { answerText: 'Five ', isCorrect: false },
          { answerText: 'four ', isCorrect: false },
          { answerText: 'six', isCorrect: true },
        ],
        repost: 'six', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001560295250084011/unknown.png',
        answerOpc: [
          { answerText: 'Seven', isCorrect: true },
          { answerText: 'Five ', isCorrect: false },
          { answerText: 'four ', isCorrect: false },
          { answerText: 'six', isCorrect: false },
        ],
        repost: 'Seven', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001560446958043216/unknown.png',
        answerOpc: [
          { answerText: 'Seven', isCorrect: false },
          { answerText: 'Five ', isCorrect: false },
          { answerText: 'eight ', isCorrect: true },
          { answerText: 'six', isCorrect: false },
        ],
        repost: 'eight', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001560516583493692/unknown.png',
        answerOpc: [
          { answerText: 'Seven', isCorrect: false },
          { answerText: 'nine ', isCorrect: true },
          { answerText: 'eight ', isCorrect: false },
          { answerText: 'six', isCorrect: false },
        ],
        repost: 'nine', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001560630379171950/unknown.png',
        answerOpc: [
          { answerText: 'Seven', isCorrect: false },
          { answerText: 'nine ', isCorrect: false },
          { answerText: 'eight ', isCorrect: false },
          { answerText: 'ten', isCorrect: true },
        ],
        repost: 'ten', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001560821488435321/unknown.png',
        answerOpc: [
          { answerText: 'Seven', isCorrect: false },
          { answerText: 'twelve ', isCorrect: true },
          { answerText: 'eleven ', isCorrect: false },
          { answerText: 'ten', isCorrect: false },
        ],
        repost: 'twelve', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001560984240005222/unknown.png',
        answerOpc: [
          { answerText: 'Seven', isCorrect: false },
          { answerText: 'twelve ', isCorrect: false },
          { answerText: 'thirty ', isCorrect: true },
          { answerText: 'ten', isCorrect: false },
        ],
        repost: 'thirty', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001561042079449088/unknown.png',
        answerOpc: [
          { answerText: 'hundred', isCorrect: true },
          { answerText: 'twelve ', isCorrect: false },
          { answerText: 'thirty ', isCorrect: false },
          { answerText: 'ten', isCorrect: false },
        ],
        repost: 'hundred', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001561112015286382/unknown.png',
        answerOpc: [
          { answerText: 'hundred', isCorrect: false },
          { answerText: 'twelve ', isCorrect: false },
          { answerText: 'thirty ', isCorrect: false },
          { answerText: 'ten', isCorrect: true },
        ],
        repost: 'thousand', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001561232609923212/unknown.png',
        answerOpc: [
          { answerText: 'rapid', isCorrect: false },
          { answerText: 'write ', isCorrect: true },
          { answerText: 'utter ', isCorrect: false },
          { answerText: 'warm', isCorrect: false },
        ],
        repost: 'write', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001561378940780624/unknown.png',
        answerOpc: [
          { answerText: 'strawberry', isCorrect: true },
          { answerText: 'write ', isCorrect: false },
          { answerText: 'outrageous ', isCorrect: false },
          { answerText: 'worthless', isCorrect: false },
        ],
        repost: 'strawberry', 
  
      },
      {
        questionsImg: 'hhttps://cdn.discordapp.com/attachments/968187235130290226/1001561551876128829/unknown.png',
        answerOpc: [
          { answerText: 'strawberry', isCorrect: false },
          { answerText: 'write ', isCorrect: false },
          { answerText: 'terrify ', isCorrect: false },
          { answerText: 'soccer', isCorrect: true },
        ],
        repost: 'soccer', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001561655752265778/unknown.png',
        answerOpc: [
          { answerText: 'strawberry', isCorrect: false },
          { answerText: 'write ', isCorrect: false },
          { answerText: 'river ', isCorrect: true },
          { answerText: 'soccer', isCorrect: false },
        ],
        repost: 'river', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001561740712083486/unknown.png',
        answerOpc: [
          { answerText: 'cow', isCorrect: true },
          { answerText: 'colorful ', isCorrect: false },
          { answerText: 'copper ', isCorrect: false },
          { answerText: 'soccer', isCorrect: false },
        ],
        repost: 'cow', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001561849873043526/unknown.png',
        answerOpc: [
          { answerText: 'Bike', isCorrect: false },
          { answerText: 'bone ', isCorrect: false },
          { answerText: 'Bicycle ', isCorrect: true },
          { answerText: 'majestic', isCorrect: false },
        ],
        repost: 'Bicycle', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001562032224612432/unknown.png',
        answerOpc: [
          { answerText: 'skillful', isCorrect: false },
          { answerText: 'stairs ', isCorrect: true },
          { answerText: 'Bicycle ', isCorrect: false },
          { answerText: 'station', isCorrect: false },
        ],
        repost: 'stairs', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001562147316301874/unknown.png',
        answerOpc: [
          { answerText: 'smartphone', isCorrect: false },
          { answerText: 'stairs ', isCorrect: false },
          { answerText: 'Phone ', isCorrect: false },
          { answerText: 'telephone', isCorrect: true },
        ],
        repost: 'telephone', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001562289364811836/unknown.png',
        answerOpc: [
          { answerText: 'swim', isCorrect: false },
          { answerText: 'newspaper ', isCorrect: true },
          { answerText: 'cycle ', isCorrect: false },
          { answerText: 'clip', isCorrect: false },
        ],
        repost: 'newspaper', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001562399364620409/unknown.png',
        answerOpc: [
          { answerText: 'closed', isCorrect: true },
          { answerText: 'deeply ', isCorrect: false },
          { answerText: 'cycle ', isCorrect: false },
          { answerText: 'open', isCorrect: false },
        ],
        repost: 'closed', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001562534354112522/unknown.png',
        answerOpc: [
          { answerText: 'closed', isCorrect: false },
          { answerText: 'deeply ', isCorrect: false },
          { answerText: 'cycle ', isCorrect: false },
          { answerText: 'open', isCorrect: true },
        ],
        repost: 'closed', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001562604810027099/unknown.png',
        answerOpc: [
          { answerText: 'closed', isCorrect: false },
          { answerText: 'rain ', isCorrect: true },
          { answerText: 'remain ', isCorrect: false },
          { answerText: 'ray', isCorrect: false },
        ],
        repost: 'rain', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001562680705949716/unknown.png',
        answerOpc: [
          { answerText: 'grouchy', isCorrect: false },
          { answerText: 'rain ', isCorrect: true },
          { answerText: 'remain ', isCorrect: false },
          { answerText: 'ray', isCorrect: false },
        ],
        repost: 'Sun', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001563407666909204/unknown.png',
        answerOpc: [
          { answerText: 'grouchy', isCorrect: false },
          { answerText: 'sandwich ', isCorrect: false },
          { answerText: 'remain ', isCorrect: false },
          { answerText: 'pizza', isCorrect: true },
        ],
        repost: 'pizza', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001563457935638578/unknown.png',
        answerOpc: [
          { answerText: 'grouchy', isCorrect: false },
          { answerText: 'sandwich ', isCorrect: true },
          { answerText: 'remain ', isCorrect: false },
          { answerText: 'pizza', isCorrect: false },
        ],
        repost: 'sandwich', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/968187235130290226/1001563541142249492/unknown.png',
        answerOpc: [
          { answerText: 'grouchy', isCorrect: false },
          { answerText: 'motorcycle ', isCorrect: true },
          { answerText: 'moto ', isCorrect: false },
          { answerText: 'cycle', isCorrect: false },
        ],
        repost: 'motorcycle', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/1001555565878722591/1001558871321612359/unknown.png',
        answerOpc: [
          { answerText: 'torpid', isCorrect: false },
          { answerText: 'motorcycle ', isCorrect: false },
          { answerText: 'Heavy ', isCorrect: true },
          { answerText: 'cycle', isCorrect: false },
        ],
        repost: 'Heavy', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/1001555565878722591/1001559858463645756/unknown.png',
        answerOpc: [
          { answerText: 'torpid', isCorrect: false },
          { answerText: 'Child  ', isCorrect: true },
          { answerText: 'cycle ', isCorrect: false },
          { answerText: 'nippy', isCorrect: false },
        ],
        repost: 'Child ', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/1001555565878722591/1001560139964371084/unknown.png',
        answerOpc: [
          { answerText: 'torpid', isCorrect: false },
          { answerText: 'Child  ', isCorrect: false },
          { answerText: 'Sweet ', isCorrect: true },
          { answerText: 'nippy', isCorrect: false },
        ],
        repost: 'Sweet ', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/1001555565878722591/1001560301684142140/unknown.png',
        answerOpc: [
          { answerText: 'torpid', isCorrect: false },
          { answerText: 'Sugar  ', isCorrect: true },
          { answerText: 'Sweet ', isCorrect: false },
          { answerText: 'nippy', isCorrect: false },
        ],
        repost: 'Sugar ', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/1001555565878722591/1001560525316030635/unknown.png',
        answerOpc: [
          { answerText: 'torpid', isCorrect: false },
          { answerText: 'nippy  ', isCorrect: false },
          { answerText: 'Happy ', isCorrect: true },
          { answerText: 'delay', isCorrect: false },
        ],
        repost: 'Happy ', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/1001555565878722591/1001560709169160293/unknown.png',
        answerOpc: [
          { answerText: 'torpid', isCorrect: false },
          { answerText: 'nippy  ', isCorrect: false },
          { answerText: 'Happy ', isCorrect: false },
          { answerText: 'Photograph', isCorrect: true },
        ],
        repost: 'Photograph ', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/1001555565878722591/1001561235201982638/unknown.png',
        answerOpc: [
          { answerText: 'torpid', isCorrect: false },
          { answerText: 'nippy  ', isCorrect: false },
          { answerText: 'Girl ', isCorrect: true },
          { answerText: 'Boy', isCorrect: false },
        ],
        repost: 'Girl ', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/1001555565878722591/1001561235201982638/unknown.png',
        answerOpc: [
          { answerText: 'Boy', isCorrect: true },
          { answerText: 'nippy  ', isCorrect: false },
          { answerText: 'Girl ', isCorrect: false },
          { answerText: 'torpid', isCorrect: false },
        ],
        repost: 'Boy ', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/1001555565878722591/1001561596310593607/unknown.png',
        answerOpc: [
          { answerText: 'Boy', isCorrect: false },
          { answerText: 'Cat  ', isCorrect: true },
          { answerText: 'Dog ', isCorrect: false },
          { answerText: 'Catter', isCorrect: false },
        ],
        repost: 'Cat ', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/1001555565878722591/1001561685561184256/unknown.png',
        answerOpc: [
          { answerText: 'Boy', isCorrect: false },
          { answerText: 'Cat  ', isCorrect: false },
          { answerText: 'Dog ', isCorrect: true },
          { answerText: 'Catter', isCorrect: false },
        ],
        repost: 'Dog ', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/1001555565878722591/1001561898329841695/unknown.png',
        answerOpc: [
          { answerText: 'Boy', isCorrect: false },
          { answerText: 'Medicine  ', isCorrect: false },
          { answerText: 'Dog ', isCorrect: false },
          { answerText: 'Docto', isCorrect: true },
        ],
        repost: 'Doctor ', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/1001555565878722591/1001562871764889630/unknown.png',
        answerOpc: [
          { answerText: 'war', isCorrect: false },
          { answerText: 'Medicine  ', isCorrect: false },
          { answerText: 'winy ', isCorrect: false },
          { answerText: 'Wine', isCorrect: true },
        ],
        repost: 'Wine ', 
  
      },
      {
        questionsImg: 'https://cdn.discordapp.com/attachments/1001555565878722591/1001563902846439514/unknown.png',
        answerOpc: [
          { answerText: 'war', isCorrect: false },
          { answerText: 'Old  ', isCorrect: true },
          { answerText: 'winy ', isCorrect: false },
          { answerText: 'Olde', isCorrect: false },
        ],
        repost: 'Old ', 
  
      },









  ];

  export default questions;