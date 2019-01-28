# Sample Setup For Rails, [Webpacker][1] and [Purgecss][2].

This example demonstrates removing unused CSS classes from the excellent [Tailwind CSS][3] framework. The main configuration is based on this [gist][4], except it focuses on just ERB files.

In this example, the Purgecss configuration is in the webpacker production.js file. This means you will not see Purgecss used in development. If you want to see what happens in development, you could copy everything except the NODE_ENV from the production.js to development.js or move the code from production.js to environment.js.

## How to install the sample app

1. Clone the project 
2. `bundle install`
3. `yarn install`

## How to Setup In Your Own Project

1. Follow the setup instructions on the [Tailwind CSS gem][5].
2. `yarn add glob-all purgecss-webpack-plugin`
3. See code in config/webpack/production.js

## Issue(s)

There is one major issue I am trying to work out. In the event you are using a CDN for assets, hash on the manifest file appears to be based on the pre-processed CSS. This means you may add/remove something from an ERB file which will change the classes you need to have available in your CSS. Purgecss will do the right thing and remove the classes you are not using and keep the ones you need. However, since the manifest file name does not change, if the CSS file is cached on your CDN, you will likely not see changes.

Ensuring the contents of your CSS files change or flushing the CND cache will work around this, but it is not an ideal long term solution. This feels like it should be solvable (and may be solved already), but I do not know myself yet.

[1]:https://www.purgecss.com/
[2]:https://github.com/rails/webpacker
[3]:https://tailwindcss.com/
[4]:https://gist.github.com/nerdcave/ade26d701060d93e95ec83ddf58784b5
[5]:https://github.com/IcaliaLabs/tailwindcss-rails
