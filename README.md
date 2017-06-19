# react-google-url-shortner
npm package for react

## This module creates short-url for the given url.

## Props

 * url (Required) - Add url you want to shorten.
 * GOOGLE_API_KEY - Api Key created from google Project.

## Usage
```js
import GoogleUrlShortner from 'react-google-url-shortner';

// ...

class Foo extends Component {
    render() {
        return (
            <GoogleUrlShortner
              url="{example url here}" 
              GOOGLE_API_KEY="{YOUR project API key here}"
            />
        );
    }
}
```
## Author : stejas123
