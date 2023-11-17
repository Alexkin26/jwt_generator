const { v4: uuidv4 } = require('uuid');
const express = require('express');
const jwt = require('jsonwebtoken');

app = express();

app.route('/jwt').get((req, res) => {
  let value = jwt.sign(
    {
      iss: 'Y0g7hYZhku3i37RvyX0as2whMWphJp362252WiOFFNumOTMvzg7lDF9LLaJSm4r8zJQD58wvfXzKLrxZ',
      sub: uuidv4(), // Unique token identifier
      uid: 'beta', // User identifier
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 60
    },
    'lj4qSZ9m8KGtbJEwvSCvR5RZzrc5ovmvmlaNXza1R6MpQPPsXFxZwJx8R9s777s5kMLgB62QkFHo6y1b',
    { algorithm: 'HS256' }
  );

  console.log(value);

  res.json({ value });
});

app.listen(3001);

console.log('___                                      .-~. /_"-._');
console.log('`-._~-.                                  / /_ "~o\\  :Y');
console.log('   \\  \\                                / : \\~x.  ` \')');
console.log('    ]  Y                              /  |  Y< ~-.__j');
console.log('   /   !                        _.--~T : l  l<  /.-~');
console.log('  /   /                 ____.--~ .   ` l /~\\ \\<|Y');
console.log(' /   /             .-~~"        /| .    \',-~\\ \\L|');
console.log('/   /             /     .^   \\ Y~Y \\.^>/l_   "--\'');
console.log('/   Y           .-"(  .  l__  j_j l_/ /~_.-~    .');
console.log('Y    l          /    \\  )    ~~~." / `/"~ / \\.__/l_');
console.log('|     \\     _.-"      ~-{__     l  :  l._Z~-.___.--~');
console.log('|      ~---~           /   ~~"---\\_  \' __[>');
console.log('l  .                _.^   ___     _>-y~');
console.log('\\  \\     .      .-~   .-~   ~>--"  /');
console.log('\\  ~---"            /     ./  _.-\'');
console.log(' "-.,_____.,_  _.--~\     _.-~');
console.log('             ~~     (   _}       -Row');
console.log('                    `. ~(');
console.log('                      )  \\\')');
console.log('                     /,`--\'~\--\'~\\');
console.log('           ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('                      ->T-Rex<-');
console.log('App running and lintening on port 3001...');