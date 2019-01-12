// Question Flow
// Ver. 1.0.0
// Saparov Arman
// S.A. Inc.
// 01/13/2019

'use strict';

const readline = require('readline');

const completions = ['question', 'Application', 'Transport', 'Network', 'Data link', 'Physical'];

// Color Prompt Methods.
const colors = {
   reset: function(string) {
      return `\x1b[0m${string}\x1b[0m`;
   },

   black: function(string) {
      return `\x1b[30m${string}\x1b[0m`;
   },

   red: function(string) {
      return `\x1b[31m${string}\x1b[0m`;
   },

   green: function(string) {
      return `\x1b[32m${string}\x1b[0m`;
   },

   yellow: function(string) {
      return `\x1b[33m${string}\x1b[0m`;
   },

   blue: function(string) {
      return `\x1b[34m${string}\x1b[0m`;
   },

   purple: function(string) {
      return `\x1b[35m${string}\x1b[0m`;
   },

   cyan: function(string) {
      return `\x1b[36m${string}\x1b[0m`;
   },

   white: function(string) {
      return `\x1b[37m${string}\x1b[0m`;
   },
};

// Readline Config.
const completer = function(line) {
   const hits = completions.filter((com) => com.startsWith(line));
   // show all completions if none found.
   return [hits.length ? hits : completions, line];
};

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
   completer: completer,
   terminal: true,
   historySize: 30, 
   prompt: `${colors.purple('\n> ')}`,
   crlfDelay: 100,
   removeHistoryDuplicates: false,
});



const TcpIpQuestion = new Map();
TcpIpQuestion.set('question', `What is the Level of Routing and Addressing of TCP/IP Stack?`);
TcpIpQuestion.set(1, 'Application');
TcpIpQuestion.set(2, 'Transport');
TcpIpQuestion.set(3, 'Network');
TcpIpQuestion.set(4, 'Data link');
TcpIpQuestion.set(5, 'Physical');
TcpIpQuestion.set('answer', 'Network');
TcpIpQuestion.set(false, `It's the Network Level.`);
TcpIpQuestion.set(true, `Yes. Right! On the Network Level of TCP/IP processed Routing and Addressing.`);



const getTcpIpQuestion = () => {
   console.log('\n' + TcpIpQuestion.get('question') + '\n');

   for (let [key, value] of TcpIpQuestion) {
      if (typeof(key) === 'number') {
         switch (key) {
            case 1: {
               console.log(colors.green(value));
               break;
            };
            case 2: {
               console.log(colors.purple(value));
               break;
            };
            case 3: {
               console.log(colors.blue(value));
               break;
            };
            case 4: {
               console.log(colors.red(value));
               break;
            };
            case 5: {
               console.log(colors.yellow(value));
               break;
            }
         }
      }
   }

   rl.question(`\nAnd your Answer is: `, (answer) => {
      if (answer == TcpIpQuestion.get('answer')) {
         console.log(colors.green(TcpIpQuestion.get(true)));
         rl.prompt();
      } else {
         console.log(`No. It's not ${answer} Level. ${colors.red(TcpIpQuestion.get(false))}`);
         rl.prompt();
      }
   });
};



// Start the App.
const main = (() => {
   // Private Scope.

   rl.prompt();

   rl.on('line', (line) => {
      switch (line.trim().toLowerCase()) {
         // Handle an empty Input.
         case 'question':
            getTcpIpQuestion();
         break;
            
         default:
            console.log(`Command not found`);
         break;
      }

   rl.prompt();

   }).on('close', () => {
      process.exit(0);
   });

   return {
      // Public Scope.
   };
})();
