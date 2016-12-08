# Noah Vision

Noah's personal website, you can visit the web page at [http://wwww.noahpic.com](https://noahpic.azurewebsites.net)

## Project Introduction
It's a tiny display web page which is build on [vuejs](http://vuejs.org) webpack template created by vue-cli. You can visit https://github.com/vuejs-templates/webpack for more information

## WorkItems
- [X] Contains a welcome part, and show when loading this page.
- [X] Contains a display part, which will show images
- [ ] When scroll, the page can scroll smoothly from welcome part to display part
- [X] I can choose tags and show different images
- [ ] In display part, navigator bar should be fixed on the top
- [ ] When show display part, I should not see the welcome part
- [X] Images can show in waterfall layout
- [ ] Images has animation when show and dispear
- [X] I can view image's large photo
- [X] Onwer can easily replace and config all images
- [X] Owner can easily config tags
- [X] Contains a contact part, which will show the mail and phone
- [X] Contains a copyright part
- [ ] Self adaption in different size

## Build
### Environment requirment
- [nodejs](http://nodejs.org) version >= 4.0
- npm version >= 3.0

### Build steps

Sync this repo to local and run the following command to install necessary packages.

``` bash
# install dependencies
npm install
```

Use the following command to run this project in a dev mode

``` bash
# serve with hot reload at localhost:8080
npm run dev
```

Use the following command to build bits, then move all files in dist/ folder to your server `wwwroot` to deploy

``` bash
# build for production with minification, the bits are put into dist folder
npm run build
```

## File Hierarchy
```txt
/
|- build/
|- config/
|- src/
|   |- assets/
|       |- image-factory.js    // config all exhibit images' information, including filename, thumb file name, width, height
|       |- portfolio-config.js // config tag information, including id, display name and description
|   |- components/
|       |- Contact.vue    // contains onwer's contact information
|       |- Copyright.vue  // copyright information
|       |- Exhibit.vue    // image display part, contains tag choose, waterfall layout, and invoker of Previewer
|       |- Introduct.vue  // welcome part
|       |- Main.vue       // things except for welcome part, horizontal align center
|       |- Previewer.vue  // Photoswipe interface
|   |- App.vue            // All part
|   |- main.js            // Page entery, create the vue instance
|- static/
|   |- portfolio/         // Images
|- index.html
```
