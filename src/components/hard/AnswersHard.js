import React from "react";

const questions = [
  {
    questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004042534667948162/1.png',
    answerOpc: [
      { answerText: 'quase', isCorrect: false },
      { answerText: 'uma', isCorrect: true },
      { answerText: 'e', isCorrect: false },
      { answerText: 'nenhum', isCorrect: false },
    ],
    repost: 'uma',
  },

  {
    questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004061889912897556/3.png',
    answerOpc: [
      { answerText: 'depois', isCorrect: true },
      { answerText: 'tambem', isCorrect: false },
      { answerText: 'sobre', isCorrect: false },
      { answerText: 'antes', isCorrect: false },
    ],
    repost: 'depois',
  },
  {
    questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004061890781122610/5.png',
    answerOpc: [
      { answerText: 'sempre', isCorrect: false },
      { answerText: 'tudos', isCorrect: false },
      { answerText: 'todos', isCorrect: true },
      { answerText: 'todas', isCorrect: false },
    ],
    repost: 'todos',
  },
  {
    questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004061891158622208/6.png',
    answerOpc: [
      { answerText: 'feito', isCorrect: false },
      { answerText: 'smpre', isCorrect: false },
      { answerText: 'quase', isCorrect: true },
      { answerText: 'novamente', isCorrect: false },
    ],
    repost: 'quase',

  },
  {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004061891594833970/7.png',
      answerOpc: [
        { answerText: 'todos', isCorrect: false },
        { answerText: 'correto', isCorrect: false },
        { answerText: 'tambem', isCorrect: true },
        { answerText: 'certo', isCorrect: false },
      ],
      repost: 'tambem',
    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004061891942957056/8.png',
      answerOpc: [
        { answerText: 'durante', isCorrect: false },
        { answerText: 'as vezes', isCorrect: false },
        { answerText: 'constante', isCorrect: false },
        { answerText: 'sempre', isCorrect: true },
      ],
      repost: 'sempre',
    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004061892626612284/9.png',
      answerOpc: [
        { answerText: 'e', isCorrect: true },
        { answerText: 'a', isCorrect: false },
        { answerText: 'um', isCorrect: false },
        { answerText: 'uma', isCorrect: false },
      ],
      repost: 'e',
    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004061893087989872/10.png',
      answerOpc: [
        { answerText: 'agora, momento', isCorrect: false },
        { answerText: 'smepre, constante', isCorrect: false },
        { answerText: 'todos, completos', isCorrect: false },
        { answerText: 'qualquer, nenhum', isCorrect: true },
      ],
      repost: 'qualquer, nenhum',
    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070052246601809/14.png',
      answerOpc: [
        { answerText: 'largo', isCorrect: false },
        { answerText: 'pequeno', isCorrect: false },
        { answerText: 'grande', isCorrect: true },
        { answerText: 'gordo', isCorrect: false },
      ],
      repost: 'grande', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070052540190730/15.png',
      answerOpc: [
        { answerText: 'rosto', isCorrect: false },
        { answerText: 'contrucao', isCorrect: false },
        { answerText: 'corpo', isCorrect: true },
        { answerText: 'estrutura', isCorrect: false },
      ],
      repost: 'corpo',
    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070052854759575/16.png',
      answerOpc: [
        { answerText: 'entoa', isCorrect: false },
        { answerText: 'se', isCorrect: false },
        { answerText: 'mais', isCorrect: false },
        { answerText: 'mas', isCorrect: true },
      ],
      repost: 'mais',
    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070053152567296/17.png',
      answerOpc: [
        { answerText: 'por', isCorrect: true },
        { answerText: 'porem', isCorrect: false },
        { answerText: 'para', isCorrect: false },
        { answerText: 'primeiro', isCorrect: false },
      ],
      repost: 'por',
    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070053500690472/18.png',
      answerOpc: [
        { answerText: 'bairro', isCorrect: false },
        { answerText: 'regiao', isCorrect: false },
        { answerText: 'cidade', isCorrect: true },
        { answerText: 'estado', isCorrect: false },
      ],
      repost: 'cidade',
    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070053903335504/19.png',
      answerOpc: [
        { answerText: 'amanha', isCorrect: false },
        { answerText: 'ontem', isCorrect: false },
        { answerText: 'dia', isCorrect: true },
        { answerText: 'encontro', isCorrect: false },
      ],
      repost: 'dia', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070054440218664/20.png',
      answerOpc: [
        { answerText: 'dentro', isCorrect: false },
        { answerText: 'baixo', isCorrect: true },
        { answerText: 'alto', isCorrect: false },
        { answerText: 'lado', isCorrect: false },
      ],
      repost: 'baixo', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070101512884274/21.png',
      answerOpc: [
        { answerText: 'todo', isCorrect: true },
        { answerText: 'tudo', isCorrect: false },
        { answerText: 'longe', isCorrect: false },
        { answerText: 'eles', isCorrect: false },
      ],
      repost: 'todo', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070104834773084/26.png',
      answerOpc: [
        { answerText: 'proximo', isCorrect: false },
        { answerText: 'ao lado', isCorrect: false },
        { answerText: 'perto', isCorrect: false },
        { answerText: 'longe', isCorrect: true },
      ],
      repost: 'longe', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070105161941022/27.png',
      answerOpc: [
        { answerText: 'proximo', isCorrect: false },
        { answerText: 'aquele', isCorrect: false },
        { answerText: 'Primeiro', isCorrect: true },
        { answerText: 'segundo', isCorrect: false },
      ],
      repost: 'Primeiro', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070105627504660/28.png',
      answerOpc: [
        { answerText: 'dele', isCorrect: false },
        { answerText: 'para', isCorrect: true },
        { answerText: 'quatro', isCorrect: false },
        { answerText: 'primeiro', isCorrect: false },
      ],
      repost: 'para', 

    },
    {
      questionsImg: 'https://media.discordapp.net/attachments/968187282010042388/1004070140159213651/31.png?width=705&height=460',
      answerOpc: [
        { answerText: 'de', isCorrect: true },
        { answerText: 'da', isCorrect: false },
        { answerText: 'do', isCorrect: false },
        { answerText: 'para', isCorrect: false },
      ],
      repost: 'de', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070140465381497/32.png',
      answerOpc: [
        { answerText: 'bom', isCorrect: true },
        { answerText: 'deus', isCorrect: false },
        { answerText: 'deuses', isCorrect: false },
        { answerText: 'pessimo', isCorrect: false },
      ],
      repost: 'bom', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070140855455875/33.png',
      answerOpc: [
        { answerText: 'sorriso', isCorrect: false },
        { answerText: 'deprimido', isCorrect: false },
        { answerText: 'feliz', isCorrect: true },
        { answerText: 'triste', isCorrect: false },
      ],
      repost: 'feliz', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070141362974770/34.png',
      answerOpc: [
        { answerText: 'elas', isCorrect: false },
        { answerText: 'elas', isCorrect: false },
        { answerText: 'eles', isCorrect: false },
        { answerText: 'ele', isCorrect: true },
      ],
      repost: 'Ele', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070142008889394/36.png',
      answerOpc: [
        { answerText: 'proximo', isCorrect: false },
        { answerText: 'aqui', isCorrect: true },
        { answerText: 'ali', isCorrect: false },
        { answerText: 'la', isCorrect: false },
      ],
      repost: 'aqui', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070142994563152/39.png',
      answerOpc: [
        { answerText: 'calor', isCorrect: false },
        { answerText: 'com', isCorrect: false },
        { answerText: 'como', isCorrect: true },
        { answerText: 'come', isCorrect: false },
      ],
      repost: 'como', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070143342674060/40.png',
      answerOpc: [
        { answerText: 'eu', isCorrect: true },
        { answerText: 'ele', isCorrect: false },
        { answerText: 'ela', isCorrect: false },
        { answerText: 'eles', isCorrect: false },
      ],
      repost: 'eu', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070178717446205/41.png',
      answerOpc: [
        { answerText: 'nossa', isCorrect: false },
        { answerText: 'sua ', isCorrect: false },
        { answerText: 'seu ', isCorrect: false },
        { answerText: 'se', isCorrect: true },
      ],
      repost: 'se', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070179082346637/42.png',
      answerOpc: [
        { answerText: 'na', isCorrect: false },
        { answerText: 'de', isCorrect: true },
        { answerText: 'dentro', isCorrect: false },
        { answerText: 'aqui', isCorrect: false },
      ],
      repost: 'em', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070179447242852/43.png',
      answerOpc: [
        { answerText: 'nossa', isCorrect: false },
        { answerText: 'dentro', isCorrect: false },
        { answerText: 'ultimo ', isCorrect: true },
        { answerText: 'proximo', isCorrect: false },
      ],
      repost: 'ultimo', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070180361613322/44.png',
      answerOpc: [
        { answerText: 'dinheiro', isCorrect: false },
        { answerText: 'muito ', isCorrect: true },
        { answerText: 'pouco ', isCorrect: false },
        { answerText: 'bastante', isCorrect: false },
      ],
      repost: 'muito', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070181108191312/46.png',
      answerOpc: [
        { answerText: 'nada', isCorrect: false },
        { answerText: 'muito ', isCorrect: false },
        { answerText: 'menos ', isCorrect: false },
        { answerText: 'mais', isCorrect: true },
      ],
      repost: 'mais', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070182534262956/50.png',
      answerOpc: [
        { answerText: 'distante', isCorrect: true },
        { answerText: 'ao lado', isCorrect: false },
        { answerText: 'longe', isCorrect: false },
        { answerText: 'perto', isCorrect: false },
      ],
      repost: 'perto', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070215539232828/51.png',
      answerOpc: [
        { answerText: 'nevan', isCorrect: false },
        { answerText: 'neve', isCorrect: false },
        { answerText: 'nunca ', isCorrect: true },
        { answerText: 'sempre', isCorrect: false },
      ],
      repost: 'nunca', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070215967068170/52.png',
      answerOpc: [
        { answerText: 'moderno', isCorrect: false },
        { answerText: 'novo ', isCorrect: true },
        { answerText: 'velho ', isCorrect: false },
        { answerText: 'antigo', isCorrect: false },
      ],
      repost: 'novo', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070216331956344/53.png',
      answerOpc: [
        { answerText: 'natal', isCorrect: false },
        { answerText: 'nove ', isCorrect: false },
        { answerText: 'sim ', isCorrect: false },
        { answerText: 'nao', isCorrect: true },
      ],
      repost: 'nao', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070216692662322/54.png',
      answerOpc: [
        { answerText: 'novo', isCorrect: false },
        { answerText: 'novidade ', isCorrect: true },
        { answerText: 'eleven ', isCorrect: false },
        { answerText: 'ao vivo', isCorrect: false },
      ],
      repost: 'agora', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070217984512210/56.png',
      answerOpc: [
        { answerText: 'ne,na', isCorrect: false },
        { answerText: 'nu,na ', isCorrect: false },
        { answerText: 'no,na ', isCorrect: true },
        { answerText: 'no,ne', isCorrect: false },
      ],
      repost: 'no,na', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070218450087966/57.png',
      answerOpc: [
        { answerText: 'apenas', isCorrect: true },
        { answerText: 'agora ', isCorrect: false },
        { answerText: 'nosso ', isCorrect: false },
        { answerText: 'outra', isCorrect: false },
      ],
      repost: 'apenas', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070218865328268/58.png',
      answerOpc: [
        { answerText: 'nada', isCorrect: false },
        { answerText: 'talvez ', isCorrect: false },
        { answerText: 'wow ', isCorrect: false },
        { answerText: 'ou', isCorrect: true },
      ],
      repost: 'ou', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070219398008943/59.png',
      answerOpc: [
        { answerText: 'apenas', isCorrect: false },
        { answerText: 'outro ', isCorrect: true },
        { answerText: 'somente ', isCorrect: false },
        { answerText: 'ou', isCorrect: false },
      ],
      repost: 'outro', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070221239292055/60.png',
      answerOpc: [
        { answerText: 'nosso', isCorrect: true },
        { answerText: 'deles ', isCorrect: false },
        { answerText: 'delas ', isCorrect: false },
        { answerText: 'outros', isCorrect: false },
      ],
      repost: 'nosso', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070258677653565/61.png',
      answerOpc: [
        { answerText: 'delas', isCorrect: false },
        { answerText: 'informe ', isCorrect: false },
        { answerText: 'dentro ', isCorrect: false },
        { answerText: 'fora', isCorrect: true },
      ],
      repost: 'fora', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070259726233620/62.png',
      answerOpc: [
        { answerText: 'ela', isCorrect: false },
        { answerText: 'ele ', isCorrect: false },
        { answerText: 'pessoa ', isCorrect: true },
        { answerText: 'galera', isCorrect: false },
      ],
      repost: 'pessoa', 

    },

    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070260959346698/65.png',
      answerOpc: [
        { answerText: 'o esquerdo', isCorrect: false },
        { answerText: 'o lado ', isCorrect: false },
        { answerText: 'o mesmo ', isCorrect: true },
        { answerText: 'o difernte', isCorrect: false },
      ],
      repost: 'o mesmo', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070261328457800/66.png',
      answerOpc: [
        { answerText: 'elas', isCorrect: false },
        { answerText: 'ela ', isCorrect: true },
        { answerText: 'ele ', isCorrect: false },
        { answerText: 'eles', isCorrect: false },
      ],
      repost: 'ela', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070261668188272/67.png',
      answerOpc: [
        { answerText: 'portanto', isCorrect: false },
        { answerText: 'porem ', isCorrect: false },
        { answerText: 'igual ', isCorrect: false },
        { answerText: 'entao', isCorrect: true },
      ],
      repost: 'entao', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070293498761326/71.png',
      answerOpc: [
        { answerText: 'do qual', isCorrect: false },
        { answerText: 'do que ', isCorrect: true },
        { answerText: 'do quem ', isCorrect: false },
        { answerText: 'do la', isCorrect: false },
      ],
      repost: 'do que ', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070294895460362/74.png',
      answerOpc: [
        { answerText: 'deles', isCorrect: true },
        { answerText: 'nosso ', isCorrect: false },
        { answerText: 'daqueles ', isCorrect: false },
        { answerText: 'meus', isCorrect: false },
      ],
      repost: 'deles', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070295235211384/75.png',
      answerOpc: [
        { answerText: 'nosso', isCorrect: false },
        { answerText: 'deles ', isCorrect: false },
        { answerText: 'delas ', isCorrect: false },
        { answerText: 'eles', isCorrect: true },
      ],
      repost: 'eles', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070295612690543/76.png',
      answerOpc: [
        { answerText: 'eles', isCorrect: false },
        { answerText: 'la ', isCorrect: true },
        { answerText: 'aqui ', isCorrect: false },
        { answerText: 'dento', isCorrect: false },
      ],
      repost: 'la', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070296359284806/78.png',
      answerOpc: [
        { answerText: 'casao', isCorrect: false },
        { answerText: 'coisa ', isCorrect: true },
        { answerText: 'coisas ', isCorrect: false },
        { answerText: 'casacos', isCorrect: false },
      ],
      repost: 'coisa', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070296673853520/79.png',
      answerOpc: [
        { answerText: 'aquilo', isCorrect: false },
        { answerText: 'nossos ', isCorrect: false },
        { answerText: 'aquele ', isCorrect: false },
        { answerText: 'este', isCorrect: true },
      ],
      repost: 'este', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070297009406113/80.png',
      answerOpc: [
        { answerText: 'hoje', isCorrect: false },
        { answerText: 'tempo ', isCorrect: true },
        { answerText: 'cronometro ', isCorrect: false },
        { answerText: 'horario', isCorrect: false },
      ],
      repost: 'tempo', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070335932530788/81.png',
      answerOpc: [
        { answerText: 'coisas', isCorrect: false },
        { answerText: 'para ', isCorrect: true },
        { answerText: 'parado ', isCorrect: false },
        { answerText: 'estacionado', isCorrect: false },
      ],
      repost: 'para', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070339673858149/82.png',
      answerOpc: [
        { answerText: 'agora', isCorrect: false },
        { answerText: 'dia ', isCorrect: false },
        { answerText: 'hoje ', isCorrect: true },
        { answerText: 'amanha', isCorrect: false },
      ],
      repost: 'hoje', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070340290424874/83.png',
      answerOpc: [
        { answerText: 'atras', isCorrect: false },
        { answerText: 'embaixo  ', isCorrect: true },
        { answerText: 'emcima ', isCorrect: false },
        { answerText: 'ao lado', isCorrect: false },
      ],
      repost: 'embaixo ', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070340659527772/84.png',
      answerOpc: [
        { answerText: 'EUA', isCorrect: false },
        { answerText: 'doces  ', isCorrect: false },
        { answerText: 'nos ', isCorrect: true },
        { answerText: 'deles', isCorrect: false },
      ],
      repost: 'nos ', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070341666160663/87.png',
      answerOpc: [
        { answerText: 'torpid', isCorrect: false },
        { answerText: 'Sugar  ', isCorrect: true },
        { answerText: 'Sweet ', isCorrect: false },
        { answerText: 'nippy', isCorrect: false },
      ],
      repost: 'porque ', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070341380931687/86.png',
      answerOpc: [
        { answerText: 'novo', isCorrect: false },
        { answerText: 'rapido  ', isCorrect: false },
        { answerText: 'muito ', isCorrect: true },
        { answerText: 'pouco', isCorrect: false },
      ],
      repost: 'muito',

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070342303682640/89.png',
      answerOpc: [
        { answerText: 'o qual', isCorrect: false },
        { answerText: 'o quando  ', isCorrect: false },
        { answerText: 'o onde ', isCorrect: false },
        { answerText: 'o que', isCorrect: true },
      ],
      repost: 'o que ', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070342727319583/90.png',
      answerOpc: [
        { answerText: 'preco', isCorrect: false },
        { answerText: 'valor  ', isCorrect: false },
        { answerText: 'quando ', isCorrect: true },
        { answerText: 'aonde', isCorrect: false },
      ],
      repost: 'quando ', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070368060899378/93.png',
      answerOpc: [
        { answerText: 'quem', isCorrect: true },
        { answerText: 'quando  ', isCorrect: false },
        { answerText: 'aonde ', isCorrect: false },
        { answerText: 'como', isCorrect: false },
      ],
      repost: 'quem ', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070368392269884/94.png',
      answerOpc: [
        { answerText: 'porque', isCorrect: false },
        { answerText: 'por que   ', isCorrect: true },
        { answerText: 'como ', isCorrect: false },
        { answerText: 'desde', isCorrect: false },
      ],
      repost: 'por que ', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070368992043068/95.png',
      answerOpc: [
        { answerText: 'aonde', isCorrect: false },
        { answerText: 'quando  ', isCorrect: false },
        { answerText: 'com ', isCorrect: true },
        { answerText: 'como', isCorrect: false },
      ],
      repost: 'com ', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070369763807252/97.png',
      answerOpc: [
        { answerText: 'mundo', isCorrect: false },
        { answerText: 'texto  ', isCorrect: false },
        { answerText: 'frase ', isCorrect: false },
        { answerText: 'palavra', isCorrect: true },
      ],
      repost: 'palavra', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070370229366794/98.png',
      answerOpc: [
        { answerText: 'sem', isCorrect: false },
        { answerText: 'sen  ', isCorrect: false },
        { answerText: 'sin ', isCorrect: false },
        { answerText: 'sim', isCorrect: true },
      ],
      repost: 'sim ', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070370720108564/99.png',
      answerOpc: [
        { answerText: 'elas', isCorrect: false },
        { answerText: 'voce  ', isCorrect: true },
        { answerText: 'ele ', isCorrect: false },
        { answerText: 'eles', isCorrect: false },
      ],
      repost: 'voce ', 

    },
    {
      questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004070371399573534/100.png',
      answerOpc: [
        { answerText: 'nosso', isCorrect: false },
        { answerText: 'seu  ', isCorrect: true },
        { answerText: 'ceu ', isCorrect: false },
        { answerText: 'dele', isCorrect: false },
      ],
      repost: 'seu ', 

    },
    



  ];

  export default questions;