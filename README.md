
A jQuery plugin on top of twitter bootstrap for creating dynamic quizzes.



## Demo And Usage

See `index.html` for demo and suggested HTML structure (the element class names are the important part).

## Available Options

To initialize your quiz:

    $(function () {
        $('.quizme').quiz({
            questions = []
            // options can be added
        });
    });


## Base Config Options

See `Index.html`

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
    var optionsJSON    = [ {"label":"","category":"Greenpeace","imgSrc":"https://img.buzzfeed.com/buzzfeed-static/static/2014-10/16/9/enhanced/webdr09/enhanced-buzz-768-1413466971-1.jpg?downsize=715:*&output-format=auto&output-quality=auto"},
                                              {"label":"","category":"Greenpeace","imgSrc":"https://img.buzzfeed.com/buzzfeed-static/static/2014-10/16/9/enhanced/webdr11/enhanced-buzz-1858-1413467065-16.jpg?downsize=715:*&output-format=auto&output-quality=auto"},
                                              {"label":"","category":"Greenpeace","imgSrc":"https://img.buzzfeed.com/buzzfeed-static/static/2014-10/16/9/enhanced/webdr08/enhanced-buzz-18695-1413467110-38.jpg?downsize=715:*&output-format=auto&output-quality=auto"}
                           ]
    // For text type
    var optionsJSON    = [  {"text":"Trustworthy and steadfast"},
                                              {"text":"Spontaneous and easy going"},
                                              {"text":"Tough and stoic"}
                           ]                     
                           


Created by [Umair Shahid](http://github.com/coldflame) 