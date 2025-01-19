<h1>TOKITOV1<sub><sub><sub><h6>- Developed by: AkhiroTEAM</h6></sub></sub></h1>

<img align="center" src="https://i.imgur.com/kNlbCcr.gif"/>

<p>• Welcome to Tokito Messenger Chatbot developed by AkhiroTEAM. This is a revolutionized Messenger AI Chatbot to give happiness and fun to the user's. This is just a beta test only. So please do not expect to have a better and good running system. Also do not modify this botfile. Thanks</p>

<p> This botfile may come in many features and an easy command code developement. This botfile contains the educational and entertainment commands just for you. This botfile created is not used for any sexual or explicit content, so please use it at your own will.</p>

<h1>HOW TO INSTALL?</h1>

<p>• So how to install the botfile into your coding area or programming area (eg. replit, vscode, etc.). Just simply type this command below into your shell or terminal.</p>

```bash
 git clone https://github.com/itsmeakhiro/TOKITOV1-.git
```

<h1>HOW TO MAKE A CMDS?</h1>

<p>• Go to the folder of modules and commands. then create a a name of your file that ends either on .js or .ts, The code example is in below.</p>

``Javascript``
```js
// Example: Test.js

module.exports = {
  metadata: {
    name: "test",
    aliases: ["t", "hi"],
    version: "1.0.0",
    author: "AkhiroDEV",
    botAdmin: true, //either true or false
    description: "bots description",
    cooldown: 5,
    usage: "bots usage"
  },
  async onRun({ box, event, args, userInfos, fonts }){
    box.send(fonts.sans("Hello"));
  }
}
```

``Typescript``
```ts
export const metadata = {
  name: "test",
  aliases: ["t", "hi"],
  version: "1.0.0",
  author: "AkhiroDEV",
  botAdmin: true, //either true or false
  description: "bots description",
  cooldown: 5,
  usage: "bots usage"
},
 export async function onRun({ box, event, args, userInfos, fonts }){
  box.send(fonts.sans("Hi, this is a message."));
}
```

**FUNCTIONS**

• Here is the some function's using **box**, **fonts**, **events**, **userInfos**

``box.send():`` This is where it sends a message to the user.

```javascript
// Usage
box.send("Hi, this is a message.", event.messageID);

// Output: Hi, this is a message.
```

``box.reply():`` Where it replies to the user with a message.

```javascript
// Usage
box.reply("Hi, this is a message.", event.messageID);

// Output: Hi, this is a message.
```

``box.removeParticipant():`` Removes the user from the Group Chats.

```javascript
// Usage
box.removeParticipant(userID, event.threadID);

// Output: User will be kicked out of GC.
```

``box.addParticipant():`` Adds the user from the Group Chats.

```js
// Usage
box.addParticipant(userID, event.threadID);

// Output: User will be in the GC.
```

``box.edit():`` Edits the bots message

```js
// Usage
const msg2 = "Hellow this is a secondary message",

box.edit("Hi this is the primary message", msg2.messageID);

// Output: First the first message was being sent then the second one will sent, you may also use the setTimeout to add a delay.
```

``userInfos.get():`` Wherein it gets the user infos that is useful for some occasions.

```js
// Example Usage:

const { name } = userInfos.get("61554222594723"); // use event.senderID here

box.send(`Hello user ${name}.`);

// Output: Hello user Francis Loyd M. Raval
```

``fonts:`` Wherein you can add fonts to the text, but warning the fonts function sometimes wont work on other function.

```js
// Usage:

box.send(fonts.sans("Hi, this is a message"));

// Output: 𝖧𝗂 𝗍𝗁𝗂𝗌 𝗂𝗌 𝖺 𝗆𝖾𝗌𝗌𝖺𝗀𝖾
```

**OTHER FUNCTIONS**

``botAdmin:`` Where it is set into **true** only the Admins can use the command that set into true then if **false**. Everyone can use the command.

``cooldown:`` Wherein it sends a message cooldown to avoid spamming.

<h1>CREDITS</h1>
<sub><p>• Special thanks to those persons helped me out finished this Project Botfile</p></sub>

> - Francis Loyd Raval
> - Rui Reogo