
A jQuery plugin on top of twitter bootstrap for creating dynamic quizzes. 

[View the demo here](https://coldflame.github.io/greenpeace-quiz-plugin/)

## Libraries used. 

I have used Twitter bootstrap, to make it responsive and development fast. Used its modal dialog only. 
I have made my own plugin for the quizzes. It is a prototype there are lot of things that can be added. 
I have shown selected indexes of questions on result dialog due to shortage of time. 

## Purpose for creating Plugin

I have created a plugin because it can be used now anywhere else on same page or on another page, just need to provide questions details as shown below. 
    - For prototype purpose only questions are added other wise more details like Quiz title can also be part of plugin,
    - Same like header and footer can also be controlled from plugin. 
    - More animation can be added to make things interactive. 

### An overview of UX/UI Experience. 
- First question is loaded by default, you can see the count 1 of 6 on right side. 
- Back button is disabled because it is first step, Next button is enabled because it has more questions, if you press Next button a message will be show saying, _ Please select an option to proceed _. 
- Hovering any image will show a select button and pressing that button , image option will be selected. 
- After selection, you will see on selected image, select button will not be shown. 
- As you move forward using Next button, you will see count will increase i.e 2 Of 6.
- Back button is enabled as you will be on 2nd question. 
- This plugin has ability to show text type choices as well. you can see that as question 4. 
- Clicking text row will select and check shown checkbox as well. 
- As you are on final step, Next button will be changed into Finish. 
- Pressing Finish button, you will see a dialog as result. 
- All questions html is not generated at once, as you move to some question only that html is created and displayed. If you have lot of questions then page have less html which is shown to user. 
- When an element is selected you go back and fourth, code logic always remember your selection. 

## Demo And Usage

See `index.html` for demo and suggested HTML structure (the element class names are the important part).

## Available Options

To initialize your quiz:

    $('.quizme').quiz({
        questions = []
        // options can be added
    });


## Base Config Options

See `Index.html` for implementation. 

    var questionsJSON = [ {"type":"text", 
                          "questionText": "Pick an animal",
                          "options" : []
                         },
                         {"type":"image", 
                          "questionText": "Pick an animal",
                          "options" : []
                         } 
                        ]
    // For image type currently support multiple of 3 options.
    var optionsJSON    = [ {"label": "", "category": "Greenpeace", "imgSrc": "https://img.buzzfeed.com/buzzfeed-static/static/2014-10/16/9/enhanced/webdr09/enhanced-buzz-768-1413466971-1.jpg?downsize=715:*&output-format=auto&output-quality=auto"},
                                {"label": "", "category": "Greenpeace", "imgSrc": "https://img.buzzfeed.com/buzzfeed-static/static/2014-10/16/9/enhanced/webdr11/enhanced-buzz-1858-1413467065-16.jpg?downsize=715:*&output-format=auto&output-quality=auto"},
                                {"label": "", "category": "Greenpeace", "imgSrc": "https://img.buzzfeed.com/buzzfeed-static/static/2014-10/16/9/enhanced/webdr08/enhanced-buzz-18695-1413467110-38.jpg?downsize=715:*&output-format=auto&output-quality=auto"},
                                {"label": "", "category": "Greenpeace", "imgSrc": "https://img.buzzfeed.com/buzzfeed-static/static/2014-10/16/9/enhanced/webdr04/enhanced-buzz-12005-1413467194-0.jpg?downsize=715:*&output-format=auto&output-quality=auto"},
                                {"label": "", "category": "Greenpeace", "imgSrc": "https://img.buzzfeed.com/buzzfeed-static/static/2014-10/16/9/enhanced/webdr08/enhanced-buzz-18673-1413467253-26.jpg?downsize=715:*&output-format=auto&output-quality=auto"},
                                {"label": "", "category": "Greenpeace", "imgSrc": "https://img.buzzfeed.com/buzzfeed-static/static/2014-10/17/10/enhanced/webdr10/enhanced-buzz-21284-1413556208-0.jpg?downsize=715:*&output-format=auto&output-quality=auto"}
                           ]
    // For text type
    var optionsJSON    = [ {"text": "Trustworthy and steadfast"},
                                {"text": "Spontaneous and easy going"},
                                {"text": "Tough and stoic"},
                                {"text": "Pure and earthy"},
                                {"text": "Fashionable and hip"},
                                {"text": "Bubbly and energetic"}
                           ]                     
                           


Created by [Umair Shahid](http://github.com/coldflame) 