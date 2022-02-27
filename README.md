# Getting Started with Flick demo app
[Live version](https://d2ot71redzuh0e.cloudfront.net/) 
Webpack configuration is forked from [webpack-react](https://github.com/mpontus/webpack-react).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run storybook`

Runs the stories. An interactive widget to render in different viewports and test for all possible props

### `npm run test`

Launches the test runner

### `npm run test -- -u`

Updates snapshots captured.

### `npm run test:coverage`

Generates test coverage report

<img width="676" alt="Test_coverage" src="https://user-images.githubusercontent.com/41263776/155880840-14ddec7e-3e4f-4dbc-a421-c724b87e9da5.PNG">

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## `Code formatting`
### `npm run lint`

Checks for any linting errors and warnings, [configuation -] (https://github.com/Tejaswi2737/flickr_demo_app/blob/master/.eslintrc.js)

### `npm run lint:fix`

Checks and fixes all auto-fixable linting errors and warnings, [configuation -] (https://github.com/Tejaswi2737/flickr_demo_app/blob/master/.eslintrc.js)

#### `pre-commit hooks`

`npm run lint` and `npm test`, [checks], https://github.com/Tejaswi2737/flickr_demo_app/blob/master/package.json#L20 

## `Deployment`

### `npm run deploy`
Uploads the build to AWS s3 bucket. 


## `Code structure`
<img width="190" alt="Structure" src="https://user-images.githubusercontent.com/41263776/155881027-787fa906-2965-4bcd-92c4-a5d1626f16f1.PNG">
![image](https://user-images.githubusercontent.com/41263776/155905273-dc80f8d6-0529-4069-a081-4709192927ac.png)**

## `Features`

1.	**Responsive UI  mobile, tablet, desktop, and large screens**
2.	**Custom useDeviceType hook for screen type detection**
3.	**State management using redux tool kit, https://redux-toolkit.js.org/**
4.	**Unit tests for all helpers and redux store**
5.	**Snapshot testing for features and components**
6.	**Interactive storybook server**
7.	**Test coverage**
8.	**Husky pre-commit hooks runs tests and lint and stops bad/ failed code from entering code base**
9.	**Styled with styled-components** 
10.	**Automated deployment with AWS cli setup**
11.	**Deployed in CloudFront, https://d2ot71redzuh0e.cloudfront.net/**


