# Password Generator

This password generator takes a number of given restrictions and then produces a randomized password that fits those criteria. Parameters that may be given by the user include password length, the use of upper and lower case letters, and the use of special characters and numbers.

## Use

The password generator is made to be easy to use for all users. It has validation checks to ensure that the inputs given to it are valid and result in an appropriate password for each user. It functions in any major web browser and can be accessed from varying devices.

### Image

Here is an image of that the password generator looks like:

![Site](./assets/Screenshot.png.png)

### Code Examples

Here is an example of some of the code that makes the password generator function:

```
function passQuery(){
  while(passLength === 0){ 
    var lengthNumber = prompt("Please choose a length for your password between 8 and 128 characters.", "number");
      if(lengthNumber>=8 && lengthNumber<=128){
        (passLength=parseInt(lengthNumber));
      }
     else(alert("Invalid password length. Please choose a number between 8 and 128"));
  
  }
}
```


## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Deployed Link

* [https://popsizzle.github.io/Password-Generator/](#)


## Authors

* Sam Poppe

- [Link to Portfolio Site](https://popsizzle.github.io/Portfolio/)
- [Link to Github](https://github.com/PopSizzle)
- [Link to LinkedIn](https://www.linkedin.com/in/sam-poppe-623281193/)s

## License

This project is licensed under the MIT License 

## Acknowledgments

* Thanks to my teachers and all of my classmates who helped me learn javascript at UC Berkeley Extension.
